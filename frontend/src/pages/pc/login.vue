<template>
<div id="bg">
  <div style="width:30%; margin:0px auto;">
    <h1 style="margin:0px;">Sign in</h1>
    <p>New user? <router-link to="/pc/signup"><span style="color:#FF9F1C; text-decoration: underline;">Create an account</span></router-link></p>
    <div>
      <p>Email:</p>
      <el-input class="input" v-model="input.email" placeholder="yibo@usc.edu"></el-input>
    </div>
    <div>
      <p>Password:</p>
      <el-input class="input" v-model="input.password" placeholder="test1234" show-password></el-input>
    </div>

    <el-button id="signin-btn" type="primary" v-on:click="signin()">Sign In</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      input:{
        email:'',
        password:'',
      }
    }
  },
  methods: {
    signup(){},
  }
}
</script>

<style scoped>
#bg{
  width:100%;
  height:100%;
  background:url("../../assets/bg.jpg") no-repeat fixed;
  box-sizing:border-box;
  z-index:1;
}
#signin-btn{
  width:100%;
  padding: 12px;
  margin:30px 0px;
}
</style>
