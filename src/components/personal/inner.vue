<template>
<div class="inner personal">
    <div class="personal-box">
        <password-box :todo="items[0]" :key="items[0].name"></password-box>
        <password-box :todo="items[1]" :key="items[1].name"></password-box>
        <div class="personal-button"><submit-button :todo='button' ></submit-button></div>
    </div>
</div>
</template>

<script>
import passwordBox from '../general/password-box'
import submitButton from '../general/submit-button'

export default{
   data (){
       return{
           items:[{
               width : 200,
               name : 'newpassword',
               value : '',
               title : '修改密码'
           },{
               width : 200,
               name : 'repassword',
               value : '',
               title : '确认密码'
           }
           ],
           button:{
               value :"保存设置",
               submit() {
                console.log('ass')
                }
           }
       }
   },
  components: {
    passwordBox,
    submitButton
  }
}
</script>

<style scoped>
.personal .personal-box{
    border:1px solid #dcdcdc;
    padding: 15px 20px
}
.personal .personal-box .personal-button{
    text-align: center;
    margin-top: 50px ;
}
</style>
