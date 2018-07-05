<template>
  <div id="articles" @checkmark="hidaCheckmark">
    <!--顶部导航-->
    <head-top go-back='' title='true'  headTitle=悦读文 message ='true' @showCheckmark="showCheckmark"></head-top>
    <!-- 侧边目录 -->
    <transition  v-on:before-enter="beforeEnter"
                 v-on:enter="enter">
      <directories v-if="directoriesShow" v-on:checkmark="checkmark"></directories>
    </transition>
    <!--轮播图-->
    <nav class="msite_nav">
      <mt-swipe :auto="3000" :speed="500"  @change="handleChange">
        <mt-swipe-item v-for="(item,index) in carouselImgList" :style="{backgroundImage: 'url('+ item.imgUrl +')'}" :key="index"></mt-swipe-item>
      </mt-swipe>
      <div class="cover"></div>
    </nav>
    <section class="articles-main">
      <section class="menu_container">
        <ul class="menu_container_ul">
          <li v-for="(item,index) in showMoreResponse(bookList)" :key="index" class="menu_container_li" @click="addPath(index)">
            <div class="item_left">
              <div class="item_left_img" :style="{backgroundImage: 'url('+ item.bookImg +')'}"></div>
            </div>
            <div class="item_mian">
              <span class="item_mian_title">{{item.bookName}}</span>
              <span class="item_mian_introduce fs30" v-html="item.bookTheme"></span>
              <div class="item_mian_participants">
                <div class="item_mian_participants_left">
                  <span class="item_mian_participants_img" :style="{backgroundImage: 'url('+ writeImg +')'}"></span>
                  <span class="item_mian_participants_number">{{item.lookedNumber}}人参与</span>
                </div>
              </div>
            </div>
            <div class="item_right">
              <circle-temp :percent="item.lookedProgress"></circle-temp>
            </div>
          </li>
          <div class="lookMore" v-if="bookList.length > 2" :class="{active: !isFixationHight}">
            <p class="lookMore_img" :style="{backgroundImage: 'url('+ lookMoreImg +')'}"></p>
            <p @click="lookMore()">{{lookMoreText}}</p>
          </div>
        </ul>
        <div class="music" @click="goMusic('/music')">
          <p>唱响古今</p>
        </div>
      </section>
    </section>
    <!--底部导航-->
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import loginAndRegist from '../loginAndRegis/loginAndRegist'
  import guide from '../loginAndRegis/guide'
  import headTop from '../communal/header/homeHeader.vue'
  import footGuide from '../communal/footer/foot'
  import directories from './directories'
  import circleTemp from '../communal/circle'
  import {mapState, mapMutations} from 'vuex'
  import Velocity from 'velocity-animate'
  export default {
    name: 'articles',
    foodTypes: [],
    data () {
      return {
        article: '首页',
        showGuide: true,
        directoriesShow: false,
        isFixationHight: true,
        lookMoreText: '查看更多...',
        isGoNextPath: false,
        writeImg: require('../../images/icon/Write.png'),
        lookMoreImg: require('../../images/icon/down.png')
      }
    },
    mounted () {
    },
    components: {
      headTop,
      footGuide,
      guide,
      loginAndRegist,
      directories,
      circleTemp
    },
    methods: {
      ...mapMutations(['CLICK_BOOKLIST', 'SWICH_POEM', 'SWICH_CATALOGUE']),
      addPath (index) {
        this.CLICK_BOOKLIST({index: index, type: 'list'})
        this.$router.push('/textIntroduces')
      },
      goMusic (index) {
        this.$router.push(index)
        this.SWICH_POEM({index: 0})
      },
      hideLoading () {
        let timer = setInterval(function () {
          clearInterval(timer)
        }, 1000)
      },
      showCheckmark (index) {
        this.directoriesShow = !this.directoriesShow
        this.SWICH_CATALOGUE({index: index, type: 'showCatalogue'})
      },
      checkmark (index) {
        console.log('======' + index)
        if (index >= 0) {
//          console.log(index % 5)
          var self = this
          setTimeout(function () {
            self.addPath(index % 5)
          }, 500)
        } else {
          this.directoriesShow = !this.directoriesShow
        }
      },
      lookMore () {
        this.isFixationHight = !this.isFixationHight
        console.log(this.isFixationHight)
      },
      hidaCheckmark () {
        console.log('+++++++++++++++++++++++++++++')
        this.isFixationHight = false
      },
      showMoreResponse (item) {
        if (this.isFixationHight === true) {
          this.lookMoreText = '查看更多...'
          this.lookMoreImg = require('../../images/icon/down.png')
          return item.slice(0, 3)
        } else {
          this.lookMoreText = '收起更多...'
          this.lookMoreImg = require('../../images/icon/up.png')
          return item
        }
      },
      handleChange (index) {
//        console.log(index)
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 0}, { duration: 100 })
        Velocity(el, {opacity: 1}, {duration: 500}, { complete: done })
//        Velocity(el, {opacity: 0, rotateY: '0deg', scale: '1'}, { duration: 100 })
//        Velocity(el, {opacity: 1, rotateY: '360deg', scale: '1'}, {duration: 500}, { complete: done })
      }
    },
    computed: {
      ...mapState(['bookList', 'carouselImgList', 'poemObj', 'currentPoemObj'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  #articles{
  @include sc(2.5rem, #000);
  }
  .mint-swipe{
    margin-top: 7.3rem;
    background-color: #fff;
    height: 26rem;
  }
  .msite_nav{
    margin-top: 7.3rem;
    background-color: #fff;
    height: 26rem;
  }
  .cover{
    position: relative;
    height: 3.3rem;
    background-color:rgba(0,0,0,0.1);
    /*z-index: 1;*/
    bottom: 3.3rem;
    /*opacity: 0.2;*/
  }
  .articles-main{
    /*perspective: 90000px;  !* 给父盒子*!*/
    transform-style: preserve-3d;
    /*perspective-origin: 100px  100px;*/
  }
  .articles-main-title {
    display: flex;
    justify-content:space-between;
    background-color: #fff;
    border-bottom: 2px solid #ebebeb;
     @include sc(3rem, #000);
    box-shadow: 5px 5px 10px #999;;
  }
  .articles-main-title div:first-child{
    margin-left: 2.5rem;
    color: #313131;
    font-size: 2.7rem;
  }
  .mint-swipe-indicator{
    /*height: 1rem;*/
    /*width: 1rem;*/
  }
  .articles-title-right{
    position: relative;
    left: 2.5rem;
    margin-right: 2.5rem;
    color:#ffffff ;
    width: 13.7rem;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
  }
  .articles-main-title div span{
    line-height: 6.7rem;
    top: 1rem;
  }
  .menu_container_ul{
    background-color: #f8f8f8;
    padding: 1.1rem 0;
  }
  .menu_container_li{
    list-style: none;
    height: 20rem;
    display: flex;
    margin: 2rem;
    justify-content: space-between;
    /*border-bottom: 2px solid #ebebeb;*/
    border-radius: 1rem;
    border: 1px solid #f1f1f1;
    background-color: #ffffff;
    /*box-shadow: 0px 3px 3px rgba(0,0,0,0.1);*/
  }
  .item_left{
    flex: 1;
    display:flex;
  }
  .item_left_img{
    width: 12rem;
    height: 16.8rem;
    margin: 1.3rem;
    margin-right: 1.7rem ;
    background: no-repeat;
    background-size:100% 100%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  }
  .item_mian{
    flex:3;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
  }
  .item_mian_title{
    font-size: 2.5rem;
    color: $titleColor;
  }
  .item_right{
    position: relative;
    flex: 1;
    display: flex;
  }
  .ivu-chart-circle{
    margin: auto;
  }
.item_mian_introduce{
  font-size: 2.2rem;
  color: $intrColor;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
  .item_mian_participants{
    font-size: 2.2rem;
    color: $numberColor;
    display: flex;
    justify-content: space-between;
  }
  .item_mian_participants_left{
    display: flex;
  }
  .item_mian_participants_img{
    width: 4rem;
    height: 3rem;
    background:no-repeat center;
  }
  /* 唱响估计 */
  .menu_container .music{
    margin: 2rem 2.6rem 14.2rem;
    display: flex;
    height: 7.8rem;
    justify-content: center;
    border-radius:4rem;
    background: $mainColor;
    /*box-shadow: 0px 3px 3px #999;*/
  }
  .menu_container .music p{
    text-align: center;
    line-height: 8rem;
    font-size: 3rem;
    color: #ffffff;
  }
  .menu_container .music p::before{
    content:"";
    margin-right: 2rem;
    padding-right: 2rem;
    background: url("../../images/icon/首页_下拉_03.png")no-repeat center;
    background-size:100% 60% ;
  }
  .lookMore{
    display: flex;
    justify-content: center;
  }
  .lookMore p{
    color: $mainColor;
    line-height: 4rem;
  }
  .lookMore_img{
    margin: 1rem 1rem;
    width: 3rem;
    height: 3rem;
    background: no-repeat;
    background-size: 100% 60%;
  }
  /*.lookMore p::before{*/
    /*content:"";*/
    /*margin-right: 0.5rem;*/
    /*padding-right: 2rem;*/
    /*top: 1rem;*/
    /*background: url("../../images/icon/down.png")no-repeat;*/
    /*background-size: 100% 60%;*/
  /*}*/
  /*.lookMore.active p::before{*/
    /*background: url("../../images/icon/up.png")no-repeat center;*/
  /*}*/
  .mint-swipe-item{
    background: no-repeat;
    background-size: 100% 100%;
  }
</style>
