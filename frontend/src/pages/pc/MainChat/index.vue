<!--@Description: Main window for chatting, including navigation bar and chat-screen-->
<!--@author Tianyi(Lorena) Yan-->
<template>
  <div v-if="needReset">
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
        <vs-button block @click="startAnotherChat">
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
import api from "../../../config/api";
import {getUid, isLogin} from "../../../config/authentication";
import {Loading} from "element-ui";
export default {
  name: "index",
  components: {ChatScreen, BotNavBar},
  inject: ['reload'],
  mounted() {
    this.$refs.body.style.height = "calc(100% - " + this.$refs.navbar.$el.clientHeight + 'px)';
    // Define the total chatting duration to be 3 minutes
    this.timeRemain = 180;
    this.selfAvatarId = Math.floor(Math.random() * 5);
    this.showRules = true;
    // Randomly select a chatting window for chat bot (if it's 1, then choose left, 2 choose right)
    this.isRobot = (Math.floor(Math.random() * 2) === 1);
    // TODO: 如果是guest，怎么给个random uid？
    this.userId = getUid();
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
      guess: false,
      userId: null,
      chatterId: null,
      loading: null,
      needReset: true
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
          if (this.$refs.left !== null && this.$refs.right !== null) {
            this.$refs.left.$emit("stopChat");
            this.$refs.right.$emit("stopChat");
          }
        }
      }, 1000);
    },
    submitAnswer () {
      if (this.answer === '') {
        this.$message.error("Please select an answer!");
      } else {
        let guessResult = ((this.answer === 1 && this.isRobot) || (this.answer === 2 && !this.isRobot));
        this.guess = guessResult;
        this.loading = Loading.service({
          lock: true,
          text: 'Submitting answer...',
          spinner: 'el-icon-loading',
          background: 'white'
        })
        this.$axios.post(api.submitAnswer, {
          'name': "dialogflow",
          'result': guessResult,
          'uid': this.userId
        }).then(userNewScore => {
          this.loading.close();
          // Update user's score
          if (isLogin()) {
            sessionStorage.setItem('user_score', userNewScore);
          }
          this.chooseAnswer = false;
          this.showHaveAnotherChat = true;
        }).catch(err => {
          this.loading.close();
          console.log(err);
          this.$message.error("Error submitting answer. Please contact admin.");
        })
      }
    },
    startChat () {
      // Close the window for displaying rules
      this.showRules = false;
      // Start finding chat bot and human users to chat with
      this.findOpponent();
    },
    findOpponent () {
      // Call API and tell the backend to start finding another user for this user to chat with
      this.loading = Loading.service({
        lock: true,
        text: 'Finding another user to chat with...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      })
      this.$axios.post(api.startFindOpponent, {
        uid: this.userId
      }).then(res => {
        // Try to get opponent from the backend every 2 seconds to see whether there is a match
        this.getOpponent();
      }).catch(err => {
        this.loading.close();
        console.log(err);
        this.$message.error("Connection error. " + err.data.msg + " Please try again later.");
        setTimeout(() => {
          this.$router.push("/pc/home");
        }, 2000)
      })
    },
    goHome () {
      this.$router.push('/pc/home');
    },
    startAnotherChat () {
      // TODO start another chat
      this.reload();
    },
    getOpponent () {
      this.$axios.get(api.getOpponent, {params: {uid: this.userId}}).then(chatterId => {
        if (chatterId !== null) {
          this.chatterId = chatterId;
          this.loading.close();
          // Tell 2 sub chatting windows that we can start chatting now
          this.$refs.left.$emit("startChat", this.chatterId);
          this.$refs.right.$emit("startChat", this.chatterId);
          // Start counting down
          this.countDown();
        } else {
          setTimeout(this.getOpponent, 2000);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped lang="less">
.chat {
  width: 50%;
}
#body {
  width: 100%;
  display: flex;
}
</style>
