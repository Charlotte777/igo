<template>
<div style="width: 100%; display: inline-flex; flex-direction: column;">
  <div style="margin-bottom: 12px;">
    <span class="return">&nbsp;返回</span>
  </div>
  <div class="form">
    <div class="header">
      商品属性
      <div style="flex-grow: 1; text-align:right;">
        <submit-button :todo="button" style="padding: 3px 16px;"></submit-button>
      </div>
    </div>
    <div class="row">
      <div>商品名称：{{ commodityInfo.commodityName }}</div>
    </div>
    <div class="row">
      <div>商品净重：{{ commodityInfo.commodityWeigh }}</div>
      <div>包装：{{ commodityInfo.package }}</div>
      <div>类型：{{ commodityInfo.type }}</div>
      <div>保质期：{{ commodityInfo.shelfLife }}</div>
      <div>进口/国产：{{ commodityInfo.import }}</div>
    </div>
    <div class="row">
      <div>进货：</div>
      <div>库存：</div>
      <div>销售量：</div>
      <div>价格：</div>
      <div>货号：</div>
    </div>
  </div>
</div>
</template>

<script>
import submitButton from '../general/submit-button'
export default {
  data() {
    return {
      button: {
        value: '编辑',
        submit() {
          console.log('ass');
        }
      },
      commodityInfo: {
        commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
        commodityWeigh: '330g',
        package: '礼盒装',
        type: '食品',
        shelfLife: '730',
        import: '进口'
      }
    }
  },
  components: {
    submitButton
  }
}
</script>

<style scoped>
.return {
  display: inline-flex;
  align-items: center;
}

.return:before {
  content: '\f0292';
  font-family: IconFont;
  font-size: 18px;
}

.form {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #DDDDDD;
}

.form>div {
  display: inline-flex;
  align-items: baseline;
  padding: 8px 16px;
  border-bottom: 1px solid #DDDDDD;
}

.form>div:last-child {
  border-bottom: 0;
}

.form .header {
  background-color: #E5E5E5;
}

.form .header>div,
.form .row>div {
  flex-grow: 1;
}
</style>
