<template>
  <router-view v-if="needReset" style="width: 100%; height: 100%"/>
</template>

<script>
export default {
  name: "pcIndex",
  data () {
    return {
      needReset: true   // For reloading
    }
  },
  provide(){
    return{
      reload: this.reload
    }
  },
  methods:{
    reload(){
      this.needReset = false
      this.$nextTick(()=>{
        this.needReset = true
      })
    }
  }
}
</script>

<style scoped>

</style>
