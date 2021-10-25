<template>
  <div id="chatScreen">
<!--    display message-->
<!--    TODO: Receive message btn for testing-->
<!--    <el-button style="position: absolute" @click="receive" id="sendBtn" icon="el-icon-arrow-right"/>-->
    <div id="displayMessages" ref="displayMessages">
      <message-tag v-for="(message, index) in messageList" :message="message.message" :key="index" :send="message.send"/>
    </div>
<!--    bottom-->
    <div id="bottom" ref="bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.21 293.17"><title>资源 68</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path d="M246,253.3c-55,53.43-148.48,53.11-200.06-.68a24.45,24.45,0,0,1-3.27-12.77c-.11-52.64,1.93-105.2,7.22-157.58,1.61-15.88,9.61-19.88,24.24-12.94C83.72,73.89,91.61,81,99.77,87.59c5.37,4.35,11,5.68,17.94,5.25,19.38-1.22,38.83-2,58.17.85a25.08,25.08,0,0,0,20.41-5.41c8.24-6.55,16.54-13.11,25.87-18.06,10.37-5.5,16.93-2.3,19.56,9.24,3.45,15.09,3.55,30.59,4.67,45.88,2.81,38.36,4,76.81,3.08,115.3C249.36,245.19,248.67,249.51,246,253.3Z"/><path class="cls-1" fill="#999" d="M246,253.3c0-23.9.71-47.84-.29-71.71-1.42-34.2-3.14-68.42-7.18-102.45-1.11-9.3-6.17-11.7-14.18-6.45-9.1,6-18.6,11.71-26.39,19.16-6.52,6.24-13.37,7.22-21,6a209.42,209.42,0,0,0-65-.07c-4.64.72-7.46-1.59-10.72-4.23C91.12,85.47,81.87,76.25,69.81,71c-11.31-4.92-15.16-2.17-16.37,9.86C47.71,138,46.62,195.29,45.9,252.61,17.65,227.76,2.91,195.76.39,159-5,79.23,46.52,15.11,125.17,1.85c84.13-14.19,166.34,55.28,167,140.75C292.56,186.27,278.06,223.38,246,253.3Z"/><path class="cls-2" fill="#fbfdfe" d="M194.41,137.09c11.55-.16,20.09,8.3,20,19.75-.13,10.95-8.24,19.06-19.24,19.23-11.52.18-20-8.23-19.86-19.74C175.38,145.33,183.43,137.25,194.41,137.09Z"/><path class="cls-3" fill="#fcfdfe" d="M115.11,156.09c.24,10.2-6.84,17.83-16.91,18.22-10.69.42-18.59-7.19-18.53-17.84C79.73,146.29,87,139,97.22,138.86S114.87,146,115.11,156.09Z"/></g></g></svg>
      <vs-input state="dark" v-model="inputMessage" placeholder="Type in your message"/>
      <el-button @click="sendMessage" id="sendBtn" icon="el-icon-arrow-right"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import MessageTag from "./message-tag";
export default {
  name: "chat-screen",
  components: {MessageTag},
  mounted() {
    this.$refs.displayMessages.style.height = 'calc(100% - ' + this.$refs.bottom.offsetHeight + 'px)';
  },
  data () {
    return {
      inputMessage: '',
      messageList: [{
        message: 'haha',
        send: true
      }]
    }
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.length > 0) {
        this.messageList.push({
          message: this.inputMessage,
          send: true
        });
      }
    },
    receive () {
      this.messageList.push({
        message: "hahahaha",
        send: false
      });
    }
  }
}
</script>

<style scoped lang="less">
#chatScreen {
  background-color: black;
  width: 100%;
  height: 100%;
  display: inline-block;
}
#displayMessages {
  overflow: auto;
}
#bottom {
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 2rem 2rem;
  position: absolute;
  bottom: 0;
  svg {
    height: 3rem;
    width: auto;
  }
  #sendBtn {
    font-size: 25px;
    padding: 3px 11px;
    height: 100%;
  }
}
/deep/ .vs-input-parent--state-dark .vs-input__label {
  color: white;
  font-size: 1rem;
  padding: 0 0.5rem;
}
/deep/ .vs-input-parent--state-dark .vs-input {
  border: 1px solid white;
  padding: 0 1.5rem;
  font-size: 1rem;
  color: white;
  width: 100%;
  height: 100%;
}
/deep/ .vs-input-content {
  height: 100%;
}
/deep/ .vs-input-parent {
  flex: 3;
  margin: 0 2rem;
  height: 100%;
}
</style>
