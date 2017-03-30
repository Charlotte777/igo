<template>
<div class="commodity-item">
  <div style="width: 50%; padding-left: 20px; display: inline-flex; align-items: center;">
    <div style="margin-right: 12px;">
      <input type="checkbox" :checked="todo.checked" @click="check(todo,allChecked,list)"/>
    </div>
    <div style="margin-right: 12px;">
      <img :src="todo.img" />
    </div>
    <div>
      {{ todo.name }}
    </div>
  </div>
  <div style="width: 12.5%; text-align: center;">{{ todo[todo.display()[0].name] }}</div>
  <div style="width: 12.5%; text-align: center;">{{ todo[todo.display()[1].name] }}</div>
  <div style="width: 12.5%; text-align: center;">{{ todo[todo.display()[2].name] }}</div>
  <div style="width: 12.5%; text-align: center;" v-if="todo.display()[3].name == 'operation'">查看</div>
  <div style="width: 12.5%; text-align: center;" v-else-if="todo.display()[3].name == 'datetime'">{{ todo[todo.display()[3].name].start }}<br />{{ todo[todo.display()[3].name].end }}</div>
  <div style="width: 12.5%; text-align: center;" v-else>{{ todo[todo.display()[3].name] }}</div>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
export default {
  props: ['todo','allChecked','list'],
  methods : {
    check(i,c,l){
        i.checked = !i.checked;
        if(i.checked == false){
          Bus.$emit('allChecked', {
            checked : false
          })
        }else{
          for(var n in l){
            if(l[n].checked == false){
              return;
            }
          }
          Bus.$emit('allChecked',{
            checked : true
          })
        }
    }
  }
}
</script>

<style scoped>
.commodity-item {
  font-size: 0;
  padding: 8px 0;
}

.commodity-item>div {
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
}

.commodity-item img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
</style>
