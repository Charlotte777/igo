<template>
<div class="inner account-manage">
  <div class="account-box">
      <div class="account-box-title">
          <div class="account-box-title-span"><span>账号</span></div> 
          <div class="account-box-title-span"><span>上次登录IP</span></div>
          <div class="account-box-title-span"><span>上次登录时间</span></div>
          <div class="account-box-title-span"><span>操作</span></div>
      </div>
      <div class="account-box-button">
          <div class="a-checkbox">
              <input id="select-all" type="checkbox" /><label>全选</label>
          </div>
          <button class="disabled">停用</button>
          <button class="enabled">取消停用</button>
          <button class="delete">删除</button>
      </div>
      <div class="account-box-content">
         <row v-for="row in list" :todo="row" :key="row.name"></row>
      </div>
  </div>
</div>
</template>

<script>
import row from '@/components/users/row'
export default{
    data: function(){
        return{
            list:[{
                name: 'Ben',
                IP: '10.31.26.174',
                datetime: '2016-1-3 13：51：23'
            },{
                name: 'Ben',
                IP: '10.31.26.174',
                datetime: '2016-1-3 13：51：23'
            },{
                name: 'Ben',
                IP: '10.31.26.174',
                datetime: '2016-1-3 13：51：23'
            }]
        }
    },
    components: {
        row
    }
}

</script>

<style scoped>
.account-manage .account-box{
    border: 1px solid #dcdcdc;
    padding: 10px 20px;
    border-top: 5px solid #F1675F
}
.account-manage .account-box .account-box-title .account-box-title-span{
    display: inline-block;
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;
    width: calc(25% - 5px);
}
.account-manage .account-box .account-box-button, .account-manage .account-box .account-box-content, .account-manage .account-box .account-box-title{
    margin:15px 0
}
.account-manage .account-box .account-box-title{
    margin-left: 17px
}
.account-manage .account-box .account-box-button{
    border: 1px solid #cdcdcd;
    padding: 10px 0;
    border-right: none;
    border-left: none
}
.account-manage .account-box .account-box-button .a-checkbox{
    display: inline-block
}
.account-manage .account-box .account-box-button button{
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #dcdcdc;
    color: #666666;
    margin: 0 25px;
    padding: 3px 30px;
}
</style>
