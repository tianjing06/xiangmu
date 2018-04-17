<template>
  <div class='main'>
      <div class="left">
          <ul>
              <li>
                  <i class="iconfont icon-jiahao"></i><span>新建广告</span></li>
              <li>
                  <router-link to="/home/homePage"><i class="iconfont icon-fenlei"></i><span>首页概览</span></router-link>
              </li>
              <li>
                  <dl>
                      <dt @click="show"><router-link to="/home/advertisement"><i class="iconfont icon-guanli"></i><span>广告管理</span></router-link></dt>
                      <dd>
                          <ol v-show="isShow">
                              <li>广告计划</li>
                              <li>广告单元</li>
                              <li>广告创意</li>
                          </ol>
                      </dd>
                  </dl>
                  

              </li>
              <li><router-link to="/home/data"><i class="iconfont icon-yidongduanicon-"></i><span>数据中心</span></router-link></li>
              <li><router-link to="/home/holdAll"><i class="iconfont icon-book"></i><span>工具箱</span></router-link></li>
          </ul>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          isShow:true
      }
  },
  methods:{
      show(){
          this.isShow = !this.isShow
      }
  }
}
</script>
<style scoped>
.main{
    width: 100%;
    height: 100%;
}
.left{
    width: 16.7%;
    height: 100%;
    float: left;
    background: #022050 100%;
    
}
.left ul{
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
}
.left ul li{
    width: 100%;
    height: 6.1%;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;
}
.left ul li:nth-child(1){
    background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);

}
.left ul li span, .left ul li i{
    color:#fff;
}
.left ul li i{
    margin-right: 10px
}
.right{
    width: 83.3%;
    height: 100%;
    float: right;
    background: #ccc;
}
dl dd{
    width: 100%;
}
dl dd ol{
    width: 100%;
    height: 7%;
}
</style>


