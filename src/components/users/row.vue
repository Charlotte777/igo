<template>
    <div class="a-list">
        <input type="checkbox" />
        <div id="select-all" class="account-name">{{ todo.name }}</div>
        <div class="last-IP">{{ todo.IP }}</div>
        <div class="last-times">{{ todo.datetime }}</div>
        <div class="handle">查看</div>
     </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.a-list div{
    display: inline-block;
    margin: 10px 0;
    text-align: center;
    width: calc(25% - 10px);
}
</style>
