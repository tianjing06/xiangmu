<template>
  <div class="login">
      <el-row type="flex" justily="center">
          <el-col :span="6">
               <el-form :model="ruleForm"  label-width="100px" class="demo-ruleForm" ref="loginBox">
                    <el-form-item label="用户名" prop="username" :rules="userRules">
                        <el-input  v-model="ruleForm.username"></el-input>
                    </el-form-item>
                <el-form-item label="密码" prop="password" :rules="passRules">
                    <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="login">登录</el-button>
                </el-form-item>
                </el-form>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import { login } from "../utils/request.js";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      userRules: [
        {
          required: true,
          message: "用户名不可省略"
        },
        {
          type: "email"
        }
      ],
      passRules: [
        {
          required: true,
          message: "密码不可省略"
        }
      ]
    };
  },
  methods: {
    login() {
      this.$refs.loginBox.validate((isValid, options) => {
        if (isValid) {
          this.$store.dispatch('getToken',{
              data:this.ruleForm,
              notify:this.$notify,
              router:this.$router
          })
        //   login(this.username, this.password, "123").then(res => {
        //     console.log(res);
        //   });
        } else {
          this.$notify({
            title: "错误",
            message: "信息不正确",
            type: "success"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  /* background: skyblue; */
  border: 1px solid skyblue;
  background: url("../assets/timg.jpg");
}
.el-row {
  display: flex;
  justify-content: center;
  /* position: absolute; */
  /* top: 50%; */
  margin-top: 20%;
}
</style>


