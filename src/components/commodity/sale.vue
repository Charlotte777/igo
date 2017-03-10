<template>
<div class="inner sale">
  <search-bar :todo="searchItems"></search-bar>
</div>
</template>

<script>
import searchBar from './search-bar'
export default {
  data: function() {
    return {
      searchItems: [{
        type: 'text-box',
        name: 'name',
        title: '商品名称',
        width: 170,
        value: ''
      }, {
        type: 'range',
        name: 'sales',
        title: '总销量',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'reserve',
        title: '库存',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'price',
        title: '价格',
        minValue: '',
        maxValue: ''
      }, {
        type: 'choose-box',
        name: 'sort',
        title: '商品分类',
        width: 170,
        items: [{
          value: 'ass'
        }, {
          value: 'we'
        }, {
          value: 'can'
        }]
      }]
    }
  },
  components: {
    searchBar
  }
}
</script>

<style scoped>

</style>
