<template>
  	<div class="container1">
      <Header />   <!-- 头部 -->
        <Aside/>   <!-- 侧边栏 -->
      <div class="Main">
      <Breadcrumb />  <!--面包屑-->
      <div class="Main1">
          <h1>修改用户信息</h1>
          <el-form  status-icon  label-width="120px">
            <el-form-item label="用户ID">
              <el-input type="text" v-model="userID" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="username" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="tel">
              <el-input v-model.number="tel"></el-input>
            </el-form-item>
            <el-form-item label="QQ号" prop="QQ">
              <el-input type="text" v-model="QQ" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="固定电话" prop="guhua">
              <el-input type="text" v-model="guhua" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="现居住地址" prop="address">
              <el-input type="text" v-model="address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="账户余额" prop="money">
              <el-input type="text" v-model="money" autocomplete="off"></el-input>
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
import Breadcrumb from "../../components/Breadcrumb"
export default{
	name:'BJuserList',
    data() {
      return {
          userID  :this.$route.params.userID,
          username:this.$route.params.username,
            tel   :this.$route.params.tel,
            QQ    :this.$route.params.QQ,
           guhua  :this.$route.params.guhua,
           address:this.$route.params.address,
           money  :this.$route.params.money,
      }
    },
    methods: {
        submitForm(){
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/g
              if (this.tel=='') {
                    this.$alert('请您输入新的电话号码❤❤❤', '温馨提示！！！')
                }else if (!reg.test(this.tel)) {
                    this.$alert('请输入正确的手机号❤❤❤', '温馨提示！！！')
                }else{
                    if (this.QQ=='') {
                        this.$alert('请您输入新的QQ号❤❤❤', '温馨提示！！！')
                    }else{
                        if (this.guhua=='') {
                          this.$alert('请您输入新的固定电话❤❤❤', '温馨提示！！！')
                        }else{
                            if (this.address=='') {
                              this.$alert('请您输入新的地址❤❤❤', '温馨提示！！！')
                            }else{
                                if (this.money=='') {
                                  this.$alert('请您输入新的账户余额❤❤❤', '温馨提示！！！')
                               }else{
                                    this.$axios.put('/api/admin/UpdateInfo',{
                                        tel   : this.tel,
                                      address : this.address,
                                         QQ   : this.QQ,
                                       guhua  : this.guhua,
                                       money  : this.money,
                                        id    : this.userID
                                    })
                                    .then( res =>{
                                        if (res.data.affectedRows) {
                                          this.$message({
                                            message: '修改成功❤❤❤❤❤❤！',
                                            type: 'success'
                                          });
                                          setTimeout(() => {
                                             this.$router.push('/userList')
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
                        } 
                    }
                } 
            }
        },
        //重置方法
        resetForm(){
            this.username=''
            this.tel=''
            this.QQ=''
            this.guhua=''
            this.address=''
            this.money=''
        }
    },
    mounted(){
        console.log(this.username)
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