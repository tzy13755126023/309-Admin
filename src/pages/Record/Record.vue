<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				<div class="search">
					 <el-input  placeholder="  请输入用户名、日志类型来进行查找  " class="inputValue" v-model="inputValue"></el-input>
					 <el-button type="success" class="searchButton" round  @click="IsButton">确认查询</el-button>
				 </div>
    			<el-table
					:data="RecordData"
					border
					style="width: 100%">
					<el-table-column
					  prop="recordID"
					  label="日志序号"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop="username"
					  label="用户名"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop ="recordtype"
					  label="日志类型">
					</el-table-column>
					<el-table-column
					  prop="recordtime"
					  label="日志时间">
					</el-table-column> 
				    <el-table-column label="操作"  width=180>
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.row.recordID)">删除</el-button>
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
				      :total="recordNumber">
<!-- 				      :total="UserListData.length"> -->
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
	name:'Record',
	data(){
		return{
			RecordData:[],
  	        currentPage:1,     //初始页
            pagesize:10,       //每页的数据
            offset:0,          //数据偏移量
			recordNumber:0,   //登陆日志数量
			inputValue: ''    
		}
	},
	watch: {  //监听数据变化  
		inputValue:function(){
			this.offset = 0
			this.currentPage = 1 
			this.GETallMohurecord()
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
                // console.log(this.pagesize)  //每页下拉显示数据
                // console.log(this.currentPage)  //点击第几页
				if(this.inputValue==''){
					this.FecthData()
				}else{
					this.FecthData2()
				}
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                // console.log(this.currentPage)  //点击第几页
            	if (this.currentPage==1) {
        			this.offset = 0
        		}else{
        			this.offset = (this.currentPage-1)*this.pagesize
				}
				if(this.inputValue==''){
        			this.FecthData()
				}else{
					this.FecthData2()
				}
		},
		//获取操作日志数据(不分页)
		GETallrecord(){
			this.$axios.get('/api/admin/GetAllrecord')
			.then( res =>{
				this.recordNumber = res.data.length
			})
		},
		//// 获取所有根据用户， 日志类型模糊查找后的日志信息(不分页)
		GETallMohurecord(){
			this.$axios.post("/api/admin/getAllrecordByValue",{
				searchvalue : this.inputValue
			})
			.then( res =>{
				this.recordNumber = res.data.length
			})
		},
        // 封装 请求日志数据方法（分页但不是模糊查找）
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.get("api/admin/getAllrecord/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            this.RecordData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
		},
		// 获取所有根据用户， 日志类型模糊查找后的日志信息（分页）
		FecthData2(){
			this.$axios.post("/api/admin/getAllrecordByValue/"+this.offset+"/"+this.pagesize+" ",{
				searchvalue : this.inputValue
			})
			.then( res =>{
				this.RecordData = res.data
			})
		},
        handleDelete(recordID){
        	console.log(recordID)
        	this.$axios.post("/api/admin/Deleterecord",{
        		recordID : recordID
        	})
        	.then( res =>{
                if (res.data.affectedRows) {
        			this.$message({
                        message: '删除成功❤❤❤❤❤❤！',
                        type: 'success'
                    });
                    setTimeout(() => {
                       this.$router.push('/record')
                  	}, 1500)
        		}else{
        			this.$message({
                        message: '删除失败❤❤❤❤❤❤！',
                        type: 'error'
                    });
        		}
        	})
        	.catch( error =>{
        		console.log(error)
        	})
        }
    },
	created(){
        this.GETallrecord()
    	this.FecthData()
    },
    components:{
    	Header,
    	Aside,
    	Breadcrumb
    }
}
</script>
<style scoped>
.el-table{
    margin-left: 3%;
    width: 96% !important;
}
.Pagination{
    margin-top: 20px;
    margin-right: 1%;
    padding:30px 20px;
    text-align: right;
}
.search{
	width: 100%;
	height: 70px;
	text-align: left;
	position: relative;
	/* background-color:red; */
}
.inputValue{
	width: 46%;
	margin:0.3% 0 0 3%;
	font-size: 18px;
}
.searchButton{
	width:8%;
	text-align: left;
	text-align: center;
	font-size: 16px;
	margin-left: 10px;
	position: absolute;
	left:43%;
	top:4%;
}	
</style>