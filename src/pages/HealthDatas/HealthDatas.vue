<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />   <!--面包屑-->
			<div class="Main1">
				<router-link :to="{name:'XXHealthDatas',params:{healthdatasID:item.healthdatasID}}"
							 tag="div" class="divStyle" v-for="(item,index) in healthData" :key="index">
					<p class="titleP">{{index+1+'、'+item.title}}</p>
					<img :src="item.imagesurl" alt="miaoshu" title="图片">
				</router-link>
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
	name:'HealthDatas',
	data(){
		return{
			healthData:{},
		}

	},
	mounted(){
		this.$axios.get("/api/admin/getHealthsData")
		.then( res => {
			this.healthData = res.data
			// console.log(this.healthData)
		})
		.catch( error =>{
			console.log(error)
		})
	},
    components:{
    	Header,
    	Aside,
    	Breadcrumb
    }
}
</script>
<style scoped>
.divStyle{
	/*background-color: pink;*/
	width: 18.87%;
	margin: 0.5%;
	height: 250px;
	float: left;
	border: 1px solid rgba(0,0,0,.12);
	border-radius: 15px;
	transition:all 3s;
}
.divStyle:nth-child(odd):hover{
  box-shadow: 10px 10px 30px rgba(0,0,0,.4);
  transform: translate(0 -15px);
  transform: rotate(-20deg);
}
.divStyle:nth-child(even):hover{
  box-shadow: 10px 10px 30px rgba(0,0,0,.4);
  transform: translate(0 -15px);
  transform: rotate(20deg);
}
.divStyle:last-child{
	margin-bottom: 3%;
}
.divStyle:hover .titleP{
	color:red;
}
.divStyle:nth-child(odd):hover img{
	transform: scale(1.1);
	transform: rotate(10deg);
}
.divStyle:nth-child(even):hover img{
	transform: scale(1.1);
	transform: rotate(-10deg);
}
.divStyle .titleP{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	letter-spacing: 2.1px;
	padding-left: 6%;
	text-align: left;
	width: 94%;
	height: 30px;
	line-height: 30px;
	font-size: 18px;
	font-weight: 550;
	color: #000;
	/*background-color: green;*/
}
.divStyle img{
	width:86%;
	height: 64%;
	margin: 0 7%;
	border-radius: 50%; 
	transition:all 1s;
}
</style>
