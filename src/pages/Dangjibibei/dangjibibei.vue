<template>
  	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  面包屑
			<div class="Main1">
				<div class="divStyle">
					<h1>春季必备</h1>
					<img :src="springData[0].imagesurl">
					<div class="ZhengWen">{{springData[0].content}}</div>
					<span class="span1">春季推荐药品</span>
					<div class="goodsRecommand" v-for="(items,index1) in springRecommanGoodsData" :key="index1">
						<img :src="items.goodsimageurl" alt="">
						<div class="goodsNameAndprice">
							<span>{{items.goodsName}}</span>	
							<span>{{items.goodsprice | money}}</span>
						</div>	
					</div>
				</div>
				<div class="divStyle">
					<h1>夏季必备</h1>
					<img :src="summerData[0].imagesurl">
					<div class="ZhengWen">{{summerData[0].content}}</div>
					<span class="span1">夏季推荐药品</span>
					<div class="goodsRecommand" v-for="(items2,index2) in summerRecommanGoodsData" :key="index2">
						<img :src="items2.goodsimageurl" alt="">
						<div class="goodsNameAndprice">
							<span>{{items2.goodsName}}</span>	
							<span>{{items2.goodsprice | money}}</span>
						</div>	
					</div>
				</div>
				<div class="divStyle">
					<h1>秋季必备</h1>
					<img :src="austomData[0].imagesurl">
					<div class="ZhengWen">{{austomData[0].content}}</div>
					<span class="span1">秋季推荐药品</span>
					<div class="goodsRecommand" v-for="(items3,index3) in austomRecommanGoodsData" :key="index3">
						<img :src="items3.goodsimageurl" alt="">
						<div class="goodsNameAndprice">
							<span>{{items3.goodsName}}</span>	
							<span>{{items3.goodsprice | money}}</span>
						</div>	
					</div>
				</div>				
				<div class="divStyle">
					<h1>冬季必备</h1>
					<img :src="winterData[0].imagesurl">
					<div class="ZhengWen">{{winterData[0].content}}</div>
					<span class="span1">冬季推荐药品</span>
					<div class="goodsRecommand" v-for="(items4,index4) in winterRecommanGoodsData" :key="index4">
						<img :src="items4.goodsimageurl" alt="">
						<div class="goodsNameAndprice">
							<span>{{items4.goodsName}}</span>	
							<span>{{items4.goodsprice | money}}</span>
						</div>	
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
	name:'Dangjibibei',
    data() {
      return {
		springData:[],                    //数据库春季数据模板
		summerData:[],                    //数据库夏季数据模板
		austomData:[],                    //数据库秋季数据模板
		winterData:[],                    //数据库冬季数据模板
		springRecommanGoodsData:{},       //春季推荐商品数据
		summerRecommanGoodsData:{},       //夏季推荐商品数据
		austomRecommanGoodsData:{},        //秋季推荐商品数据
		winterRecommanGoodsData:{},       //冬季推荐商品数据
      }
    },
	methods: {

        
    },
    mounted(){
		//获取春季必备模块数据
		this.$axios.get("/api/selectDangjibiei/spring")
		.then( res =>{
			this.springData = res.data
			// console.log(this.springData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取春季推荐商品数据
		this.$axios.get("/api/selectDangjibieiRecommanGoods/spring")
		.then( res =>{
			this.springRecommanGoodsData = res.data
			// console.log(this.springRecommanGoodsData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取夏季必备模块数据
		this.$axios.get("/api/selectDangjibiei/summer")
		.then( res =>{
			this.summerData = res.data
			// console.log(this.summerData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取夏季推荐商品数据
		this.$axios.get("/api/selectDangjibieiRecommanGoods/summer")
		.then( res =>{
			this.summerRecommanGoodsData = res.data
			// console.log(this.summerRecommanGoodsData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取秋季必备模块数据
		this.$axios.get("/api/selectDangjibiei/austom")
		.then( res =>{
			this.austomData = res.data
			// console.log(this.austomData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取秋季推荐商品数据
		this.$axios.get("/api/selectDangjibieiRecommanGoods/austom")
		.then( res =>{
			this.austomRecommanGoodsData = res.data
			// console.log(this.austomRecommanGoodsData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取冬季必备模块数据
		this.$axios.get("/api/selectDangjibiei/winter")
		.then( res =>{
			this.winterData = res.data
			// console.log(this.winterData)
		})
		.catch( error =>{
			console.log(error)
		})
		//获取冬季推荐商品数据
		this.$axios.get("/api/selectDangjibieiRecommanGoods/winter")
		.then( res =>{
			this.winterRecommanGoodsData = res.data
			// console.log(this.winterRecommanGoodsData)
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
.container1 .Main .Main1{
    width:95%;
    height: 96%;
    padding-top: 2%;
    margin: 2%;
}
.divStyle{
	width: 23.80%;
	margin: 1.5% 0.53% 3%;
	float: left;
	border: 1px solid #E3E3E3;
}
.divStyle .span1{
	margin-top: 5%;
	display: block;
	width:100%;
	padding-left: 8%;
	text-align: left;
	height: 50px;
	line-height: 50px;
	font-size: 25px;
	color:#FF7F00;
}
h1{
	letter-spacing: 0.5rem;
	color: darkred;
}
img{
	width:80%;
	margin:1% 10%;
}
.ZhengWen{
	border-bottom:1px solid #E3E3E3;
	border-left:1px solid #E3E3E3;
	border-top:1px solid #E3E3E3;
	margin-top: 5%;
	margin-left: 8%;
	width:84%;
	height: 400px;
	font-size: 16px;
	/*文字溢出省略号显示*/
  	/*文字在一行显示*/
  	/*white-space: nowrap;*/
  	/*溢出部分隐藏*/
  	overflow-y: scroll; 
 	 /*文字溢出省略号显示*/
  	text-overflow: ellipsis;
 	/*white-space: pre-line;*/

}
.goodsRecommand{
	margin-bottom: 2px;
	width: 49.5%;
	height: 210px;
	background-color:#fff;
	float: left;
}
.goodsRecommand:nth-child(even){
	margin-right:1%;
}
.goodsRecommand img{
	margin:10% 25% 5%; 
	width: 50%;
	height: 110px;
}
.goodsRecommand .goodsNameAndprice{
	text-align: center;
	width: 100%;
	height: 80px;
}
.goodsRecommand .goodsNameAndprice span{
	font-size: 15px;
	text-align: center;
	display: block;
	width: 100%;
	height: 30px;
	line-height: 25px;
}
.goodsRecommand .goodsNameAndprice span:last-child{
	height: 40px;
	color: #FF7F00;
	font-size: 16px;
}
</style>