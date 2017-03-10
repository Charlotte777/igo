<template>
  <div class="index">
      <div class="position">
        <i></i>
        <p>当前位置：<span>主页</span></p>
      </div>
      <div class="message">
        <ul class="message-box">
          <li class="message-box-s">
            <div>
              <i></i>
              <span class="message-box-text">会员总数</span>
              <p>605名</p>
            </div>
          </li>
           <li class="message-box-s">
            <div>
              <i></i>
              <span class="message-box-text">活跃会员</span>
              <p>605名</p>
            </div>
          </li>
           <li class="message-box-s">
            <div>
              <i></i>
              <span class="message-box-text">销售额</span>
              <p>605名</p>
            </div>
          </li>
           <li class="message-box-s">
            <div>
              <i></i>
              <span class="message-box-text">消息</span>
              <p>有<span>20</span>条未读信息</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .index{
    margin: 12px 0px;
    flex-grow: 1;
  }

  .index .position{
    border: 1px solid #ddd;
    padding: 10px;
    color: #666666;
    font-size: 14px;
  }
  
  .index .message .message-box{
    margin:10px 0
  }

  .index .message .message-box p{
    font-size: 14px;
  }

  .index .message .message-box .message-box-s{
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    color: #f1675f;
    display: inline-block;
    margin: 0 10px;
    padding: 20px 0;
    text-align: center;
    width: calc(25% - 25px);
  }

  .index .message .message-box .message-box-s .message-box-text{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
</style>
