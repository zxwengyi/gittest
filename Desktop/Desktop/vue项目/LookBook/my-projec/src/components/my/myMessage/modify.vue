<template>
  <div>
  	<!--顶部导航-->
    <head-top  go-back='true' :path="'/myInfo'" title='true'  headTitle='修改个人信息' message =''></head-top>
    <div class="miancontent">
      <div class="titleC">
        <img :src="personInfo.logoImgSrc" class="imgSize200" alt="logo">  
        <p v-text="'ID: '+this.personInfo.ID"></p>
      </div>
      <div class="form">
        <p>
          <span>姓名：</span>
          <span @click="modifyName()" v-text="personInfo.userName"></span>
          <span><img :src="jiantou"></span>
        </p>
        <p>
          <span for="sex">性别：</span>
          <span>
            <input type="radio" name="sex" value="male" checked>男
            <input type="radio" name="sex" value="female">女
            <input type="radio" name="sex" value="no">保密
          </span>
          <span><img :src="jiantou"></span>
        </p>
        <p>
          <span>个性签名：</span>
          <span @click="modifySignature()" v-text="personInfo.signature"></span>
          <span><img :src="jiantou"></span>
        </p>
        <p>
          <span>学校：</span>
          <span v-text="schoolInfo" @click="modifySchoolInfo()"></span>
          <span><img :src="jiantou"></span>
        </p>
        <p>
          <span>班级：</span>
          <span @click="modifyClassInfo()" v-text="classInfo"></span>
          <span><img :src="jiantou"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../../communal/header/head'
  import footGuide from '../../communal/footer/foot'
  import store from '@/store/index'
  export default {
    name: 'modify',
    data () {
      return {
        sonMsg: '',
        personInfo: store.state.userInfo['24454565'],
        jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
      }
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
      modifySchoolInfo () {
        this.$router.push({name: 'modifyInfo', params: {schoolInfo: store.state.schoolInfo[this.personInfo.schoolInfoId]}})
        console.log(this.userInfo)
      },
      modifySignature () {
        this.$router.push({name: 'modifyInfo', params: {signature: this.personInfo.signature}})
      },
      modifyName () {
        this.$router.push({name: 'modifyInfo', params: {userName: this.personInfo.userName}})
      },
      modifyClassInfo () {
        this.$router.push({name: 'modifyInfo', params: {classInfo: store.state.classInfo[this.personInfo.classInfoId]}})
      }
    },
    computed: {
      schoolInfo: function () {
        return store.state.schoolInfo[this.personInfo.schoolInfoId]
      },
      classInfo: function () {
        return store.state.classInfo[this.personInfo.classInfoId]
      }
    },
    mounted: function () {
      if (this.$route.params.signature) {
        this.personInfo.signature = this.$route.params.signature
      } else if (this.$route.params.userName) {
        this.personInfo.userName = this.$route.params.userName
      }
      // console.log(document.getElementsByTagName('input')[parseInt(this.personInfo.sex) - 1])
      document.getElementsByTagName('input')[parseInt(this.personInfo.sex) - 1].setAttribute('checked', '')
    },
    store
  }
</script>

<style>
.miancontent{
    /*padding:30px ;*/ 
    font-size:36px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
    /*background: url('./../../../images/bg.png') no-repeat;
    background-size:100% auto;*/
}
 .titleC{
  padding-top: 100px;
  padding-bottom: 40px; 
  /*border-bottom: 1px solid black;*/
  background:#70A595;
 }
 .titleC p{
  color: white;
 }
 .form{
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  text-align: left;

 }
 .form p{
  padding: 20px 0px;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.15);
 }
 .form p span:first-child{
  width: 30%;
 }
 .form p span:nth-child(2){
    color: rgba(0,0,0,0.5);
    width: 70%;
 }
 .form input{
  width: 35px;
  height: 35px;
 }
</style>
