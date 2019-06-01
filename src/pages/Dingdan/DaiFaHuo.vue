<template>
	<div class="DingdanStyle">
		<el-table
			:data="DaiFaHuoData"
			style="width: 100%">
			<el-table-column
			  prop="orderID"
			  label="订单ID"
			  width="110">
			</el-table-column>
			<el-table-column
			  prop="orderBianhao"
			  label="订单编号"
			  width="215">
			</el-table-column>
			<el-table-column
			  prop ="goodsID"
			  label="商品ID"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop ="goodsName"
			  label="商品名称"
			  width="150">
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
			  label="商品单价"
			  width="110">
			</el-table-column>
			<el-table-column
			  prop="goodsCount"
			  label="商品数量"
			  width="100">
			</el-table-column>
			<el-table-column
			  prop="goodsAmount"
			  label="总价总计"
			  width="100">
			</el-table-column>
			<el-table-column
			  prop="username"
			  label="买家姓名"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="storesID"
			  label="商家ID"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="shouhuoren"
			  label="收货人姓名"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="address"
			  label="收货人地址"
			  width="190">
			</el-table-column>
			<el-table-column
			  prop="shouhuoTel"
			  label="收货人电话"
			  width="150">
			</el-table-column>
			<el-table-column
			  prop="orderTime"
			  label="下单时间"
			  width="200">
			</el-table-column>
		    <el-table-column label="操作" width="150">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          type="success"
		          @click.stop="handleEdit(scope.row)" disabled>编辑</el-button>
			        <el-button
		          size="mini"
		          type="warning"
		          @click="handleFahuo(scope.row.orderID)">发货</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>
<script>
export default{
	name:'DaiFaHuo',
	data(){
		return{
			DaiFaHuoData:[],
		}
	},
	mounted(){
		this.$axios.get('/api/admin/GetDaifahuo')
		.then( res =>{
			this.DaiFaHuoData = res.data
		})
		.catch( error =>{
			console.log(error)
		})
	},
	methods:{
		handleEdit(item){
			// console.log(item)
		},
		handleFahuo(orderID){
			console.log(orderID)
			this.$axios.put('/api/admin/updateOrderDaiShouHuo',{
				orderID : orderID
			})
			.then( res =>{
				if (res.data.affectedRows) {
                    this.$message({
	                    message: '商家收获成功❤❤❤❤❤❤！',
	                    type: 'success'
                    });
                    setTimeout(() => {
	                    this.$router.go(0)
	                }, 1500)
                }else{
                    this.$message({
                       message: '商家收获失败❤❤❤❤❤❤！',
                       type: 'error'
                  });
                }
			})
		}
	}
}
</script>
<style scoped>

</style>