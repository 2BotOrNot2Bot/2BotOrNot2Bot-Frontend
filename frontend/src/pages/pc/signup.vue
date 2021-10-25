<template>
<div id="bg">
  <div id="signup-bg">
    <div style="margin:0px auto;">
      <h1 style="margin:0px;">Sign up</h1>
      <p>Already have an account? <router-link to="/pc/login"><span style="color:#FF9F1C; text-decoration: underline;">Sign in Here</span></router-link></p>
      <div>
        <p>Email:</p>
        <el-input class="input" v-model="input.email" placeholder="yibo@usc.edu"></el-input>
      </div>

      <div>
        <p>Password:</p>
        <el-input class="input" v-model="input.password" placeholder="test1234" show-password></el-input>
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
export default {
  name: "signup",
  data(){
    return{
      input: {
        email:'',
        password:'',
      },
      confirm:'',
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
#signup-bg{
  width:50%;
  height:50%;
  margin: 0px auto;
  background: inherit;
  position: relative;
}
#signup-bg > div{
  width:100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
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
  filter: blur(20px);
  z-index: 2;
}

#signup-btn{
  width:100%;
  padding: 12px;
  margin:30px 0px;
}

</style>
