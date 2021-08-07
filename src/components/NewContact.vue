<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="6">
      <br>
      <img src="@/assets/logo.png">
      <div>
        <el-input v-model="input_user" placeholder="请输入账号">
          <template slot="prepend">账号</template>
        </el-input>
      </div>
      <br>
      <div>
        <el-input v-model="input_pass" placeholder="请输入账密码">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <br>
      <div>
        <el-button type="success" round @click="login">登录</el-button>
      </div>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: "NewContact",
  data(){
    return {
     input_user: '',
     input_pass: ''
    }
  },
  methods:{
    login(){
      this.$axios({
        method: 'post',
        url: '/App/testlogin/',
        data:{
          input_username: this.input_user,
          input_password: this.input_pass,
        }
      }).then(function(ret){
        const login_ret = ret.data.login_ret;
        alert(login_ret)
      });
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
      margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
