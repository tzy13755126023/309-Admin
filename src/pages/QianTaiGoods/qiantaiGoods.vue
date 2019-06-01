<template>
  <div class="container1">
      <Header />   <!-- 头部 -->
        <Aside/>   <!-- 侧边栏 -->
    <div class="Main">
      <Breadcrumb />  <!--面包屑-->
      	<Tags />
      <div class="Main1">
        <div class="goodsInfo" v-for="(item,index) in qiantaiGoodsData" :key="index">
          <el-form>
            <img :src="item.goodsimageurl">
            <span>goodsID:<i>{{item.goodsID}}</i></span>
            <span>商品名称:<i>{{item.goodsName}}</i></span>
            <span>描述词一:<i>
                {{item.goodsmiaoshu1!=''&&item.goodsmiaoshu1!=null?item.goodsmiaoshu1:'暂无描述词'}}</i>
            </span>
            <span>描述词二:<i>
                {{item.goodsmiaoshu2!=''&&item.goodsmiaoshu2!=null?item.goodsmiaoshu2:'暂无描述词'}}</i>
            </span>
            <span>使用方法:<i>{{item.goodsways}}</i></span>
            <span>商品价格:<i class="i1">{{item.goodsprice | money}}</i></span>
            <el-button type="primary" @click="miaoshuAgain(item)">重新描述<i class="el-icon-edit"></i></el-button>
          </el-form>

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
  name:'qiantaiGoods',
  data(){
    return{
        qiantaiGoodsData:[],
    }
  },
  methods: {
      FecthData(){
        // offset为数据偏移量,pagesize为最大数据
        this.$axios.get("api/admin/getqiantaiGoods")
        .then( res =>{
            this.qiantaiGoodsData = res.data
        })
        .catch( error =>{
            console.log(error)
        })
      },
      miaoshuAgain(item){
        this.$router.push({name:'miaoshuAgain',params:{item:item}})
      }
  },
  created(){
      this.FecthData()
  },
  components:{
      Header,
      Aside,
      Breadcrumb,
  }
}
</script>
<style scoped>
.goodsInfo{
  width: 22.66%;
  margin: 1%;
  /*background-color: red;*/
  border: 1px solid #E3e3e3;
  text-align: left;
  color:#000;
  float: left;
  transition: all 1.5s;
}
.goodsInfo:hover{
  box-shadow: 10px 10px 30px rgba(0,0,0,.4);
  transform: translate(0 -15px);
  transform: scale(1.03);
  /*background-color: pink;*/
  /*transform: rotate(360deg);*/
}
.goodsInfo:hover span:nth-child(2){
  color:red;
}
.goodsInfo img{
  width:50%;
  height: 200px;
  margin: 5% 25% 2%;
  transition: all 1s;
}
.goodsInfo span{
  display: block;
  margin-left: 27%;
  padding: 4px 0;
   /*文字溢出省略号显示*/
  /*文字在一行显示*/
  white-space: nowrap;
  /*溢出部分隐藏*/
  overflow: hidden;
  /*文字溢出省略号显示*/
  text-overflow: ellipsis;
  /*font-style: italic;*/
  font-size: 16px;
}
.goodsInfo span:nth-child(7){
  padding: 6px 0;
}
.goodsInfo span i{
  font-style: initial;
  padding: 6px 12px;
}
.goodsInfo span:nth-child(7) .i1{
  font-style: initial;
  font-size: 18px;
  padding: 6px 12px;
  color: #FF7F00;
}
.el-button{
  padding: 5px;
   margin: 5% 33% 8%;
   width: 40%;
   font-size: 17px;
}
.el-button i{
   font-size: 22px;
}
</style>