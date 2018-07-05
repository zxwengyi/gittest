<template>
  <div id="articles">
    <!--顶部导航-->
    <head-top go-back='' title='true'  headTitle=悦读文 message ='true'></head-top>
    <section class="swith_btn">
      <div class="swith_btn_box">
        <div class="swith_left_btn" :class="{active: swithList[0].active}" @click="swithContent(0)">{{swithList[0].title}}</div>
        <div class="swith_right_btn" :class="{active: swithList[1].active}"@click="swithContent(1)">{{swithList[1].title}}</div>
      </div>
    </section>
    <section class="articlesContent">
      <carousel-3d>
        <slide v-for="(item, index) in bookList" :index="index">
          <img :src='item.bookImg'>
        </slide>
        <!--<slide :index="0">-->
          <!--Slide 1 Content-->
        <!--</slide>-->
        <!--<slide :index="1">-->
          <!--Slide 2 Content-->
        <!--</slide>-->
      </carousel-3d>
      <!--<div class="slide">-->
        <!--<div class="slideshow">-->
       <!--<transition name="slideFade">-->
        <!--<ul class="slide_ul" :style="{ width: screenWidth*bookList.length + 'px'}">-->
            <!--<li class="slide_li" v-for="(item, index) in bookList" :key="index"-->
            <!--:style="{ width: screenWidth + 'px'}">-->
              <!--<img :src='item.bookImg'>-->
            <!--</li>-->
          <!--</ul>-->
       <!--</transition>-->
        <!--</div>-->
      <!--</div>-->
    </section>
    <!--底部导航-->
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import loginAndRegist from '../loginAndRegis/loginAndRegist'
  import guide from '../loginAndRegis/guide'
  import headTop from '../communal/header/head'
  import footGuide from '../communal/footer/foot'
  import { Carousel3d, Slide } from 'vue-carousel-3d'
  import directories from './directories'
  import circleTemp from '../communal/circle'
  import {mapState, mapMutations} from 'vuex'
  import $ from 'jquery'
  const SCREEN_WIDTH = document.body.clientWidth // 网页可见区域宽
