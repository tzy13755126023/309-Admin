<template>
  <div class="Bread">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-show="item.meta.title">
                  <router-link :to="item.redirect||item.path">
                    <i :class="item.meta.icon"></i>
                    <span>{{item.meta.title}}</span>
                  </router-link>
              </el-breadcrumb-item>
        </el-breadcrumb>
        </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data() {
      return {
           levelList: '',
      }
    },
    methods: {
      /**
       * 生成面包屑的方法
       */
    getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
         if (first && first.name !== '首页') {
            matched = [{path: '/', meta: { title: '首页',icon:'el-icon-s-help'}}].concat(matched)
          }
          this.levelList = matched;
      }
    },
    mounted(){
      this.getBreadcrumb();
    },
    watch: {
      $route(to, from) {
        this.getBreadcrumb();
      }
    },
}
</script>
<style scoped>
.Bread{
    width: 100%;
    height: 40px;
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
</style>
