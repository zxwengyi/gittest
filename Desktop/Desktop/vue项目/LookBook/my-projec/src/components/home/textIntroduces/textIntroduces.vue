<template>
  <div id="textIntroduces">
    <!--顶部导航-->
    <head-top go-back='true'  message ='true'></head-top>
    <header class="text_introduces_header">
      <div class="text_introduces_header_top">
        <div class="left_img" :style="{backgroundImage: 'url('+ currentBook.bookImg +')'}">
        </div>
        <div class="right">
          <div class="right_top_box">
            <div class="title"><p>{{currentBook.bookName}}</p></div>
            <div class="favorites" @click="clickCollect" :class="{isCollect: currentBook.isCollect}"><p>{{currentBook.collectText}}</p></div>
          </div>
          <div class="right_bottom_box">
            <div class="readed_number">
              <span class="readed_number_icon" :style="{backgroundImage: 'url('+ readedIcon +')'}"></span>
              <span>{{currentBook.lookedNumber}}人参与</span>
            </div>
            <div class="score_box">
              <!--<div class="score">{{currentBook.bookGarde}}分</div>-->
              <div class="evaluation_number">
                <span class="evaluation_number_icon" :style="{backgroundImage: 'url('+ evaluationIcon +')'}"></span>
                <span>
                  共{{currentBook.evaluationNumber}}人评价
                </span>
              </div>
              <!--<div class="up_time">{{currentBook.releaseTime}}</div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="text_introduces_header_bottom">
        <p :class="{unfold: ! isDown}" v-html="currentBook.bookIntroduce"></p>
        <div class="down_box" v-if="currentBook.bookIntroduce.length >75">
          <p id="downe_img"@click="isDown = !isDown" v-bind:class="{active: isDown}"></p>
        </div>
      </div>
    </header>
    <main class="menusList">
      <ul class="menusList_ul">
        <li v-for="(item,index) in menuList" :key="index" class="menusList_li" v-bind:class="{ noBcgColer: item.bcgColer }" @click="addPath(item.path)" >
          <div class="menusList_li_text">
            <p>{{item.titel}}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'textIntroduces',
    data () {
      return {
        isDown: false,
        readedIcon: require('../../../images/icon/Write.png'),
        evaluationIcon: require('../../../images/icon/Chat.png'),
        menuList: [{
          titel: '读群文',
          imgUrl: '',
          bcgColer: false,
          path: '/readGroupArticle'
        }, {
          titel: '勇挑战',
          imgUrl: '',
          bcgColer: false,
          path: '/challenge'
        }, {
          titel: '探议题',
          imgUrl: '',
          bcgColer: false,
          path: '/discuss'
        }, {
          titel: '乐创编',
          imgUrl: '',
          bcgColer: false,
          path: '/creativity'
        }]
      }
    },
    methods: {
      ...mapMutations(['CLICK_BOOKLIST', 'CHANGE_ARTICLE', 'INIT_TOPICS', 'INIT_DISCUSSION', 'ROUTER_BACK', 'COLLECT_BOOK']),
      addPath (path) {
        if (path === '/readGroupArticle') {
          this.CHANGE_ARTICLE(this.currentBook.readArticleStye)
          this.$router.push(path)
        } else if (path === '/challenge') {
          this.INIT_TOPICS({index: this.currentBook.topicStype})
//          根据情况进入不同的界面（做题界面和结果界面）
          if (this.currentBook.topicStype === Number(this.currentBook.topicList.length) - 1) {
            this.ROUTER_BACK({steep: -1})
            this.$router.push('/challengeResults')
          } else {
            this.$router.push(path)
          }
        } else if (path === '/discuss') {
          this.INIT_DISCUSSION({index: this.currentBook.discussionStype})
          this.$router.push(path)
        } else if (path === '/creativity') {
          this.CHANGE_ARTICLE(this.currentBook.readArticleStye)
          this.$router.push(path)
        }
      },
//    收藏
      clickCollect () {
        this.COLLECT_BOOK()
      }
    },
    components: {
      headTop
    },
    computed: {
      ...mapState(['currentBook', 'currentArticle', 'currentDiscussion', 'currentBook', 'routerBackSteep'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  #textIntroduces{
    margin: 0 2.5rem;

  }
  #textIntroduces .text_introduces_header{
    margin-top: 8rem;
  }
  #textIntroduces .text_introduces_header .text_introduces_header_top{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .text_introduces_header .left_img{
   @include wh(12rem,16.8rem);
    margin: 1rem;
    background: no-repeat;
    background-size:100% 100%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  }
  .text_introduces_header .right{
    flex: 1;
    margin: 1rem 0rem 0rem;
  @include sc(1.5rem, #000);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right_top_box{
    @include sc(3rem, #000);
    display: flex;
    justify-content: space-between;
  }
  .right_top_box .title{
    font-size: 2.6rem;
    display: flex;
    justify-content: center;
  }
  .right_top_box .favorites p{
    border: solid 1px #000000;
    padding: 1rem 2rem ;
    /*width: 6rem;*/
    margin: auto;
    border-radius: 0.5rem;
  }
  .right_bottom_box{
    margin-bottom: 2rem;
    margin-left: 1rem;
    color: #707070;
    font-size: 2.2rem;
  }
  .right_bottom_box .score_box{
    margin-top: 2.5rem;
    display: flex;
  }
  .readed_number, .evaluation_number{
    /*margin-left: 2rem;*/
    font-size: 2rem;
    color: #707070;
    display: flex;
  }
  .evaluation_number_icon, .readed_number_icon{
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    background: no-repeat center;
  }
  .favorites{
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    color:$mainColor;
  }
  .isCollect{
    color: #cccccc;
  }
  .up_time{
    font-size: 1.7rem;
    color: #707070;
    flex: 1;
    text-align: right;
  }
  .text_introduces_header_bottom{
    width: 100%;
    border-bottom: solid 1px #c9c9c9;
  }
  .text_introduces_header_bottom p{
    /*font-family: SimSun;*/
    width: 100%;
    font-size:  2.2rem;
    color: #535353;
  }
  .unfold{
    margin: 1rem 0;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .down_box{
    display: flex;
    justify-content: center;
  }
  #downe_img{
    width: 4rem;
    height: 4rem;
    background: url("../../../images/icon/down.png")no-repeat center;
  }
  #downe_img.active{
    background: url("../../../images/icon/up.png")no-repeat center;
  }
  /*.menusList_ul{*/
  /*!*margin: 2.7rem 0;*!*/
  /*!*padding: 0;*!*/
/*}*/
  .menusList_li{
    /*background-color: #1a9fff;*/
    display: flex;
    margin-top: 2.7rem;
    border-radius: 0.5rem;
    background-color: $mainColor;
    border-radius: 5rem;
  }
  .noBcgColer{
    background-color: #fff;
    border: solid 1px #7f7f7f;
  }
  .menusList_li_img{
    width: 10rem;
    height: 10rem;
  }
  .menusList_li_text{
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .menusList_li_text p{
    font-size: 2.8rem;
    color: #ffffff;
    line-height: 6.7rem;
  }
</style>
