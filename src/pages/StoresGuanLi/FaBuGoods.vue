<template>
	<div class="container1">
	    <Header />   <!-- 头部 -->
        <Aside/>	 <!-- 侧边栏 -->
    	<div class="Main">
			<Breadcrumb />  <!--面包屑-->
			<div class="Main1">
				<div class="Form">
					<el-form :model="FaBuGoodsForm">
						<el-form-item>
							<span class="spanStyle">商品ID：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsID" auto-complete="off" placeholder="请输入商品ID,类似goods---,例如goods101">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">商品Ename：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsEname" auto-complete="off" 			   placeholder="请输入商品Ename" class="inputName">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">商品名称：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsName" auto-complete="off" 			   placeholder="请输入商品名称" class="input2">
				      		</el-input>
			    		</el-form-item>
			    		<!-- <el-form-item>
							<span class="spanStyle">商品Ename：</span>
							<el-select  v-model="FaBuGoodsForm.goodsEname" class=el-select1
										placeholder="请选择商品Ename">
							   <el-option v-for="item in GoodsEnameList" :label="item.label"
							   	          :value ="item.value":key="item.value">
							   </el-option>					    
						    </el-select>
							<span class="spanStyleright">商品名称：</span>
							<el-select  v-model="FaBuGoodsForm.goodsName" class=el-select1
										placeholder="请选择商品名称">
							   <el-option v-for="item1 in GoodsNameList" :label="item1.label" 
							   			  :value ="item1.value" :key="item1.value">
							   </el-option>					    
						    </el-select>
			    		</el-form-item> -->
						<el-form-item>
							<span class="spanStyle">商品类型：</span>
							<el-select  v-model="FaBuGoodsForm.goodstype" class=el-select2
										placeholder="请选择商品类型">
							   <el-option v-for="(item2,index2) in GoodstypeList" :label="item2.label"
							   	          :value ="item2.value" :key="index2">
							   </el-option>					    
						    </el-select>
							<span class="spanStyleright">批准文号：</span>
							<el-select  v-model="FaBuGoodsForm.goodsWenhao" class=el-select1
										placeholder="请选择批准文号">
							   <el-option v-for="(item4,index4) in GoodsWenhaoList" :label="item4.label" 
							   			  :value ="item4.value" :key="index4">
							   </el-option>					    
						    </el-select>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">商品价格：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsprice" auto-complete="off" 			   placeholder="请输入商品价格" class="input2">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">适应症状：</span>
							<el-select  v-model="FaBuGoodsForm.goodszz" class=el-select2 
									    placeholder="请选择适应症状">
							   <el-option v-for="Goodszz in GoodszzList" :label="Goodszz.label"
							   	          :value ="Goodszz.value" :key="Goodszz.value">
							   </el-option>					    
						    </el-select>
							<span class="spanStyleright">用法用量：</span>
							<el-select  v-model="FaBuGoodsForm.goodsways" class=el-select1 
										placeholder="请选择用法用量">
							   <el-option v-for="(Goodsways,index) in GoodswaysList" :label="Goodsways.label" 
							   			  :value ="Goodsways.value" :key="index">
							   </el-option>					    
						    </el-select>
			    		</el-form-item>
						<el-form-item>
							<span class="spanStyle">商品规格：</span>
							<el-select  v-model="FaBuGoodsForm.goodsrules" class=el-select2 
									    placeholder="请选择商品规格">
							   <el-option v-for="(Goodsrules,ins) in GoodsrulesList" :label="Goodsrules.label"
							   	          :value ="Goodsrules.value" :key="ins">
							   </el-option>					    
						    </el-select>
							<span class="spanStyleright">贮藏方法：</span>
							<el-select  v-model="FaBuGoodsForm.goodszhucang" class=el-select1 
										placeholder="请选择贮藏方法">
							   <el-option v-for="Goodszhucang in GoodszhucangList" :label="Goodszhucang.label" 
							   			  :value ="Goodszhucang.value" :key="Goodszhucang.value">
							   </el-option>					    
						    </el-select>
			    		</el-form-item>
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
					    <el-form-item>
							<span class="spanStyle">商品描述词一：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsmiaoshu1" auto-complete="off" 			   placeholder="请输入商品描述词一" class="input3">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">商品描述词二：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.goodsmiaoshu2" auto-complete="off" 			   placeholder="请输入商品描述词二" class="input3">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">商品库存量：</span>
				      		<el-input  size="small"  v-model="FaBuGoodsForm.kucun" auto-complete="off" 			   placeholder="请输入商品库存量" class="input4">
				      		</el-input>
			    		</el-form-item>
			    		<el-form-item>
							<span class="spanStyle">推荐商品：</span>
							<el-select v-model="FaBuGoodsForm.recommand" placeholder="是否为推荐商品"
									   class=el-select2>
							    <el-option label="是"   value ="true"></el-option>
							    <el-option label="否"   value ="false"></el-option>
						    </el-select>
							<span class="spanStyleright">当季必备：</span>
							<el-select  v-model="FaBuGoodsForm.seasontype" class=el-select1 
										placeholder="请选择哪个季节必备">
							    <el-option label="春"   value ="spring"></el-option>
						        <el-option label="夏"   value ="summer"></el-option>	
						        <el-option label="秋"   value ="austom"></el-option>	
						        <el-option label="冬"   value ="winter"></el-option>	
						        <el-option label="无"   value =""></el-option>	
						    </el-select>
			    		</el-form-item>
			    		<div style="margin-top:3%;padding-bottom:3%;text-align: center;">
			    		<el-button size="medium" type="primary" @click="postPage()"><span>发布</span></el-button>
			    		<el-button size="medium" type="warning" @click="reSet()"><span>重置</span></el-button>
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
export default{
	name:'GetAllStoreGoods',
	data(){
		return{
			storesID:this.$route.params.storesID,   //商家ID(所属商家）
			FaBuGoodsForm:{
				goodsID:'',             //商品ID
				goodsEname:'',		    //商品Ename
				goodsName:'',		    //商品名称
				goodstype:'',		    //商品类型
				goodsWenhao:'',         //批准文号
				goodsprice:'',		    //商品价格
				goodszz:'',			    //适应症状
				goodsways:'',		    //用法用量
				goodsrules:'',			//商品规格
				goodszhucang:'',		//商品贮藏方法
				goodsmiaoshu1:'',		//商品描述词一
				goodsmiaoshu2:'',		//商品描述词二
				kucun:'',				//商品库存
				recommand:'',			//是否为推荐商品
				seasontype:'',			//当季必备
			},
			goodsimageurl:'',           //图片路径
			qiantaitype:'',             //line1等等。
			GoodsEnameList:[
			{ label:"gbycp",value:"gbycp" }, { label:"ajptt",value:"ajptt" },
			{ label:"lcsmp",value:"lcsmp" }, { label:"jszhp",value:"jszhp" },
			{ label:"kspwj",value:"kspwj" }, { label:"glxgs",value:"glxgs" },
			{ label:"wgdyy",value:"wgdyy" }, { label:"jllgp",value:"jllgp" },
			{ label:"nbjkf",value:"nbjkf" }, { label:"jyrgs",value:"jyrgs" },
			{ label:"xgzgp",value:"xgzgp" }, { label:"wssjp",value:"wssjp" },
			{ label:"jlgcp",value:"jlgcp" }, { label:"ffbjn",value:"ffbjn" },
			{ label:"yyxyj",value:"yyxyj" }, { label:"zqytp",value:"zqytp" },
			{ label:"ynbyt",value:"ynbyt" }, { label:"dzxyj",value:"dzxyj" },
			{ label:"qyctp",value:"qyctp" }, { label:"zqnytp",value:"zqnytp" },
			{ label:"gb001",value:"gb001" }, { label:"ytp",value:"ytp" },
			{ label:"lwsyf",value:"lwsyf" }, { label:"wsser",value:"wsser" },
			{ label:"xflxl",value:"xflxl" }, { label:"mqyxj",value:"mqyxj" },
			{ label:"yzydg",value:"yzydg" }, { label:"rctbc",value:"rctbc" },
			{ label:"xzqxc",value:"xzqxc" }, { label:"yhsqf",value:"yhsqf" },
			{ label:"gqz",value:"gqz"     }, { label:"xycf",value:"xycf" },
		    { label:"hekl",value:"hekl"   }, { label:"fhsjn",value:"fhsjn" },
			{ label:"ryzbw",value:"ryzbw" }, { label:"dphsp",value:"dphsp" },
			{ label:"sjwtkl",value:"sjwtkl"},{ label:"lkfry",value:"lkfry" },
			],
			//商品名称
			GoodsNameList:[
			{ label:"固本益肠片",value:"固本益肠片" }, { label:"氨基葡萄糖胶囊",value:"氨基葡萄糖胶囊" },
			{ label:"铝碳酸镁片",value:"铝碳酸镁片" }, { label:"金嗓子喉片",value:"金嗓子喉片" },
			{ label:"卡松喷雾剂",value:"卡松喷雾剂" }, { label:"桂林西瓜霜",value:"桂林西瓜霜" },
			{ label:"纬甘滴眼液",value:"纬甘滴眼液" }, { label:"健力洛钙片",value:"健力洛钙片" },
			{ label:"脑白金口服液",value:"脑白金口服液"}, { label:"胶原软骨素钙片",value:"胶原软骨素钙片" },
			{ label:"新盖中盖高钙片",value:"新盖中盖高钙片" },{ label:"维生素C咀嚼片",value:"维生素C咀嚼片" },
			{ label:"江绿甘草片",value:"江绿甘草片" }, { label:"复方斑螯胶囊",value:"复方斑螯胶囊" },
			{ label:"鱼跃血压计",value:"鱼跃血压计" }, { label:"左炔孕酮片",value:"左炔孕酮片" },
			{ label:"云南白药创口贴",value:"云南白药创口贴" }, { label:"电子血压计",value:"电子血压计" },
			{ label:"去氧孕雌醇片",value:"去氧孕雌醇片" }, { label:"左炔诺孕酮片",value:"左炔诺孕酮片" },
			{ label:"冈本0.01",value:"冈本0.01" }, { label:"孕酮片",value:"孕酮片" },
			{ label:"里维斯养发霜",value:"里维斯养发霜" }, { label:"维生素E乳",value:"维生素E乳" },
			{ label:"香妃兰夏露",value:"香妃兰夏露" }, { label:"明荃腋臭净",value:"明荃腋臭净" },
			{ label:"药之源 当归",value:"药之源 当归" }, { label:"润肠通便茶",value:"润肠通便茶" },
			{ label:"修正 清秀茶",value:"修正 清秀茶" }, { label:"盘龙云海 三七粉",value:"盘龙云海 三七粉" },
			{ label:"枸杞子",value:"枸杞子"     }, { label:"御滋港韩 西洋参粉",value:"御滋港韩 西洋参粉" },
		    { label:"金可 槐耳颗粒",value:"金可 槐耳颗粒"   }, { label:"布洛芬缓释胶囊",value:"布洛芬缓释胶囊" },
			{ label:"金河 如意珍宝丸",value:"金河 如意珍宝丸" }, { label:"非洛地平缓释片",value:"非洛地平缓释片" },
			{ label:"三九胃泰颗粒",value:"三九胃泰颗粒"},{ label:"氨溴特罗口服溶液",value:"氨溴特罗口服溶液" },
			],
			//商品类型
			GoodstypeList:[
			{ label:"中西药品",value:"ZXYP"},{ label:"计生用品",value:"YSBJ" },
			{ label:"医疗器械",value:"YLQX"},{ label:"养生保健",value:"JSYP" },
			{ label:"中药饮品",value:"ZYYP"},{ label:"美容护肤",value:"MRHF" },
			],
			//批准文号
			GoodsWenhaoList:[
			{ label:"国药准字Z1094003512"  ,value:"国药准字Z1094003512"},
			{ label:"国药准字H3209345134"  ,value:"国药准字H3209345134"},
			{ label:"国药准字Z2568985623"  ,value:"国药准字Z2568985623"},
			{ label:"国药准字Z2556894533"  ,value:"国药准字Z2556894533"},
			{ label:"国药准字Z2556897544"  ,value:"国药准字Z2556897544"},
			{ label:"卫食健字(2001)第543号" ,value:"卫食健字(2001)第543号"},
			{ label:"卫食健字(2002)第703号" ,value:"卫食健字(2002)第703号"},
			{ label:"国食健字G2012007832"   ,value:"国食健字G2012007832"},
			{ label:"卫食健字(1997)第723号" ,value:"卫食健字(1997)第723号"},
			{ label:"国食健字G2712856455"   ,value:"国食健字G2712856455"},
			{ label:"国食健字G2232007753"   ,value:"国食健字G2232007753"},
			{ label:"卫食健字(1997)第543号" ,value:"卫食健字(1997)第543号"},
			{ label:"卫食健字(2002)第703号" ,value:"卫食健字(2002)第703号"},
			{ label:"国食健字G2712856467"   ,value:"国食健字G2712856467"},
			{ label:"卫食健字(2001)第543号" ,value:"卫食健字(2001)第543号"},
			{ label:"卫食健字(2003)第723号" ,value:"卫食健字(2003)第723号"},
			{ label:"卫食健字(2001)第773号" ,value:"卫食健字(2001)第773号"},
			{ label:"国药准字Z512455787678" ,value:"国药准字Z512455787678"},
			{ label:"国药准字S55578589587"  ,value:"国药准字S55578589587"},
			{ label:"国药准字S5458458723"   ,value:"国药准字S5458458723"},
			{ label:"卫食健字(2007)第743号" ,value:"卫食健字(2007)第743号"},
			{ label:"卫食健字(1997)第555号" ,value:"卫食健字(1997)第555号"},
			{ label:"国食健字G27870078565"  ,value:"国食健字G27870078565"},
			{ label:"国药准字Z25689856432"  ,value:"国药准字Z25689856432"},
			{ label:"卫食健字(1997)第705号" ,value:"卫食健字(1997)第705号"},
			{ label:"国药准字Z25578787"     ,value:"国药准字Z25578787"   },
			{ label:"国药准字S5458458723"   ,value:"国药准字S5458458723" },
			{ label:"卫食健字(2005)第705号" ,value:"卫食健字(2005)第705号"},
			],
			//适应症状
			GoodszzList:[
			{ label:"腹痛腹泻",value:"腹痛腹泻" },
			{ label:"哮喘"    ,value:"哮喘"    },
			{ label:"胃炎"    ,value:"胃炎"    },
			{ label:"肺热咳嗽",value:"肺热咳嗽" },
			{ label:"痛风"    ,value:"痛风"    },
			{ label:"计生医用",value:"计生医用" },
			{ label:"高血压"  ,value:"高血压"   },
			{ label:"缺钙"    ,value:"缺钙"    },
			{ label:"肝病"    ,value:"肝病"    },
			],
			//用法用量
			GoodswaysList:[
			{ label:"口服。一次8片，一日三次。",value:"口服。一次8片，一日三次。" },
			{ label:"口服。一次1片，一日三次。",value:"口服。一次1片，一日三次。" },
			{ label:"口服。一次1-2片，一日三次。",value:"口服。一次1-2片，一日三次。" },
			{ label:"含服。一次一片。",value:"含服。一次一片。" },
			{ label:"一次2克，一日三次。",value:"一次2克，一日三次。" },
			{ label:"滴眼，一次两滴，一日4-6次",value:"滴眼，一次两滴，一日4-6次" },
			{ label:"口服。每日三次，一次1-2粒。",value:"口服。每日三次，一次1-2粒。" },
			{ label:"口服。每日1-3次，一次一杯",value:"口服。每日1-3次，一次一杯" },
			{ label:"口服。每日三次，一次1-2粒。",value:"口服。每日三次，一次1-2粒。" },
			{ label:"仪器测量",value:"仪器测量" },
			{ label:"外擦涂抹",value:"外擦涂抹" },
			{ label:"搓洗使用",value:"搓洗使用" },
			{ label:"涂抹",value:"涂抹" },
			{ label:"泡水冲服",value:"泡水冲服" },
			{ label:"开水泡软，一次3-6g,一日三次。",value:"开水泡软，一次3-6g,一日三次。" },
			],
			//商品规格
			GoodsrulesList:[
			{ label:"0.32g x100片/瓶",value:"0.32g x100片/瓶" },
			{ label:"16片/盒",value:"16片/盒" },
			{ label:"0.5g x10片/盒",value:"0.5g x10片/盒" },
			{ label:"2g x 6片/盒",value:"2g x 6片/盒" },
			{ label:"50ug x 120喷/瓶",value:"50ug x 120喷/瓶" },
			{ label:"3.5g /瓶",value:"3.5g /瓶" },
			{ label:"13ml/瓶",value:"13ml/瓶" },
			{ label:"300g/瓶",value:"300g/瓶" },
			{ label:"250ml x3瓶/提",value:"250ml x3瓶/提" },
			{ label:"1.2g x 90片/瓶",value:"1.2g x 90片/瓶" },
			{ label:"2.5g x 36/瓶",value:"2.5g x 36/瓶" },
			{ label:"0.5g x10片/瓶",value:"0.5g x10片/瓶" },
			{ label:"0.5g x10片/瓶",value:"0.5g x10片/瓶" },
			{ label:"0.5g x10片/盒",value:"0.5g x10片/盒" },
			{ label:"0.15mgx 21片/盒",value:"0.15mgx 21片/盒" },
			{ label:"1.5cm x 50片/盒"  ,value:"1.5cm x 50片/盒"},
			{ label:"30mgx 21片/盒"  ,value:"30mgx 21片/盒"},
			{ label:"0.15mg x 21片/盒"  ,value:"0.15mg x 21片/盒"},
			{ label:"1套 x 8只/盒"  ,value:"1套 x 8只/盒"},
			{ label:"0.5g x10片/盒"  ,value:"0.5g x10片/盒"},
			{ label:"0.5g x10片/盒"  ,value:"0.5g x10片/盒"},
			{ label:"40g /瓶"  ,value:"40g /瓶"},
			{ label:"40ml/瓶"  ,value:"40ml/瓶"},
			{ label:"100g/罐"  ,value:"100g/罐"},
			],
			//贮藏方法
			GoodszhucangList:[
			{ label:"密封密闭保存",value:"密封密闭保存" },
			{ label:"密封保存",value:"密封保存" },
			{ label:"密封，置干燥处。",value:"密封，置干燥处。" },
			{ label:"密封，置阴凉处。",value:"密封，置阴凉处。" },
			{ label:"室温密闭保存",value:"室温密闭保存" },
			{ label:"放置阴凉处保存",value:"放置阴凉处保存" },
			],
		}
	},
	methods:{
		//重置方法
		reSet(){
			this.FaBuGoodsForm = ''   //让表单数据为空
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
		          	that.goodsimageurl = "http://localhost:3000"+data.data
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
		//发布商品
		postPage(){
			var pattern1 = /^[goods]{5}[\d]{3,5}$/g       //验证goods+数字的商品ID
	    	var pattern2 = /^[0-9]+(.[0-9]{1,2})+$/       //验证有1-2位小数的正实数
	    	var pattern3 = /^[1-9]{1}[0-9]{2,4}$/         //验证3-5位小数的正实数
	    	if (this.FaBuGoodsForm.goodsID=='') {
	    		this.$message({
         			type:'error',
         			message:'商品ID不能为空！'
         		})
	    	}else if (!pattern1.test(this.FaBuGoodsForm.goodsID)) {
    			this.$message({
         			type:'error',
         			message:'请输入商品ID,类似goods---,例如goods101！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsEname=='') {
    			this.$message({
         			type:'error',
         			message:'请输入商品的goodsEname属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsName=='') {
    			this.$message({
         			type:'error',
         			message:'请输入商品的商品名称！'
         		})
	    	}else if (this.FaBuGoodsForm.goodstype=='') {
    			this.$message({
         			type:'error',
         			message:'请选择商品类型属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsWenhao=='') {
    			this.$message({
         			type:'error',
         			message:'请选择批准文号属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsprice=='') {
    			this.$message({
         			type:'error',
         			message:'商品价格不能为空！'
         		})
	    	}else if (!pattern2.test(this.FaBuGoodsForm.goodsprice)) {
    			this.$message({
         			type:'error',
         			message:'请输入有1-2位小数的价格！'
         		})
	    	}else if (this.FaBuGoodsForm.goodszz=='') {
    			this.$message({
         			type:'error',
         			message:'请选择适应症状属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsways=='') {
    			this.$message({
         			type:'error',
         			message:'请选择用法用量属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsrules=='') {
    			this.$message({
         			type:'error',
         			message:'请选择商品规格属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodszhucang=='') {
    			this.$message({
         			type:'error',
         			message:'请选择贮藏方法属性！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsmiaoshu1=='') {
    			this.$message({
         			type:'error',
         			message:'请输入符合该商品的描述词一！'
         		})
	    	}else if (this.FaBuGoodsForm.goodsmiaoshu2=='') {
    			this.$message({
         			type:'error',
         			message:'请输入符合该商品的描述词二！'
         		})
	    	}else if (this.FaBuGoodsForm.kucun=='') {
    			this.$message({
         			type:'error',
         			message:'请输入商品库存数量！'
         		})
	    	}else if (!pattern3.test(this.FaBuGoodsForm.kucun)) {
    			this.$message({
         			type:'error',
         			message:'请输入3-5正实数！'
         		})
	    	}else if (this.FaBuGoodsForm.recommand=='') {
    			this.$message({
         			type:'error',
         			message:'请选是否为推荐商品属性！'
         		})
	    	}else{
	    		//判断goodsID是否被占用
	    		this.$axios.post("/api/admin/isgoodsID",{
	    			goodsID : this.FaBuGoodsForm.goodsID
	    		})
	    		.then( res =>{
	    			//可用的goodsID
	    			if (res.data.code==0) {
	    				this.uploadFile()
						console.log(this.FaBuGoodsForm.goodsID)             
						console.log(this.FaBuGoodsForm.goodsEname)             
						console.log(this.FaBuGoodsForm.goodsName)             
						console.log(this.FaBuGoodsForm.goodstype)            
						console.log(this.FaBuGoodsForm.goodsWenhao)
						console.log(this.goodsimageurl)
						console.log(this.FaBuGoodsForm.goodsprice)            
						console.log(this.FaBuGoodsForm.goodszz)            
						console.log(this.FaBuGoodsForm.goodsways)            
						console.log(this.FaBuGoodsForm.goodsrules)             
						console.log(this.FaBuGoodsForm.goodszhucang)             
						console.log(this.FaBuGoodsForm.goodsmiaoshu1)             
						console.log(this.FaBuGoodsForm.goodsmiaoshu2)
						console.log(this.qiantaitype)             
						console.log(this.FaBuGoodsForm.kucun)             
						console.log(this.FaBuGoodsForm.recommand)           
						console.log(this.FaBuGoodsForm.seasontype)      
						console.log(this.storesID) 
						this.$axios.post('/api/admin/FaBuGoods',{
							   goodsID      : this.FaBuGoodsForm.goodsID,
						      goodsEname    : this.FaBuGoodsForm.goodsEname,
						      goodsName     : this.FaBuGoodsForm.goodsName,
						      goodstype     : this.FaBuGoodsForm.goodstype,
						      goodsWenhao   : this.FaBuGoodsForm.goodsWenhao,
						      goodsimageurl : this.goodsimageurl,
						      goodsprice    : this.FaBuGoodsForm.goodsprice,
						      goodszz       : this.FaBuGoodsForm.goodszz,
						      goodsways     : this.FaBuGoodsForm.goodsways,
						      goodsrules    : this.FaBuGoodsForm.goodsrules,
						      goodszhucang  : this.FaBuGoodsForm.goodszhucang,
						      goodsmiaoshu1 : this.FaBuGoodsForm.goodsmiaoshu1,
						      goodsmiaoshu2 : this.FaBuGoodsForm.goodsmiaoshu2,
						      qiantaitype   : this.qiantaitype,
						         kucun      : this.FaBuGoodsForm.kucun,
						      recommand     : this.FaBuGoodsForm.recommand,
						      seasontype    : this.FaBuGoodsForm.seasontype,
						      storesID      : this.storesID
						})
						.then( res =>{
							if (res.data.affectedRows) {
								this.$message({
				         			type:'success',
				         			message:'商品发布成功！' 
				         		})
				                //1.5s刷新该页面
				                setTimeout(() => {
				                	this.$router.push('/donestores')
				                }, 1500)
							}else{
								Tthis.$message({
				         			type:'error',
				         			message:'商品发布失败！' 
				         		})
							}
						})
						.catch( error =>{
							console.log(error)
						})
	    			}else{
	    				this.$message({
		         			type:'error',
		         			message:res.data.message //该goodsID已被占用！
		         		})
	    			}
	    		})
	    		.catch( error =>{
	    			console.log(error)
	    		})
	    	}
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
.Form{
	text-align: left;
	width: 80%;
	margin:0 10%; 
	/*background-color: red;*/
}
.el-input{
	width:60%;
	margin-left: 4%;
	font-size: 16px;
}
.input2{
	margin-left: 2.8%;
}
.input3{
	margin-left: 0%;
}
.input4{
	margin-left: 1.4%;
}
.inputName{
	margin-left: 1%;
}
.el-form-item{
	margin-bottom: 10px;
	clear: both;
}
.el-form-item:first-child{
	padding-top: 10px;
}
.spanStyle{
	padding-left: 20%;
	font-size: 18px;
}
.spanStyleright{
	padding-left: 3%;
	font-size: 18px;
}
.el-select1{
	margin-left: 1%;
}
.el-select2{
	margin-left: 2.7%;
}
.form-group{
	margin:0 17%;
	width:62%;
	height: 200px;
	/*border: 1px solid #E3e3e3;*/
	/*background-color: pink;*/
}
.form-group .left,.form-group .right{
	float: left;
	width: 42%;
	height: 200px;
	/*background-color: green;*/
}
.right{
	margin-left: 2%
}
.form-group .right img{
	margin: 4% 0 0 20%;
	width: 90%;
	height:90%;
	border-radius: 50%;
}
.left .FileLable,.left .FlieInput,.left #result{
	display: block;
	font-size: 20px;
	float: left;
	color: #FF7F00;
	padding: 3% 13%;
}
.left .FlieInput{
	width:74%;
	/*background-color: #FF7F00;*/
}
.left #result{
	font-size:22px;
	height: 60px;
	line-height: 30px;
	color: rgb(255,0,0);
	/*background-color: black;*/
}
.el-button{
	width:12%;
	margin-right:2%; 
	height: 45px;
}

</style>