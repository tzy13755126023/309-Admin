<template>
    <div class="Header">
  	   <div class="left_nr">
  	   		<img src="../assets/images/icon.jpg" alt="">
  	   		<span>309药膳坊后台管理系统</span>
  	   </div>
  	   <div class="right_nr">
  	   		<!-- 跳转到订单管理 -->
  	   		<router-link to="/dingdan" tag="div" class="box1">
  	   			<i class="el-icon-document"></i>
  	   		</router-link>
				<div class="Number1">
				<span class="spanNumber1">{{DingdanNumber}}</span>
	   			</div>
   			<!-- 跳转到用户意见反馈 -->
  	   		<router-link to="/useryjfk" tag="div" class="box2">
  	   			<i class="el-icon-message"></i>
   			</router-link>
	   			<div class="Number2">
	   				<span class="spanNumber">{{YJFKNumber>99?'99+':YJFKNumber}}</span>
	   			</div>
   			<!-- 跳转到登陆日志信息 -->
  	   		<router-link to="/record" tag="div" class="box3">
  	   			<i class="el-icon-bell"></i>
  	   		</router-link>
	   			<div class="Number3">
  	   				<span class="spanNumber3">{{RecordNumber>99?'99+':RecordNumber}}</span>
  	   			</div>
  	   			<img src="../assets/images/userInfo.jpg" alt="">
  	   		<div class="Welcome">
  	   			<span class="span1">欢迎</span>
  	   			<span class="span2">{{ username }}</span>
  	   		</div>
  	   		<div class="IconTitle">
  	   			<!-- 点击呈现下拉菜单 -->
   			 	<el-dropdown @command="handleCommand">
  	   				<i class="el-icon-caret-bottom"></i>
  	   				<el-dropdown-menu slot="dropdown">
				        <el-dropdown-item command="a" icon="el-icon-edit">修改信息</el-dropdown-item>
				        <el-dropdown-item command="b" icon="el-icon-edit-outline">修改密码</el-dropdown-item>
				        <el-dropdown-item command="c" icon="el-icon-close">退出登录</el-dropdown-item>
			        </el-dropdown-menu>
  	   			</el-dropdown>
  	   			<i class="iconfont">&#xe641</i>
  	   		</div>
  	   </div>
    </div>
