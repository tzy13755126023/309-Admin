<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />   <!--面包屑-->
			<div class="Main1">
				<div class="xxhealthData" v-for="(item,index) in XXhealthData" :key=index>
					<div class="xxhealthData1">
						<h1>{{item.title}}</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span>发布时间：{{item.time}}</span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span>来源网：{{item.laiyuan}}</span>
						</p>	
						<img :src="item.imagesurl" alt=""><br>
						<div class="Content" v-html="item.content">{{}}</div>
					</div>
				</div>
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
			XXhealthData:{},
			hehealthdatasID:this.$route.params.healthdatasID
		}

	},
	mounted(){
		this.$axios.get("/api/admin/getXXHealthsData/"+this.hehealthdatasID+" ")
		.then( res => {
			this.XXhealthData = res.data
			console.log(this.healthData)
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
.container1{
	background-color:rgba(10,10,10,.2);
}
.container1 .Main .Main1{
    width:95%;
    height: 96%;
    padding-top: 2%;
    margin: 2%;
}
.xxhealthData{
	width: 90%;
	margin:0 auto;
}
.xxhealthData1{
	width: 50%;
	margin: 0 auto;
}
.xxhealthData1 img{
	width: 80%;
	height:80%;
	margin:0.3% 0 4% 2.5%;
}
.Content{
	width:82%;
	font-size:16px;
	letter-spacing: 2px;
	margin:0 auto 10% auto;
	/*white-space: pre-wrap;*/
	white-space: pre-line;  /*合并空白符序列，但是保留换行符。*/
}
</style>
