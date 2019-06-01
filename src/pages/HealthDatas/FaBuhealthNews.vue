<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />   <!--面包屑-->
			<div class="Main1">
				<!-- <span  v-html="NewsForm.content" v-model="NewsForm.content">{{}}</span> -->
				<div class="publish-container">
					<el-button size="medium" type="primary" @click="postPage()"><span>发布</span></el-button>
					<el-button size="medium" type="warning" @click="caogao()"><span>草稿</span></el-button>
				</div>
				<div class="formStyle">
					<el-form status-icon :model="NewsForm">
						<div class="line1">
							<span>标题：</span>
							<input  type="textarea" name="title" v-model="NewsForm.title" class="input1">
						</div>
						<div class="line2">
							<span class="articalSpan">文章来源：</span>
						    <el-select v-model="NewsForm.laiyuan" placeholder="文章来源" class="selectStyle">
							    <el-option label="99健康网"   value ="99健康网"></el-option>
							    <el-option label="360健康网"  value ="360健康网"></el-option>
							    <el-option label="搜狐健康网"  value ="搜狐健康网"></el-option>
							    <el-option label="寻医问药网"  value ="寻医问药网"></el-option>
							    <el-option label="人民健康网"  value ="人民健康网"></el-option>
							    <el-option label="大众养生网"  value ="大众养生网"></el-option>
							    <el-option label="39养生堂"    value ="39养生堂"></el-option>
							    <el-option label="健康报网"    value ="健康报网"></el-option>
							    <el-option label="好大夫在线"  value ="好大夫在线"></el-option>
							    <el-option label="新浪健康"    value ="新浪健康"></el-option>
							    <el-option label="凤凰健康网"  value ="凤凰健康网"></el-option>
								<el-option label="放心医范"    value ="放心医范"></el-option>
							    <el-option label="天天养生网"  value ="天天养生网"></el-option>
							    <el-option label="药房网"      value ="药房网"></el-option>
							    <el-option label="好药师"      value ="好药师"></el-option>
							    <el-option label="春雨医生"    value ="春雨医生"></el-option>
						    </el-select>
						    <span class="fabuTime">发布时间：</span>
						    <el-col :span="4">
							     <el-date-picker type="date" placeholder="选择日期" v-model="NewsForm.date1" class="date1">
							     </el-date-picker>
						     </el-col>
						      <el-col class="line" :span="1">-------</el-col>
						     <el-col :span="4">
							   <el-time-picker placeholder="选择时间" v-model="NewsForm.date2">
							     </el-time-picker>
						      </el-col>
						</div>
						<div class="form-group">
							<p class="left">
							    <label class="FileLable">File input:</label>
						   	    <input type="file" name="file" id="file" class="FlieInput">
						    	<span id="result"></span>
							</p>
							<div  class="right">
						    	<img id="img" src="">
							</div>
						  </div>
						<div class="Editor">
							<span>正文内容：</span>
						<Editor ref="froalaEditor" @on-change="changeContent" v-model="NewsForm.content"></Editor>
								
						</div>

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
import Editor from '@/components/editor.vue'
import {DateTime} from "../../util/DataTime"
export default{
	name:'FaBuhealthNews',
	data(){
		return{
			NewsForm:{
				title:'',
				laiyuan:'',
				content:'',
				date1:'',
				date2:'',
			},
			Time:'',
			imageurl:'',
		}

	},
	methods:{
		init () {
        	this.$nextTick(()=>{
        	console.log(this.NewsForm.content)
        	this.$refs.froalaEditor.setHtml(this.NewsForm.content)
        	})
   		 },
	    changeContent (html) {
	      this.NewsForm.content = html
	      // console.log(html)
		},
		//上传图片的业务逻辑函数
    	uploadFile(){
    	  var that = this;  //保存this,让它指向vue实例
	      //上传图片的input
	      var file = document.getElementById("file")
	      if (file!=null) {
		      //因为准备用post提交，又因为图片的内容比较大，所以我们选择使用formdata来承载数据
		      //创建formdata对象
		      var formData = new FormData();
		      //给formdata对象中放入数据(键值对的方式)
		      formData.append('file',file.files[0]);
		      //提交请求
		      $.ajax({
		        url: '/api/upload',//请求路径
		        type: 'POST',
		        data: formData,
		        async:false,        //将ajax设置为同步请求,如果ajax是异步请求,下面this.imageurl得不到数据，
		                            //即javascript是非阻塞运行的，在$.ajax还没运行完，命名可能就执行了，
		        contentType: false,//为了让浏览器根据传入的formdata来判断contentType
		        processData: false,//同上
		        // 原因在于在ajax的success函数中，this的指向不再是vue的实例
		        success: function(data){
		          if(200 === data.code) {
		            $('#result').html("上传成功！");
		            $('#img').attr('src','/api'+data.data);
		          	that.imageurl = "http://localhost:3000"+data.data
		          } else {
		            $('#result').html("上传失败！");
		          }
		        },
		        error: function(){
		          $("#result").html("服务器通信错误!");
		        }
		      });
	  		}
	    },
	    //给按钮添加点击事件
    	postPage() {
         	//上传按钮
         	if (this.NewsForm.title=='') {
         		this.$message({
         			type:'error',
         			message:'标题不能为空！'
         		})
         	}else if(this.NewsForm.laiyuan==''){
         		this.$message({
         			type:'error',
         			message:'文章来源不能为空！'
         		})
         	}else if(this.NewsForm.date1==''||this.NewsForm.date2==''){
         		this.$message({
         			type:'error',
         			message:'请选择您的发布时间！'
         		})
         	}else if(this.NewsForm.content==''){
         		this.$message({
         			type:'error',
         			message:'请输入正文内容'
         		})
         	}else{
         		//上传图片
         		this.uploadFile()
						console.log(this.NewsForm.title.trim())
			   	  console.log(this.NewsForm.laiyuan)
			   	  console.log(typeof(this.NewsForm.content))
     		    console.log(this.imageurl)
	       	    let date = new DateTime() 
	       	    //JS格式化Thu May 12 2016 08:00:00 GMT+0800 (中国标准时间)
	     	    this.Time = date.getresetTime(this.NewsForm.date2) 
	     	    console.log(typeof(this.Time))
	     	    this.$axios.post("/api/admin/addHealthData",{
     	    	      title   :  this.NewsForm.title.trim(),
				    imagesurl :  this.imageurl,
				    content   :  this.NewsForm.content,
				      time    :  this.Time,
				    laiyuan   :  this.NewsForm.laiyuan
	     	    })
	     	    .then( res =>{
	     	    	if (res.data.affectedRows){
	     	    		this.$message({
	     	    			type:'success',
	     	    			message:'发布健康资讯成功！'
	     	    		})
	     	    		setTimeout(() => {
	     	    		  this.$router.push('/healthdatas')
	     	    		}, 1500)
	     	    	}else{
	     	    		this.$message({
	     	    			type:'error',
	     	    			message:'发布健康资讯失败！'
	     	    		})
	     	    	}
	     	    })
	     	    .catch( error =>{
	     	    	console.log(error)
	     	    })
         	}
        },
        caogao(){
		 
        }
	},
	created(){
		// this.postPage(); 
	},
    components:{
    	Header,
    	Aside,
    	Breadcrumb,
    	Editor
    }
}
</script>
<style scoped>
.container1 .Main1{
	width:95%;
    height: 96%;
    padding-top: 1%;
    margin: 2%;
}
.publish-container{
	width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #38a884;
    border-color: #4db3ff;
    color: #fff;
    text-align: right;
    padding: 0 10px;
    margin-bottom: 1%;
}
.formStyle{
	text-align: center;
	margin: 2% auto;
	width: 80%;
	/*background-color: red;*/
}
.line1,.line2{
	width: 100%;
	height: 50px;
	line-height:50px;
	margin-bottom:2%; 
}
.line1 span,.line2 .articalSpan,.line2 .fabuTime{
	font-size: 20px;
}
.line1 span{
	float: left;
	margin-left: 14%;
}
.line2 .articalSpan{
	float: left;
	margin-left: 13%;
}
.line2 .fabuTime{
	float: left;
	margin-left: 5%;
}
.line2 .selectStyle{
	text-align: left;
	float: left;
	margin-left: 2%;
}
.formStyle .line1 span:before,.formStyle .line2 .articalSpan:before,.fabuTime:before,.Editor span:before{
	content: "*";
    color: #fa5555;
    margin-right: 4px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner,.el-time-picker.el-input{
    width: 240px;
    margin-left: 5%;
}

.input1{
	resize: none;
    border-radius: 0;
	border: none;
	width: 66%;
	height: 30px;
	line-height: 30px;
	margin-left: -6%;
	margin-top: -4%;
	border-bottom: 1px solid #d8dce5;
}
.form-group{
	margin:0 14%;
	width:76%;
	height: 250px;
	border: 1px solid #E3e3e3;
}
.form-group .left,.form-group .right{
	float: left;
	width: 40%;
	height: 250px;
}
.right{
	margin-left: 2%
}
.form-group .right img{
	margin: 3%;
	width: 90%;
	height:90%;
	/*border:none;*/
	border-radius: 50%;
}
.left .FileLable,.left .FlieInput,.left #result{
	display: block;
	font-size: 20px;
	float: left;
	color: #FF7F00;
	padding: 5% 13%;
	margin-left:15%;
}
.left .FlieInput{
	width:74%;
	/*background-color: #FF7F00;*/
}
.left #result{
	font-size:22px;
	height: 80px;
	line-height: 40px;
	color: rgb(255,0,0);
	/*background-color: black;*/
}
/*富文本编辑器的样式*/
.Editor{
	clear: both;
	text-align: left;
	margin: 2% 14%;
	width: 76%;
}
.Editor span{
	display: block;
	margin-bottom: 10px;
	font-size: 20px;
}
</style>
