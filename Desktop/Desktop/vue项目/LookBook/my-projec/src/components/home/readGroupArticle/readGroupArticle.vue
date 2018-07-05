<template>
  <div class="readGroupArticle" :class="{ keepEyeColor: isKeepEye}">
    <!--顶部导航-->
    <!--<head-top go-back='true' title='true'  :head-title="currentArticle.titel"></head-top>-->
    <head-top go-back='true'></head-top>
    <!--正文-->
    <article-temp :currentArticle="currentArticle"></article-temp>
    <!--工具栏-->
    <article-tool></article-tool>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import articleTool from '../../home/readGroupArticle/articleTool'
  import articleTemp from '../../home/readGroupArticle/articleTemp'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        eMove: '',
        transitionName: '',
        isTouch: false
      }
    },
    methods: {
      addPath (path) {
        this.$router.push(path)
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
      }
    },
    components: {
      headTop,
      articleTool,
      articleTemp
    },
    computed: {
      ...mapState([
        'currentArticle', 'articleList', 'isKeepEye'
      ])
    },
    mounted () {
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../../style/mixin.scss";
  .readGroupArticle{
    margin-top: 7.3rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow: auto;
    /*background-color: #00a000;*/
  }
.keepEyeColor{
  background-color: #e1c9a7;
  color: #000000;
  /*font-size: 4rem;*/
}
/*.article{*/
  /*background-color: #7c5e53;*/
  /*height: 100%;*/
/*}*/
.swiper-container{
  height: 100%;
}
/*.article{*/
  /*background-color: #7c5e53;*/
  /*!*height: 90%;*!*/
/*}.swiper-slide{*/
  /*height: 60rem;*/
 /*}*/
/* 上面是为了保证滑动的时候不出现抖动情况 */
.child-view {
  position: absolute;
  left:0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  background-color: #f2f2f2;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
/* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(750px, 0);
  transform: translate(750px, 0);
  transition-delay: .5s;
  -webkit-transition-delay: .5s;
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-750px, 0);
  transform: translate(-750px, 0);
  transition-delay: .5s;
  -webkit-transition-delay: .5s;
}
.slide-enter-active {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.slide-leave-active {
  -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
/* 然后写上切换时候的类名的CSS变化(这里最好看一下VUE的transition文档) */
</style>
