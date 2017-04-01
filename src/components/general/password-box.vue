<template>
<div class="password-box">
  <label>{{ todo.title }}：</label>
  <input v-bind="{ type: isActive?'text':'password' }" :style="{ width: todo.width + 'px' }" :name="todo.name" :value="todo.value" v-model="todo.value" @input="password"/>
  <span class="eyes" :class="{'active':isActive}" v-if='eyes' @click="active">&#xe7c5;</span>
</div>
</template>

<script>
export default {
  data(){
    return{
      eyes: false,
      isActive: false
    }
  },
  props: ['todo'],
  methods : {
    password(){
      var s = this.todo.value;
      if(s == ''){
        this.eyes=false;
      }else{
        this.eyes=true;
      }
    },
    active(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.password-box {
  font-size: 14px;
  margin-bottom: 22px;
}

.password-box>input {
  padding: 3px 20px 3px 6px;
  color: #BBBBBB;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
}

.password-box>input:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}

.password-box:last-child {
  margin-bottom: 0;
}

.password-box .eyes{
  position:absolute;
  font-family:IconFont;
  margin-left: -20px;
  margin-top:5px;
  color: #BBBBBB;
  cursor: pointer;
  transition: color .3s ease;
}

.password-box .eyes.active{
  color: #656565;
}

</style>
