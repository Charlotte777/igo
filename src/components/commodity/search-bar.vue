<template>
<div class="search-bar">
  <text-box v-for="item in todo" v-if="item.type == 'text-box'" :todo="item" :key="item.name" style="flex-grow: 1; margin-bottom: 0;"></text-box>
  <range v-for="item in todo" v-if="item.type == 'range'" :todo="item" :key="item.name" style="flex-grow: 1; margin-bottom: 0;"></range>
  <choose-box v-for="item in todo" v-if="item.type == 'choose-box'" :todo="item" :key="item.name" style="flex-grow: 1; margin-bottom: 0;"></choose-box>
  <submit-button :todo="button"></submit-button>
</div>
</template>

<script>
import textBox from '../general/text-box'
import chooseBox from '../general/choose-box'
import range from '../general/range'
import submitButton from '../general/submit-button'
export default {
  data:function(){
    return {
      button:{
        value:'搜索',
        submit:function(){
          console.log('ass we can')
        }
      }
    }
  },
  props: ['todo'],
  components: {
    textBox,
    chooseBox,
    range,
    submitButton
  }
}
</script>

<style scoped>
.search-bar {
  font-size: 14px;
  border: 1px solid #DDDDDD;
  padding: 15px 20px;
  margin-bottom: 10px;
  display: flex;
}
</style>
