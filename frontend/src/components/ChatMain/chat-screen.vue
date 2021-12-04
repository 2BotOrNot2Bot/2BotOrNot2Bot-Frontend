<!--@Description: Independent, main window for chatting-->
<!--@author Tianyi(Lorena) Yan-->

<template>
  <div id="chatScreen" ref="chatScreen">
<!--    display message-->
    <div id="displayMessages" ref="displayMessages">
      <message-tag v-for="(message, index) in messageList" :message="message.message" :key="index" :send="message.send" :self-avatar-id="selfAvatarId" :chatter-avatar-id="chatterAvatarId"/>
    </div>
<!--    bottom-->
    <div id="bottom" ref="bottom">
      <svg v-if="selfAvatarId <= 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.21 293.17"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path d="M246,253.3c-55,53.43-148.48,53.11-200.06-.68a24.45,24.45,0,0,1-3.27-12.77c-.11-52.64,1.93-105.2,7.22-157.58,1.61-15.88,9.61-19.88,24.24-12.94C83.72,73.89,91.61,81,99.77,87.59c5.37,4.35,11,5.68,17.94,5.25,19.38-1.22,38.83-2,58.17.85a25.08,25.08,0,0,0,20.41-5.41c8.24-6.55,16.54-13.11,25.87-18.06,10.37-5.5,16.93-2.3,19.56,9.24,3.45,15.09,3.55,30.59,4.67,45.88,2.81,38.36,4,76.81,3.08,115.3C249.36,245.19,248.67,249.51,246,253.3Z"/><path class="cls-1" fill="#999" d="M246,253.3c0-23.9.71-47.84-.29-71.71-1.42-34.2-3.14-68.42-7.18-102.45-1.11-9.3-6.17-11.7-14.18-6.45-9.1,6-18.6,11.71-26.39,19.16-6.52,6.24-13.37,7.22-21,6a209.42,209.42,0,0,0-65-.07c-4.64.72-7.46-1.59-10.72-4.23C91.12,85.47,81.87,76.25,69.81,71c-11.31-4.92-15.16-2.17-16.37,9.86C47.71,138,46.62,195.29,45.9,252.61,17.65,227.76,2.91,195.76.39,159-5,79.23,46.52,15.11,125.17,1.85c84.13-14.19,166.34,55.28,167,140.75C292.56,186.27,278.06,223.38,246,253.3Z"/><path class="cls-2" fill="#fbfdfe" d="M194.41,137.09c11.55-.16,20.09,8.3,20,19.75-.13,10.95-8.24,19.06-19.24,19.23-11.52.18-20-8.23-19.86-19.74C175.38,145.33,183.43,137.25,194.41,137.09Z"/><path class="cls-3" fill="#fcfdfe" d="M115.11,156.09c.24,10.2-6.84,17.83-16.91,18.22-10.69.42-18.59-7.19-18.53-17.84C79.73,146.29,87,139,97.22,138.86S114.87,146,115.11,156.09Z"/></g></g></svg>
      <svg v-else-if="selfAvatarId === 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.11 263.1"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path class="cls-1" fill="#fff" d="M234.29,214.38c-19.7,21.59-42.36,38.59-71.53,45-46.15,10.09-87,.06-121.52-32.94-4.16-4-8.27-8-12.41-12-2.11-12,1-23.63,2.34-35.39,1.6-3.67,5.16-4.94,8.31-6.67A106.94,106.94,0,0,0,79,135.55c5.06-8,9.78-16.23,16.41-23.09,10.57-10.95,19.57-9.83,26.89,3.27a130.35,130.35,0,0,1,5.5,11.87c.83,1.92,1.45,4.55,4.22,4.22,1.93-.24,2.6-2.34,3.29-4,2.23-5.38,4.38-10.83,7.72-15.63,5.81-8.32,13.54-9.33,21.43-2.88,5.72,4.68,9.86,10.72,13.6,17,12.2,20.36,27.53,37.45,49.25,48.05a9,9,0,0,1,4.58,4.51C233.35,190.63,236.41,202.33,234.29,214.38Z"/><path class="cls-2" fill="#999" d="M234.29,214.38c-4-11.91-3.37-24.38-4.42-36.65-7-11.52-5-24.79-6.88-37.24C218.57,112,213.63,83.63,202,57c-.73-1.67-1.36-3.39-2.15-5-6.66-13.82-11.83-14.45-22-2.52a89.46,89.46,0,0,0-11.76,17.09c-2.93,5.71-7.08,7.59-13.5,5.57a68.39,68.39,0,0,0-42,0c-6.43,2-10.57.1-13.48-5.6a88,88,0,0,0-10.36-15.4C75.2,36.83,69.65,37.44,62.45,53.91A244.35,244.35,0,0,0,49.27,92.15a434.16,434.16,0,0,0-11.18,67.9c-.55,6.22-1,12.39-4.84,17.68C32.16,190,33,202.48,28.83,214.37-14.51,158.3-5.95,86.83,34.32,42.59,70,3.42,128-10.73,178.58,8.56c50.35,19.18,83.93,67.65,84.52,120.52C263.45,161.1,253.22,189.1,234.29,214.38Z"/><path d="M131.88,170c6.57.9,14.89-1.67,16.3,8.41.74,5.3-11.37,18.28-16.54,18.33s-17.4-12.86-16.68-18.17C116.43,167.77,125.41,171.16,131.88,170Z"/></g></g></svg>
      <svg v-else-if="selfAvatarId === 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.69 285.31"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path d="M260.22,223.36c-51.91,82.6-183.48,82.6-234.83,0-1.92-5.14-.59-10,.73-15.07,7-26.89,17.52-52.49,29.2-77.6,3-6.45,3.57-11.4-1.76-17.08-10.32-11-11.79-24.38-5.67-37.49,6.2-13.29,17-21.58,32.66-21.79s27.23,7.62,33,21c4.58,10.64,10.93,13.21,21,12.15a52.74,52.74,0,0,1,10.66,0c13,1.33,22-1,28.85-15.12,9.15-19,34.07-23.57,50-12.32,19,13.38,22.64,35.72,7.93,53.52-4.92,6-4.71,10.66-1.71,17.11,11.68,25.11,22.17,50.71,29.2,77.6C260.81,213.34,262.14,218.22,260.22,223.36Z"/><path class="cls-1" fill="#999" d="M260.22,223.36a465.36,465.36,0,0,0-35-95.49c-2.71-5.45-2.75-8.51,1.9-13,11.64-11.16,14.1-25.69,7.73-38.92-6-12.47-18.7-19.64-33-18.65-14.11,1-25.9,10.28-29.56,25-1.51,6.1-3.36,8.42-9.84,8.15-13-.53-26.12-.52-39.16,0-6.45.26-8.37-2-9.9-8.14-3.68-14.73-15.59-24.14-29.53-25-14.49-.92-27,6.14-33,18.66-6.4,13.32-4,27.74,7.72,38.94,4.7,4.49,4.55,7.53,1.86,12.93a468,468,0,0,0-35,95.5C-22.16,157.84-3.12,52.73,84.19,12.6,140-13,208,1.39,248.86,47.3c41.88,47.05,48.78,115.53,16.92,168.42C264.16,218.41,262.09,220.82,260.22,223.36Z"/><path class="cls-2" fill="#fefefe" d="M178.54,169.92c.18,24.34-15.14,39.93-36.15,39.76-20.38-.16-35.81-15.64-35.22-36.42.55-19.41,7.13-37.17,18.61-52.74,10.7-14.51,23-14.58,33.84-.3C171.33,135.7,176.94,153.64,178.54,169.92Z"/><path d="M142.38,169.16c7.46.79,18.07-1.41,20.87,4.41,3.56,7.42-7.64,11-11.61,16.79-6.28,9.21-12.42,7.64-18.14-.51-3.87-5.52-14.59-8.9-11.37-15.88C125.11,167.52,135.42,170.29,142.38,169.16Z"/></g></g></svg>
      <svg v-else-if="selfAvatarId === 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.47 120.14"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path class="cls-1" fill="#999" d="M109.33,25.11c25.18,36.33,5.41,85-36.65,93.56-25.14,5.1-46.38-3.11-61.18-24.08-14.91-21.14-15-43.7-2.18-66.22.66-1.15,1.4-2.26,2.1-3.39a2.25,2.25,0,0,1,2.92,1.94c.65,3.77,2.92,7,3.65,10.69.26,3.09-.84,5.9-1.82,8.72A46.43,46.43,0,0,0,14.77,71c4.09,20.91,25.51,29.1,42.42,16.27a13.32,13.32,0,0,1,2-1.49,3.28,3.28,0,0,1,2.31,0c7.57,6.2,15.85,9.75,25.82,6.76C98.93,89,106.17,78.78,106.85,65.13c.35-7-.21-14-2.84-20.59a14.62,14.62,0,0,1-1.19-6.82c.6-3.77,3-6.95,3.6-10.73A2.15,2.15,0,0,1,109.33,25.11Z"/><path class="cls-2" fill="#fff" d="M16.45,37.93c-3.62-3.56-3.64-8.52-5-12.95C24.78,8.6,41.45-.89,63.17.07a56.56,56.56,0,0,1,37.28,15.64c3.15,2.93,5.93,6.26,8.88,9.4-1.28,4.43-1.49,9.27-5,12.82-1.58,3.47-4.43,4.58-8.06,4.54s-7.29.18-10.93,0c-7.88-.41-15.16,1.19-21.55,6-2.09,1.56-4.2,1.94-6.37.26C50.46,43.36,42.47,42,33.94,42.47c-3.13.17-6.29,0-9.44,0C20.88,42.52,18,41.4,16.45,37.93Z"/><path class="cls-3" fill="#818181" d="M16.45,37.93c4.75,2.65,10,2.22,15.09,2.07,9.74-.28,19.37-.34,27.28,6.76,1.5,1.35,2.71.37,3.93-.6,6-4.81,12.89-6.29,20.5-6.24,7,.06,14.32,1.47,21.07-2,5.22,12.31,6.88,24.86,3.08,37.95-5.19,17.85-27.23,26-42.39,15.54-1.68-1.16-3.25-2.34-3.67-4.5-.41-.73-.94-1.6-.54-2.31,2.45-4.37,3-9.69,6.88-13.33C70.37,70.4,71.46,72.54,73,74c4.73,4.68,11.76,4.33,15.13-.69a9.59,9.59,0,0,0-1.75-12.6,9.78,9.78,0,0,0-13.11,1c-1.48,1.49-2,3.93-4.48,4.43-.16,0-.38.14-.48.06-5.34-4.08-10.68-3.46-16,0-2.1-.29-2.79-2.14-3.92-3.52-3.81-4.62-9.93-5.39-14.1-1.8a9.62,9.62,0,0,0-.77,13.44c3.65,4,9.94,4,14.2-.14,1.51-1.47,2.54-3.67,5.25-3,3.56,4.65,6.82,9.44,6.52,15.7-3.51,6.82-10.1,8.43-16.72,8.92C25.39,97.11,12.29,84,11.35,65.62A63.71,63.71,0,0,1,16.45,37.93Z"/><path class="cls-4" fill="#fefefe" d="M52.43,65c5.23-6.83,10.64-6.83,15.92,0,2.87,2.24,2.61,4.55.16,6.91-1.4,5.47-3.44,10.63-7.17,15H59.42c-3.7-4.37-5.76-9.52-7.17-15C49.81,69.58,49.54,67.27,52.43,65Z"/><path d="M52.43,65l-.18,6.9c-2.12,3.68-4.66,6.86-9.13,7.81A12.05,12.05,0,1,1,50.84,62C51.43,63,51.9,64,52.43,65Z"/><path d="M68.51,71.94,68.35,65c2-4.7,5-8.23,10.36-8.92a11.86,11.86,0,0,1,13.14,8.25A12.07,12.07,0,0,1,70.41,74.85C69.73,73.91,69.14,72.91,68.51,71.94Z"/></g></g></svg>
      <svg v-else-if="selfAvatarId >= 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.37 120.16"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><path class="cls-1" fill="#fdfefe" d="M39.58,115.81a51.85,51.85,0,0,0,41.56,0c12.13-3.59,21.28-11.26,28.36-21.4a60,60,0,0,0-10.16-80c-26.59-23-68.82-18-88.25,11.37-14.53,21.92-14.7,44.66-1,67C16.94,103.87,26.71,112,39.58,115.81Z"/><path class="cls-2" fill="#999" d="M39.58,115.81c-12.87-3.78-22.64-11.94-29.46-23-13.73-22.33-13.56-45.07,1-67C30.52-3.54,72.75-8.58,99.34,14.42a60,60,0,0,1,10.16,80c-7.08,10.14-16.23,17.81-28.36,21.4.07-4.86,2.39-8.9,4.78-12.89,5.29-8.81,10.58-17.63,16-26.38,3.31-5.36,4.92-11.25,2.77-17.1-3-8.12-8.28-15-14.39-21.1-15.55-21.86-44.22-21.92-59.84,0-4.65,3.44-6.88,8.8-10.3,13.2-6.51,8.37-6.32,17-.8,25.85C24.68,86,29.86,94.66,35.05,103.35,37.35,107.19,39.5,111.13,39.58,115.81Z"/><path class="cls-3" fill="#fff" d="M90.27,38.35c6.11,6.14,11.4,13,14.39,21.1,2.15,5.85.54,11.74-2.77,17.1-5.39,8.75-10.68,17.57-16,26.38-2.39,4-4.71,8-4.78,12.89a51.85,51.85,0,0,1-41.56,0c-.08-4.68-2.23-8.62-4.53-12.46C29.86,94.66,24.68,86,19.33,77.4c-5.52-8.86-5.71-17.48.8-25.85,3.42-4.4,5.65-9.76,10.3-13.2,2.41-.28,4,1.14,5.68,2.58,4.74,4.14,9.46,8.31,14.29,12.35,6.35,5.3,13.58,5.29,19.89,0,4.83-4,9.56-8.21,14.3-12.35C86.24,39.49,87.86,38.07,90.27,38.35Z"/><path d="M90.27,38.35c-2.41-.28-4,1.14-5.68,2.58-4.74,4.14-9.47,8.31-14.3,12.35-6.31,5.29-13.54,5.3-19.89,0-4.83-4-9.55-8.21-14.29-12.35-1.65-1.44-3.27-2.86-5.68-2.58C46.05,16.43,74.72,16.49,90.27,38.35ZM53.19,40.29c0-3.35-3.78-8.06-6.37-7.8a4,4,0,0,0-3.94,4.25C42.83,39.29,48,43.08,51,42.87A2.14,2.14,0,0,0,53.19,40.29Zm15.72,2.54c4.27.06,9.17-3.78,9-6.32s-1.79-4.24-4.18-4C69.5,33,68.57,36.73,67.6,40,67.08,41.79,68.14,42.81,68.91,42.83Z"/><path class="cls-3" fill="#fff" d="M53.2,40.3A2.14,2.14,0,0,1,51,42.87c-3,.21-8.12-3.58-8.07-6.13a4,4,0,0,1,3.94-4.25C49.41,32.23,53.16,36.94,53.2,40.3Z"/><path class="cls-3" fill="#fff" d="M68.91,42.83c-.77,0-1.83-1-1.31-2.8,1-3.3,1.9-7,6.09-7.49,2.39-.27,4,1.53,4.18,4S73.18,42.89,68.91,42.83Z"/></g></g></svg>
      <vs-input ref="inputBox" state="dark" v-model="inputMessage" :placeholder="placeholder"/>
      <el-button @click="sendMessage" id="sendBtn" icon="el-icon-arrow-right" :disabled="!canSend"/>
    </div>
  </div>
