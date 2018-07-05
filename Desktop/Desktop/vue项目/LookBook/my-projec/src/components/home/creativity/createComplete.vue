<template>
  <div class="discuss">
    <!--顶部导航-->
    <head-top go-back='true' :backSteep="backSteep" title='true'  :head-title="headTitle" message ='true'></head-top>
    <!--主要内容-->
    <section class="main">
      <section class="discuss_top">
        <div>
          <div class="complete_img">
            <img :src="currentCreate.recommendImg"/>
          </div>
          <div class="createComplete_top_text_number">
            <p class="participants_img_box">
              <span class="participants_img" :style="{backgroundImage: 'url('+ messegeImg +')'}"></span>
              <span class="participants_likeNumber">{{currentCreate.CompleteNumber}}</span>
            </p>
            <p class="participants_img_box" :class="{activate: currentCreate.isLiked}" @click="createLikeNumber(currentCreate)">
              <span class="participants_img" :style="{backgroundImage: 'url('+ currentCreate.likeImg +')'}"></span>
              <span class="participants_likeNumber">{{currentCreate.likeNumber}}</span>
            </p>
            <!--<p class="like" @click="createLikeNumber">{{currentCreate.likeNumber}}</p>-->
          </div>
        </div>
        <div class="inputComment">
          <textarea v-model="message" class="input_text" style="overflow: hidden" placeholder="写下你的想法"></textarea>
        </div>
        <div class="submit_comment" v-if="showCommentBtn"><p @click="submit">提交</p></div>
      </section>
      <section class="discuss_list" v-if="currentCreate.discussionList.length > 0">
        <div class="discuss_list_top">
          <div class="Sort_describe"><p>精彩评论</p></div>
          <div class="line"></div>
        </div>
        <!-- 列表模板 -->
        <div class="comment_box">
          <comment-cell :itemList="currentCreate.discussionList" type="creativity"></comment-cell>
        </div>
      </section>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTip from '../../communal/alertTip'
  import commentCell from '../../communal/commentCell'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '乐创编',
        alertText: '',
        showAlert: false,
        message: '',
        backSteep: -4,
        showCommentBtn: true,
        messegeImg: require('../../../images/icon/Chat.png')
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC', 'SUBMIT_COMMENT', 'THUMB_COMMMENTS', 'THUMB_CREATE']),
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
//     获取当前时间
      getCurrentTime () {
        var now = new Date()
//        var year = now.getFullYear()       // 年
//        var month = now.getMonth() + 1    // 月
//        var day = now.getDate()          // 日
        var hours = now.getHours()          // 日
        var minutes = now.getMinutes()          // 日
        var timer = '今天 ' + hours + ':' + minutes
//        var seconds = now.getMilliseconds()          // 秒
//        var timer = year + '/' + month + '/' + day
//        if (now) {
//
//        }
        console.log(now)
        return timer
      },
//    评论
      submit () {
//        var now = new Date()
//        var year = now.getFullYear()       // 年
//        var month = now.getMonth() + 1    // 月
//        var day = now.getDate()          // 日
//        var timer = year + '/' + month + '/' + day
        var obj = {
          tpye: 'creativity',
          headerImg: require('../../../images/乐创编/user.png'),
          name: '我',
          time: this.getCurrentTime(),
          likeNumber: 0,
          secDisNum: 6,
          secDisNumImg: require('../../../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../../../images/icon/thumbs.png'),
          discuss: this.message
        }
        //       判断输入内容不能为空
        if (this.message.length > 1) {
          this.SUBMIT_COMMENT(obj)
        }
        this.message = null
      },
//    点赞
      thumbComments (index, item) {
        console.log(item)
        if (item.isLiked === false) {
          this.THUMB_COMMMENTS({index: index, tpye: 'creativity'})
        }
      },
//    点赞乐创编
      createLikeNumber (item) {
        if (item.isLiked === false) {
          this.THUMB_CREATE()
        }
      }
    },
    components: {
      headTop,
      alertTip,
      commentCell
    },
    computed: {
      ...mapState(['discussionMeun', 'currentDiscussion', 'swichList', 'currentCreateObj', 'currentCreate'])
    },
    created: function () {
//      console.log(this.$route.params.backSteep)
      this.backSteep = this.$route.params.backSteep
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .discuss{
    margin-top: 5rem;
  }
  .main{
    margin-top: 7.3rem;
    width: 100%;
  @include sc(2rem, #000000)
  }
  .discuss_top{
    margin: 2rem;
    padding-top: 2rem;
    /*border: solid 1px #DDDDDD;*/
  }
  .complete_img{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .complete_img img{
    margin: auto;
    height: 100%;
    width: 100%;
  }
  .createComplete_top_text_number{
    margin-top: 2rem;
    margin-right: 2.2rem;
    font-size:2.2rem ;
    color: #707070;
    display: flex;
    justify-content: flex-end;
  }
  .participants_img_box{
    line-height: 5rem;
    position: relative;
    bottom: -1rem;
    display: flex;
    justify-content: flex-end;
    padding-left: 2rem;
  }
  .participants_img{
    width: 4.5rem;
    height: 4.5rem;
    background: no-repeat;
    background-size:70% 70%;
  }
  .activate{
    color: $mainColor;
  }
  .createComplete_top_text_number .messege{
    margin-right: 5rem;
    line-height: 6rem;
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
  .submit_comment{
    display: flex;
    justify-content: center;
  }
  .submit_comment p{
    margin:0 0 2rem;
    width: 10rem;
    color: #ffffff;
    line-height: 4rem;
    border-radius: 0.5rem;
    text-align: center;
    background-color: $mainColor;
    border-radius: 2rem;
  }
  .input_text{
    width: 100%;
    height: 10rem;
    margin: 2rem 0;
    font-size: 2.3rem;
  }
  .Sort_describe{
    padding: 0rem 2rem;
    color: $mainColor;
    font-size: 3rem;
    border-bottom: solid 1px #DDDDDD;
  }
  .comment_box{
    /*background: #dddddd;*/
    padding: 0 1rem 2rem;
  }
</style>
