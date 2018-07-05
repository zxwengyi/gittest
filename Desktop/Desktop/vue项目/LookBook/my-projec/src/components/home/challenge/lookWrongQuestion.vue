<template>
  <div class="lookWrongQuestion">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  head-title="错题查看"></head-top>
    <section class="main">
      <section class="describe">
        <div class="describe_top">
          <div class="describe_top_left">
            <p class="describe_left"></p>
            <p class="describe_right">{{number+ '/' + this.currentBook.wrongTopicList.length}}</p>
          </div>
        </div>
        <div class="topic">
          <p>{{currenWrongTopic.titel}}</p>
        </div>
      </section>
      <section class="options">
        <ul class="options_ul">
          <li class="options_li" :class="{ result: item.result, standardAnswer: item.standardAnswer}" v-for="(item, index) in currenWrongTopic.options" :key="index">
            <div class="options_li_box">
              <p class="options_left">{{item.option}}</p>
              <p class="options_right">{{item.optionDetails}}</p>
            </div>
            <div class="rusult_img" v-if="item.standardAnswer || item.result">
              <p class="right_img" v-if="item.standardAnswer"></p>
              <p class="wrong_img" v-if="item.result"></p>
            </div>
          </li>
        </ul>
      </section>
      <section class="bottom_btn">
        <div class="ok_btn" @click="prevTopic" :class="{disabel: isPrev}"><span>上一题</span></div>
        <div class="ok_btn" @click="nextTopic" :class="{disabel: isNext}"><span>下一题</span></div>
      </section>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        isPrev: true,
        isNext: false,
        number: 1,
        rightAnwser: '',
        currenWrongTopic: {},
        currenWrongTopicCount: 0
      }
    },
    methods: {
      prevTopic () {
        this.isNext = false
        if (this.currenWrongTopicCount > 0) {
          this.currenWrongTopicCount = this.currenWrongTopicCount - 1
          this.number = this.number - 1
          this.currenWrongTopic = this.currentBook.wrongTopicList[this.currenWrongTopicCount]
//          console.log(this.number)
          if (this.number === 1) {
            this.isPrev = true
          } else {
            this.isPrev = false
          }
        }
      },
      nextTopic () {
        this.isPrev = false
        this.isNext = true
        if (this.currenWrongTopicCount < this.currentBook.wrongTopicList.length - 1) {
          this.currenWrongTopicCount = this.currenWrongTopicCount + 1
          this.number = this.number + 1
          this.currenWrongTopic = this.currentBook.wrongTopicList[this.currenWrongTopicCount]
          if (this.number === this.currentBook.wrongTopicList.length) {
            this.isNext = true
          } else {
            this.isNext = false
          }
        }
      }
    },
    components: {
      headTop
    },
    mounted () {
      if (this.currentBook.wrongTopicList.length > 0) {
        this.currenWrongTopic = this.currentBook.wrongTopicList[this.currenWrongTopicCount]
        for (var i = 0; i < this.currenWrongTopic.options.length; i++) {
          if (this.currenWrongTopic.options[i].standardAnswer === true) {
            this.rightAnwser = this.currenWrongTopic.options[i].optionDetails
          }
        }
      }
    },
    computed: {
      ...mapState([
        'wrongTopicList', 'currentBook'
      ])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .main{
    margin-top: 7.3rem;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .describe{
    margin: 0 2rem;
    top: 6rem;
    display: flex;
    /*height: 10rem;*/
    flex-direction: column;
    justify-content: space-between;
  }
  .describe_top{
    margin: 2rem 0;
    font-size: 2.2rem;
    color: $mainColor;
    display: flex;
    justify-content: space-between;
  }
  .describe_top_left{
    display: flex;
    justify-content: space-between;
  }
  .describe_top_left p{
    margin-right: 2rem;
  }
  .describe_top_right{
    color: #1a9fff ;
  }
  .topic{
    margin: 2rem 0 2rem;
    font-size: 2.3rem;
    padding: 2rem;
    background-color: #d6f1ff;
    border-radius: 0.5rem;
  }
  .options_ul{
    margin: 6rem 2rem;
  }
  .options_li{
    display: flex;
    justify-content: space-between;
    border: solid 1px $mainColor;
    /*height: 6.7rem;*/
    margin: 3.3rem 0;
    display: flex;
    background-color: #ffffff;
    border-radius: 3.4rem;
  }
  .options_li_box{
    height: 100%;
    display: flex;
    justify-content: center;  }
  /*.result{*/
    /*background-color: #dc1f1f;*/
  /*}*/
  /*.standardAnswer{*/
    /*background-color: #1a9fff;*/
  /*}*/
  .options_li_box p{
    line-height: 6.7rem;
    margin-left: 3rem;
  }
  .options_left{
    margin:0 2rem;
  }
  .bottom_btn{
    margin: 10rem 2rem;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
  }
  .bottom_btn .ok_btn{
    width: 100%;
    margin: 0 2rem;
    background-color: $mainColor;
    text-align: center;
    border-radius: 3.4rem;
  }
  .bottom_btn .ok_btn.disabel{
    background-color: #cccccc;
  }
  .bottom_btn .ok_btn span{
    line-height: 6rem;
  }
  .rusult_img{
    margin-right: 3rem;
  }
  .rusult_img p{
    line-height: 6.7rem;
  }
  .right_img, .wrong_img{
    width: 6.7rem;
    height: 100%;
  }
  .right_img{
    background: url("../../../images/icon/right.png") no-repeat center;
  }
  .wrong_img{
    background: url("../../../images/icon/wrong.png") no-repeat center;
  }
</style>