//  const SCREEN_HEIGHT = document.body.scrollHeight // 网页正文全文高
  export default {
    name: 'articles',
    foodTypes: [],
    data () {
      return {
        screenWidth: SCREEN_WIDTH,
        eliment: '',
        elimentUl: '',
        removeNumber: 0,
        touchTimer: '',
        isTouch: false,
        vueLeave: true,
        longTouch: true,
        vueMoves: true,
        touchType: '',
        eStart: '',
        eMove: '',
        eEnd: '',
        touchStartpoint: {
          x: 0,
          y: 0
        },
        touchEndpoint: {
          x: 0,
          y: 0
        },
        swithList: [
          {title: '推荐', active: true},
          {title: '全部', active: false}],
        article: '首页',
        showGuide: true,
        directoriesShow: false,
        isFixationHight: true,
        lookMoreText: '查看更多...',
        isGoNextPath: false,
        writeImg: require('../../images/icon/Write.png')
      }
    },
    mounted () {
      this.isTouch = 'ontouchstart' in window
      this.eStart = this.isTouch ? 'touchstart' : 'mousedown'
      this.eMove = this.isTouch ? 'touchmove' : 'mousemove'
      this.eEnd = this.isTouch ? 'touchend' : 'mouseup'
      // 添加监听touch事件
      this.eliment = document.getElementsByClassName('articlesContent')[0]
      this.elimentUl = document.getElementsByClassName('slide_ul')[0]
      this.eliment.addEventListener(this.eStart, this.startAction, false)
    },
    components: {
      headTop,
      footGuide,
      guide,
      loginAndRegist,
      directories,
      circleTemp,
      Carousel3d,
      Slide
    },
    methods: {
      ...mapMutations(['CLICK_BOOKLIST', 'SWICH_POEM', 'SWICH_CATALOGUE']),
      addPath (index) {
        this.CLICK_BOOKLIST({index: index, type: 'list'})
        this.$router.push('/textIntroduces')
      },
      swithContent (index) {
        for (var i = 0; i < this.swithList.length; i++) {
          this.swithList[i].active = false
        }
        this.swithList[index].active = true
      },
      startAction (e) {
        this.vueMoves = true
        this.longTouch = true
        this.vueLeave = true
        this.touchStartpoint.x = e.clientX
        this.touchStartpoint.y = e.clientY
        console.log('this.isTouch=====' + this.isTouch)
        console.log(this.touchStartpoint.x)
        var self = this
        this.touchTimer = setTimeout(function () {
          console.log(self.vueLeave + '++++++++++++++++++' + self.vueMoves)
          if (self.vueLeave && self.vueMoves) {
            self.touchType = 'longPress'
            self.longTouch = false
            self.showLongPressView = !self.showLongPressView
            console.log(self.touchType)
          }
        }, 1000)
        this.eliment.addEventListener(this.eMove, this.moveAction, false)
        this.eliment.addEventListener(this.eEnd, this.endAction, false)
      },
      moveAction (e) {
        console.log(this.eMove)
        this.vueMoves = false
      },
      endAction (e) {
        clearTimeout(this.touchTimer)
        console.log(this.touchType)
        this.eliment.removeEventListener(this.eMove, this.moveAction)
        this.touchEndpoint.x = e.clientX
        this.touchEndpoint.y = e.clientY
        var disX = this.touchEndpoint.x - this.touchStartpoint.x
        var disY = this.touchEndpoint.y - this.touchStartpoint.y
//        console.log(this.touchStartpoint.x)
        console.log(this.touchEndpoint.x + '----------------' + this.touchStartpoint.x)
        if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
          this.touchType = 'swipe'
          if (Math.abs(disX) > Math.abs(disY)) {
            if (disX > 10) {
              this.touchType = 'swiperight'
              console.log(this.touchType)
              if (this.removeNumber > 0) {
                this.removeNumber--
                $(this.elimentUl).offset({left: -SCREEN_WIDTH * this.removeNumber})
              }
              console.log(this.removeNumber)
              console.log($(this.eliment).css('left'))
//              console.log(parseInt($(this.eliment).css('right')))
//              if (parseInt($(this.eliment).css('left')) < 0) {
//                $(this.eliment).offset({left: SCREEN_WIDTH * 0.5})
//               // $(this.eliment).offset({left: SCREEN_WIDTH * this.removeNumber})
//              }
//              this.removeNumber--
//              $(this.eliment).offset({left: SCREEN_WIDTH * this.removeNumber})
            }
            if (disX < -10) {
              this.touchType = 'swipeleft'
              console.log(this.touchType)
              if (this.removeNumber < this.bookList.length - 1) {
                this.removeNumber++
                $(this.elimentUl).offset({left: -SCREEN_WIDTH * this.removeNumber})
              }
              console.log(this.removeNumber)
//              console.log($(this.eliment).css('right'))
//              console.log(parseInt($(this.eliment).css('right')))
//              if (parseInt($(this.eliment).css('left')) > 0) {
//                $(this.eliment).offset({left: -SCREEN_WIDTH * 0.5})
//              }
//              this.removeNumber--
//              $(this.eliment).offset({left: SCREEN_WIDTH * this.removeNumber})
            }
          } else {
            if (disY > 10) {
              this.touchType = 'swipedown'
              console.log(this.touchType)
            }
            if (disY < -10) {
              this.touchType = 'swipeup'
              console.log(this.touchType)
            }
          }
        } else {
          if (this.longTouch && this.vueMoves) {
            this.touchType = 'tap'
            this.vueLeave = false
            console.log(this.touchType)
          }
        }
      }
    },
    computed: {
      ...mapState(['bookList', 'carouselImgList', 'poemObj', 'currentPoemObj'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  @import "../../style/slick.css";
  #articles{
  @include sc(2.5rem, #000);
  }
 .swith_btn{
   margin-top: 7.3rem;
   display: flex;
   justify-content: center;
 }
  .swith_btn_box{
    margin: 4rem;
    width: 50%;
    font-size: 3rem;
    border: solid 1px $color1;
    border-radius: 4rem;
    display: flex;
    justify-content: center;
  }
  .swith_btn_box div{
    flex: 1;
    line-height: 8rem;
    text-align: center;
  }
  .swith_btn_box div.active{
    background: $color1;
    border-radius: 4rem;
  }
  .articlesContent{
    width: 100%;
    height: 100rem;
    display: flex;
    justify-content: center;
  }
  .slide {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 100%;
  }
  .slide_ul{
    float: left;
    overflow: hidden;
    /*width: 100%;*/
  }
  .slide_li {
    display: inline-block;
    /*position: absolute;*/
  }
  img {
    /*width: 1024px;*/
    /*height: 320px;*/
  }
  .slideFade-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .slideFade-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .slideFade-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .slideFade-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
