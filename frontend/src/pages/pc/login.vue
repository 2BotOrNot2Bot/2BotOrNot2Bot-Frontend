
<template>
  <div id="bg">
    <div id="login-bg">
      <img :src="logo" alt="logo" class="logo">
      <div style="margin:0 auto;">
        <h1 style="margin:0;color:white;font-size:50px;">Sign in</h1>
        <p>New user? <router-link to="/pc/signup"><span style="color:#FF9F1C; text-decoration: underline;">Create an account</span></router-link></p>
        <div>
          <p>Email:</p>
          <el-input class="input" v-model="email" placeholder="yibo@usc.edu"></el-input>
        </div>
        <div>
          <p>Password:</p>
          <el-input class="input" v-model="password" placeholder="test1234" show-password></el-input>
          <p>Forget Your Password? <router-link to="/pc/changePassword"><span style="color:#FF9F1C; text-decoration: underline;"> Reset Password</span></router-link></p>
        </div>
        <el-button id="signin-btn" type="primary" @click="signIn">Sign In</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/main";
import api from "@/config/api";
import {Loading} from "element-ui";
export default {
  name: "login",
  data(){
    return{
      email:'',
      password:'',
      logo: require('@/assets/image/logo-b.svg')
    }
  },
  methods: {
    signIn(){
      if (this.email === '' || this.password === '') {
        this.$message.error("Please enter your email and your password.")
      } else {
        let loading = Loading.service({
          lock: true,
          text: 'Loading...',
          spinner: 'el-icon-loading',
          background: 'white'
        })
        signInWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
          const user = userCredential.user;
          user.getIdToken().then((result) => {
            sessionStorage.setItem('user_info', JSON.stringify({'id_token': result, 'email': this.email, 'uid': user.uid}));
            let userId = user.uid;
            // ----- Call backend API to login -----
            this.$axios.get(api.login, {params: {uid: userId}}).then((score) => {
              loading.close();
              sessionStorage.setItem('user_score', score);
              this.$message.success("Successfully login.");
              setTimeout(() => {
                this.$router.push('/pc/chat');
              }, 2500);
            }).catch(err => {
              loading.close();
              console.log(err);  // TODO
              this.$message.error(err);
            })
          }).catch(err => {
            loading.close();
            console.log(err.code, err.message);
            this.$message.error("Invalid email or password.");
          })
          }).catch((error) => {
            loading.close();
            console.log(error.code, error.message);
            if (error.code === "auth/user-not-found") {
              this.$message.error("Unknown email address. Please register first!");
            } else {
              this.$message.error("Invalid email or password.");
            }
          });
      }
    },
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
