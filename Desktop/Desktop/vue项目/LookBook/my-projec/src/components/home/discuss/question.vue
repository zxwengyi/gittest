<template>
  <div class="question">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  :head-title="headTitle"></head-top>
    <div class="main">
      <div class="question_top">
        <div class="question_submit">
          <div class="right_text">
            <p @click="addPath">发布</p>
          </div>
          <div class="left_text">
            <p class="title_text">请在下方填写你的问题</p>
          </div>
        </div>
        <div class="question_title">
          <!--<textarea v-model="title"  class="input_title" style="overflow: hidden" placeholder="请在这里输入标题"></textarea>-->
        </div>
      </div>
      <div class="line"></div>
      <div class="inputComment">
        <textarea v-model="message"  class="input_text" style="overflow: hidden" placeholder="输入你的问题"></textarea>
      </div>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTip from '../../communal/alertTip'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '发布动态',
        title: '',
        message: '',
        showAlert: false,
        alertText: '',
        showHide: false
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC']),
      addPath () {
        if (this.message !== '') {
          var myDiscussionObj = {
            source: true,
            userName: '我',
            timer: '10:30',
            isInputContent: false, // 是否是编辑状态
            isFixationHight: true, // 多余四条时显示固定高度
            content: '&emsp;&emsp;' + this.message,
            discussionList: []
          }
          this.$router.go(-1)
          this.SWITHER_TOPIC({index: 2, myDiscussionObj: myDiscussionObj})
        } else {
          this.showAlert = true
          this.alertText = '评论内容不能为空'
        }
      },
      closeTip () {
        this.showAlert = false
      }
    },
    components: {
      headTop,
      alertTip
    },
    computed: {
      ...mapState(['discussionMeun', 'currentDiscussion', 'swichList'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .main{
    /*margin: 0 2rem;*/
    margin-top: 7.3rem;
  @include sc(3rem, #000000)
  }
  .line{
    height: 2px;
    margin: 0 2rem;
    background: $mainColor;
  }
  .question_top{
    /*padding: 2rem 0;*/
  }
  .question_title{
    /*border-bottom: solid 1px #000000;*/
  }
  .title_text{
    color:$navTitle;
    line-height: 6rem;
    margin: 2rem 2rem;
  }
  .right_text{
    display: flex;
    justify-content: flex-end;
  }
  .right_text p{
    background-color: $mainColor;
    padding: 1rem 4rem;
    margin: 2rem  2rem;
    border-radius: 3rem;
    font-size: 3.2rem;
  }
  .left_text p{
    font-size: 3rem;
  }
  .question_submit{
    padding: 0rem 0;
    /*color: #1a9fff;*/
    /*background-color: $textBg;*/
    color: #ffffff;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
  .question_submit p{
    /*margin: 2rem  2rem;*/
  }
  .question_submit p:last-child{
    /*background-color: $mainColor;*/
    /*padding: 1rem 3rem;*/
    /*margin: 2rem  2rem;*/
    /*border-radius: 3rem;*/
  }
 .input_text{
    width: 100%;
    border:solid 0 #cccccc;
    color: #000000;
    font-size: 3rem;
  }
  .inputComment{
    padding: 2rem 2rem;
  }
  .input_text{
    height: 40rem;
    font-size: 3rem;
  }
  .bottom_btn p{
    line-height: 8rem;
    background-color: #1d3fd9;
    width: 100% ;
    color: #ffffff;
    text-align: center;
  }
</style>
