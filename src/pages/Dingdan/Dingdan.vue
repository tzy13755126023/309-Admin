<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑 -->
			<div class="Main1">
    			<div class="DingdanZhuangTai">
					<router-link to="/dingdan/daifahuo"   tag="li">
						<i class="el-icon-present"></i>商家待发货
					</router-link>
					<router-link to="/dingdan/daishouhuo" tag="li">
						<i class="el-icon-present"></i>用户待收货
					</router-link>
					<router-link to="/dingdan/daipingjia" tag="li">
						<i class="el-icon-present"></i>用户待评价
					</router-link>
					<router-link to="/dingdan/yiwancheng" tag="li">
						<i class="el-icon-present"></i>已完成订单
					</router-link>
				</div>
				<router-view></router-view>
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
	name:'Dingdan',
    data() {
      return {
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
	/*width: 80%;*/
	margin: 3.5% 2.5%;
	padding-top: 0;
	border:1px solid #E3e3e3;
}
.DingdanZhuangTai{
	color: #000;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: #fff;
    border-bottom: 1px solid #E3E3E3;
    display: flex;
}
.DingdanZhuangTai li{
	flex: 1;
	border-right: 1px solid #E3E3E3;
	list-style-type: none;
	text-align: center;
	font-size: 20px;
}
.DingdanZhuangTai li:last-child{
	border-right: none;
}
.DingdanZhuangTai li i{
	font-size: 26px;
	margin-right: 4%;
}
.router-link-active{
	color:#fff;
	background-color: #FF7F00;
}
.router-link-active i{
	color:#fff;
}

</style>