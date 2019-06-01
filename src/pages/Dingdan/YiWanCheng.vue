<template>
	<div class="DingdanStyle">
		<el-table
			:data="YiWanChengData"
			style="width: 100%">
			<el-table-column
			  prop="orderID"
			  label="订单ID"
			  width="140">
			</el-table-column>
			<el-table-column
			  prop="orderBianhao"
			  label="订单编号"
			  width="220">
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
			  prop ="goodsimageurl"
			  label="商品图片"
			  width="150">
			  <template slot-scope="scope">
			  	<img :src="scope.row.goodsimageurl"  style="width: 70px;height:70px;">
		      </template>
			</el-table-column>
			<el-table-column
			  prop ="goodsprice"
			  label="商品单价">
			</el-table-column>
			<el-table-column
			  prop="goodsCount"
			  label="商品数量">
			</el-table-column>
			<el-table-column
			  prop="goodsAmount"
			  label="总价总计">
			</el-table-column>
			<el-table-column
			  prop="username"
			  label="买家姓名">
			</el-table-column>
			<el-table-column
			  prop="orderTime"
			  label="下单时间"
			  width="200">
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
				      :total="YiWanChengDataNumber">
<!-- 				      :total="UserListData.length"> -->
				    </el-pagination>
                	<!-- :page-size="pagesize"         //显示当前行的条数 -->
				</div>
	</div>
</template>
<script>
export default{
	name:'YiWanCheng',
	data(){
		return{
				YiWanChengData:[],
				currentPage:1, //初始页
				pagesize:10,    //每页的数据
				offset:0,      //数据偏移量
				YiWanChengDataNumber:0 //已完成订单数量
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
                console.log(this.pagesize)  //每页下拉显示数据
                console.log(this.currentPage)  //点击第几页
                this.FecthData()
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
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
	        this.$axios.get("/api/admin/GetYiWanCheng/"+this.offset+"/"+this.pagesize+" ")
	        .then( res =>{
	            this.YiWanChengData = res.data
							// console.log(this.YiWanChengData)
	           this.YiWanChengDataNumber = res.data.length
	        })
	        .catch( error =>{
	            console.log(error)
	        })
        },
    },
    created(){
    	this.FecthData()
    },	
}
</script>
<style scoped>
.Pagination{
	margin-top: 20px;
    padding:30px 20px;
    text-align: right;
}
</style>