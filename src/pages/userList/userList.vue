<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				 <div class="search">
					 <el-input  placeholder="  请输入用户名、电话号码、QQ、固话、现居住地址来进行查找  " class="inputValue" v-model="inputValue"></el-input>
					 <el-button type="success" class="searchButton" round  @click="IsButton">确认查询</el-button>
				 </div>
    			<el-table
					:data="UserListData"
					border
					style="width: 100%">
					<el-table-column
					  prop="id"
					  label="用户ID">
					</el-table-column>
					<el-table-column
					  prop="username"
					  label="姓名">
					</el-table-column>
					<el-table-column
					  prop ="tel"
					  label="电话">
					</el-table-column>
					<el-table-column
					  prop ="QQ"
					  label="QQ号">
					</el-table-column>
					<el-table-column
					  prop ="guhua"
					  label="固定电话">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="现居住地址">
					</el-table-column>
					<el-table-column
					  prop="money"
					  label="账户余额">
					</el-table-column>
				    <el-table-column label="操作" width="230">
				      <template slot-scope="scope">
				      	<router-link :to="{name:'BJuserList',params:{userID:scope.row.id,username:scope.row.username,tel:scope.row.tel,QQ:scope.row.QQ,guhua:scope.row.guhua,address:scope.row.address,money:scope.row.money}}">
				        <el-button
				          size="mini"
				          type="success"
				          @click.stop="handleEdit(scope.row)">编辑</el-button>
				         </router-link>
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.row.id)" disabled="disabled">删除</el-button><!-- 参数为用户ID -->
  				        <el-button
				          size="mini"
				          type="warning"
				          @click="handleChongzhi(scope.row.id,scope.row.money)">充值</el-button>
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
				      :total="this.userNumber">
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
	name:'userList',
    data() {
      return {
      	   UserListData:[],
      	   currentPage:1,   //初始页
           pagesize:10,    //每页的数据
           offset:0,       //数据偏移量
					 userNumber:0,  //用户数量
					 inputValue:'',
      }
		},
		watch: {
				// 如果 `inputValue` 发生改变，这个函数就会运行
				inputValue: function () {
						this.offset = 0
						this.currentPage = 1 
						this.getmohuser()
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
				//获取全部用户数据(没有进行模糊查找时)
				GetAlluser(){
						this.$axios.get('/api/admin/getAlluserinfo')
						.then( res=>{
							this.userNumber = res.data.length
					})
				},	
				//获取所有模糊查询的数据
				getmohuser(){
						this.$axios.post('/api/admin/getAllmohuser',{
							searchvalue : this.inputValue
						})
						.then( res=>{
							console.log(res.data);
							
							this.userNumber = res.data.length
					})
				},
        // 封装 请求用户数据方法(inputValue的值为空)
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.get("/api/admin/getAlluserinfo/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            // console.log(res.data)
	            this.UserListData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
				},
				//获取模糊查找的用户数据(分页)
				FecthData2(){
        	// offset为数据偏移量,pagesize为最大数据
	       this.$axios.post("/api/admin/selectByusername/"+this.offset+"/"+this.pagesize+" ",{
							searchvalue: this.inputValue
						})
	        .then( res =>{
	            // console.log(res.data)
	            this.UserListData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
				},
        //编辑、修改用户信息
        handleEdit(item){

        },
        //删除用户
        handleDelete(userID){
        	this.$axios.post('/api/admin/DeleteInfo',{
        		userID : userID
        	})
        	.then( res =>{
        		if (res.data.affectedRows) {
	                this.$message({
	                   message: '删除成功❤❤❤❤❤❤！',
	                   type: 'success'
	                });
	                setTimeout(() => {
                       this.$router.go(0)
	                }, 1000)
	            }else{
	            	this.$message({
	                   message: '删除失败❤❤❤❤❤❤！',
	                   type: 'error'
	                });
	            }
					})
					.catch(	error =>{
						 console.log(error)
					})
        },
        // 为用户充值
        handleChongzhi(userID,money){
	        this.$prompt('请输入少于10万的金额数', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          inputPattern: /^\d{1,5}$/,//  验证m-n位的数字
	          inputErrorMessage: '亲，十万还不够花吗？？'
	        }).then(({ value }) => {
         		// console.log(typeof(money))  //传过来的money和输入的value值均为string类型
	         	var Money = (Number(value)+Number(money)).toFixed(2)
	         	this.$axios.put('/api/admin/updateMoney',{
	         		money  : Money ,
	         		userID : userID
	         	})
	         	.then( res =>{
	         		if (res.data.affectedRows){
	         			this.$message({
				            type: 'success',
				            message: "已成功充值"+value+"元❤❤❤"
				        });  
				         setTimeout(() => {
                            this.$router.go(0)  //刷新该页面
                        }, 1500)
	         		}
	         	})
	         	.catch( error =>{
	         		console.log(error)
	         	})

	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已为您取消充值'
	          });       
	        });
        }
        
    },
    created(){
			this.GetAlluser()   //获取所有用户数据
    	this.FecthData()    //分页展示用户数据
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
  padding:30px 20px;
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
	margin:0.3% 0 0 0.7%;
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