<template>
  <div class="home">
      <el-container style="height: 790px; border: 1px solid #eee">
  <el-aside width="240px" style="background-color: #fff">
    <el-menu :default-openeds="['1', '4']">
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-setting"></i><router-link to="/home/homePage">首页概览</router-link></template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/home/advertisement">广告管理</router-link></template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/home/advertisement/plan">广告计划</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/home/advertisement/unit">广告单元</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="/home/advertisement/originality">广告创意</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <template slot="title"><i class="el-icon-menu"></i><router-link to="/home/data">数据中心</router-link></template>
      </el-menu-item>
      <el-menu-item index="4">
        <template slot="title"><i class="el-icon-setting"></i><router-link to="/home/holdAll">工具箱</router-link></template>
      </el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import index from "./Index.vue";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState(['username'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu{
  width: 100%;
  height: 100%;
  background: #022050;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  color: #fff;
}
.el-menu li a{
  color: #fff;
}
.el-submenu__title{
  color: #fff!important;
}
.el-menu-item,.el-menu-item-group__title,.el-menu-item-group,.el-submenu__title{
  background: #022050;
  color: #fff;
}
</style>
