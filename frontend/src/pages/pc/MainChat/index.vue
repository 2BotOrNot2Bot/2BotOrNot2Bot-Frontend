<template>
  <div>
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
export default {
  name: "index",
  components: {ChatScreen, BotNavBar},
  mounted() {
    this.$refs.body.style.height = "calc(100% - " + this.$refs.navbar.$el.clientHeight + 'px)';
    this.timeRemain = 180;
    this.selfAvatarId = Math.floor(Math.random() * 5);
    this.countDown();
  },
  data () {
    return {
      timeRemain: 0,
      chooseAnswer: false,
      answer: '',
      selfAvatarId: 0
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
      this.chooseAnswer = false;;
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
