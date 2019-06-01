<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				<div class="search">
					 <el-input  placeholder="请根据反馈人姓名反馈信息" class="inputValue" v-model="inputValue"></el-input>
					 <el-button type="success" class="searchButton" round  @click="IsButton">确认查询</el-button>
					 <!-- 时期选择器 -->
					  <el-date-picker 
							v-model="datavalue1"
							type="daterange"
							align="right"
							unlink-panels
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期"
							:picker-options="pickerOptions"
							class="Datastyle">
						</el-date-picker>
						<el-button type="success" class="searchButton1" round  @click="IsButton">确认查询</el-button>
				 </div>
    			<el-table
					:data="UserYJFKData"
					border
					style="width: 100%">
					<el-table-column
					  prop="yjfkID"
					  label="反馈序号">
					</el-table-column>
					<el-table-column
					  prop="username"
					  label="反馈人姓名">
					</el-table-column>
					<el-table-column
					  prop ="yjfkContent"
					  label="反馈内容">
					</el-table-column>
					<el-table-column
					  prop ="yjfkTime"
					  label="反馈时间">
					</el-table-column>
				    <el-table-column label="操作">
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          type="success"
				          @click.stop="handleEdit(scope.row)" disabled="disabled">编辑</el-button>
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.row.yjfkID)">删除</el-button><!-- 参数为用户ID -->
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
				      :total="YJFKNumber">
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
import {DateTime} from "../../util/DataTime"
export default{
	name:'userYJFK',
    data() {
      return {
     	  	UserYJFKData:[],
      	  currentPage:1,   //初始页
          pagesize:10,     //每页的数据
          offset:0,        //数据偏移量
					YJFKNumber:0,    //意见反数量
					inputValue:'',
					pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
					datavalue1: '',
					Time1:'',        
					Time2:'',
      }
		},
		watch: {
			//按照时间过滤反馈信息
			datavalue1:function(){
				 let date = new DateTime() 
				 this.Time1 = date.getresetTime(this.datavalue1[0]) 
				 this.Time2 = date.getresetTime(this.datavalue1[1]) 
				 console.log(this.Time1);
				 console.log(this.Time2);
				 this.offset = 0
				 this.currentPage = 1 
				 //根据时间段模糊查找意见反馈信息（不分页）  让total获得数据的长度
				 this.getAllyjfkBytime()
				 //根据时间段模糊查找意见反馈信息（分页)
				 this.getAllyjfkBytimeFenye()
			},
			//按照用户名过滤反馈信息
			inputValue:function(){
				//  console.log(this.inputValue);
				this.offset = 0
				this.currentPage = 1 
				 //获取模糊查找数据的总长度
				this.getMohuYJFK()
				 //根据姓名模糊查找意见反馈信息
				this.FecthData2()
			},
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
								if(this.inputValue==''&&this.datavalue1==''){
                	this.FecthData()
								}
								if(this.inputValue==''&&this.datavalue1!=''){
									this.getAllyjfkBytimeFenye()
								}
								if(this.inputValue!=''&&this.datavalue1==''){
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
						if(this.inputValue==''&&this.datavalue1==''){
								this.FecthData()
							}
							if(this.inputValue==''&&this.datavalue1!=''){
								this.getAllyjfkBytimeFenye()
							}
							if(this.inputValue!=''&&this.datavalue1==''){
								this.FecthData2()
							}
				},
				//获取用户意见反馈所有信息数据（不进行模糊查找，不进行时间过滤） 代表原数据
				getAllYJF(){
						this.$axios.get('/api/admin/GetAllyjfk')
						.then( res =>{
							this.YJFKNumber = res.data.length
						})
				},
				//根据用户名获取意见反馈所有信息数据（模糊查找） 让total得到模糊查找的值
				getMohuYJFK(){
						this.$axios.post("/api/admin/getAllYJFK",{
							username : this.inputValue
						})
						.then( res =>{
							this.YJFKNumber = res.data.length
						})
				},
				//根据时间段模糊查找意见反馈信息（不分页）  让total获得数据的长度
				getAllyjfkBytime(){
					this.$axios.post("/api/admin/getAllyjfkBytime",{
						time1 : this.Time1,
						time2 : this.Time2
					})
					.then( res =>{
						this.YJFKNumber = res.data.length
					})
				},
				//根据时间段模糊查找意见反馈信息（分页)
				getAllyjfkBytimeFenye(){
					this.$axios.post("/api/admin/getAllyjfkBytime/"+this.offset+"/"+this.pagesize+" ",{
						time1 : this.Time1,
						time2 : this.Time2
					})
					.then( res =>{
						this.UserYJFKData = res.data
					})
				},
        // 封装 请求意见反馈方法
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.get("api/admin/getAllyjfk/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            // console.log(res.data)
	            this.UserYJFKData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
				},
				//根据姓名模糊查找意见反馈信息
        FecthData2(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.post("api/admin/getAllYJFK/"+this.offset+"/"+this.pagesize+" ",{
						username : this.inputValue
					})
	        .then( res =>{
	            // console.log(res.data)
	            this.UserYJFKData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
        },
        //删除此条反馈信息
        handleDelete(yjfkID){
        	this.$axios.post('/api/admin/Deleteyjfk',{
        		yjfkID : yjfkID
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
        	.catch( error =>{
        		console.log(error)
        	})
        },
    },
    created(){
    	this.getAllYJF()    //获取用户意见反馈所有信息数据
    	this.FecthData()    //获取分页展示的反馈信息意见
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
    padding:20px;
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
	width: 41%;
	margin:0.3% 0 0 3%;
	font-size: 18px;
}
.searchButton,.searchButton1{
	width:8%;
	text-align: left;
	text-align: center;
	font-size: 16px;
	margin-left: 10px;
	position: absolute;
	left:38%;
	top:4%;
}
.searchButton1{
	left:84%;
}
.Datastyle{
	width: 28%;
	margin:0.3% 0 0 9%;
	font-size: 18px;
}
</style>