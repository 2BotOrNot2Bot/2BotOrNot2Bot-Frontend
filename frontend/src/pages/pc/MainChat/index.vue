<template>
  <div>
    <bot-nav-bar>
      <span>Time</span>
    </bot-nav-bar>
    <div id="body">
      <chat-screen class="chat"/>
      <chat-screen class="chat"/>
    </div>
  </div>
</template>

<script>
import BotNavBar from "@/components/bot-nav-bar";
import ChatScreen from "@/components/ChatMain/chat-screen";
export default {
  name: "index",
  components: {ChatScreen, BotNavBar}
}
</script>

<style scoped>
.chat {
  width: 50%;
}
#body {
  height: 100%;
  width: 100%;
}
</style>
