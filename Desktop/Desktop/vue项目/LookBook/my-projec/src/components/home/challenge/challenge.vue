<template>
  <div class="challenge">
    <!--顶部导航-->
    <!--<head-top go-back='true' title='true'  :head-title="currenTopic.number"></head-top>-->
    <head-top go-back='true' title='true'  :head-title="headTitle"></head-top>
    <section class="main" :style="{backgroundImage: 'url('+ backgroundImg +')'}">
      <section class="describe">
        <div class="describe_top">
          <div class="describe_top_left">
            <p class="describe_left"></p>
            <p class="describe_right">{{this.currenTopic.id + '/' + this.currentBook.topicList.length}}</p>
          </div>
          <div class="describe_top_right">
            <p>{{currentBook.challengTimer}} s</p>
          </div>
        </div>
        <div class="topic">
          <p>{{currenTopic.titel}}</p>
        </div>
      </section>
      <section class="options">
        <ul class="options_ul">
          <li class="options_li" :class="{ result: item.result }" v-for="(item, index) in currenTopic.options" :key="index" @click="chooseAnwser(index)">
           <div class="options_li_box">
             <p class="options_left">{{item.option}}</p>
             <p class="options_right">{{item.optionDetails}}</p>
           </div>
          </li>
        </ul>
      </section>
      <section class="submit" v-if="submitShow" @click="submit"><p>提交</p></section>
      <!--<section class="submit" v-if="submitShow" @click="addPath('/challengeResults')"><p>提交</p></section>-->
      <alert-temp v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertObj="alertObj"></alert-temp>
    </section>
    <!--<section class="challenge_result" v-if="showResult">-->
      <!--<challenge-result></challenge-result>-->
    <!--</section>-->
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTemp from '../../communal/alertTemp'
  import challengeResult from '../../home/challenge/challengeResults'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        backgroundImg: require('../../../images/bg.png'),
        number: '',
        headTitle: '勇挑战',
        submitShow: false,
        showAlert: false,
        alertText: null,
        showResult: '',
        alertObj: {
          alertText: '你完成了1道题',
          alertWarn: '你确定要提交吗?'
        },
        timer: 0,
        passTimer: 0,
        intervalTemer: ''
      }
    },
    methods: {
      ...mapMutations(['CHOOSE_ANWSER', 'KEEP_CHALLENG_RESULT', 'ROUTER_BACK', 'UPDATA_TIMER']),
      addPath (path) {
        this.$router.push(path)
      },
      chooseAnwser (index) {
        this.CHOOSE_ANWSER({index: index, topicID: this.currenTopic.id})
        if (this.currentBook.topicList.length === this.currenTopic.id) {
          console.log('=============================')
//          this.submitShow = true
//          直接跳转到挑战结果界面
          var self = this
          setTimeout(function () {
            self.ROUTER_BACK({steep: -2})
            self.addPath('/challengeResults')
            self.KEEP_CHALLENG_RESULT({timer: self.timer})
          }, 1000)
        }
      },
      closeTip (result) {
        this.showAlert = false
        if (result === true) {
//          进入结果界面
          this.ROUTER_BACK({steep: -2})
          this.addPath('/challengeResults')
          this.KEEP_CHALLENG_RESULT({timer: this.timer})
        } else {
//          跳转到没有做的题
        }
      },
      submit () {
        this.alertObj.alertText = '你完成了' + this.currentBook.topicList.length + '道题'
        this.showAlert = true
      },
      quizTime () {
        var self = this
        this.intervalTemer = setInterval(function () {
          self.timer++
          self.UPDATA_TIMER()
        }, 1000)
      },
      over (message, event) {
        alert(message + event)  // 弹出鼠标从我上面滑过,事件是[object MouseEvent]
      }
    },
    components: {
      headTop,
      alertTemp,
      challengeResult
    },
    mounted () {
      if (this.currentBook.topicList.length === this.currenTopic.id) {
        this.submitShow = true
        this.showResult = this.isShowResult
      }
    },
    computed: {
      ...mapState([
        'currenTopic', 'currentBook', 'isShowResult', 'routerBackSteep'
      ])
    },
    created: function () {
      // 在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
      // 但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
      this.quizTime()
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
  @import "../../../style/mixin.scss";
  .challenge{
    width: 100%;
    height: 100%;
    /*background-color: #eeeeee;*/
  }
  .main{
    margin-top: 7.3rem;
    width: 100%;
    height: 100%;
    font-size: 2.3rem;
    background: no-repeat;
    background-size: 100% 100%;
  }
  .describe{
    margin: 2rem 2rem;
    top: 6rem;
    display: flex;
    /*height: 10rem;*/
    flex-direction: column;
    justify-content: space-between;
  }
  .describe_top{
    margin: 2rem 0;
    font-size: 2.2rem;
    color: $mainColor;
    display: flex;
    justify-content: space-between;
  }
  .describe_top_left{
    display: flex;
    justify-content: space-between;
  }
  .describe_top_left p{
    margin-right: 2rem;
  }
  .describe_top_right{
    position: relative;
    color:$mainColor;
  }
  .topic{
    margin: 2rem 0;
    font-size: 2.3rem;
    /*border: solid 1px #000000;*/
    padding: 2rem;
    /*background-color: #d6f1ff;*/
    border-radius: 0.5rem;
  }
  .options_ul{
    margin: 2rem;
  }
  .options_li{
    display: flex;
    border: solid 1px #dddddd;
    /*height: 6.8rem;*/
    margin: 3.3rem 0;
    display: flex;
    background-color: #ffffff;
    border-radius: 3.4rem;
    /*box-shadow:  0  3px 3px #999;*/
  }
  .options_li_box{
    height: 100%;
    display: flex;
    justify-content: center;  }
  .result{
    background-color: $challengeClickcolor;
    /*color: #ffffff;*/
  }
  .options_li_box p{
    line-height: 6.7rem;
    margin-left: 3rem;
  }
  .options_left{
    margin:0 2rem;
  }
  .submit{
    margin: 6rem;
    margin-top: 20rem;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
  }
  .submit{
    line-height: 6.7rem;
  }
</style>
