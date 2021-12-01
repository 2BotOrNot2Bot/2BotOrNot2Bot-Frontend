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
      <chat-screen style="border-right: 1px solid white;" class="chat" :selfAvatarId="selfAvatarId" :isRobot="isRobot" ref="left"/>
      <chat-screen style="border-left: 1px solid white;" class="chat" :selfAvatarId="selfAvatarId" :isRobot="!isRobot" ref="right"/>
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

<!--    Dialog for asking whether want to start another chat-->
    <vs-dialog prevent-close not-close v-model="showHaveAnotherChat">
      <template>
        <h4 class="not-margin" v-if="guess">
          Congratulations! You made a correct guess!
        </h4>
        <h4 class="not-margin" v-else>
          Oops, wrong guess!
        </h4>
        <h5>Want to start another chat?</h5>
      </template>
      <template #footer>
        <vs-button block @click="chat">
          Yes
        </vs-button>
        <vs-button block border @click="goHome">
          No
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
    this.timeRemain = 2;
    this.selfAvatarId = Math.floor(Math.random() * 5);
    this.showRules = true;
    // Randomly select a chatting window for chat bot (if it's 1, then choose left, 2 choose right)
    this.isRobot = (Math.floor(Math.random() * 2) === 1);
    console.log(this.isRobot? "left" : "right");
  },
  data () {
    return {
      timeRemain: 0,
      chooseAnswer: false,
      answer: '',
      selfAvatarId: 0,
      showRules: false,
      countInterval: '',
      isRobot: true,   // Whether the left window is the chat bot,
      showHaveAnotherChat: false,
      guess: false
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
          // Tell both chatting windows that we need to stop chatting: close websocket
          this.$refs.left.$emit("stopChat");
          this.$refs.right.$emit("stopChat");
        }
      }, 1000);
    },
    submitAnswer () {
      if (this.answer === '') {
        this.$message.error("Please select an answer!");
      } else {
        let guessResult = ((this.answer === 1 && this.isRobot) || (this.answer === 2 && !this.isRobot));
        this.guess = guessResult;
        // TODO: send the result and user id to the backend
        this.chooseAnswer = false;
        this.showHaveAnotherChat = true;
      }
    },
    startChat () {
      // Close the window for displaying rules
      this.showRules = false;
      // Start finding chat bot and human users to chat with
      this.findOpponent();
    },
    findOpponent () {
      // TODO: 调后端API找opponent，每一秒钟发一次，直到收到chatterUid. uid小的那一方先发送消息
      // TODO: 获得chatterUid之后，告诉相对应的窗口子组建：可以开始聊天了 & start counting down
      this.$refs.left.$emit("startChat", 20);   // 把20改成收到的chatter uid
      this.$refs.right.$emit("startChat", 20);  // 把20改成收到的chatter uid
      // Start counting down
      this.countDown();
    },
    goHome () {
      this.$router.push('/pc/home');
    },
    chat () {
      window.location.reload();
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
