<template>
    <div class="container1">
       <Header />   <!-- 头部 -->
       <Aside/>   <!-- 侧边栏 -->
       <div class="Main">
       		<Breadcrumb />  <!--面包屑-->
       		<div class="Main1">
       			<h1>修改前台展示商品信息</h1>
	            <el-form  status-icon  label-width="120px">
		            <el-form-item label="商品的ID">
		              <el-input type="text" v-model="item.goodsID" autocomplete="off" disabled></el-input>
		            </el-form-item>
		            <el-form-item label="商品名称">
		              <el-input type="text" v-model="item.goodsName" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item label="描述词一" prop="goodsmiaoshu1">
		              <el-input v-model.number="item.goodsmiaoshu1"></el-input>
		            </el-form-item>
		            <el-form-item label="描述词二" prop="goodsmiaoshu2">
		              <el-input type="text" v-model="item.goodsmiaoshu2" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item label="图片路径" prop="goodsimageurl">
		              <template><img :src="item.goodsimageurl" alt="" style="width:120px;height:110px">
		              </template>
		            </el-form-item>
		            <el-form-item label="使用方法" prop="goodsways">
		              <el-input type="text" v-model="item.goodsways" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item label="商品价格" prop="goodsprice">
		              <el-input type="text" v-model="item.goodsprice" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item>
		              <el-button type="primary" @click="submitForm(item)">提交</el-button>
		              <el-button type="primary" @click="resetForm()">重置</el-button>
		            </el-form-item>
	        	</el-form>
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
	data(){
		return{
			item:this.$route.params.item
		}
	},
	methods:{
		submitForm(item){
			this.$axios.put('/api/admin/miaoshuAgain',{
			   	goodsName     : item.goodsName,
			    goodsmiaoshu1 : item.goodsmiaoshu1,
			    goodsmiaoshu2 : item.goodsmiaoshu2,
			    goodsimageurl : item.goodsimageurl,
		        goodsways     : item.goodsways,
	            goodsprice    : item.goodsprice,
		        goodsID       : item.goodsID
			})
			.then( res =>{
                if (res.data.affectedRows) {
                  this.$message({
                    message: '修改成功❤❤❤❤❤❤！',
                    type: 'success'
                  });
                  setTimeout(() => {
                     this.$router.push('/qiantaiGoods')
                  }, 1500)
                }else{
                  this.$message({
                     message: '修改失败❤❤❤❤❤❤！',
                     type: 'error'
                  });
                }
            })
			.catch( error =>{
				console.log(error)
			})
		},
		//重置
		resetForm(){
			this.item.goodsName=''
			this.item.goodsmiaoshu1=''
			this.item.goodsmiaoshu2=''
			this.item.goodsways=''
			this.item.goodsprice=''
		}
	},
  	components:{
      Header,
      Aside,
      Breadcrumb
  }
}
</script>
<style scoped>
.container1 .Main .Main1{
    width: 50%;
    margin:2% auto;
}
h1{
  margin-bottom: 30px;
}
.el-form{
  width: 70%;
  margin: 0 auto;
}
.el-button{
  border-radius: 10px;
  width: 120px;
}
</style>