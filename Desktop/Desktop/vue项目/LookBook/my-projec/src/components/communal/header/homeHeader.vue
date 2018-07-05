<template>
  <header id='head_top' v-bind:class="classBgc">
    <!--<section class="head_goback" v-if="goBack" @click="addPath()" >-->
      <!--<div class="goback_box">-->
        <!--&lt;!&ndash;<p class="goback_img"></p>&ndash;&gt;-->
        <!--<p class="goback_img" :style="{backgroundImage: 'url('+ goBackImg +')'}"></p>-->
      <!--</div>-->
    <!--</section>-->
    <router-link :to="'/message'" class="head_message" v-if="message">
      <div class="message_box">
        <p class="message_img" :style="{backgroundImage: 'url('+ messageImg +')'}">
          <div class="head_message_number" v-if="messageList.length > 0">
        <p>{{messageList.length}}</p>
      </div>
      </p>
      </div>
    </router-link>
    <section class="title_head ellipsis" v-if="title" @click="hidefootee(1)">
      <span class="title_text" :class="{scaleFontSize: headTitle.length > 8}">{{headTitle}}</span>
    </section>
    <!--<section class="head_submit" @click="clickCatalogue">-->
      <!--<div class="submit_box">-->
        <!--<p>...</p>-->
      <!--</div>-->
    <!--</section>-->
    <!--<router-link :to="'/message'" class="head_submit" v-if="message">-->
      <section class="head_submit" @click="clickCatalogue">
        <div class="message_box">
          <p class="message_img" :style="{backgroundImage: 'url('+ clickCataImg +')'}"></p>
        </div>
      </section>
  </header>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'header',
    data () {
      return {
        classBgc: {
          classBgc: true
        },
        clickCataImg: require('../../../images/icon/catalogue.png'),
        messageImg: require('../../../images/icon/Message.png')

      }
    },
    mounted () {
    },
    props: ['goBack', 'headTitle', 'message', 'title', 'backSteep', 'submit', 'path'],
    methods: {
      hidefootee (itemId) {
        console.log(this.$root)
        console.log(this.$parent)
        this.$emit('hidefoote', itemId)
      },
      clickCatalogue () {
        this.$emit('showCheckmark')
      },
      addPath () {
        // console.log(this.backSteep)
        if (this.backSteep !== undefined) {
          this.$router.go(this.backSteep)
          // console.log('ggggggg')
          return
        }
        if (this.path !== undefined) {
          this.$router.push(this.path)
          // console.log('bbbbbbb')
          return
        }
        if (this.backSteep === undefined && this.path === undefined) {
          this.$router.go(-1)
          // console.log('cccccc')
          return
        }
      }
    },
    computed: {
      ...mapState(['messageList'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  #head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 7.3rem;
    width: 100%;
  }
  .classBgc{
    /*background: url("../../../images/icon/导航栏.png");*/
    /*background-color: #00a0e9  ;*/
    background-color: #ffffff  ;
    box-shadow: 0px -10px 50px 10px rgba(0, 0, 0, 0.1);
    /*box-shadow: -10px 0px 10px #dddddd;*/

  }
  .head_goback,.head_message,.head_submit{
    position: absolute;
    width: 7.3rem;
    height: 100%;
  }
  .goback_box, .message_box,.submit_box{
    width: 100%;
    height: 100%;
  }
  .goback_img,.message_img{
    width: 100%;
    height: 100%;
  }
  .goback_img{
    background: no-repeat center;
    /*background-size:60% 60%;*/
  }
  .message_img{
    background: no-repeat center;
    /*background-size:65% 65%;*/
  }
  .head_goback{
    z-index: 2;
  }
  .head_message{
    margin-left: 1rem;
    right: 0;
  }
  .head_submit{
    /*margin-right: 2.5rem;*/
    /*right: 0;*/
  }
  .title_head {
    position: absolute;
  @include center;
    width: 80%;
    height: 5rem;
    text-align: center;
  }
  .title_head span{
    @include ct;
    @include cl;
    color: $navTitle;
    margin-top: -1rem;
  }
  .title_text{
  @include sc(3rem, #000);
    text-align: center;
    line-height: 3.4rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    font-weight: 700;
    -webkit-line-clamp:1;
  }
  .head_message_number{
    position: absolute;
    left: 1rem;
    top: 1.5rem;
    background: red;
    width: 2rem;
    height: 2rem;
    display: flex;
    border-radius: 50%;
  }
  .head_message_number p{
    margin: auto;
    line-height: 2rem;
    font-size: 1.5rem;
    color: #ffffff;
  }
  .scaleFontSize{
    font-size: 2.5rem;
  }
  .submit_box{
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .submit_box p{
    font-size: 2.5rem;
    line-height: 88px;
    color: $mainColor;
  }
</style>
