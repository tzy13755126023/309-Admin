<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				<h1>修改商家信息</h1>
		          <el-form  status-icon  label-width="120px">
		            <el-form-item label="用户ID">
		              <el-input type="text" v-model="items.storesID" autocomplete="off" disabled></el-input>
		            </el-form-item>
		            <el-form-item label="商家名" prop="storesName">
		              <el-input type="text" v-model="items.storesName" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item label="商家头像" prop="imagesurl">
		              <template>
		              	<img :src="items.imagesurl" alt="" style="width: 150px;height: 100px;">
		              </template>
		            </el-form-item>
		            <el-form-item label="距离" prop="juli">
		              <el-input v-model.number="items.juli"></el-input>
		            </el-form-item>
		            <el-form-item label="发货时间" prop="fahuoTime">
		              <el-input type="text" v-model="items.fahuoTime" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item label="商家地址" prop="storeAddress">
		              <el-input type="text" v-model="items.storeAddress" autocomplete="off"></el-input>
		            </el-form-item>
		            <el-form-item>
		              <el-button type="primary" @click="submitForm()">提交</el-button>
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
	name:'BjstoresInfo',
    data() {
      	return {
      		items:this.$route.params.item
      	}
    },
    methods: {
    	submitForm(){
        var pattern1 = /^[\u4e00-\u9fa5]{6,10}$/g  //验证6-10汉字
        var pattern2 = /^[0-9]+(.[0-9]{1,2})?$/    //验证有1-2位小数的正实数
    		if (this.items.storesName == '') {
    			this.$alert('请您输入新的商家名❤❤❤', '温馨提示！！！')
    		}else if (!pattern1.test(this.items.storesName)) {
          this.$alert('请输入6-10个中文的商家名！❤❤❤', '温馨提示！！！')
        }else if(this.items.juli == ''){
    			this.$alert('请您输入商家距离❤❤❤', '温馨提示！！！')
    		}else if (!pattern2.test(this.items.juli)) {
          this.$alert('请输入1-2位小数正实数的商家距离❤❤❤', '温馨提示！！！')
        }else if (this.items.fahuoTime == '') {
    			this.$alert('请您输入新的商家发货时间❤❤❤', '温馨提示！！！')
    		}else if (this.items.storeAddress == '') {
    			this.$alert('请您输入新的商家地址❤❤❤', '温馨提示！！！')
    		}else{
    			this.$axios.put('/api/admin/BJstoreInfo',{
    				storesName   : this.items.storesName,
    				    juli     : this.items.juli,
    				 fahuoTime   : this.items.fahuoTime,
    				storeAddress : this.items.storeAddress,
    					storesID : this.items.storesID
    			})
    			.then( res =>{
    				if (res.data) {
                      this.$message({
                        message: '修改成功❤❤❤❤❤❤！',
                        type: 'success'
                      });
                      setTimeout(() => {
                         this.$router.push('/donestores')
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
    		}
    	},
    	resetForm(){
    		this.items.storesName = ''
    		this.items.juli = ''
    		this.items.fahuoTime = ''
    		this.items.storeAddress = ''
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
  width: 80%;
  margin: 0 auto;
}
.el-button{
  border-radius: 10px;
  width: 120px;
}
</style>