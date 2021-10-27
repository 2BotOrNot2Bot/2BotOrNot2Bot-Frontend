<template>
  <div>
    <bot-nav-bar ref="navbar" style="border-bottom: 2px solid white;">
      <span style="cursor: text">{{displayedTime}}</span>
    </bot-nav-bar>
    <div id="body" ref="body">
      <chat-screen style="border-right: 1px solid white;" class="chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.11 263.1"><defs></defs><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path class="cls-1" fill="#fff" d="M234.29,214.38c-19.7,21.59-42.36,38.59-71.53,45-46.15,10.09-87,.06-121.52-32.94-4.16-4-8.27-8-12.41-12-2.11-12,1-23.63,2.34-35.39,1.6-3.67,5.16-4.94,8.31-6.67A106.94,106.94,0,0,0,79,135.55c5.06-8,9.78-16.23,16.41-23.09,10.57-10.95,19.57-9.83,26.89,3.27a130.35,130.35,0,0,1,5.5,11.87c.83,1.92,1.45,4.55,4.22,4.22,1.93-.24,2.6-2.34,3.29-4,2.23-5.38,4.38-10.83,7.72-15.63,5.81-8.32,13.54-9.33,21.43-2.88,5.72,4.68,9.86,10.72,13.6,17,12.2,20.36,27.53,37.45,49.25,48.05a9,9,0,0,1,4.58,4.51C233.35,190.63,236.41,202.33,234.29,214.38Z"/><path class="cls-2" fill="#999" d="M234.29,214.38c-4-11.91-3.37-24.38-4.42-36.65-7-11.52-5-24.79-6.88-37.24C218.57,112,213.63,83.63,202,57c-.73-1.67-1.36-3.39-2.15-5-6.66-13.82-11.83-14.45-22-2.52a89.46,89.46,0,0,0-11.76,17.09c-2.93,5.71-7.08,7.59-13.5,5.57a68.39,68.39,0,0,0-42,0c-6.43,2-10.57.1-13.48-5.6a88,88,0,0,0-10.36-15.4C75.2,36.83,69.65,37.44,62.45,53.91A244.35,244.35,0,0,0,49.27,92.15a434.16,434.16,0,0,0-11.18,67.9c-.55,6.22-1,12.39-4.84,17.68C32.16,190,33,202.48,28.83,214.37-14.51,158.3-5.95,86.83,34.32,42.59,70,3.42,128-10.73,178.58,8.56c50.35,19.18,83.93,67.65,84.52,120.52C263.45,161.1,253.22,189.1,234.29,214.38Z"/><path d="M131.88,170c6.57.9,14.89-1.67,16.3,8.41.74,5.3-11.37,18.28-16.54,18.33s-17.4-12.86-16.68-18.17C116.43,167.77,125.41,171.16,131.88,170Z"/></g></g></svg>
      </chat-screen>
      <chat-screen style="border-left: 1px solid white;" class="chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.21 293.17"><title>资源 68</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path d="M246,253.3c-55,53.43-148.48,53.11-200.06-.68a24.45,24.45,0,0,1-3.27-12.77c-.11-52.64,1.93-105.2,7.22-157.58,1.61-15.88,9.61-19.88,24.24-12.94C83.72,73.89,91.61,81,99.77,87.59c5.37,4.35,11,5.68,17.94,5.25,19.38-1.22,38.83-2,58.17.85a25.08,25.08,0,0,0,20.41-5.41c8.24-6.55,16.54-13.11,25.87-18.06,10.37-5.5,16.93-2.3,19.56,9.24,3.45,15.09,3.55,30.59,4.67,45.88,2.81,38.36,4,76.81,3.08,115.3C249.36,245.19,248.67,249.51,246,253.3Z"/><path class="cls-1" fill="#999" d="M246,253.3c0-23.9.71-47.84-.29-71.71-1.42-34.2-3.14-68.42-7.18-102.45-1.11-9.3-6.17-11.7-14.18-6.45-9.1,6-18.6,11.71-26.39,19.16-6.52,6.24-13.37,7.22-21,6a209.42,209.42,0,0,0-65-.07c-4.64.72-7.46-1.59-10.72-4.23C91.12,85.47,81.87,76.25,69.81,71c-11.31-4.92-15.16-2.17-16.37,9.86C47.71,138,46.62,195.29,45.9,252.61,17.65,227.76,2.91,195.76.39,159-5,79.23,46.52,15.11,125.17,1.85c84.13-14.19,166.34,55.28,167,140.75C292.56,186.27,278.06,223.38,246,253.3Z"/><path class="cls-2" fill="#fbfdfe" d="M194.41,137.09c11.55-.16,20.09,8.3,20,19.75-.13,10.95-8.24,19.06-19.24,19.23-11.52.18-20-8.23-19.86-19.74C175.38,145.33,183.43,137.25,194.41,137.09Z"/><path class="cls-3" fill="#fcfdfe" d="M115.11,156.09c.24,10.2-6.84,17.83-16.91,18.22-10.69.42-18.59-7.19-18.53-17.84C79.73,146.29,87,139,97.22,138.86S114.87,146,115.11,156.09Z"/></g></g></svg>
      </chat-screen>
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
    this.countDown();
  },
  data () {
    return {
      timeRemain: 0,
      chooseAnswer: false,
      answer: ''
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
