<template>
<div id="bg">
  <div id="login-bg">
    <img src="../../assets/logo-b.svg" alt="logo" class="logo">
    <div style="margin:0px auto;">
      <h1 style="margin:0px;color:white;font-size:50px;">Sign in</h1>
      <p>New user? <router-link to="/pc/signup"><span style="color:#FF9F1C; text-decoration: underline;">Create an account</span></router-link></p>
      <div>
        <p>Email:</p>
        <el-input class="input" v-model="input.email" placeholder="yibo@usc.edu"></el-input>
      </div>
      <div>
        <p>Password:</p>
        <el-input class="input" v-model="input.password" placeholder="test1234" show-password></el-input>
      </div>

      <el-button id="signin-btn" type="primary" @click="signin">Sign In</el-button>
    </div>
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
    signin(){},
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
#login-bg{
  width:35%;
  height:60%;
  margin: 0 auto;
  background: inherit;
  position: relative;
  top:12%;
}
#login-bg > div{
  color:lightgray;
  width:80%;
  height: 100%;
  position: absolute;
  left:10%;
  top:10%;
  z-index: 11;
}
#login-bg:after{
  content: "";
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  background: inherit;
  filter: blur(15px);
  border:1px;
  z-index: 2;
}
.logo{
  width:100px;
  height:100px;
  position:absolute;
  right:-4%;
  top:-4%;
  color:white;
  z-index:3;
}
#signin-btn{
  width:100%;
  padding: 12px;
  margin:30px 0px;
}
</style>