</template>

<script>
import MessageTag from "./message-tag";
import {getUid, isLogin} from "../../config/authentication";
import api from "../../config/api";
import getRandomMessage from "../../config/randomMessageList";
export default {
  name: "chat-screen",
  components: {MessageTag},
  mounted() {
    this.$refs.displayMessages.style.height = 'calc(100% - ' + this.$refs.bottom.offsetHeight + 'px - 3rem)';
    this.$refs.bottom.style.width = 'calc(50% - 4rem)';
    this.chatterAvatarId = Math.floor(Math.random() * 5);
    if (isLogin()) {
      this.uid = getUid();
    }
    let that = this;
    this.$nextTick(function() {
      this.$on('startChat', function(info) {
        that.startChat(info);
      });
      this.$on('stopChat', function() {
        that.stopChat();
      });
    });
  },
  props: {
    selfAvatarId: Number,
    isRobot: Boolean
  },
  data () {
    return {
      inputMessage: '',
      messageList: [],
      chatterAvatarId: 0,
      canSend: true,  // Whether the user should start the conversation first, and whether the user can send a new message now
      uid: 0,
      chatterUid: null,    // user id of the chatter
      websocket: null,
      chatBotName: null,
      placeholder: ""
    }
  },
  updated(){
    // Automatically scroll down when sending new messages
    let ele = this.$refs.displayMessages;
    ele.scrollTop = ele.scrollHeight;
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim().length === 0) {
        this.$message.error("Please enter your message.");
      } else {
        this.messageList.push({
          message: this.inputMessage,
          send: true
        });
        if (this.isRobot) {   // Send message to the chat bot
          this.$axios.patch(api.chatWithBot, {
            'input': this.inputMessage,
            'chatbot': this.chatBotName,
            'uid': this.uid
          }).then(newMessage => {
            // Delay for a random amount of time
            setTimeout(() => {
              this.messageList.push({
                message: newMessage,
                send: false
              })
              this.canSend = true;
              this.placeholder = "Please enter your message";
            }, (Math.floor(Math.random() * 5)) * 1000);
          }).catch(err => {
            console.log(err);
            this.$message.error("Error. Please try again.");
          })
        } else {  // Send message to human user
          // Use web socket to send message to the server
          this.websocket.send(this.inputMessage);
        }
        this.inputMessage = '';   // Clear input box
        // Disable the input box and send button until a new message is received
        this.canSend = false;
        this.placeholder = "Please wait for receiving a new message :)";
      }
    },
    receive () {
      // Receive message from the server
      let _this = this;
      this.websocket.onmessage = function(e){
        let resData = JSON.parse(e.data)
        _this.messageList.push({
          message: resData.newMessage,
          send: false
        });
        // Enable the input box and send button after receiving a new message
        _this.canSend = true;
        this.placeholder = "Please enter your message";
      }
    },
    startChat(info) {
      // Who has a smaller uid will start the conversation first
      this.chatterUid = info.chatterId;
      this.chatBotName = info.chatBotName;
      console.log(this.chatBotName);// TODO haha
      this.uid = info.uid;
      this.canSend = this.uid < this.chatterUid;
      // Initialize placeholder for the input box
      if (this.canSend) {
        this.placeholder = 'Please enter your first message and start the conversation!'
      } else {
        this.placeholder = 'Please wait for receiving your first message!'
      }
      if (!this.isRobot) {    // If this chatting window is for user-to-user chat, then initialize web socket for chatting
        this.initWebSocket(this.chatterUid);
      } else {  // Else, call chat bot API and start chatting
        if (this.isRobot && !this.canSend) {
          setTimeout(() => {
            this.messageList.push({
              message: getRandomMessage(),
              send: false
            });
            this.canSend = true;
            this.placeholder = "Please enter your message";
          }, 1000);
        }
      }
    },
    // Initialize web socket, connect to the server, and start chatting
    initWebSocket(chatterUid) {
      let _this = this;
      if('WebSocket' in window){
        _this.websocket = new WebSocket("ws://localhost:8080/api/chat/" + _this.uid + "/" + chatterUid);
      } else{
        _this.$message.error("Your browser does not support websocket. Please try with another web browser.")
        setTimeout(() => {
          this.$router.push("/pc/home");
        }, 2000);
      }

      // Function for receiving new messages
      this.websocket.onmessage = function(e){
        _this.messageList.push({
          message: e.data,
          send: false
        });
        // Enable the input box and send button after receiving a new message
        _this.canSend = true;
        this.placeholder = "Please enter your message";
      }

      // Function for handling connection errors
      _this.websocket.onerror = function(){
        // setMessageInnerHTML("error");
        _this.$message.error("Connection error. Please try again later.")
      };

      // Successfully connected to the server
      _this.websocket.onopen = function(event){
        _this.$message.success("Successfully paired up!")
      }

      // Function for closing websocket
      _this.websocket.onclose = function(){
        _this.websocket.close();
      }

      // Close the socket if the browser window is closed
      window.onbeforeunload = function(){
        _this.websocket.close();
      }
    },
    stopChat() {
      // Close the websocket
      let _this = this;
      if (this.websocket !== null) {
        _this.websocket.close();
      }
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
  padding: 0 2rem;
}
#bottom {
  display: flex;
  height: 3rem;
  margin: 1rem 2rem 2rem;
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
  flex: 2;
  margin: 0 2rem;
  height: 100%;
}
</style>
