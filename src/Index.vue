<template>
<div id="main" v-cloak>
  <header class="header">
    <div class="title">爱GO后台管理系统</div>
    <div class="panel">
      <div class="datetime">{{ datetime }}</div>
      <div class="inner">你好！ {{ username }}</div>
      <div class="dropdown" :class="{'isOpen':isOpen}" >
          <span class="icon arrow" @click='dropdown'></span>
          <ul v-if='isOpen'>
            <li>
              <span class="icon">&#xe638;</span><span>消息</span>
            </li>
            <li>
              <span class="icon">&#xe694;</span><span>个人中心</span>
            </li>
          </ul>
      </div>
      <div class="user-avatar">
        <img :src="src" />
      </div>
      <span class="quit">&#xe601;</span>
    </div>
  </header>
  <div class="container">
    <menu-list></menu-list>
    <div class="content">
      <div class="position">
        当前位置：主页{{ position }}
      </div>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Bus from '@/assets/eventBus'
import menuList from '@/components/index/menu-list'
export default {
  data() {
    return {
      username: '用户',
      datetime: '1997年12月30日 19:58:11',
      src: '/static/images/doge.jpg',
      isOpen: false,
      position: ''
    }
  },
  components: {
    menuList
  },
  methods:{
    dropdown(){
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    let self = this;
    // axios.post('http://10.3.13.168:3331/api/system/SelectuserID',{
    //   id:'c25a934a-2e00-4ca6-a097-e2bdf26802f1'
    // }).then(function(res){
    //   let r = res.data.dataResultObj[0];
    //   self.username = r.name;
    // });
    Bus.$on("changePosition", function(obj) {
      self.position = obj.position;
    });
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}

.main {
  color: #656565;
}

header.header {
  width: 100%;
  padding: 15px 30px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #F1675F;
}

header.header .title {
  font-size: 18px;
  line-height: 18px;
  float: left;
}

header.header .panel {
  right: 0;
  text-align: right;
  position: relative;
}

header.header .panel>div {
  display: inline-block;
}

header.header .panel .datetime {
  margin-right: 15px;
}

header.header .panel .inner {
  margin-right: 30px;
}


header.header .panel .user-avatar {
  width: 50px;
  height: 50px;
  position: absolute;
  margin-top: -16px;
}

header.header .panel .user-avatar img {
  width: 100%;
  height: 100%;
}

header.header .panel .quit {
  margin-left: 80px;
  font-family: IconFont;
  font-size: 22px;
  line-height: 18px;
  float: right;
}

header.header .panel .dropdown .icon {
  font-size: 20px;
  font-family: IconFont;
  margin-right: 10px;
  cursor: pointer;
}

.container {
  display: flex;
  margin: 10px;
  font-size: 14px;
  color: #656565;
  align-items: flex-start;
}

.container .content {
  flex-grow: 1;
}

.container .content .position {
  padding: 15px 20px;
  border: 1px solid #DDDDDD;
}

.container .content .position:before {
  content: '\e63c';
  font-family: IconFont;
  font-size: 24px;
  margin-top: -6px;
  margin-right: 10px;
  float: left;
}

.container .content .inner {
  margin-top: 10px;
}
header.header .panel .dropdown{
  position:relative;
}
header.header .panel .dropdown .icon.arrow:before{
  content:'\e602'
}
header.header .panel .dropdown.isOpen .icon.arrow:before{
  content:'\e502'
}
header.header .panel .dropdown ul{
    background: #f1675f none repeat scroll 0 0;
    margin: 5px 0 0 -115px;
    padding: 10px 10px 5px;
    position: absolute;
    text-align: left;
    width: 135px;
}
header.header .panel .dropdown ul li{
  margin:5px 0;
  cursor:pointer
}
</style>
