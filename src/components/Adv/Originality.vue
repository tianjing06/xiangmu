<template>
  <div>
    <el-container>
        <el-aside width="144px">
            <ul>
                <li>
                    <h3><router-link to="/home/advertisement/originality/1">建立广告计划</router-link></h3>
                    <ol>
                        <li>选择创意</li>
                    </ol>
                </li>
                <li>
                    <h3><router-link to="/home/advertisement/originality/2">广告单元</router-link></h3>
                    <ol>
                        <li>基本信息</li>
                        <li>定向</li>
                        <li>广告位</li>
                        <li>出价</li>
                    </ol>
                </li>
                <li>
                    <h3><router-link to="/home/advertisement/originality/3">广告创意</router-link></h3>
                    <ol>
                        <li>落地页</li>
                        <li>上传创意</li>
                    </ol>
                </li>
            </ul>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
  </div>
</template>
<script>
// import { MessageBox } from 'element-ui';
export default {
   
};
</script>
<style scoped>
.el-aside {
  background: #F5F5F5;
  height: 444px;
  color: #333;
  text-align: center;
}
.el-aside ul{
    width: 100%;
    height: 80%;
    margin-top: 20px;
}
.el-aside ul li:nth-child(1){
    width: 100%;
    height: 90px
}
.el-aside ul li:nth-child(1) ol{
    width: 100%;
    height: 45px;
    line-height: 45px
}
.el-aside ul li h3{
    width: 100%;
    height: 30px;
    text-align: left;
    padding: 10px;
}
.el-aside ul li:nth-child(2){
    width: 100%;
    height: 170px
}
.el-aside ul li:nth-child(3){
    width: 100%;
    height: 100px;
    margin-top: 20px;
}
.el-aside ul li:nth-child(3) ol li{
    width: 100%;
    height: 45px;
    line-height: 45px;
}
.el-aside ul li:nth-child(2) ol li{
    width: 100%;
    height: 45px;
    line-height: 45px;
}
.el-aside ul li:nth-child(2) ol{
    width: 100%;
    height: 100px;
}
.el-aside ul li:nth-child(2) ol li{
    width: 100%;
    height: 30px;
}

.el-main {
  background-color: #fff;
  color: #333;
}
h1{
    width: 100%;
    height: 45px;
    font-size: 20px;
    line-height: 45px;
}
.content{
    margin-top: 30px;
}
.content p{
    width: 100%;
    height: 45px;
    line-height: 45px;
}
button{
    width: 166px;
    height: 52px;
    background: #E8E8E8;
    border-radius: 2px;
    border: none;
    outline: none;
    margin-top: 20px;
}
.blue{
    color: skyblue
}
</style>


