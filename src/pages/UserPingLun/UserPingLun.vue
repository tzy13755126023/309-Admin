<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
					<div class="search">
						<el-input  placeholder="  请输入用户名、商品ID、商品名、商家ID、商家名来进行评论查找  " class="inputValue" v-model="inputValue"></el-input>
						<el-button type="success" class="searchButton" round  @click="IsButton">确认查询</el-button>
					</div>
    			<el-table
					:data="userPingLunData"
					border
					style="width: 100%">
					<el-table-column
					  prop="PJID"
					  label="评论ID">
					</el-table-column>
					<el-table-column
					  prop="username"
					  label="姓名">
					</el-table-column>
					<el-table-column
					  prop ="goodsID"
					  label="商品ID">
					</el-table-column>
					<el-table-column
					  prop ="goodsName"
					  label="商品名称">
					</el-table-column>
					<el-table-column
					  prop ="PJcontent"
					  label="评价内容"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop ="PJtime"
					  label="评价时间"
					  width="200">
					</el-table-column>
					<el-table-column
					  prop="storesID"
					  label="商家ID"
					  width="150">
					</el-table-column>
					<el-table-column
					  prop="storesName"
					  label="商家名"
					  width="200">
					</el-table-column>
				    <el-table-column label="操作" width="230">
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          type="success"
				          @click.stop="handleEdit(scope.row)" disabled>编辑</el-button>
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.row.PJID)" >删除</el-button>
				      </template>
				    </el-table-column>
				</el-table>
				<!-- 分页器 -->
				<div class="Pagination">
				     <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage"
				      :page-sizes="[5,10,15,20]"
				      :page-size="pagesize"
				       background
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="userPingLunNumber">
				    </el-pagination>
				</div>
			</div>
    	</div>
	</div>
</template>
<script>
import "../../assets/css/iconfont.css"
import Header from "../../components/Header"
import Aside from "../../components/Aside"
import Breadcrumb from "../../components/Breadcrumb" //面包屑组件
export default{
	name:'UserPingLun',
    data() {
      return {
      	   userPingLunData:[],    //每页用户评论数据
      	   userPingLunNumber:0,  //用户评论总长度
      	   currentPage:1, 		  //初始页
           pagesize:10,    		  //每页的数据
					 offset:0,      		  //数据偏移量
					 inputValue:'',
      }
		},
		watch: {
				// 如果 `inputValue` 发生改变，这个函数就会运行
				inputValue: function () {
						this.offset = 0
						this.currentPage = 1 
						this.GetMohuPingJia()
						this.FecthData2()
				}
    },
    methods: {
				IsButton(){
						this.$alert("","❤❤❤❤其实这个是用来装饰的而已！❤❤❤❤")
				},
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
        	if (this.currentPage==1) {   //如果为第一页,偏移量为0,从第一行开始拿数据
        		this.offset = 0
        	}else{                       //如果不为第一页,从(this.currentPage-1)*this.pagesize开始拿数据
        		this.offset = (this.currentPage-1)*this.pagesize
        	}
                console.log(this.pagesize)  //每页下拉显示数据
                console.log(this.currentPage)  //点击第几页
                if(this.inputValue == ''){
                		this.FecthData()
								}else{
									this.FecthData2()
								}
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
            	if (this.currentPage==1) {
        			this.offset = 0
        		}else{
        			this.offset = (this.currentPage-1)*this.pagesize
        		}
        		if(this.inputValue == ''){
								this.FecthData()
						}else{
							  this.FecthData2()
						}
				},
			  //根据（用户名、商品ID、商品名、商家ID、商家名）模糊查找 获取用户评论 的数据（不分页） 让total等于数据总长度	
				getAlluserPinglun(){
						this.$axios.get('/api/admin/GetUserPingJia')
						.then( res =>{
							this.userPingLunNumber = res.data.length
						})
				},
				GetMohuPingJia(){
					this.$axios.post("api/admin/GetMohuUserPingJia",{
						searchvalue : this.inputValue
					})
					.then( res =>{
						 this.userPingLunNumber = res.data.length
					})
				},
        // 封装 请求用户评论的数据方法
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.get("/api/admin/GetUserPingJia/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            this.userPingLunData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
				},
				//根据（用户名、商品ID、商品名、商家ID、商家名）模糊查找 获取用户评论 的数据（分页）
				FecthData2(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.post("/api/admin/GetMohuUserPingJia/"+this.offset+"/"+this.pagesize+" ",{
						searchvalue : this.inputValue
					})
	        .then( res =>{
	            this.userPingLunData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
				},
        //编辑、修改评论信息
        handleEdit(item){

        },
        //删除评论
        handleDelete(PJID){
        	this.$axios.post('/api/admin/DeleteUserPingJia',{
        		PJID : PJID
        	})
        	.then( res =>{
        		if (res.data.affectedRows) {
	                this.$message({
	                   message: '删除评论成功❤❤❤❤❤❤！',
	                   type: 'success'
	                });
	                setTimeout(() => {
                       this.$router.go(0)
	                }, 1000)
	            }else{
	            	this.$message({
	                   message: '删除评论失败❤❤❤❤❤❤！',
	                   type: 'error'
	                });
	            }
        	})
        	.catch( error =>{
        		console.log(error)
        	})
        },
        
    },
    created(){
			this.FecthData()
			this.getAlluserPinglun()
    },
    components:{
    	Header,
    	Aside,
    	Breadcrumb
    }
}	
</script>
<style scoped>
.Pagination{
	margin-top: 20px;
	padding: 20px;
	text-align: right;
}
.search{
	width: 100%;
	height: 70px;
	text-align: left;
	position: relative;
	margin-top:-0.5%;
	/* background-color:red; */
}
.inputValue{
	width: 55%;
	margin:0.3% 0 0 0.5%;
	font-size: 18px;
}
.searchButton{
	width:8%;
	text-align: left;
	text-align: center;
	font-size: 16px;
	margin-left: 10px;
	position: absolute;
	left:47%;
	top:4%;
	}
</style>