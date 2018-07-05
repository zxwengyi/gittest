<template>
  <div>
  	<!--顶部导航-->
    <head-top  go-back='true' title='true'  headTitle='修改个人信息' message =''></head-top>
      <div class="form1">
        <p>
          <input id="textInput" type="input" :placeholder="this.palaceHolder" v-model="msg">
        </p>
         <p>
          <input @click.enter="modifyInfo" class="okBtn" type="button" value="确定">
        </p>
      </div>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
 </div>
</template>

<script>
  import headTop from '../../communal/header/head'
  import footGuide from '../../communal/footer/foot'
  import alertTip from '../../communal/alertTip'
  export default {
    name: 'modify',
    data () {
      return {
        showAlert: false,
        alertText: null,
        palaceHolder: '',
        msg: ''
      }
    },
    components: {
      headTop,
      footGuide,
      alertTip
    },
    methods: {
      closeTip () {
        this.showAlert = false
      },
      modifyInfo () {
        if (this.msg.trim() !== '') {
          if (this.$route.params.schoolInfo) {
            this.$router.push({name: 'modify', params: {schoolInfo: this.msg}})
          } else if (this.$route.params.userName) {
            this.$router.push({name: 'modify', params: {userName: this.msg}})
          } else if (this.$route.params.classInfo) {
            this.$router.push({name: 'modify', params: {classInfo: this.msg}})
          } else if (this.$route.params.signature) {
            this.$router.push({name: 'modify', params: {signature: this.msg}})
          }
        } else {
          this.showAlert = true
          this.alertText = '不允许为空，请输入内容！'
        }
      }
    },
    created: function () {
      // document.getElementById('textInput').focus()
      if (this.$route.params.schoolInfo) {
        this.msg = this.$route.params.schoolInfo
        this.palaceHolder = '请输入你的学校信息...'
      } else if (this.$route.params.userName) {
        this.msg = this.$route.params.userName
        this.palaceHolder = '请输入你的姓名...'
      } else if (this.$route.params.classInfo) {
        this.msg = this.$route.params.classInfo
        this.palaceHolder = '请输入你的班级信息...'
      } else if (this.$route.params.signature) {
        this.msg = this.$route.params.signature
        this.palaceHolder = '请输入你的个性签名...'
      }
    }
  }
</script>

<style>
.form1{
    padding:30px ;
    font-size:30px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 180px;
    text-align: center;
}
.form1 p:first-child{
  padding: 0 1rem;
  border:1px solid #70A595;
  border-radius: 8px;
}
 .form1 input{
  font-size:2.5rem;
  width: 100%;
  height: 6rem;
  border: none;
 }

  .form1 .okBtn{
    margin:50px auto;
    font-size:2.5rem;
    width: 100%;
    background-color: #70A595;
    border-radius: 8px;
    border: 0px;
    height: 6rem;
    color: white;
    font-family: "微软雅黑"
 }
</style>
