<template>
<div id="bg">
  <div id="login-bg">
    <img src="../../assets/logo-b.svg" alt="logo" class="logo">
    <div style="margin:0px auto;">
      <h1 style="margin:0px;color:white;font-size:40px;">Change your password</h1>
      <div>
        <p>Your Email:</p>
        <el-input class="input" v-model="email" placeholder="yibo@usc.edu"></el-input>
      </div>

      <el-button id="signin-btn" type="primary" v-on:click="submit()">Send Password Reset Link</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "changePassword",
  data(){
    return{
      email:'',
    }
  },
  methods: {
    submit(){},
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
  height:40%;
  margin: 0px auto;
  background: inherit;
  position: relative;
  top:25%;
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
