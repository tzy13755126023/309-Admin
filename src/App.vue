<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-family:Arial, "微软雅黑"}
img{border:none;max-width:100%;vertical-align:middle;}
body,p,form,input,button,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6{margin:0;padding:0;list-style:none;overflow-x:hidden}
body{ background-color: #ffffff;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;-webkit-appearance:none;font-size:1em;line-height:1.5em;}
table{border-collapse:collapse;}
input,select,textarea{outline:none;border:none;background:none;}
a{outline:0;cursor:pointer;*star:expression(this.onbanner=this.blur());}
a:link,a:active{text-decoration:none;}
a:visited{text-decoration:none;}
a:hover{color:#f00;text-decoration:none;}
a{text-decoration:none;-webkit-touch-callout:none;}
em,i{font-style:normal;}
li,ol{list-style:none;}
html{font-size:10px;}
.clear{clear:both;height:0;font-size:0;line-height:0;visibility:hidden; overflow:hidden;}
.fl{float:left;}
.fr{float:right;}
body{ margin:0 auto;color:#555;background:#f9f9f9;height:100%;}
a{color: #222;text-decoration: none}
* { touch-action: pan-y; }    /*解决滑动时的警告*/
}
.container1{
    /*background-image: url("../assets/images/indexImage.jpg");*/
    background-size: 100%;
    height: 940px;
    position: fixed;
    /*-moz-opacity:0.8;  */
    /*opacity: 0.9;*/
    left:0;
    top:0;
    width: 100%;
}
.container1 .Main{
    background-color:rgba(255,255,255,.4);
    color: #333;
    float: right;
    text-align: center;
    width: 88%;
    height: 850px;
    overflow-y:auto; /*需要时显示纵向滚动条
    /*line-height: 800px;*/
} 
.container1 .Main .Main1{
    width:95%;
    padding-top: 3%;
    margin: 2%;
}
.container1 .Aside{
    width: 12%;
    position: fixed;
    top: 90px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
}
.router-link-active {
    text-decoration: none;
}
.el-submenu__title{
    height: 70px;
    line-height: 70px;
}
.el-submenu__title:hover{
	  background-color:#2d2f33 !important; 
}
.el-menu-item-group__title{
	  padding:0 0 0 20px;
}
.el-table td,.el-table th{
    text-align: center;
}
.el-table th{
    font-size: 18px;
    color: #000;
}
.el-table td{
    font-size: 15px;
    letter-spacing: 0.5px;
}
/*饿了么表单输入框样式*/
.el-input__inner {
    background-image: none;
    border-radius: 10px;
    width: 80%;
}
/*饿了么表单lable样式*/
.el-form-item__label{
    padding-right: 0;
    font-size: 16px;
}
.el-button--mini:nth-child(3){
    padding: 7px 15px;
    margin-left:1px;
    font-size: 12px;
    border-radius: 3px;
}
.DingdanStyle{
    width: 100%;
    margin-top: 1%;
}
*{
	 user-select: none;
}
</style>
