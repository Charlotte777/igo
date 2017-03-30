<template>
<div class="inner" :class="{'appraise':!details,'appraise-details':details}">
  <search-bar :todo="searchItems" v-if="!details"></search-bar>
  <commodity-list :todo="commodityItems" v-if="!details"></commodity-list>
  <router-view v-if="details"></router-view>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import searchBar from '../general/search-bar'
import commodityList from '../general/commodity-list'
import Router from '@/router'
export default {
  data() {
    return {
      details: Router.app.$route.path.replace('/', '').split('/')[2] ? true : false,
      searchItems: [{
        type: 'text-box',
        name: 'name',
        title: '商品名称',
        width: 170,
        value: ''
      }, {
        type: 'range',
        name: 'positive',
        title: '好评',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'neutral',
        title: '中评',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'negative',
        title: '差评',
        minValue: '',
        maxValue: ''
      }],
      commodityItems: {
        display: [{
          name: 'positive',
          title: '好评'
        }, {
          name: 'neutral',
          title: '中评'
        }, {
          name: 'negative',
          title: '差评'
        }, {
          name: 'operation',
          title: '操作'
        }],
        summary: '',
        button: '',
        commodities: [{
          id: 1,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 2,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 3,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 4,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 5,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 6,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 7,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 8,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 9,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }, {
          id: 10,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          positive: '158',
          neutral: '1',
          negative: '2',
          display: '',
          checked:false
        }],
        allChecked:false
      }
    }
  },
  components: {
    searchBar,
    commodityList
  },
  watch: {
    '$route' (to, from) {
      this.details = Router.app.$route.path.replace('/', '').split('/')[2] ? true : false;
    }
  },
  beforeMount() {
    var display = this.commodityItems.display;
    var commodities = this.commodityItems.commodities;
    for (var i in commodities) {
      commodities[i].display = function() {
        return display;
      }
    }
  },
  mounted(){
    var self = this.commodityItems;
    Bus.$on('allChecked',function(c){
      self.allChecked = c.checked
    })
  }
}
</script>

<style scoped>
.appraise-details {
  border: 1px solid #DDDDDD;
  padding: 15px 20px;
}
</style>
