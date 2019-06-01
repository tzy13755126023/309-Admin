<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				<div class="Title">
					<p> 
						<span class="span1">
							当前显示商家&nbsp;&nbsp;:&nbsp;&nbsp;<i>{{storesName}}</i>
						</span>
						<span class="span2">
							商家商品总量&nbsp;&nbsp;:&nbsp;&nbsp;<i>{{AllStoresGoods2.length}}</i>
						</span>	
						<span class="span3">
							系统当前时间&nbsp;&nbsp;:&nbsp;&nbsp;<i>{{this.DataTime}}</i>
						</span>
						<span class="span4">
							<el-button size="medium" type="primary" @click="FaBuGoods()"><span>发布商品</span></el-button>
						</span>
					</p>
				</div>
				<el-table
					:data="AllStoresGoods"
					border
					style="width: 100%">
					<el-table-column
					  prop="goodsID"
					  label="商品ID">
					</el-table-column>
					<el-table-column
					  prop="goodsName"
					  label="商品名称"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop ="imagesurl"
					  label="商品图片">
					  <template slot-scope="scope">
					  	<img :src="scope.row.goodsimageurl"  style="width: 70px;height:70px">
				      </template>
				    </el-table-column>
					<el-table-column
					  prop ="goodsWenhao"
					  label="批准文号">
					</el-table-column>
					<el-table-column
					  prop ="goodszz"
					  label="适应症状">
					</el-table-column>
					<el-table-column
					  prop ="goodsways"
					  label="使用方法">
					</el-table-column>
					<el-table-column
					  prop="goodsrules"
					  label="商品规格">
					</el-table-column>
					<el-table-column
					  prop="goodszhucang"
					  label="保存方法">
					</el-table-column>
					<el-table-column
					  prop="goodsprice"
					  label="商品价格">
					</el-table-column>
				    <el-table-column label="操作" width="220">
				      <template slot-scope="scope">
				      	<el-button
				          size="small"
				          type="success"
				          @click.stop="handleEdit(scope.row)">编辑商品</el-button>
  				        <el-button
				          size="small"
				          type="warning"
				          @click="handleXiaJia(scope.row.goodsID)" disabled>下架商品</el-button>
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
				      :total="AllStoresGoods2.length">
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
	name:'GetAllStoreGoods',
	data(){
		return{
				storesID:this.$route.params.storesID,
				storesName:'',
				AllStoresGoods:[],
				AllStoresGoods2:[],
				currentPage:1,  //初始页
				pagesize:10,    //每页的数据
				offset:0,       //数据偏移量
				DataTime:'',    //当前时间
		}
	},
	methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
        	if (this.currentPage==1) {   //如果为第一页,偏移量为0,从第一行开始拿数据
        		this.offset = 0
        	}else{                       //如果不为第一页,从(this.currentPage-1)*this.pagesize开始拿数据
        		this.offset = (this.currentPage-1)*this.pagesize
        	}
                this.FecthData()
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            	if (this.currentPage==1) {
        			this.offset = 0
        		}else{
        			this.offset = (this.currentPage-1)*this.pagesize
        		}
        		this.FecthData()
        },
        // 封装 请求用户数据方法
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.post("/api/admin/GetAllStoresGoods/"+this.offset+"/"+this.pagesize+" ",{
	        	storesID : this.$route.params.storesID
	        })
	        .then( res =>{
	            this.AllStoresGoods = res.data
	            this.storesName = res.data[0].storesName
	        })
	        .catch( error =>{
	            console.log(error)
	        })
        },
        //编辑、修改用户信息
        handleEdit(item){
        	console.log(item)
        },
        //下架商品
        handleXiaJia(goodsID){
        	this.$axios.post("/api/admin/xiajiaGoods",{
        		goodsID : goodsID
        	})
        	.then( res =>{
        		if (res.data.affectedRows) {
	                this.$message({
	                   message: '商品下架成功❤❤❤❤❤❤！',
	                   type: 'success'
	                });
	                setTimeout(() => {
                       this.$router.go(0)
	                }, 1000)
	            }else{
	            	this.$message({
	                   message: '商品下架失败❤❤❤❤❤❤！',
	                   type: 'error'
	                });
	            }
        	})
        	.catch( error =>{
        		console.log(error)
        	})
        },
        //动态获取时间
        GetDate(){
 	    	let date = new DateTime() 
			this.DataTime=date.getDateTime()
        },
        FaBuGoods(){
        	this.$router.push({name:'FaBuGoods',params:{storesID:this.storesID}})
        }
    },
    created(){
    	this.FecthData()

    },
    mounted(){
    	//获取商家所有商品
    	this.$axios.post("/api/admin/GetAllStoresGoods",{
	        	storesID : this.$route.params.storesID
	        })
	        .then( res =>{
	            this.AllStoresGoods2 = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
	     //渲染完成时   挂载定时器
	     setInterval(() => {
	     	this.GetDate()
	     }, 1000)

    },
	components:{
    	Header,
    	Aside,
    	Breadcrumb
    }
}
</script>
<style scoped>
.Title{
	margin-top: -3%;
	margin-bottom:0.5%;
	text-align: left;
	width: 100%;
	font-size: 20px;
	line-height: 60px;
	height: 60px;
	background-color: #38a884;
    border-color: #4db3ff;
    color: #fff;
}
.span1{
	padding-left: 2%;
}
.span2,.span3{
	padding-left: 6%;
}
.span4{
	float: right;
	margin-right: 4%;
}
.Title i{
	font-style: inherit;
	font-size: 21px;
	color: #000;
}
.Pagination{
	margin: 20px 0 2%;
    padding:30px 20px;
    text-align: right;
}
</style>