<template>
  <div id="music">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  headTitle=唱响古今></head-top>
    <section class="mian" :style="{backgroundImage: 'url('+currentPoemObj.backgroundUrl +')'}" @click="clickMain">
      <section class="music_content">
        <div class="music_content_header">
          <div class="music_content_tltle" :class="{active: currentPoemObj.title.active}"><h1>{{currentPoemObj.title.title}}</h1></div>
          <div class="music_content_author" :class="{active: currentPoemObj.author.active }"><p>{{currentPoemObj.author.author}}</p></div>
        </div>
        <div class="music_content_sentence">
          <ul>
            <li v-for="(item,index) in currentPoemObj.content" :key="index" class="music_li" :class="{active: item.sentence.active }">
              <div><p>{{item.sentence.sentence}}</p></div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="recording" v-if="isRecording"><p>{{isRecordingText}}</p></div>
      </section>
      <section class="music_but">
        <div class="music_but_botton">
          <div class="music_but_box" v-on:click.stop="playBtn('accompany')" :class="{btnAction: btnStyleList[1].playStyle}">
            <p class="left_img" :style="btnStyleList[1].playStyle?{backgroundImage: 'url('+ leftImgYes +')'}:{backgroundImage: 'url('+ leftImg +')'}"></p>
            <!--<p>伴奏</p>-->
          </div>
          <div class="music_but_box" @click.stop="playBtn('record')" :class="{btnAction: btnStyleList[2].playStyle}">
            <p class="right_img" :style="btnStyleList[2].playStyle?{backgroundImage: 'url('+ rightImgYes +')'}:{backgroundImage: 'url('+ rightImg +')'}"></p>
            <!--<p>录音</p>-->
          </div>
        </div>
        <div class="audio-box" v-on:click.stop="playBtn('playOrPause')">
          <div class="audio-box_in" :style="paused?{backgroundImage: 'url('+ playBackImg +')'}:{backgroundImage: 'url('+ pausedBackImg +')'}">
            <audio id="audio" :src="currentPoemObj.mp3Url" v-on:timeupdate="updateTime"></audio>
            <audio id="audio1" :src="currentPoemObj.mp3Url2" v-on:timeupdate="updateTime"></audio>
          </div>
        </div>
      </section>
      <transition name="bounce">
      <section class="viewHistory_menu_box" :class="{historyActive: isshowViewHistoryMenu}" @click.stop="showViewHistoryMenu">
        <div class="viewHistory_btn">
          <div class="viewHistory_img" :style="{backgroundImage: 'url('+ viewHistoryBtn +')'}"></div>
        </div>
        <div>
            <section class="viewHistory_menu" v-if="isshowViewHistoryMenu">
              <!--<div class="viewHistory_title"><p>历史记录</p></div>-->
              <ul>
                <li v-for="(item,index) in poemObj.poemList" :key="index" class="viewHistory_li" @click="swichPoem(index)">
                  <div><span>{{item.date}}</span></div>
                </li>
                <div class="viewHistory_more"><p>...</p></div>
              </ul>
            </section>
        </div>
      </section>
      </transition>
    </section>
  </div>
</template>

