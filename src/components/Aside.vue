<template>
  <div class="Aside">
    <el-menu
      :default-active="currentMenu"
      unique-opened
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(50, 64, 87)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 跳转至首页  -->
      <el-menu-item index="/index" class="el-menu-item1">
        <i class="el-icon-menu"></i>
        <span slot="title" class="asideSpan">首页</span>
      </el-menu-item>
      <!-- 跳转至前台商品展示详情  -->
      <el-menu-item index="/qiantaiGoods">
        <i class="el-icon-shopping-bag-1"></i>
        <span slot="title" class="asideSpan">前台商品</span>
      </el-menu-item>
      <!-- 跳转至用户列表 -->
      <el-menu-item index="/userList">
        <i class="el-icon-user-solid"></i>
        <span slot="title" class="asideSpan">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span class="asideSpan">商家管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/DoneStores">
            <span slot="title" class="asideSpan">已审核商家</span>
          </el-menu-item>
          <el-menu-item index="/DaiStores">
            <span slot="title" class="asideSpan">待审核商家</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 跳转至用户意见反馈 -->
      <el-menu-item index="/userYJFK">
        <i class="el-icon-message"></i>
        <span slot="title" class="asideSpan">反馈消息</span>
      </el-menu-item>
      <el-menu-item index="/Dingdan">
        <i class="el-icon-present"></i>
        <span slot="title" class="asideSpan">订单管理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span class="asideSpan">健康资讯</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/HealthDatas">
            <span slot="title" class="asideSpan">查看资讯文章</span>
          </el-menu-item>
          <el-menu-item index="/FaBuhealthNews">
            <span slot="title" class="asideSpan">发布资讯文章</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Dangjibibei">
        <i class="el-icon-first-aid-kit"></i>
        <span slot="title" class="asideSpan">当季必备</span>
      </el-menu-item>
      <el-menu-item index="/Record">
        <i class="el-icon-first-aid-kit"></i>
        <span slot="title" class="asideSpan">登录日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {
      currentMenu: "/index",
      isCollapse: true
    };
  },
  created() {
    this.getUrl();
  },
  watch: {
    $route(to, from) {
      // console.log(to.path);
      this.getUrl();
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    getUrl() {
      // let _this = this;
      // _this.currentMenu = `/${this.$route.path.split('/')[1]}`
      this.currentMenu = `/${this.$route.path.split("/")[1]}`;
    },
    //  clickMenu (componentName) {
    //   this.openedTab = this.$store.state.openedTab
    //   // tabNum 为当前点击的列表项在openedTab中的index，若不存在则为-1
    //   let tabNum = this.openedTab.indexOf(componentName)
    //       console.log(tabNum)
    //       console.log(this.openedTab)
    //       console.log(componentName);
    //       console.log(this.$store.state.openedTab)
    //   if (tabNum === -1) {
    //     // 该标签当前没有打开
    //     // 将componentName加入到已打开标签页state.openedTab数组中
    //     this.$store.commit('addTab', componentName)
    //   } else {
    //     // 该标签是已经打开过的，需要激活此标签页
    //     this.$store.commit('changeTab', componentName)
    //   }
    // }
  }
};
</script>
<style scoped>
.Aside {
  width: 12%;
  position: fixed;
  top: 90px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.Aside .el-menu-item {
  width: 100%;
  height: 70px;
  line-height: 70px;
  position: relative;
  /* -webkit-box-sizing: border-box; */
  cursor: pointer;
  white-space: nowrap;
}
.Aside .el-menu-item1 {
  margin-top: 10px;
}
.Aside .el-submenu {
  /*min-height: 100%;*/
  line-height: 75px;
}
.Aside .el-menu i {
  font-size: 25px;
}
.Aside .el-menu-item:hover,
.Aside .el-submenu:hover {
  background-color: #2d2f33 !important;
}
.Aside .asideSpan {
  font-size: 18px;
  margin-left: 5px;
}
.Aside .el-submenu .el-menu-item {
  height: 60px;
  line-height: 60px;
}
a {
  text-decoration: none;
}
</style>