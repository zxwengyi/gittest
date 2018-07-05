<template>
  <div class="loginAndRegist">
    <!--顶部导航-->
    <head-top go-back='true'></head-top>
    <section class="content" :style="{backgroundImage: 'url('+ backgroundImg +')'}">
      <section class="top">
        <div class="top_logo">
          <div class="top_img" :style="{backgroundImage: 'url('+ logImg +')'}">
            <!--<p>LOGO</p>-->
          </div>
        </div>
      </section>
      <section class="loginForm">
        <div class="input_container phone_number" >
          <input type="text" placeholder="请填写手机号码" name="phone" maxlength="11" v-model="phoneNumber">
        </div>
        <div class="input_container password" >
          <div class="passWord_box">
            <input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">
            <input v-else type="text" placeholder="请输入密码"  v-model="passWord">
            <span class="right_img" @click="changePassWordType"></span>
          </div>
        </div>
        <div class="loge_btn" @click="mobileLogin">
          <div class="loge"> <p>登录</p></div>
        </div>
      </section>
      <section class="bottom">
        <div><p>有问题？请点这里</p></div>
      </section>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </section>
  </div>
</template>
<script>
  import headTop from '../communal/header/head'
  import alertTip from '../communal/alertTip'
  export default {
    name: 'loginAndRegist',
    data () {
      return {
        userInfo: false,
        passWord: null,
        phoneNumber: null,
        showPassword: false,
        showAlert: false,
        alertText: null,
        backgroundImg: require('../../images/bg.png'),
        logImg: require('../../images/logo.png')
      }
    },
    methods: {
      addPath (path) {
        this.$router.push(path)
      },
      changePassWordType () {
        this.showPassword = !this.showPassword
      },
      mobileLogin () {
        if (!this.rightPhoneNumber) {
          console.log('rightPhoneNumber')
          this.showAlert = true
          this.alertText = '请输入正确的手机号'
          return
        } else if (!this.passWord) {
          console.log('passWord')
          this.showAlert = true
          this.alertText = '请输入密码'
          return
        } else {
          this.addPath('/articles')
        }
      },
      closeTip () {
        this.showAlert = false
      }
    },
    components: {
      headTop,
      alertTip
    },
    computed: {
      // 判断手机号码
      rightPhoneNumber: function () {
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .loginAndRegist{
    width: 100%;
    height: 100%;
  }
  .content{
    width: 100%;
    height: 100%;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    margin-top: 8rem;
    background: no-repeat;
    background-size: 100% 100%;
  }
  .top_logo{
    position: relative;
    top: -10rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
  }
  .top_img{
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    /*border: solid 2px #7f7f7f;*/
    display: flex;
    justify-content: center;
    background: no-repeat center;
  }
  .top_img p{
    line-height: 14rem;
  }
  .loginForm{
    margin: 0 2rem;
  }
  .input_container{
    display: flex;
    margin-bottom: 1rem;
  }
  .input_container input{
    width: 100%;
    font-size: 3rem;
    line-height: 6rem;
    border: solid 2px #7f7f7f;
  }
  .passWord_box{
    width: 100%;
    position: relative;
  }
  .passWord_box .right_img{
    width: 8rem;
    height: 100%;
    background-color: #0b97c4;
    position: absolute;
    right: 0;
    bottom: 0;
    background: url("../../images/icon/Eyeball.png") no-repeat center;
    background-size:60% 60%;
  }
  .loge_btn{
    margin-top: 8rem;
  }
  .loge_btn .loge{
    background-color: $mainColor;
    font-size: 4rem;
    width: 100%;  display: flex;
    justify-content: center;
    border-radius: 4rem;
    color: #ffffff;
  }
  .loge_btn p{
    margin-top: 1rem;
    margin: 0 ;
    line-height: 8rem;
  }
  .bottom{
    margin: 0 2rem;
    margin-top: 10rem;
  }
  .bottom p{
    text-decoration: underline;
  }
</style>
