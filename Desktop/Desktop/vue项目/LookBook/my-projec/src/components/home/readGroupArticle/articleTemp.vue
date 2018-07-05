<template>
  <div class="articleTemp">
    <div class="article"  v-html="currentArticle.article"></div>
    <div class="long_Press_over" v-if="showLongPressView" v-on:click.stop.prevent="clickShowLongPressView">
      <div class="long_Press_tool">
        <p>划线</p>
        <p>查词典</p>
        <p>摘录</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
//  import {vueTouchStart} from '../../../js/interface'
  export default {
    name: 'articleTemp',
    data () {
      return {
        showLongPressView: false,
        eliment: '',
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
        }
      }
    },
    components: {
    },
    props: ['currentArticle'],
    methods: {
      ...mapMutations(['CHANGE_ARTICLE', 'IS_KEEPEYE']),
      gotoAddress (e) {
      },
      keepEye () {
        this.IS_KEEPEYE()
      },
      startAction (e) {
        this.vueMoves = true
        this.longTouch = true
        this.vueLeave = true
//        vueTouchStart(e, this.eliment)
        this.touchStartpoint.x = e.clientX
        this.touchStartpoint.y = e.clientY
//        console.log(e)
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
        this.vueMoves = false
      },
      endAction (e) {
        clearTimeout(this.touchTimer)
//        console.log(this.touchType)
        this.eliment.removeEventListener(this.eMove, this.moveAction)
        this.touchEndpoint.x = e.clientX
        this.touchEndpoint.y = e.clientY
        var disX = this.touchEndpoint.x - this.touchStartpoint.x
        var disY = this.touchEndpoint.y - this.touchStartpoint.y
        if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
          this.touchType = 'swipe'
          if (Math.abs(disX) > Math.abs(disY)) {
            if (disX > 10) {
              this.touchType = 'swiperight'
              console.log(this.touchType)
            }
            if (disX < -10) {
              this.touchType = 'swipeleft'
              console.log(this.touchType)
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
      },
      clickShowLongPressView (event) {
        event.cancelBubble = true
        this.showLongPressView = !this.showLongPressView
      }
    },
    computed: {
      ...mapState([
        'isKeepEye'
      ])
    },
    mounted () {
      this.isTouch = 'ontouchstart' in window
      this.eStart = this.isTouch ? 'touchstart' : 'mousedown'
      this.eMove = this.isTouch ? 'touchmove' : 'mousemove'
      this.eEnd = this.isTouch ? 'touchend' : 'mouseup'
    // 添加监听touch事件
      this.eliment = document.getElementsByClassName('articleTemp')[0]
      this.eliment.addEventListener(this.eStart, this.startAction, false)
//      document.getElementsByClassName('articleTemp')[0].addEventListener('mousedown', this.mouseMoveAction, false)
//      document.getElementsByClassName('articleTemp')[0].addEventListener('mousemove', this.mouseMoveAction, false)
//      document.getElementsByClassName('articleTemp')[0].addEventListener('touchmove', this.mouseMoveAction, false)
//      document.body.addEventListener('mousemove', this.mouseMoveAction, false)
//      document.body.addEventListener('touchmove', this.mouseMoveAction, false)
//  document.body.addEventListener('mouseup', this.mouseUpAction, false)
//  document.body.addEventListener('touchend', this.mouseUpAction, false)
//  document.body.removeEventListener('mousemove', this.mouseMoveAction)
//  document.body.removeEventListener('touchmove', this.mouseMoveAction)
//  document.body.removeEventListener('mouseup', this.mouseUpAction)
//  document.body.removeEventListener('touchend', this.mouseUpAction)
    }
  }
</script>
<style>
  .long_Press_over{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
  }
  .long_Press_tool{
    margin: auto;
    display: flex;
    justify-content: center;
    background: #000000;
    border-radius: 1rem;
    color: #ffffff;
  }
  .long_Press_tool p{
    /*border: solid 1px #ffffff;*/
    margin: 2rem;
  }
  .articleTemp_top{
    display: flex;
    justify-content: flex-end;
  }
  .keep_eye_box{
    margin: 2rem;
  }
  .article{
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .keep_eye_box .keep_eye_span{
    color:#0b97c4;
    padding: 1rem 2rem;
    border: solid 1px #0b97c4;
    border-radius: 01rem;
  }
  .articleTemp{
    padding: 2rem 2.5rem 9.2rem;
    font-size: 40px;
    /*text-indent:2em;*/
    font-family: SimSun;
    line-height: 5rem;
    /*letter-spacing: 0.4rem ;*/
  }
  .article h1{
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  }
   .article h2 {
    /*padding-top: 2rem;*/
    display: flex;
    justify-content: center;
  }
  .article span{
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .article h1{
  }
  .text_introduces{
    padding-top: 2rem;
    font-size: 2.5rem;
    color: #707070;
  }
  .article span sup, h1 sup{
    top: 0.5rem;
    color: #00A000;
  }
  .article h1{
    font-size: 4rem;
  }
  .article h2{
    font-size: 3rem;
    color: #707070;
  }
  .article .annotation{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .annotation span{
    display: flex;
    justify-content: flex-start;
  }
</style>
