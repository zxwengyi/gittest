<template>
    <div>
      <!--顶部导航-->
      <head-top signin-up='home'  go-back='true' title='true'  headTitle='动态评论' message =''>
        <!--<span slot='msite-title' class="head_logo">阅读文</span>-->
      </head-top>
      <div id="content" class="topH">
        <div id="top">
          <div id="pgA-area2">
            <p class="">
              <span>{{info.userName}}</span>
              <span>{{info.descTime}}</span>
            </p>
            <p><span class="center">{{info.yiti}}</span></p>
            <!-- <p><span class="center" style="color:rgba(0,0,0,0.6)">{{info.detail}}</span></p> -->
            <p>
              <span id="chatIcon1" :style="backgroundObj2" class="font35 rgba5"></span>
              <span class="left2 font35 rgba5">{{newDiscussNum}}</span>
              <span id="thumbsIcon" :style="backgroundObj" class="right1 font35 rgba5" @click="goodFun()"></span>
              <span class="right2 font35 rgba5">{{info.goodNum}}</span>
            </p>      
          </div>
          <div id="pgA-area3">
            <textarea v-model="message" placeholder="请在这里写下你的评论。"></textarea>
            <p>
              <input class="okBtn" type="button" value="提交评论" @click="submitCommit()">
            </p>
          </div>
        </div>
        <transition enter-active-class="animated fadeIn">
        <div id="bottom">
          <div style="text-align:left;padding-top:20px;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.3)">
            精彩评论
          </div>
          <ul>
            <span id="noDiscuss" v-show="showf" style="display: inline-block;height: 100px;">暂无评论，赶紧来抢沙发吧！</span>
            <transition-group enter-active-class="animated bounceInUp">
            <li v-for="(item,index) in items2" :key="items2.length-1">
              <div id="pgA-area1" class="top10">
                  <img class="imgSize100" :src="item.imgSrc"  alt="logo">      
              </div>

              <div id="pgA-area2">
                <p>
                  <span>{{item.userName}}</span>
                  <span>{{item.descTime}}</span>
                </p>
                <p><span class="center" style="font-size:30px;color:rgba(0,0,0,0.5)">{{item.yiti}}</span></p>
                <!-- <p>
                  <span class="font35 rgba5">评论数</span>
                  <span class="font35 rgba5">{{item.discussNum}}</span>
                  <span class="right1 font35 rgba5">点赞数</span>
                  <span class="right2 font35 rgba5">{{item.goodNum}}</span>
                </p>    --> 
              </div>
            </li>
            </transition-group>
          </ul>
        </div>
      </transition>
      </div>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
    
</template>

<script>
  import headTop from '../../communal/header/head'
  import store from '@/store/index'
  import alertTip from '../../communal/alertTip'
  export default {
    name: 'discussInfo',
    data () {
      return {
        message: '',
        info: {},
        showf: true,
        backgroundObj: {
          background: 'url(' + require('./../../../assets/GeneralIcon/thumbs.png') + ') 0px 0.8rem/3rem no-repeat'
        },
        backgroundObj2: {
          background: 'url(' + require('./../../../assets/GeneralIcon/Chat.png') + ') -0.8rem -0.4rem/5rem no-repeat'
        },
        showAlert: false,
        alertText: null,
        items: [
          {
            imgSrc: require('./../../../assets/logo.png'),
            userName: '金闪闪',
            descTime: '刚刚',
            yiti: '为什么皇帝的新衣中大家都不敢说真话',
            detail: '因为皇帝太虚荣爱面子，怕被人嘲笑，大臣们又怕惹怒皇帝，所以大家都不敢说真话',
            discussNum: this.discussNum,
            goodNum: this.goodNum
          }
        ],
        items2: [
        ]
      }
    },
    components: {
      headTop, alertTip
    },
    computed: {
      newDiscussNum () {
        return (store.state.discussInfo[this.info.discussInfoId].length)
      }
    },
    methods: {
      discussInfo (path) {
        this.$router.push(path)
      },
      goodFun () {
        this.backgroundObj.background = 'url(' + require('./../../../assets/GeneralIcon/thumbs_yes.png') + ') 0px 0.8rem/3rem no-repeat'
        // 点赞更新vueX
        let arr = store.state.publicActiveInfo[this.info.userInfoID]
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].discussInfoId === this.info.discussInfoId) {
            if (!arr[i].isThumbs) {
              this.info.goodNum++
              arr[i].goodNums = this.info.goodNum
              arr[i].isThumbs = true
            }
            break
          }
        }
      },
      closeTip () {
        this.showAlert = false
      },
      submitCommit () {
        if (this.message.trim() !== '') {
          var now = new Date()
          // var year = now.getFullYear()
          var month = now.getMonth() + 1
          var day = now.getDate()
          var hour = now.getHours()
          var minute = now.getMinutes()
          // var second = now.getSeconds()
          // var mytime = now.toLocaleTimeString()
          var timer = month + '-' + day + ' ' + hour + ':' + minute
          this.items2.unshift(
            {
              imgSrc: store.state.userInfo['24454565'].logoImgSrc,
              userName: store.state.userInfo['24454565'].userName,
              descTime: timer,
              yiti: this.message
            }
          )
          let object = {
            userInfoID: '24454565',
            theme: this.message,
            time: timer,
            discussNum: '0',
            goodNums: '0'
          }
          store.state.discussInfo[this.info.discussInfoId].push(object)
          // console.log(store.state.discussInfo[this.info.discussInfoId])
          // 评论更新vueX
          let arr = store.state.publicActiveInfo[this.info.userInfoID]
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].discussInfoId === this.info.discussInfoId) {
              arr[i].discussNum = store.state.discussInfo[this.info.discussInfoId].length
              break
            }
          }
          this.message = ''
          this.showf = false
        } else {
          this.showAlert = true
          this.alertText = '评论不允许为空，请输入内容！'
        }
      }
    },
    created: function () {
      this.info = this.$route.params.info
      // 加载评论
      // console.log(this.info)
      if (this.info.isThumbs) {
        this.backgroundObj.background = 'url(' + require('./../../../assets/GeneralIcon/thumbs_yes.png') + ') 0px 0.8rem/3rem no-repeat'
      }
      let discussInfoId = this.info.discussInfoId
      let discussContentArr = store.state.discussInfo[discussInfoId]
      if (discussContentArr.length === 0) {
        this.showf = true
      } else {
        this.showf = false
      }
      for (let i = discussContentArr.length - 1; i >= 0; i--) {
        let obj = {}
        obj['imgSrc'] = store.state.userInfo[discussContentArr[i]['userInfoID']].logoImgSrc
        obj['userName'] = store.state.userInfo[discussContentArr[i]['userInfoID']].userName
        obj['descTime'] = discussContentArr[i].time
        obj['yiti'] = discussContentArr[i].theme
        this.items2.push(obj)
      }
    },
    store
  }
