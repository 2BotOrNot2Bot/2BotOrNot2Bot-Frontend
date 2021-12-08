<template>
<div id="bg">
  <div id="login-bg">
    <img :src="logo" alt="logo" class="logo">
    <div style="margin:0px auto;">
      <h1 style="margin:0px;color:white;font-size:40px;">Change your password</h1>
      <div>
        <p>Your Email:</p>
        <el-input class="input" v-model="email" placeholder="yibo@usc.edu"></el-input>
      </div>
      <el-button class="signin-btn" type="primary" v-on:click="sendResetLink()">Send Password Reset Link</el-button>
      <el-button class="signin-btn" v-on:click="goToLogin()">Go back to login page</el-button>
    </div>
  </div>
</div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {Loading} from "element-ui";
export default {
  name: "changePassword",
  data(){
    return{
      email:'',
      logo: require('@/assets/image/logo-b.svg')
    }
  },
  methods: {
    sendResetLink(){
      if (this.email.trim() === '') {
        this.$message.error("Please enter your email!")
      } else {
        const auth = getAuth();
        let loading = Loading.service({
          lock: true,
          text: 'Sending link for resetting password...',
          spinner: 'el-icon-loading',
          background: 'white'
        })
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            loading.close();
            this.$message.success("Link for resetting password has been sent! Please check your email. Going back to login page...")
            setTimeout(() => {
              this.$router.push('/pc/login');
            }, 2500);
          })
          .catch((error) => {
            loading.close();
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-email') {
              this.$message.error("The email address is invalid. Please try again.");
            } else if (errorCode === 'auth/user-not-found') {
              this.$message.error("The email address is not registered. Jumping to register page...");
              setTimeout(() => {
                this.$router.push('/pc/signup');
              }, 2500);
            } else {
              const errorMessage = error.message;
              this.$message.error(errorCode + ' ' + errorMessage)
              console.log(errorCode, errorMessage);
            }
          });
      }
    },
    goToLogin () {
      this.$router.push('/pc/login')
    }
  }
}
</script>

<style scoped>
#bg{
  width:100%;
  height:100%;
  background:url("../../assets/image/bg.jpg") no-repeat fixed;
  box-sizing:border-box;
  z-index:1;
}
#login-bg{
  width: 35%;
  height: 50%;
  margin: 0 auto;
  background: inherit;
  position: relative;
  top: 20%;
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
  right:-9%;
  top:-4%;
  color:white;
  z-index:3;
}
.signin-btn{
  width:100%;
  padding: 12px;
  margin: 15px 0 0;
}
</style>
