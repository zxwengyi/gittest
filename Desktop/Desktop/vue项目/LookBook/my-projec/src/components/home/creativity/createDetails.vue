<template>
  <div class="creativity_detail">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  :headTitle='headTitle'></head-top>
    <section class="main">
      <section class="creativity_img">
          <div class="img_box" :style="{backgroundImage: 'url('+currentBook.createObj.recommendBgImg +')'}">
            <img :src="currentBook.createObj.recommendImg" alt="">
          </div>
      </section>
      <section class="creativity_btn">
        <div v-if="!isShow" class="creativity_btn_div" @click="submit">
          <div class="creativity_btn_left">
            <div class="creativity_btn_img">
              <span :style="{backgroundImage: 'url('+submitUrl +')'}"></span>
              <!--<Icon type="paper-airplane" size="35"></Icon>-->
            </div>
            <span>提交</span>
          </div>
        </div>
        <div v-if="!isShow" class="creativity_btn_div" @click="addPath('/uploadPictures')">
          <div class="creativity_btn_right">
            <div class="creativity_btn_img">
              <span :style="{backgroundImage: 'url('+updateUrl +')'}"></span>
              <!--<Icon type="arrow-up-a" size="40"></Icon>-->
            </div>
            <span v-if="!isShow" @click="">上传</span>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '乐创编',
        isShow: false,
        dataUrl: require('../../../images/activity.png'),
        submitUrl: require('../../../images/icon/submit.png'),
        updateUrl: require('../../../images/icon/updata.png'),
        styleObject: {
          backgroundColor: '#0b97c4;'
        }
      }
    },
    methods: {
      ...mapMutations(['SUBMIT_CREATE', 'SUBMIT_CREATE', 'CHOOSE_CREATE']),
      addPath (path) {
        this.$router.push(path)
      },
      updataView (path) {
        this.$router.push(path)
      },
      //    提交
      submit () {
        var createObj = {
          discuss: this.currentBook.createObj.discuss,
          name: '我',
          time: '2017/10/16',
          CompleteNumber: 0,
          likeNumber: 0,
          isLiked: false,
          likeImg: require('../../../images/icon/thumbs.png'),
          headerImg: this.currentBook.createObj.recommendImg,
          recommendImg: this.currentBook.createObj.recommendImg,
          recommendBgImg: this.currentBook.createObj.recommendBgImg,
          discussionList: []
        }
        this.SUBMIT_CREATE({createObj: createObj})
        this.CHOOSE_CREATE({index: 0})
        this.$router.push({name: 'createComplete', params: {backSteep: -2}})
      }
    },
    components: {
      headTop
    },
    computed: {
      ...mapState(['currentBook', 'currentCreateObj'])
    },
    created: function () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .main{
    position: fixed;
    top:7.3rem;
    left: 0;
    right: 0;
    bottom: 8.2rem;
  }
  .creativity_img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .creativity_img .img_box{
    height: 100%;
    width: 100%;
    padding: 2%;
    background: no-repeat;
    background-size:100% 100%;
    display: flex;
    justify-content: center;
  }
  .img_box img{
    margin: auto;
    /*height: 100%;*/
    width: 100%;
  }
  .creativity_btn{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 2rem;
    height: 8.2rem;
    display: flex;
    /*background: #cccccc;*/
    color: $mainColor;
    display: flex;
    justify-content: space-between;
  }
  .creativity_btn .creativity_btn_div{
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .creativity_btn_left,.creativity_btn_right{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .creativity_btn_img{
    /*height: 40%;*/
    display: flex;
    justify-content: center;
  }
  .creativity_btn_img span{
    height: 3rem;
    width: 2rem;

    /*background-color: #0b97c4;*/
  }
 .creativity_btn_left .creativity_btn_img span{
   background: url("../../../images/icon/Trash_can.png")no-repeat center;
 }
  .creativity_btn_right .creativity_btn_img span{
    background: url("../../../images/icon/Share.png")no-repeat center;
  }
  .creativity_btn .ivu-icon{
    line-height: 3rem;
  }
</style>
