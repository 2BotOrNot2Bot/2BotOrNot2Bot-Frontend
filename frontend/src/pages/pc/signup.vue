<template>
<div id="bg">
  <div id="signup-bg">
      <img src="../../assets/logo-b.svg" alt="logo" class="logo">
    <div style="margin:0px auto;">
      <h1 style="margin:0px;color:white;font-size:50px;">Sign up</h1>
      <p>Already have an account? <router-link to="/pc/login"><span style="color:#FF9F1C; text-decoration: underline;">Sign in Here</span></router-link></p>
      <div>
        <p>Email:</p>
        <el-input class="input" v-model="email" placeholder="yibo@usc.edu"></el-input>
      </div>

      <div>
        <p>Password:</p>
        <el-input class="input" v-model="password" placeholder="test1234" show-password></el-input>
      </div>

      <div>
        <p>Confirm Password:</p>
        <el-input class="input" v-model="confirm" placeholder="test1234" show-password></el-input>
      </div>

      <el-button id="signup-btn" type="primary" v-on:click="signup()">Sign Up</el-button>
    </div>
  </div>
</div>
</template>

<script>
import api from "../../config/api";
import {auth} from "../../main";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Message} from "element-ui";
export default {
  name: "signup",
  data(){
    return{
      email:'',
      password:'',
      confirm:''
    }
  },
  methods: {
    signup(){
      if (this.email === '' || this.password === '') {
        this.$message.error("Please enter your email and password");
      } else if (this.password !== this.confirm) {
        this.$message.error("Passwords do not match.");
      } else {
        // Register with firebase
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            user.getIdToken().then((result) => {
              sessionStorage.setItem('user_info', JSON.stringify({'id_token': result, 'email': this.email, 'uid': user.uid}));
              let userid = user.uid;
              console.log(userid);
              // Sign up by calling sign up API of the backend
              this.$axios.post(api.signup, {uid: userid}
              ).then(res => {
                this.$message.success("Successfully sign up.");
                setTimeout(() => {
                  this.$router.push('/pc/chat');
                }, 2500);
              }).catch(err => {
                this.$message.error(err);
                console.log(err)
              })
            }).catch(err => {
              console.log(err.code, err.message);
              this.$message.error(err.message);
            })
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              Message.error("Email has already been used. Please try log in. Jumping to log in page now...")
              setTimeout(() => {
                this.$router.push('/pc/login')
              }, 2000);
            } else if (error.code === 'auth/weak-password') {
              Message.error("Password should be at least 6 characters. Please try again with stronger password");
            } else {
              Message.error("Error signing up. Please contact admin or try again later.");
              console.log(error.code, error.message)
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
  background:url("../../assets/bg.jpg") no-repeat fixed;
  box-sizing:border-box;
  z-index:1;
}
#signup-bg{
  width:35%;
  height:75%;
  margin: 0 auto;
  background: inherit;
  position: relative;
  top:12%;
}
#signup-bg > div{
  color:lightgray;
  width:80%;
  height: 100%;
  position: absolute;
  left:10%;
  top:10%;
  z-index: 11;
}
#signup-bg:after{
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

#signup-btn{
  width:100%;
  padding: 12px;
  margin:30px 0px;
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

</style>
