<template>
  <div class="creativity">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  :head-title="headTitle" message='true'></head-top>
    <section class="main">
      <section class="creativity_content">
        <div class="content_img_box" @click="goCreatDitalView()">
          <img v-lazy="currentBook.createObj.recommendImg">
        </div>
        <div class="content_img_text">
          <p>{{currentBook.createObj.discuss}}</p>
        </div>
      </section>
      <ul class="creativity_ul"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="creativity_li" v-for="(item, index) in currentBook.createObj.createList" @click="addPath(item, index)">
          <section class="item_left">
            <p :style="{backgroundImage: 'url('+ item.headerImg +')'}"></p>
          </section>
          <section class="item_mian">
            <div class="item_mian_top">
              <span class="item_mian_name">{{item.name}}</span>
              <span class="participants">{{item.time}}</span>
            </div>
            <div>
              <span class="participants">{{item.discuss}}</span>
            </div>
            <div class="item_mian_bottem">
              <!--<p class="participants_img_box">-->
                <!--<span class="participants_img" :style="{backgroundImage: 'url('+ item.secDisNumImg +')'}"></span>-->
                <!--<span class="participants_likeNumber">{{item.secDisNum}}</span>-->
              <!--</p>-->
              <p class="participants_img_box" @click="thumbComments(index,item)">
                <span class="participants_img" :style="{backgroundImage: 'url('+ item.likeImg +')'}"></span>
                <span class="participants_likeNumber" :class="{activate: item.isLiked}">{{item.likeNumber}}</span>
              </p>
            </div>
          </section>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '乐创编'
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC', 'SUBMIT_COMMENT', 'THUMB_COMMMENTS', 'CHOOSE_CREATE_OBJ', 'CHOOSE_CREATE']),
      addPath (item, index) {
        this.CHOOSE_CREATE({index: index})
        this.$router.push({name: 'createComplete', params: {backSteep: -1}})
      },
      goCreatDitalView () {
        this.$router.push('/createDetails')
      },
      loadMore () {
      }
    },
    components: {
      headTop
    },
    computed: {
      ...mapState(['currentBook', 'currentCreateObj'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .creativity{
    margin-top: 5rem;
  }
  .main{
    /*margin: 0 2rem;*/
    margin-top: 8rem;
  @include sc(3rem, #000000)
  }
  image[lazy=loading] {
    width: 40px;
    height: 40px;
    margin: auto;
  }
  .content_img_box, .content_img_text{
    display: flex;
    justify-content: center;
  }
  .content_img_box img{
    margin: 2rem;
    width: 30rem;
    height: 30rem;
  }
  .creativity_ul{
    background: #dddddd;
    padding-bottom: 1rem;
    border-top: solid 1px #9f9f9f;
  }
  .creativity_li{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    margin: 0rem 1rem;
    padding: 1rem 1.3rem;
    border-bottom: solid 1px #9f9f9f;
  }
  .item_left{
    margin-right: 2rem;
    display:flex;
  }
  .item_left p{
    width: 10rem;
    height: 15rem;
    margin: auto;
    background: no-repeat;
    background-size:100% 100%;
  }
  .item_mian{
    font-size: 3rem;
  }
  .creativity_completeNumber span{
    line-height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item_mian{
    display: flex;
    flex-direction: column;
  }
  .item_mian_top{
    font-size: 2.3rem;
    color: #707070;
    display: flex;
    justify-content: space-between;
  }
  .item_mian{
    flex: 1;
  }
  .item_mian_name{
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  .item_mian_bottem{
    color: #707070;
    display: flex;
    justify-content: flex-end;
  }
  .participants{
    font-size: 2.0rem;
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
    background: no-repeat;
    background-size:70% 70%;
  }
  .participants_likeNumber{
    font-size: 2rem;
    line-height: 5rem;
  }
  .activate{
    color: $mainColor;
  }
</style>
