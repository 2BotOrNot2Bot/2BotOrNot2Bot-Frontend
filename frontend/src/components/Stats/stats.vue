<!--@Description: Full screen window for showing Stats-->
<!--@author Tianyi(Lorena) Yan-->

<template>
  <div>
    <vs-dialog prevent-close v-model="showStats">
      <template v-if="botList.length > 0" style="width: 30rem">
        <stats-tag style="width: 30%" :rank="2" :stats="(botList[1].percentage * 100)" :name="botList[1].name"/>
        <stats-tag style="width: 40%" :rank="1" :stats="(botList[0].percentage * 100)" :name="botList[0].name"/>
        <stats-tag style="width: 25%" :rank="3" :stats="(botList[2].percentage * 100)" :name="botList[2].name"/>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import StatsTag from "./stats-tag";
import api from "../../config/api";
export default {
  name: "stats",
  components: {StatsTag},
  mounted() {
    this.$axios.get(api.getChatBotStats).then(botList => {
      this.botList = botList;
    }).catch(err => {
      console.log(err);
      // this.$message.error("Error getting chat bot statistics. Please try again later.");
    })
  },
  data () {
    return {
      showStats: false,
      botList: []
    }
  }
}
</script>

<style scoped>
/deep/.vs-dialog {
  width: 30rem;
}
</style>
