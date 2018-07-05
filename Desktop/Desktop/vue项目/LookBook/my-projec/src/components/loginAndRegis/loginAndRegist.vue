<template>
  <div class="loginAndRegist" :style="{backgroundImage: 'url('+ backgroundImg +')'}">
    <section class="top">
        <div class="top_logo">
          <div class="top_img" :style="{backgroundImage: 'url('+ logImg +')'}">
            <!--<p>LOGO</p>-->
          </div>
        </div>
    </section>
    <section class="but_list">
      <div class="top_text" >
        <p>登录后才能享有更多功能喔！</p>
      </div>
      <div class="btn">
        <div class="loge_btn btn_item" @click="addPath('/login')"><p>登录</p></div>
        <div class="regist_btn btn_item" @click="addPath('/register')"><p>注册</p></div>
        <div class="look_around btn_item" @click="addPath('/articles')"><p>先去看看</p></div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'loginAndRegist',
    data () {
      return {
        userInfo: false,
        backgroundImg: require('../../images/loginbg.png'),
        logImg: require('../../images/logo01.png')
      }
    },
    methods: {
      addPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .loginAndRegist{
  @include allcover();
    width: 100%;
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: center;
    font-size: 4rem;
    background: no-repeat;
    background-size: 100% 100%;
    /*margin-top: 8rem;*/
  }
  .top_logo{
    position: relative;
    top: 2rem;
    display: flex;
    justify-content: center;
  }
  .top_img{
    height: 40rem;
    width: 40rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background: no-repeat center;
  }
  .top_img p{
    line-height: 20rem;
  }
  .top_text p{
    font-size:3rem;
    margin: 4rem 0 4rem;
    display: flex;
    justify-content: center;
    color: $mainColor;
  }
  .but_list{
    position: relative;
    top: -6rem;
    /*padding-top: 15rem;*/
    margin: 0rem 5rem;
  }
  .btn div{
    background-color: $mainColor;
    text-align: center;
    color: #ffffff;
    margin-bottom: 3rem;
    border-radius: 4rem;
  }
  .btn div:nth-child(2){
    background-color: $assistColor;
  }
  .btn div:last-child p{
    background-color: #ffffff;
    color: $mainColor;
    border: solid 1px $mainColor;
    border-radius: 4rem;
  }
  .btn div p{
    line-height: 8rem;
  }
</style>
