<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-content bg-one">
            <p class="ListNumber">
                <span class="span1">+{{CountZonglirun}}</span>
                <span class="span2">总利润(千元)</span>
            </p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-two">
            <p class="ListNumber">
                <span class="span1">+{{CountZongXiaoLiang}}</span>
                <span class="span2">总销量(件)</span>
            </p>
        </div>
      </el-col>
      <el-col :span="3">
        <router-link to="/userlist" tag="div" class="grid-content bg-three">
            <p class="ListNumber">
                <span class="span1">+{{userNumber}}</span>
                <span class="span2">用户数量(人)</span>
            </p>
        </router-link>
      </el-col>
      <el-col :span="3">
        <router-link to="/userpinglun" tag="div" class="grid-content bg-four">
            <p class="ListNumber">
                <span class="span1">+{{userPingLun}}</span>
                <span class="span2">用户评论(条)</span>
            </p>
        </router-link>
      </el-col>
      <el-col :span="3">
        <router-link to="/donestores" tag="div" class="grid-content bg-five">
            <p class="ListNumber">
                <span class="span1">+{{storesNumber}}</span>
                <span class="span2">商家数量(户)</span>
            </p>
        </router-link>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-six">
            <p class="ListNumber">
                <span class="span1">+3082</span>
                <span class="span2">潜在用户(人)</span>
            </p>
        </div></el-col>
      <el-col :span="3">
        <router-link to="/record" tag="div" class="grid-content bg-seven">
            <p class="ListNumber">
                <span class="span1">+{{recordNumber}}</span>
                <span class="span2">日志记录(条)</span>
            </p>
        </router-link>
    </el-col>
      <el-col :span="3">
        <router-link to="/healthdatas" tag="div" class="grid-content bg-eight">
            <p class="ListNumber">
                <span class="span1">+{{articleNumber}}</span>
                <span class="span2">资讯文章(篇)</span>
            </p>
        </router-link>
      </el-col>
    </el-row>
</template>
<script>
export default{
	name:'EightBox',
	data(){
        return{ 
            ZongLiRunData:{},        //总利润    接收已完成订单的数据
            userNumber :'' ,         //用户数量
            userPingLun:'',          //用户评论数量
            storesNumber:'',         //商家数量  
            articleNumber:'',        //资讯文章数量
            recordNumber:''          //登陆日志数量
        }
	},
    mounted(){
        //获取已完成订单的数据
        this.$axios.get('/api/admin/GetZongLiRun')
        .then( res =>{
            this.ZongLiRunData = res.data
        })
        //获取全部用户数据
        this.$axios.get('/api/admin/getAlluserinfo')
        .then( res=>{
            this.userNumber = (res.data.length).toFixed(2)
        })
        //获取所有用户的商品评论
        this.$axios.get('/api/admin/GetUserPingJia')
        .then( res =>{
            this.userPingLun = res.data.length
        })
        //获取所有商家信息
        this.$axios.get('/api/admin/GetAllStores')
        .then( res =>{
            this.storesNumber = (res.data.length).toFixed(2)
        })
        //获取所有健康资讯数据
        this.$axios.get('/api/admin/getHealthsData')
        .then( res =>{
            this.articleNumber = (res.data.length).toFixed(2)
        })
        //获取操作日志数据
        this.$axios.get('/api/admin/GetAllrecord')
        .then( res =>{
            this.recordNumber = (res.data.length).toFixed(2)
        })
    },
    //计算属性
    computed:{
        CountZonglirun(){
            let CountLirun = this.ZongLiRunData
            let zonglirun = 0
            for (var i =0; i < CountLirun.length ; i++) {
                zonglirun += CountLirun[i].goodsAmount
            }
            return zonglirun.toFixed(2)       //总利润
        },
        CountZongXiaoLiang(){
            let CountXiaoLiang = this.ZongLiRunData
            let zongxiaoliang = 0   
            for (var i =0; i < CountXiaoLiang.length ; i++) {
                zongxiaoliang += CountXiaoLiang[i].goodsCount
            }
            return zongxiaoliang.toFixed(2)  //总销量
        }
    }
}
</script>
<style scoped>
.el-row{
    margin-bottom: 20px;
}
.el-col{
    border-radius: 4px;
}
.grid-content{
    margin-top: 20px;
    height:60px;
    text-align: center;
    border-radius: 6px;
    padding: 15px 0;
    color: #fff;
}
.bg-one{
    background-color: #18a689;
}
.bg-two{
    background-color: #9c0;
}
.bg-three{
    background-color: #3c9;
}
.bg-four{
    background-color: #3b5999;
}
.bg-five{
    background-color: #6c9;
}
.bg-six{
    background-color: #099;
}
.bg-seven{
    background-color: #f90;
}
.bg-eight{
    background-color: #09c;
}
.ListNumber{
    font-size: 20px;
    display: block;
    height: 60px;
    margin-top: 0;
}
.ListNumber .span1,.ListNumber .span2{
    height: 30px;
    line-height: 30px;
    display: block;
}
.ListNumber .span1{
  font-weight: 700;
  letter-spacing: 0.7px;
}
</style>