<template>
  <div class="discuss">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  :head-title="headTitle" message ='true'></head-top>
    <!--主要内容-->
    <section class="main">
      <section class="discuss_top">
        <div class="selectorButton">
          <div class="selectorButton_div">
            <div class="vertical_line"></div>
            <div class="level_line" v-if="swichList[0].swich"></div>
            <span :class="{'active':swichList[0].swich}" @click="switchIssues(0)">议题1</span>
          </div>
          <div  class="selectorButton_div">
            <div class="vertical_line"></div>
            <div class="level_line" v-if="swichList[1].swich"></div>
            <span :class="{'active':swichList[1].swich}" @click="switchIssues(1)">议题2</span>
          </div>
          <div  class="selectorButton_div">
            <div class="level_line" v-if="swichList[2].swich"></div>
            <span :class="{'active':swichList[2].swich}" @click="switchIssues(2)">用户议题</span>
          </div>
        </div>
      </section>
      <section class="systemDiscussion" v-if="!currentBook.showUserDiscussion">
        <section class="problemDescription_top">
          <div class="problemDescription">
            <p class="problemDescription_content" v-html="currentDiscussion.content"></p>
            <!--<div class="problemDescription_timer">-->
            <!--<p>10:00</p>-->
            <!--</div>-->
          </div>
          <div class="inputComment" >
            <textarea v-model="currentDiscussion.inputMasgges" class="input_text" style="overflow: hidden" placeholder="写下你的想法" v-on:focus="hidaSubmitBtn('hide')" v-on:blur="hidaSubmitBtn('show')"></textarea>
          </div>
          <div class="submit_comment" v-if="showCommentBtn"><p @click="submit">提交</p></div>
        </section>
        <section class="discuss_list" v-if="currentDiscussion.discussionList.length > 0">
          <div class="discuss_list_top">
            <div class="Sort_describe"><p>评论</p></div>
            <div class="line"></div>
          </div>
          <!-- 列表模板 -->
          <comment-cell :itemList="currentDiscussion.discussionList" type="system"></comment-cell>
        </section>
      </section>
      <user-diccuss v-if="currentBook.showUserDiscussion" @hida-submit-btn="hidaSubmitBtn"></user-diccuss>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </section>
    <!--我要提问按钮-->
    <div class="bottom_btn" @click="addPath('/question')" v-if="showSubmitBtn">
      <div class="bottom_btn_box">
        <p class="bottom_btn_img" :style="{backgroundImage: 'url('+ lookMoreImg +')'}"></p>
        <p>提问</p>
      </div>
    </div>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTip from '../../communal/alertTip'
  import userDiccuss from '../../home/discuss/userDiccuss'
  import {mapState, mapMutations} from 'vuex'
  import commentCell from '../../communal/commentCell'
  export default {
    data () {
      return {
        headTitle: '探议题',
        alertText: '',
        showAlert: false,
        showSubmitBtn: true,
        showCommentBtn: false,
        message: null,
        activate: false,
        lookMoreImg: require('../../../images/icon/Write_white.png')
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC', 'SUBMIT_COMMENT', 'THUMB_COMMMENTS']),
      addPath (path) {
        this.$router.push(path)
      },
      switchIssues (index) {
        if (index === 2) {
          if (this.currentBook.discussionMeun.length < 3) {
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
//        var year = now.getFullYear()       // 年
//        var month = now.getMonth() + 1    // 月
//        var day = now.getDate()          // 日
//        var timer = year + '/' + month + '/' + day
        var hours = now.getHours()          // 日
        var minutes = now.getMinutes()          // 日
        var timer = '今天 ' + hours + ':' + minutes
        var obj = {
          headerImg: require('../../../images/乐创编/user.png'),
          name: '我',
          time: timer,
          likeNumber: 0,
          secDisNum: 10,
          secDisNumImg: require('../../../images/icon/Chat.png'),
          isLiked: false,
          likeImg: require('../../../images/icon/thumbs.png'),
          discuss: this.currentDiscussion.inputMasgges
        }
//       判断输入内容不能为空
        if (this.currentDiscussion.inputMasgges.length > 1) {
          this.SUBMIT_COMMENT({obj: obj, tpye: 'system'})
        }
        this.currentDiscussion.inputMasgges = null
      },
//    点赞
      thumbComments (index, item) {
//        this.activate = true
        if (item.isLiked === false) {
          this.THUMB_COMMMENTS({index: index, tpye: 'system'})
        }
      },
      hidaSubmitBtn (style) {
        console.log(style)
        if (style === 'hide') {
          this.showSubmitBtn = false
          this.showCommentBtn = true
        }
        if (style === 'show') {
          var self = this
          setTimeout(function () {
            self.showCommentBtn = false
            self.showSubmitBtn = true
          }, 300)
        }
      }
    },
    components: {
      headTop,
      alertTip,
      userDiccuss,
      commentCell
    },
    computed: {
      ...mapState(['currentBook', 'currentDiscussion', 'swichList'])
//      this.currentDiscussion = this.discussionMeun[0]
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .discuss{
    /*margin-top: 4rem;*/
    background-color: #dddddd;
    /*background-color: red;*/
  }
  .main{
    margin: 0 1rem;
    margin-top: 7.3rem;
    /*margin: 7.3rem 1rem 2rem;*/
    padding-bottom: 1rem;
    background-color: #dddddd;
  @include sc(2rem, #000000)
  }
  .discuss_top{
    position: fixed;
    width: 100%;
    left: 0;
    background: #ffffff;
  }
  /*.problemDescription{*/
    /*padding: 0 1rem 1rem;*/
  /*}*/
  .problemDescription_content{
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
    padding: 2rem 1rem;
  }
  .problemDescription_top{
    background: #ffffff;
    margin-top: 2rem;
    border: solid 1px #9f9f9f;
    border-top: solid 0 #9f9f9f;
    box-shadow: 0px 3px 5px #9f9f9f;
  }
  .systemDiscussion{
    width: 100%;
    left: 0;
  }
  .systemDiscussion, .userDiscussion{
    padding-top: 5.6rem;
  }
  .selectorButton{
    display: flex;
    font-size: 3rem;
    border-bottom: solid 0.5rem #dddddd;
  }
  .problemDescription{
    background: #ffffff;
    margin: 0rem 0rem;
    /*letter-spacing: 0.6rem ;*/
  }
  .problemDescription p{
    font-size: 2.3rem;
    /*color: #535353;*/
    /*font-size:28px;*/
  }
  .problemDescription_timer p{
    padding-right: 2rem;
  }
  .selectorButton_div{
    padding: 1.5rem 3rem 1rem;
    position: relative;
  }
  .vertical_line{
    position: absolute;
    top: 2.2rem;
    right: 0;
    background: #707070;
    width: 1px;
    height:40%;
    /*tra;*/
  }
  .level_line{
    position: absolute;
    bottom: -0.5rem;
    left: 2rem;
    background: $mainColor;
    width: 80%;
    height:0.5rem;
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
    border-radius: 2rem;
    text-align: center;
    background-color: $mainColor;
  }
  /**/
  .selectorButton span:last-child{
    border-right:0;
  }
  .selectorButton span.active{
    color: $mainColor;
  }
  .inputComment{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .input_text{
    height: 10rem;
    width: 96%;
    margin-bottom: 2rem;
    font-size: 2.3rem;
    background: $textBg;
  }
  /*list部分*/
  .discuss_list{
    background: #ffffff;
    margin-top: 1rem;
    padding: 1rem 0 0;
    border: solid 1px #9f9f9f;
  }
  .Sort_describe{
    line-height: 2rem;
    font-size: 2.5rem;
    padding: 2rem 1rem;
    color: $mainColor;
  }
  .line{
    height: 1px;
    background: #c9c9c9;
  }
  .item_left{
    margin: 0rem 1rem 0rem 0rem;
    display: flex;
  }
  .item_left p{
    width: 7.5rem;
    height: 7.5rem;
    /*margin: auto;*/
    background: no-repeat;
    background-size:100% 100%;
  }
  .discuss_list_li{
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    border-bottom: solid 1px #c9c9c9;
  }
  .item_mian{
    display: flex;
    flex-direction: column;
  }
  .item_mian_top{
    color: #707070;
    display: flex;
    justify-content: space-between;
  }
  .item_right{
    color: #707070;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item_mian{
    flex: 1;
  }
  .item_mian_name{
    font-size: 2.3rem;
    margin-bottom: 1rem;
    /*color: #707070;*/
  }
  .item_right{
    text-align: center;
  }
  .item_mian_bottem{
    color: #707070;
    display: flex;
    justify-content: flex-end;
  }
  .participants_img_box{
    position: relative;
    bottom: -1rem;
    display: flex;
    justify-content: flex-end;
    padding-left: 2rem;
  }

  .participants_img{
    width: 4.5rem;
    height: 4.5rem;
    background-size:100% 100%;
  }
  .ivu-icon-plus{
    line-height: 5rem;
    width: 2rem;
    size: 5px;
  }
  .participants_likeNumber{
    line-height: 5rem;
  }
  .participants_img_box:first-child{
    color: #1a9fff;
  }
  .activate{
    color: #1a9fff;
  }
  .bottom_btn{
    position: fixed;
    width: 12rem;
    height: 12rem;
    z-index: 100;
    right: 0;
    bottom: 4rem;
    font-size: 4rem;
    display: flex;
    padding: 2rem;
  }
  .bottom_btn_box{
    width: 100%;
    height: 100%;
    background-color: #2Dc698;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0em 0rem 0.5rem 0.3rem rgba(0,0,0,0.3);
  }
  .bottom_btn_box p{
    line-height: 4rem;
    font-size: 2.3rem;
    width: 100% ;
    color: #ffffff;
    text-align: center;
  }
  .bottom_btn_box p:first-child{
    height: 50%;
    width: 100%;
    position: relative;
    background: no-repeat center;
  }
  .bottom_btn_box p:last-child{
    position: relative;
    bottom: 1.1rem;
  }
  .discuss_submit p{
    text-align: center;
  }
</style>
