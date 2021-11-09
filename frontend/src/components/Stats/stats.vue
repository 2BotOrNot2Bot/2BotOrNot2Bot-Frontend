<!--@Description: Full screen window for showing Stats-->
<!--@author Tianyi(Lorena) Yan-->

<template>
  <div>
    <vs-dialog prevent-close v-model="showStats">
      <template>
        <stats-tag style="width: 30%" :rank="2" :stats="botList[1].correctPercentage" :name="botList[1].name" :bot-id="botList[1].botId"/>
        <stats-tag style="width: 40%" :rank="1" :stats="botList[0].correctPercentage" :name="botList[0].name" :bot-id="botList[0].botId"/>
        <stats-tag style="width: 25%" :rank="3" :stats="botList[2].correctPercentage" :name="botList[2].name" :bot-id="botList[2].botId"/>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import StatsTag from "./stats-tag";
export default {
  name: "stats",
  components: {StatsTag},
  data () {
    return {
      showStats: false,
      botList: [{
        name: "Diaglog Flow",
        correctPercentage: 21.3,
        botId: 0
      },{
        name: "Pandorabots",
        correctPercentage: 19.7,
        botId: 1
      },{
        name: "Rasa",
        correctPercentage: 15.9,
        botId: 2
      }]
    }
  }
}
</script>

<style scoped>

</style>
