<template>
<div class="inner fresh">
  <search-bar :todo="searchItems"></search-bar>
  <commodity-list :todo="commodityItems"></commodity-list>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import searchBar from '../general/search-bar'
import commodityList from '../general/commodity-list'
export default {
  data() {
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
      }],
      commodityItems: {
        display: [{
          name: 'originalPrice',
          title: '原价'
        }, {
          name: 'salePrice',
          title: '促销价'
        }, {
          name: 'amount',
          title: '数量'
        }, {
          name: 'datetime',
          title: '时间'
        }],
        summary:'',
        button: [{
          value: '取消促销',
          support() {
            console.log('ass')
          }
        }, {
          value: '添加商品',
          support() {
            console.log('ass')
          }
        }, {
          value: '编辑',
          support() {
            console.log('ass')
          }
        }],
        commodities: [{
          id: 1,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 2,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 3,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 4,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 5,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 6,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 7,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 8,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 9,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
          display: '',
          checked:false
        },{
          id: 10,
          name: '鲜冻黄花鱼 1条 500g±50g 大黄鱼 海鲜水产春节年货 东海渔场 鲜冻直达',
          img: '/static/images/doge.jpg',
          originalPrice: '69元',
          salePrice: '39.9元',
          amount: '30',
          datetime: {
            start: '2016/12/29 10:00',
            end: '2016/12/31 18:00'
          },
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
  beforeMount(){
    var display = this.commodityItems.display;
    var commodities = this.commodityItems.commodities;
    for(var i in commodities){
      commodities[i].display = function(){
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

</style>
