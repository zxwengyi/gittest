<template>
  <div class="discuss">
    <!--顶部导航-->
    <head-top go-back='true' :backSteep="backSteep" title='true'  :head-title="headTitle" message ='true'></head-top>
    <!--主要内容-->
    <section class="main">
      <section class="discuss_top">
        <div>
          <div class="complete_img">
            <img :src="chooseImageUrl"/>
          </div>
          <div class="createComplete_top_text_number">
            <p class="messege">34</p>
            <p class="like">57</p>
          </div>
        </div>
        <div class="inputComment">
          <textarea v-model="message" class="input_text" style="overflow: hidden" placeholder="写下你的想法" @keyup.enter="submit"></textarea>
        </div>
        <!--<div class="discuss_submit" @click="submit"><p>提交</p></div>-->
      </section>
      <section class="discuss_list">
        <div class="discuss_list_top">
          <div class="Sort_describe"><p>精彩评论</p></div>
          <div class="line"></div>
        </div>
        <ul class="discuss_list_ul">
          <li v-for="(item,index) in currentDiscussion.discussionList" :key="index" class="discuss_list_li">
            <div class="item_left">
              <img :src="item.headerImg" alt="" v-if="item.headerImg">
            </div>
            <div class="item_mian">
              <span>{{item.name}}</span>
              <span class="participants">{{item.discuss}}</span>
            </div>
            <div class="item_right">
              <span class="participants">{{item.time}}</span>
              <span class="participants" @click="thumbComments(index)">{{item.likeNumber}}赞</span>
            </div>
          </li>
        </ul>
        </ul>
      </section>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTip from '../../communal/alertTip'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '探议题',
        alertText: '',
        showAlert: false,
        message: '',
        backSteep: -3
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC', 'SUBMIT_COMMENT', 'THUMB_COMMMENTS']),
      addPath (path) {
        this.$router.push(path)
      },
      switchIssues (index) {
        if (index === 2) {
          if (this.discussionMeun.length < 3) {
            this.alertText = '你还没有议题'
            this.showAlert = true
            return
          } else {
            this.SWITHER_TOPIC({index: index})
          }
        } else {
          this.SWITHER_TOPIC({index: index})
        }
      },
      closeTip () {
        this.showAlert = false
      },
      submit () {
        var now = new Date()
        var year = now.getFullYear()       // 年
        var month = now.getMonth() + 1    // 月
        var day = now.getDate()          // 日
        var timer = year + '/' + month + '/' + day
        console.log(this.message)
        var obj = {
          headerImg: require('../../../images/乐创编/JINYOUYOU.png'),
          name: '我',
          time: timer,
          likeNumber: 0,
          discuss: this.message
        }
        this.SUBMIT_COMMENT(obj)
        this.message = ''
      },
      thumbComments (index) {
        console.log(index)
        this.THUMB_COMMMENTS({index: index})
      }
    },
    components: {
      headTop,
      alertTip
    },
    computed: {
      ...mapState(['discussionMeun', 'currentDiscussion', 'swichList', 'chooseImageUrl'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .discuss{
    margin-top: 5rem;
  }
  .main{
    margin: 0 2rem;
    margin-top: 7.3rem;
    width: 100%;
  @include sc(2rem, #000000)
  }
  .complete_img{
    display: flex;
    justify-content: center;
    height:62.5rem ;
  }
  .createComplete_top_text_number{
    margin-top: 2.5rem;
    margin-right: 2.2rem;
    font-size:2.2rem ;
    color: #707070;
    display: flex;
    justify-content: flex-end;
  }
  .createComplete_top_text_number .messege{
    margin-right: 5rem;
  }
  .createComplete_top_text_number .messege::before,.createComplete_top_text_number .like::before{
    content:"";
    margin-right: 2rem;
    padding-right: 3rem;
  }
  .createComplete_top_text_number .messege::before{
    background: url("../../../images/icon/Chat.png")no-repeat center;
  }
  .createComplete_top_text_number .like::before{
    background: url("../../../images/icon/thumbs.png")no-repeat center;
  }
  .input_text{
    width: 100%;
    height: 10rem;
    margin-top: 2rem;
    font-size: 3rem;
  }
  /*list部分*/
  .discuss_list{
    margin-top: 4rem;
  }
  .Sort_describe{
    margin-bottom: 1rem;
  }
  .line{
    height: 1px;
    background: #000;
  }
  .item_left{
    width: 10rem;
    height: 10rem;
    margin: 2rem;
    margin-top: 0;
    display: flex;
  }
  .item_left img{
    margin: auto;
  }
  .discuss_list_li{
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    border-bottom: solid 1px #000000;
  }
  .item_mian, .item_right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .item_mian{
    flex: 1;
  }
  .item_mian span:nth-child(2){
    padding: 2rem 0;
  }
  .item_right{
    text-align: center;
  }
  .discuss_list_ul{
    margin: 2.5rem;
  }
  .bottom_btn p{
    line-height: 8rem;
    background-color: #1d3fd9;
    width: 100% ;
    color: #ffffff;
    text-align: center;
  }
  .discuss_submit{
    margin-top: 2rem;
    width: 6rem;
    height: 3rem;
    border: solid 1px #000000;
    border-radius: 0.5rem;
  }
  .discuss_submit p{
    text-align: center;
  }
</style>
