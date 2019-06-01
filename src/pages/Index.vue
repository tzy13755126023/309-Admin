<template>
  	<div class="container1">
	    <Header />
        <Aside/>	
    	<div class="Main">
    		<div class="Bread">
	    		<el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item><i class="el-icon-s-help"></i>
                <span class="spanBread">首页</span></el-breadcrumb-item>
				  </el-breadcrumb>
    		</div>
        <div class="Main1">
           <EightBox />
           <ECharts1 />
           <ECharts2 />
        </div>
    	</div>
	</div>
</template>
<script>
import "../assets/css/iconfont.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import EightBox from "../components/EightBox"
import ECharts1 from "../components/ECharts/ECharts1"
import ECharts2 from "../components/ECharts/ECharts2"
import { Storage } from '../util/Storage.js'
export default{
	name:'Index',
    data() {
      return {

      }
    },
    methods: {
    },
    components:{
    	Header,
    	Aside,
      EightBox,
      ECharts1,
      ECharts2
    }
}	
</script>
<style scoped>
.Bread{
  	width: 100%;
  	height: 40px;
  	/*background-color: red;*/
    background-color: #f3f3f3;
    float: left;
}
.el-breadcrumb{
  	line-height: 40px;
  	font-size: 18px;
  	padding-left: 20px;
}
.el-breadcrumb i{
    color: #303133;
    font-size: 20px;
}
.el-breadcrumb .spanBread{
    font-weight: 400;
    cursor: text;
    color: #303133;
    padding-left: 5px;
}
.container1 .Main{
  	background-color:rgba(255,255,255,.4);
  	color: #333;
  	float: right;
  	text-align: center;
  	width: 88%;
  	height: 850px;
    overflow-y:auto; /*需要时显示纵向滚动条*/
  	/*line-height: 800px;*/
} 
.container1 .Main .Main1{
    padding: 10px;
}

</style>