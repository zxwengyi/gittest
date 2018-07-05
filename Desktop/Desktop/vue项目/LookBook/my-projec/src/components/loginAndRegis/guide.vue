<template>
  <div class="guide">
    <!--<section class="content">-->
      <!--<div class="guide_img"  @click="hideGuide"><p>LOGO</p></div>-->
      <!--<div class="guide_title">群文阅读</div>-->
      <!--<div class="guide_text">读书改变生活</div>-->
    <!--</section>-->
    <section class="content">
      <!--<div class="img" :style="{backgroundImage: 'url('+ guideImg +')'}">-->
      <!--<div class="img">-->
        <section class="guide_img" :style="{backgroundImage: 'url('+ guideImg +')'}">
          <div>
            <p></p>
          </div>
        </section>
        <section class="guide_text">
          <div class="content_text"><p>知识改变命运，阅读改变思维！</p></div>
          <div class="content_btn" @click="addPath('/loginAndRegist')"><p>进入APP</p></div>
        </section>
      <!--</div>-->
    </section>
  </div>
</template>
<script>
  export default {
    name: 'guide',
    timer: '',
    path: '',
    data () {
      return {
        guideImg: require('../../images/guide01.png'),
//        guideImg: require('../../images/guide.png'),
        userInfo: false
      }
    },
    methods: {
      addPath (path) {
        clearTimeout(this.timer)
        this.$router.push(path)
      },
      hideGuide () {
        if (this.userInfo) {
          this.path = '/articles'
        } else {
          this.path = '/loginAndRegist'
        }
        var self = this
        this.timer = setTimeout(function () {
          self.$router.push('/loginAndRegist')
        }, 3000)
      }
    },
    mounted: function () {
//      this.hideGuide()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .guide{
  @include allcover();
    width: 100%;
    height: 100%;
    /*z-index: 9999;*/
    background-color: #fff;
    display: flex;
    justify-content: center;
  }
  .content{
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    color: #7f7f7f;
  }
  .content .guide_img{
    width: 100%;
    flex: 2;
  }
  .content .guide_text{
    flex: 1;
  }
  .content_text{
    font-size: 3rem;
    color: #1b1b1b;
  }
  .content_btn{
    margin: 6rem 2rem;
  }
  .content_btn p{
    margin: 0 6rem;
    border: solid 2px $mainColor;
    line-height: 8rem;
    color: $mainColor;
    text-align: center;
    border-radius: 4rem;
  }
  .guide_img{
    height: 40rem;
    width: 40rem;
    background-color: #0b97c4;
    border-radius: 50%;
    background: no-repeat center;
    display: flex;
    justify-content: center;
 }
  .guide_img p{
    line-height: 12rem;
    color: #ffffff;
  }
</style>
