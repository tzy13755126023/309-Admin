<template>
	<div class="Contain">
		<h1>三零九药膳坊后台管理登录界面</h1>
		<div class="LoginBox">
			<div class="LoginBox_left">
				<div class="images">
					<img src="../../assets/images/loginImage.jpg" alt="">	
				</div>
			</div>
			<div class="LoginBox_right">
				<el-form class="login-form" status-icon label-width="0">
					<el-form-item prop="username">
		      			<input  type="text" class="input1" v-model="username" auto-complete="off" placeholder="Username">
		      			</input>
		      			<input  type="password" class="input1" v-model="password" auto-complete="off" placeholder="Password">
		      			</input>
		      			<button class="button1" type="submit" id="login-button" 
                                @click.prevent="handleLogin">Login
                        </button>
		    		</el-form-item>
				</el-form>

			</div>
		</div>
	</div>	
</template>
<script>
import { Storage } from '../../util/Storage.js'
export default{
	name:'Login',
	data(){
		return{
                username: '',
                password: '',
			
		}
	},
    methods:{
        //登录操作
        handleLogin(){
            if (this.username=='' || this.password =='') {
                    this.$alert('用户名或密码不能为空！', '温馨提示!', {
                    confirmButtonText: '确定',
                      // center: true,
                      // 点击确定按钮后重置文本框
                    callback: action => {
                        this.username = '' 
                        this.password = ''
                    }
                });
            }else{
                //后台登录
                this.$axios.post('/api/admin/login',{
                    username:this.username,
                    password:this.password
                })
                .then( res =>{
                    if (res.data.code==0) {
                        console.log(res.data)
                        var storage=new Storage();
                        //设置localStorage的失效时间  单位为毫秒
                        storage.set('admintoken',res.data.admintoken,3600000); //一个小时
                        storage.set('adminname',res.data.userInfo[0].adminname,3600000);
                        this.$alert('登录成功！','温馨提示！',{
                            confirmButtonText: '确定',
                            center: true,
                            callback: action => {
                                //判断路由是否带参，带参就去到重定向参数地址，否则就去首页
                                if(this.$route.query.redirect){
                                  this.$router.replace({path:this.$route.query.redirect})
                                }else{
                                  this.$router.push('/index')
                                }
                            }
                        })
                    }else{
                        this.$alert('用户名密码不正确！', '温馨提示!', {
                        confirmButtonText: '确定',
                        // 点击确定按钮后重置文本框
                        callback :action => {
                            this.username = '' 
                            this.password = ''
                        }
                    })
                    }
                })
                .catch( error =>{
                    console.log(error)
                })
            }

        }
    },
     mounted(){
        this.$axios.get('api/admin/getAlluserinfo')
        .then( res =>{
            // console.log(res.data)
        })
        .catch( error =>{
            console.log(error)
        })
    },
}
</script>
<style scoped>
.Contain{
	background: url("../../assets/images/backgrounds/1.jpg") no-repeat;
    background-size: 100%;
    height: 100%;
    position: fixed;
    /*filter:alpha(opacity=50);  */
	/*-moz-opacity:0.8;  */
	/*opacity: 0.7;*/
    left:0;
    top:0;
    width: 100%;
    animation: backgroundimages 18s  ease infinite;
}
@-webkit-keyframes backgroundimages{
   	0%{
    background-image: url("../../assets/images/backgrounds/1.jpg");
	}
    50%{
        background-image: url("../../assets/images/backgrounds/2.jpg");
    }
    100%{
        background-image: url("../../assets/images/backgrounds/3.jpg");
    }
}
.LoginBox{
	width: 30%;
	height: 30%;
	margin:19% auto;
	position: relative;
	/*background-color: #2d2d2d;*/
	background: rgba(45,45,45,.15);
	border: 1px solid rgba(255,255,255,.2);
	box-shadow: 0px 20px 15px rgba(0,0,0,.2);
}
h1{
	position: absolute;
	font-size: 33px;
	left:38%;
	top:27%;
	padding:10px 0; 
	color: rgba(256,255,255,1);
	text-shadow: 8px -15px 4px rgba(0,0,0,.3);
}
.LoginBox .LoginBox_left{
	position: absolute;
	top:0;
	left:0;
	width: 40%;
	height: 100%;
	/*background-color:red;*/
}
.LoginBox .LoginBox_right{
	position: absolute;
	top:0;
	right:0;
	width: 60%;
	height: 100%;
	border-left: 1px solid rgba(255,255,255,.3);
	/*background-color: #2d2d2d;*/
}
.LoginBox .LoginBox_left .images{
	width: 100%;
	height: 80%;
	margin-top: 11%;
	/*background-color:black;*/
}
.LoginBox .LoginBox_left img{
	margin-top:11%;
	margin-left:10%;
	width: 80%;
	height: 70%;
	border-radius: 50%;
}
.LoginBox .LoginBox_right .login-form{
	/*text-align: center;*/
}
.LoginBox .LoginBox_right .input1{
	text-align: center;
    width: 70%;
    height: 40px;
    margin-left: 15%;
    margin-top: 15%;
    /*padding: 0 15px;*/
    background-color: #f8f8f8; /* browsers that don't support rgba */
    background: rgba(45,45,45,.15);
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    border: 1px solid #3d3d3d; /* browsers that don't support rgba */
    border: 1px solid rgba(255,255,255,.15);
    -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: red;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}
.LoginBox .LoginBox_right .input1:nth-child(2){
	margin-top: 5%;
}
.input1:-moz-placeholder { color: #fff; }
.input1:-ms-input-placeholder { color: #fff; }
.input1::-webkit-input-placeholder { color: #fff; }

.LoginBox .LoginBox_right .input1:hover{
	background-color: rgba(255,255,255,.2);
}

.LoginBox .LoginBox_right .input1:focus{
    outline: none;
    -moz-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.3);
}
.LoginBox .LoginBox_right .button1{
    cursor: pointer;
	text-align: center;
    width: 70%;
    height: 40px;
    margin-left: 15%;
    margin-top: 6%;
    padding: 0;
    background: #ef4300;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    border: 1px solid #ff730e;
    -moz-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 15px 30px 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}
.LoginBox .LoginBox_right .button1:hover{
    background: #ef4300;
    filter:alpha(opacity=80);  
	opacity: 0.75;
}
.LoginBox .LoginBox_right .button1:focus{
    outline: none;
}
*{
    user-select: none;
}
</style>