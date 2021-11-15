<!--@Description: Main window for chatting, including navigation bar and chat-screen-->
<!--@author Tianyi(Lorena) Yan-->
<template>
  <div>
<!--    Initial dialog window for explaining the rules-->
    <vs-dialog prevent-close not-close v-model="showRules">
      <template>
        <h4 class="not-margin">Hi there!</h4>
        <h5 style="word-break: break-word;max-width: 30rem;">Welcome to 2BotOrNot2Bot. You will be chatting with 2 "persons" at the same time.
          One is a chatbot, and another one is an actual human, which will be randomly assigned.
          <br/><br/>You will have 3 minutes to chat with both of them. When the time is up, you will be asked
          to make a guess of which one is the robot. You will accumulate 1 point if you make a correct guess!
        </h5>
      </template>
      <template #footer>
        <vs-button block @click="startChat">
          Start chatting!
        </vs-button>
      </template>
    </vs-dialog>

    <bot-nav-bar ref="navbar" style="border-bottom: 2px solid white;" :selfAvatarId="selfAvatarId">
      <span style="cursor: text">{{displayedTime}}</span>
    </bot-nav-bar>
    <div id="body" ref="body">
      <chat-screen style="border-right: 1px solid white;" class="chat" :selfAvatarId="selfAvatarId"/>
      <chat-screen style="border-left: 1px solid white;" class="chat" :selfAvatarId="selfAvatarId"/>
    </div>

<!--    Choose final answer after time is up-->
    <vs-dialog prevent-close not-close v-model="chooseAnswer">
      <template>
        <h4 class="not-margin">
          Time is <b>UP!!!</b>
        </h4>
        <h5>Which one do you think is the robot?</h5>
      </template>
      <div style="display: flex;justify-content: space-evenly;">
        <vs-radio v-model="answer" :val='1'>
          Left
        </vs-radio>
        <vs-radio v-model="answer" :val='2'>
          Right
        </vs-radio>
      </div>
      <template #footer>
        <vs-button block @click="submitAnswer">
          Submit
        </vs-button>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import BotNavBar from "@/components/bot-nav-bar";
import ChatScreen from "@/components/ChatMain/chat-screen";
import {isLogin} from "../../../config/authentication";
export default {
  name: "index",
  components: {ChatScreen, BotNavBar},
  mounted() {
    this.$refs.body.style.height = "calc(100% - " + this.$refs.navbar.$el.clientHeight + 'px)';
    this.timeRemain = 180;
    this.selfAvatarId = Math.floor(Math.random() * 5);
    this.showRules = true;
  },
  data () {
    return {
      timeRemain: 0,
      chooseAnswer: false,
      answer: '',
      selfAvatarId: 0,
      showRules: false,
      countInterval: ''
    }
  },
  computed: {
    displayedTime () {
      let minute = Math.floor(this.timeRemain / 60);
      let second = this.timeRemain % 60;
      return minute + ':' + (second >= 10 ? second : '0' + second);
    }
  },
  methods: {
    countDown() {
      this.countInterval = setInterval(() => {
        this.timeRemain--;
        if (this.timeRemain === 0) {
          clearInterval(this.countInterval);
          this.chooseAnswer = true;
        }
      }, 1000);
    },
    submitAnswer () {
      this.chooseAnswer = false;
    },
    startChat () {
      this.showRules = false;
      this.countDown();
    }
  }
}
</script>

<style scoped>
.chat {
  width: 50%;
}
#body {
  width: 100%;
  display: flex;
}
</style>
