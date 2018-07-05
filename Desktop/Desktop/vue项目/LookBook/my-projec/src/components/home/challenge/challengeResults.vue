<template>
  <div class="challengeresults">
    <!--顶部导航-->
    <head-top go-back='true':backSteep="backSteep" title='true'  :head-title="headTitle"></head-top>
    <section class="main" :style="{backgroundImage: 'url('+ backgroundImg +')'}">
      <section class="content">
        <!--<section class="content_score">-->
          <!--<div class="score">-->
            <!--<div class="score_in"><div class="score_in_box"><span>gfbf</span></div></div>-->
            <!--<div class="score_out"><div class="score_out_box"><span>gfbf</span></div></div>-->
          <!--</div>-->
        <!--</section>-->
        <section class="content_result">
          <ul class="content_result_ul">
            <li class="content_result_li">
              <div>
                <!--<span class="span_left_img"></span>-->
                <span class="timer_text">用时：</span>
              </div>
              <div>
                <span>{{currentBook.challengTimer}}秒</span>
              </div>
            </li>
            <li class="content_result_li">
              <div>
                <!--<span class="span_left_img"></span>-->
                <span class="timer_text">正确率：</span>
              </div>
              <div>
                <span>{{currentBook.topicList.length-currentBook.wrongTopicList.length}}/{{currentBook.topicList.length}}</span>
              </div>
            </li>
            <li class="content_result_li">
              <div>
                <!--<span class="span_left_img"></span>-->
                <span class="timer_text">得分：</span>
              </div>
              <div>
                <span>{{score}}</span>
              </div>
            </li>
          </ul>
        </section>
        <!--<section class="content_warn">-->
          <!--<div class="star_box_out">-->
            <!--<div class="star_box">-->
              <!--<div class="star_in"><p v-for="item in 5" class="star_in_p" :style="{backgroundImage: 'url('+ starInImg +')'}"></p></div>-->
              <!--<div class="star_out" :style="{ clip: 'rect(0 '+ score*25/100 +'rem 8rem 0)'}"><p v-for="item in 5" class="star_out_p" :style="{backgroundImage: 'url('+ staroutImg +')'}"></p></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</section>-->
        <section class="appraisal_img_box">
          <div class="appraisal_img" :style="{backgroundImage: 'url('+ thinkingImg +')'}"></div>
        </section>
      </section>
      <section class="bottom_btn">
        <div v-for="(item, index) in btnList" class="bottom_btn_div" :class="{active: item.active}" @click="addPath(item.path)"><p>{{item.text}}</p></div>
        <!--<div class="bottom_btn_div" :class="active" @click="addPath('/lookWrongQuestion')"><p>查看错题</p></div>-->
        <!--<div class="bottom_btn_div" @click="addPath('/lookTop')"><p>查看排行</p></div>-->
      </section>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'challengeResults',
    data () {
      return {
        backgroundImg: require('../../../images/bg.png'),
        headTitle: '成绩测评',
        backSteep: -2,
        btnList: [{
          text: '查看错题',
          path: '/lookWrongQuestion',
          active: false
        }, {
          text: '查看排行',
          path: '/lookTop',
          active: false
        }],
        thinkingImg: require('../../../images/home/thinking.png'),
        starInImg: require('../../../images/icon/star1.png'),
        staroutImg: require('../../../images/icon/star1_yes.png'),
        score: ''
      }
    },
    methods: {
      ...mapMutations(['CHOOSE_ANWSER']),
      addPath (path) {
        if (path === '/lookWrongQuestion') {
          this.btnList[0].active = true
          this.btnList[1].active = false
        } else {
          this.btnList[0].active = false
          this.btnList[1].active = true
        }
        var self = this
        setTimeout(function () {
          self.$router.push(path)
        }, 500)
      },
      chooseAnwser (index) {
        this.CHOOSE_ANWSER({index: index, topicID: this.currenTopic.id})
        if (this.currenTopicList.length === this.currenTopic.id) {
          this.submitShow = true
        }
      }
    },
    components: {
      headTop
    },
    mounted () {
      this.score = Math.round((1 - this.currentBook.wrongTopicList.length / (this.currentBook.topicList.length)) * 100)
      console.log(this.routerBackSteep)
      this.backSteep = this.routerBackSteep
    },
    computed: {
      ...mapState([
        'currenTopic', 'currenTopicList', 'currentBook', 'routerBackSteep'
      ])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .challengeresults{
    margin-top: 7.3rem;
    margin-bottom: 0;
    height: 101.4%;
  }
  .main{
    /*padding-top: 7.3rem;*/
    width: 100%;
    height: 100%;
    font-size: 2.3rem;
    background: no-repeat;
    background-size: 100% 100%;
  }
  .content{
    margin: 0;
    padding:0;
  }
  .score{
    width: 100%;
  }
  .content_score{
    margin: 0 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .score_text{
    margin: 2rem 0 0;
  }
  .content_score>div{
    height: 4rem;
  }
  .score .score_in,.score .score_out{
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
  .score_in_box,.score_out_box{
    width: 10rem;
  }
  .score .score_out span{
    color: #0b97c4;
  }
  .star_box_out{
    display: flex;
    justify-content: center;
  }
.star_box{
  position: relative;
}
  .star_in{
    display: flex;
    justify-content: flex-start;
  }
.star_in_p, .star_out_p{
  width: 5rem;
  height: 8rem;
  background: no-repeat center;
  background-size:80% 50%;
}
.star_out{
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
}
  .star_out_p{
    width: 5rem;
    height: 8rem;
    background: no-repeat center;
    background-size:80% 50%;
  }
  .appraisal_img_box{
    margin: 1rem;
    display: flex;
    justify-content: center;
  }
  .appraisal_img_box .appraisal_img{
    width: 50rem;
    height: 30rem;
    background: no-repeat center;
    /*background-size:80% 80%;*/

  }
  .content_result{
    padding:2rem 2rem;
    font-size: 2.5rem;
  }
  .content_result_ul{
    /*margin-top: 10rem;*/
  }
  .content_result_li{
    margin: 2rem 10rem;
    display: flex;
    justify-content: center;
  }
  .content_result_li div{
    margin-left: 4rem;
  }
  .content_result_li div:first-child{
    color: #707070;
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
  .content_result_li div:nth-child(2){
    color: #ffc85d;
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
  .span_left_img{
    background-color: #0b97c4;
    width: 2rem;
    height: 100%;
    margin-right: 2rem;
  }

  /*.content .content_warn_p{*/
    /*margin: 10rem 2rem;*/
    /*text-align: left;*/
  /*}*/
  /*.result_img{*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*margin: 2rem;*/
  /*}*/
  .result_img img{
    width: 10rem;
    height: 10rem;
    background-color: #0b97c4;
  }
  .bottom_btn{
    margin: 6rem 2rem 2rem;
  }
  .bottom_btn_div{
    width: 100%;
    margin-bottom: 4rem;
    border-radius: 3.4rem;
    display: flex;
    justify-content: center;
    color: $mainColor;
    border: solid 1px $mainColor;
  }
  .bottom_btn_div p{
    line-height: 6.8rem;
  }
  .bottom_btn_div.active{
    background-color: $mainColor;
    color: #ffffff;
  }
  /*.bottom_btn_div:first-child{*/
    /*background-color: #1a9fff;*/
    /*color: #ffffff;*/
  /*}*/
  /*.bottom_btn_div:nth-child(2){*/
   /*border: solid 1px #707070;*/
    /*color: #000000;*/
  /*}*/
</style>
