<!-- 已审核商家 -->
<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
    			<el-table
					:data="DoneStoresData"
					border
					style="width: 100%">
					<el-table-column
					  prop="storesID"
					  label="商家ID">
					</el-table-column>
					<el-table-column
					  prop="storesName"
					  label="商家名称"
					  width="200">
					</el-table-column>
					<el-table-column
					  prop ="imagesurl"
					  label="商家头像">
					  <template slot-scope="scope">
					  	<img :src="scope.row.imagesurl"  style="width: 70px;height:50px;border-radius: 50%">
				      </template>
				    </el-table-column>
					<el-table-column
					  prop ="haoping"
					  label="好评度(分)">
					</el-table-column>
					<el-table-column
					  prop ="juli"
					  label="距离(km)">
					</el-table-column>
					<el-table-column
					  prop ="yunfei"
					  label="运费(￥)">
					</el-table-column>
					<el-table-column
					  prop="storeAddress"
					  label="商家地址">
					</el-table-column>
					<el-table-column
					  prop="fahuoTime"
					  label="发货时间">
					</el-table-column>
					<el-table-column
					  prop="danbaoren"
					  label="担保人">
					</el-table-column>
				    <el-table-column label="操作" width="230">
				      <template slot-scope="scope">
				      	<el-button
				          size="mini"
				          type="success"
				          @click.stop="handleEdit(scope.row)">编辑</el-button>
  				        <el-button
				          size="mini"
				          type="warning"
				          @click="handleSee(scope.row.storesID)">查看</el-button>
			            <el-button
				          size="mini"
				          type="danger"
				          @click="handleCheXiao(scope.row.storesID)">撤销</el-button>
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
				      :total=DoneStoresNumber>
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
	name:'DoneStores',
    data() {
      	return {
      		DoneStoresData:[],       //接收已过审核商家数据
      		currentPage:1, //初始页
          pagesize:10,    //每页的数据
					offset:0,      //数据偏移量
					DoneStoresNumber:0,
					
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
                // console.log(this.pagesize)  //每页下拉显示数据
                // console.log(this.currentPage)  //点击第几页
                this.FecthData()
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                // console.log(this.currentPage)  //点击第几页
            	if (this.currentPage==1) {
        			this.offset = 0
        		}else{
        			this.offset = (this.currentPage-1)*this.pagesize
        		}
        		this.FecthData()
				},
				//获取所有已审核商家数据 （不分页） 让total的值等于数据总长度
				GetAllDoneStores(){
					this.$axios.get('/api/admin/GetAllStores')
					.then( res =>{
							this.DoneStoresNumber = res.data.length
					})
				},
        // 封装 请求用户数据方法
        FecthData(){
        	// offset为数据偏移量,pagesize为最大数据
	        this.$axios.get("/api/admin/GetAllStores/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            // console.log(res.data)
	            this.DoneStoresData = res.data
	        })
	        .catch( error =>{
	            console.log(error)
	        })
        },
        //编辑、修改商家信息
        handleEdit(item){
        	this.$router.push({name:'BjstoresInfo',params:{item:item}})
        	// console.log(item)
        },
        //查看当前商家的所有商品
        handleSee(storesID){
        	this.$router.push({name:'GetAllStoreGoods',params:{storesID:storesID}})
        },
        // 撤销商家资格 改为待审核 将storeStatus从1改为0
        handleCheXiao(storesID){
        	this.$axios.put('/api/admin/UpdatestoreStatusDai',{
        		storesID : storesID
        	})
        	.then( res =>{
        		if (res.data.affectedRows) {
	                this.$message({
	                   message: '撤销商家资格成功❤❤❤❤❤❤！',
	                   type: 'success'
	                });
	                setTimeout(() => {
                       this.$router.go(0)
	                }, 1000)
	            }else{
	            	this.$message({
	                   message: '撤销商家资格失败❤❤❤❤❤❤！',
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
			this.GetAllDoneStores()
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
.Pagination{
	margin-top: 20px;
    padding:30px 20px;
    text-align: right;
}
</style>