</script>
<style type="text/css">
  #content #top{
    height: 100%;
    padding-top: 1rem;
    overflow: hidden;
    margin: 0 1rem;
  }
  .intent{
    text-indent: -2em;
  }
  #content #top #pgA-area2{
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    margin: 0px auto;
    background: white;
    padding:40px 15px;
    width: auto;
    box-shadow: 0px 1px 30px 3px rgba(0,0,0,.3);
  }
  #content #top #pgA-area2 p{
    height: 100%;
    width: 100%;
  }
   #content #top #pgA-area2 p:nth-child(1){
    display: flex;
    justify-content: space-between;
  }
  #content #top #pgA-area2 p:nth-child(1) span:nth-child(2){
    color: rgba(0,0,0,.5);
  }
  #content #top #pgA-area2 p:nth-child(3){
    /*text-align: center;*/
    /*display: inline-block;*/
    /*padding-right: 0.8rem;*/
  }
  #content #bottom #pgA-area2 p:nth-child(1){
    display: flex;
    justify-content: space-between;
  }
  #content #bottom #pgA-area2 p:nth-child(1) span:nth-child(2){
    color: rgba(0,0,0,.5);
    font-size: 30px;
  }
  #content #top #pgA-area2 p:nth-child(2){
    margin: 20px auto;
  }
  #content #top #pgA-area2 p:nth-child(2) span{
    border-left: 10px solid #70A595;
    padding-left: 15px;
    color:black;
    /*font-weight:bolder;*/
    font-size:36px;
  }
  #content #top #pgA-area2 p:nth-child(3){
    text-align: right;
  }
  #content #top #pgA-area3{
    padding-bottom: 20px;
    background: white;
    margin: 1rem auto;
    background: white;
    padding:0px 15px;
    box-shadow: 0px 1px 30px 3px rgba(0,0,0,.3);
  }
  #content #top #pgA-area3 textarea{
    margin-top: 1rem;
    width: 100%;
    height: 200px;
    font-size: 30px;
  }
  #content #bottom{
    padding-bottom: 20px;
    background: white;
    margin: 1rem auto;
    background: white;
    padding:0px 15px;
    margin: 0 1rem;
    box-shadow: 0px 1px 30px 3px rgba(0,0,0,.3);
  }
  #content #bottom ul li {
    height: auto;
    padding-top: 30px;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .top10{
    padding-top: 5px;
  }
  #content #top #pgA-area3 .okBtn{
    margin:4px auto 16px auto;
    font-size:30px;
    width: 30rem;
    background-color: #70A595;
    border-radius: 50rem;
    border: 0px;
    height: 80px;
    color: white;
    font-family: "微软雅黑"
 }
 .font35{
  font-size: 35px;
 }
 .rgba5{
  color: rgba(0,0,0,.5);
 }
  .rgba1{
  color: rgba(0,0,0,1);
  font-weight: 10em;
 }
 .width920{
  width: 100%;
 }
 .textIndent2{
  text-indent: 6rem;
 }
 #thumbsIcon{
  width: 60px;
  height: 57px;
  margin-bottom: -5px;
  /*background: url("./../../../assets/GeneralIcon/thumbs.png") -20px -10px no-repeat;*/
 }
  #chatIcon1{
  display: inline-block;
  margin-bottom: -5px;
  width: 60px;
  height: 57px;
  /*background: url("./../../../assets/GeneralIcon/Chat.png") -8px 2px no-repeat;*/
  background-size: 4.5rem;
 }
 .paddingleft{
  padding-left: 2rem;
 }
</style>