</template>
<script>
import { Storage } from '../util/Storage.js'
export default{
	name:'Header',
	data(){
		return{
			username:'',
			DingdanNumber:'',    //接收未完成订单的数量
			YJFKNumber:'',       //接收用户意见反馈的数量
			RecordNumber:'',     //接收用户登录日志的数量
		}
	},
	methods:{
		handleCommand(command) {
        	if (command=='c') {
        		var storage = new Storage()
        		storage.remove('adminname')
        		storage.remove('damintoken')
        		this.$message({
        			type:'success',
        			message:'退出成功！！'
        		})
        		this.$router.push('/login')
        	}
      	}
	},
	mounted(){
		var storage = new Storage()
		// 显示的当前的登录者
		this.username = storage.get('adminname')
		//获取订单状态所有均未完成的数据 
		this.$axios.get('/api/admin/GetDiscompleted')
		.then( res =>{
			this.DingdanNumber = res.data.length
		})
		.catch( error =>{
			console.log(error)
		})
		//获取用户意见反馈所有信息数据
		this.$axios.get('/api/admin/GetAllyjfk')
		.then( res =>{
			this.YJFKNumber = res.data.length
		})
		.catch( error =>{
			console.log(error)
		})
		//获取用户意见反馈所有信息数据
		this.$axios.get('/api/admin/GetAllrecord')
		.then( res =>{
			this.RecordNumber = res.data.length
		})
		.catch( error =>{
			console.log(error)
		})
	}
}
</script>
<style scoped>
.container1 .Header{
	background: url("../assets/images/Header.jpg");
	background-size: 40%;
	background-position: -35px 0;
	color: #333;
	height: 90px;
	line-height: 90px;
}
.container1 .Header .left_nr{
	width: 50%;
	height: 90px;
	/*background-color: red;*/
	float: left;
	line-height: 90px;
}
.container1 .Header .left_nr img{
	padding-top: 10px;
	margin-left: 40px;
	width: 70px;
	height: 70px;
	border-radius: 50%;
	float: left;
}
.container1 .Header .left_nr span{
	float: left;
	color:#fff;
	vertical-align: middle;
    font-family: cursive;
    letter-spacing: 3px;
	font-size: 30px;
	margin-left:30px;
	font-weight: 520;
}
.container1 .Header .right_nr{
	width: 50%;
	height: 90px;
	/*background-color: red;*/
	float: right;
	position: relative;
	line-height: 90px;
}
.container1 .Header .right_nr .box1,.box2,.box3{
	height: 40px;
	width: 40px;
	border-radius: 5px;
	border:1px solid #fff;
	position: absolute;
	top:30px;
}
.container1 .Header .right_nr .box1{
	right:440px;
	/*background-color: black;*/
}
.container1 .Header .right_nr .box2{
	right:370px;
	/*background-color: green;*/
}
.container1 .Header .right_nr .box3{
	right:300px;
	/*background-color: black;*/
}
.container1 .Header .right_nr .box1 i,.box2 i,.box3 i{
	left:5px;
	position: absolute;
	line-height: 40px;	
	font-size: 30px;
	color: #3bc5ff;
}
.container1 .Header .right_nr .Number1,.Number2,.Number3{
	width: 35px;
	height: 28px;
	border-radius:50%;
	position: absolute;
	border:1px solid #fff;
	/*background-color: black;*/
	top:12px;
}
.container1 .Header .right_nr .Number1{
	right:422px;
	background-color:#a9d86e;
}
.container1 .Header .right_nr .Number2{
	right:352px;
	background-color:#fa5555;
}
.container1 .Header .right_nr .Number3{
	right:282px;
	background-color:#fcb322;
}
.container1 .Header .right_nr .spanNumber,.spanNumber1{
	top:-30px;
	left:7.5px;
	color: #fff;
	font-size: 16px;
	position: absolute;
}
.right_nr .Number3 .spanNumber3{
	top:-30px;
	left:5px;
	color: #fff;
	font-size: 16px;
	position: absolute;
}
.container1 .Header .right_nr .spanNumber1{
	left:7px;
}
.container1 .Header .right_nr img{
	width: 60px;
	height: 60px;
	position: absolute;
	top:20px;
	right:180px;
	border-radius: 50%;
}
.container1 .Header .right_nr .Welcome{
	width: 100px;
	height: 90px;
	position: absolute;
	right:80px;
	/*background-color: red;*/
}
.container1 .Header .right_nr .Welcome .span1,.span2{
	height:30px;
	line-height: 30px;
	display: block;
	text-align: center;
	/*background-color: green;*/
}
.container1 .Header .right_nr .Welcome .span1{
	color: #fff;
	margin-top:20px;
}
.container1 .Header .right_nr .Welcome .span2{
	height:35px;
	font-size: 20px;
	font-weight: bolder;
	line-height: 30px;
	color: #a9d86e;
	/*background-color: black;*/
}
.container1 .Header .right_nr .IconTitle{
	position: absolute;
	top: 0;
	right:0px;
	width: 90px;
	height: 90px;
	line-height: 100px;
	/*background-color: green;*/
}
.container1 .Header .right_nr .IconTitle i{
	margin-top: 5px;
	margin-left:10px;
	color: #fff;
	font-size: 25px;
}
.container1 .Header .right_nr .IconTitle .iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  margin-left:5px;
  font-weight: bold;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-dropdown-menu{
	width: 120px;
	height: 110px;
	font-size: 20px;
	margin-top: -10px;
	margin-right:-25px;
	background-color: #F8F8FF;
}
</style>