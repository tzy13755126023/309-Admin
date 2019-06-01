<template>
<div class="DingdanStyle">
		<el-table
			:data="DaiPingJiaData"
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
	</div>
</template>
<script>
export default{
	name:'DaiPingJia',
	data(){
		return{
			DaiPingJiaData:[],
		}
	},
	mounted(){
		this.$axios.get('/api/admin/GetDaiPingJia')
		.then( res =>{
			this.DaiPingJiaData = res.data
		})
		.catch( error =>{
			console.log(error)
		})
	}
}
</script>
<style scoped>

</style>