<script>
  import headTop from '../communal/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'articles',
    foodTypes: [],
    data () {
      return {
        dataAutoPlay: false,
        isLoop: true,
        isRecording: false,
        isRecordingText: '录音中......',
        showViewHistory: true,
        isshowViewHistoryMenu: false,
        paused: true,
        intervalTemer: '',
        playBackImg: require('../../images/poem/play.png'),
        pausedBackImg: require('../../images/poem/pause.png'),
        leftImg: require('../../images/poem/musica.png'),
        leftImgYes: require('../../images/poem/musica_yes.png'),
        rightImg: require('../../images/poem/mouse.png'),
        rightImgYes: require('../../images/poem/mouse_yes.png'),
        viewHistoryBtn: require('../../images/poem/history.png'),
        btnStyleList: [
//         播放按钮的状态
          {playStyle: false},
//         伴奏按钮的状态
          {playStyle: false},
 //         录音按钮的状态
          {playStyle: false}
        ]
      }
    },
    mounted () {
    },
    components: {
      headTop
    },
    methods: {
      ...mapMutations(['CLICK_BOOKLIST', 'UPDATE_CURRENT_TIME', 'updateDuration', 'SWICH_POEM']),
      addPath (index) {
        this.$router.push(index)
      },
      updateTime () {
        if (this.paused === false) {
          this.UPDATE_CURRENT_TIME({currentTime: parseFloat(document.getElementById('audio').currentTime)})
        } else {
//          console.log(parseFloat(document.getElementById('audio1').currentTime))
          this.UPDATE_CURRENT_TIME({currentTime: parseFloat(document.getElementById('audio1').currentTime)})
        }
      },
      playBtn (palyStyle) {
        var audioPlayer = document.getElementById('audio')
        var audioPlayer1 = document.getElementById('audio1')
        for (var i = 0; i < this.btnStyleList.length; i++) {
          this.btnStyleList[i].playStyle = false
        }
        if (palyStyle === 'playOrPause') { // 播放暂停
          this.stopaudio(audioPlayer1)
          this.stopRecording()
          audioPlayer.play()
          if (this.paused) {
            audioPlayer.play()
            this.btnStyleList[0].playStyle = true
          } else {
            audioPlayer.pause()
            this.btnStyleList[0].playStyle = false
          }
          this.paused = !this.paused
        } else if (palyStyle === 'accompany') {  // 伴奏
          this.btnStyleList[1].playStyle = true
          this.stopaudio(audioPlayer)
          audioPlayer1.play()
          this.stopRecording()
          this.paused = true
        } else if (palyStyle === 'record') {   // 录音
          this.btnStyleList[2].playStyle = true
          this.stopaudio(audioPlayer)
          this.stopaudio(audioPlayer1)
          this.paused = true
          this.isRecording = true
          var self = this
          this.intervalTemer = setTimeout(function () {
            self.isRecordingText = '录音完成'
            setTimeout(function () {
              self.isRecordingText = '录音中......'
              self.isRecording = false
              self.btnStyleList[2].playStyle = false
            }, 1000)
          }, 5000)
        }
      },
//    暂停
      stopaudio (audio) {
        audio.pause()
        audio.currentTime = 0
      },
//    结束录音
      stopRecording () {
        this.isRecording = false
        clearInterval(this.intervalTemer)
      },
//    切换诗歌
      swichPoem (index) {
        for (var i = 0; i < this.btnStyleList.length; i++) {
          this.btnStyleList[i].playStyle = false
        }
        this.paused = true
        this.SWICH_POEM({index: index})
      },
      clickMain () {
        this.showViewHistory = !this.showViewHistory
      },
      showViewHistoryMenu () {
        this.isshowViewHistoryMenu = !this.isshowViewHistoryMenu
      }
    },
    computed: {
      ...mapState(['currentPoemObj', 'poemObj'])
    },
    destroyed: function () {
      // 触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
      // 在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
      //      console.log("已销毁")
      clearInterval(this.intervalTemer)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  #articles{
  @include sc(2.3rem, #000);
  }
  .mian {
    position: fixed;
    top:7.3rem;
    left: 0;
    right: 0;
    bottom:0rem;
    background: no-repeat;
    background-size:100% 100%;
  }
  .music_but{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0rem;
  }
  .music_but_botton{
    padding: 0 12rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
  }
  .music_but_box{
    width: 50%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .music_but_box p{
    height: 100%;
    width: 100%;
    font-size: 2rem;
  }
  .left_img,.right_img{
    padding: 1rem 0;
    background:no-repeat center;
  }
  .audio-box{
    position: absolute;
    width: 8.2rem;
    height: 8.2rem;
    border-radius: 50%;
    left: 50%;
    margin-left: -4.1rem;
    bottom: 0.9rem;
    display: flex;
  }
  .audio-box_in{
    width:100%;
    height: 100%;
    margin: auto;
    border-radius: 50%;
    background: no-repeat center;
    background-size: 100% 100%;
  }
  .music_content{
    margin: 10rem 2.5rem;
    font-size: 4rem;
  }
  .music_content_tltle,.music_content_author,.music_li{
    display: flex;
    justify-content: center;
  }
  .music_content_tltle h1{
    font-size: 5rem;
  }
  .music_content_author{
    margin: 0rem 0 4rem;
    color: #707070;
  }
  .music_li{
    margin: 2rem 0;
  }
  .recording{
    position: fixed;
    width: 50%;
    height: 10rem;
    right: 0;
    bottom: 8.2rem;
    display: flex;
    justify-content: flex-end;
  }
  .recording p{
    background: rgba(0,0,0,0.2);
    padding: 1rem 2rem;
    border-radius: 1rem;
    margin: auto;
    font-size: 3rem;
    color: $mainColor;
  }
  .active{
    color: $mainColor;
  }
  .btnAction{
    animation: bounce-in .5s;
    transform: scale(1.2);
  }
  /*点击按钮动画*/
  @keyframes bounce-in {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  /*下拉菜单动画*/
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0
    }
    50% {
    }
    100% {
      opacity: 1
    }
  }
  /*历史记录*/
  .viewHistory_menu_box{
    position: fixed;
    margin: 2rem;
    right: 0;
    top: 7.3rem;
    width: 7rem ;
    height: 7rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 50%;
  }
  .historyActive{
    border-radius: 50% 50% 0 0;
  }
  .viewHistory_btn{
    width: 100%;
    height: 100%;
  }
  .viewHistory_img{
    width: 100%;
    height: 100%;
    background: no-repeat center;
  }
  .viewHistory_menu{
    position: absolute;
    right: 0;
    font-size: 2.5rem;
    color: #ffffff;
    background-color: rgba(0,0,0,0.5);
    width: 7rem;
  }
  .viewHistory_li {
    text-align: center;
    border-bottom: 1px solid #ebebeb;
  }
  .viewHistory_li span {
    line-height: 5.7rem;
    display: flex;
    justify-content: center;
  }
  .viewHistory_more p{
    text-align: center;
    margin: auto;
    line-height: 4.7rem;
    padding-bottom: 1rem;
  }
</style>
