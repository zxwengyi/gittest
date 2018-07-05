<template>
  <div id="message">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  headTitle='收件箱'></head-top>
    <section class="mian">
      <div class="message_title"><p>你有<span>{{messageList.length}}</span>条信息</p></div>
      <ul class="message_ul">
        <li class="message_li" v-for="(item, index) in messageList" :key="index">
          <div class="message_left">
            <p class="message_left_img" :style="{backgroundImage: 'url('+ item.headerImg +')'}"></p>
          </div>
          <div class="message_right">
            <div class="message_right_title">
              <p>{{item.origin}}</p>
              <p>{{item.timer}}</p>
            </div>
            <div class="message_right_content">
              <p>{{item.content}}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import headTop from '../communal/header/head'
  import {mapState} from 'vuex'
  export default {
    name: 'articles',
    foodTypes: [],
    data () {
      return {
      }
    },
    mounted () {
    },
    components: {
      headTop
    },
    methods: {
      addPath (index) {
        this.$router.push(index)
      }
    },
    computed: {
      ...mapState(['messageList'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  #message{
  @include sc(2.3rem, #000);
  }
  .mian {
    margin-top: 7.3rem;
  }
  .message_title{
    background: #cccccc;
  }
  .message_title p{
    padding: 2rem 2.6rem;
  }
  .message_title p span{
    color: red;
  }
  .message_ul{
    margin: 0 1.2rem;
    background: #ffffff;
  }
  .message_li{
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #e3e3e3;
    margin: 2rem 0;
  }
  .message_li .message_left{
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
  }
  .message_li .message_left p{
    width: 5rem;
    height: 5rem;
    margin: auto;
    background: no-repeat;
    background-size:100% 100%;
  }
  .message_right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
   .message_right_title{
     margin: 0 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  .message_right_title p:first-child{
    color: $mainColor;
  }
  .message_right_title p:last-child{
    color: #707070;
  }
  .message_right_content{
    margin-right: 1rem;
    margin-bottom: 2rem;
  }

</style>
