<template>
  <div class="userDiscussion">
    <!--主要内容-->
        <section class="user_discussion_list">
          <ul class="user_discussion_list_ul">
            <li class="user_discussion_list_li" v-for="(item,index) in currentDiscussion.userDiscussionList" :key="index">
              <section class="problemDescription_header">
                <section class="problemDescription_top">
                  <div class="problemDescription_name_top">
                    <div class="problemDescription_name">
                      <p class="sf28">{{item.userName}}</p>
                    </div>
                    <div class="problemDescription_timer">
                      <p>{{item.timer}}</p>
                    </div>
                  </div>
                  <div class="problemDescription">
                    <p class="problemDescription_content" v-html="item.content"></p>
                  </div>
                  <div class="inputComment">
                    <textarea v-model="item.inputMasgges" class="input_text" style="overflow: hidden" placeholder="写下你的想法" :key="index" v-on:focus="hidaSubmitBtn('hide')" v-on:blur="hidaSubmitBtn('show')"></textarea>
                  </div>
                  <div class="submit_comment" v-if="showCommentBtn"><p @click="submit(index)">提交</p></div>
                </section>
              </section>
               <section class="discuss_list">
                <div class="discuss_list_top">
                  <div class="Sort_describe"><p>评论</p></div>
                  <div class="line"></div>
                </div>
                <ul class="discuss_list_ul">
                  <!--<li v-for="(item1,index) in showMoreResponse(item)" :key="index" class="discuss_list_li">-->
                  <li v-for="(item1,index) in item.discussionList" :key="index" class="discuss_list_li">
                    <section class="item_left">
                      <p :style="{backgroundImage: 'url('+ item1.headerImg +')'}"></p>
                    </section>
                    <section class="item_mian">
                      <div class="item_mian_top">
                        <span class="item_mian_name">{{item1.name}}</span>
                        <span class="participants">{{item1.time}}</span>
                      </div>
                      <div>
                        <span class="participants">{{item1.discuss}}</span>
                      </div>
                      <div class="item_mian_bottem">
                        <p class="participants_img_box">
                          <span class="participants_img" :style="{backgroundImage: 'url('+ item1.secDisNumImg +')'}"></span>
                          <!--<Icon type="plus"></Icon>-->
                          <span class="participants_likeNumber">{{item1.secDisNum}}</span>
                        </p>
                        <p class="participants_img_box" :class="{activate: item1.isLiked}" @click="thumbComments(index,item1,item)">
                          <span class="participants_img" :style="{backgroundImage: 'url('+ item1.likeImg +')'}"></span>
                          <span class="participants_likeNumber">{{item1.likeNumber}}</span>
                        </p>
                      </div>
                    </section>
                  </li>
                  <!--<div class="lookMore" v-if="item.discussionList.length > 2" :class="{active: !item.isFixationHight}"><p @click="lookMore(index)">{{lookMoreText}}</p></div>-->
                </ul>
              </section>
            </li>
          </ul>
        </section>
        <section class=""></section>
        <section class=""></section>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import alertTip from '../../communal/alertTip'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        headTitle: '探议题',
        alertText: '',
        showAlert: false,
        outArryIndex: '',
        showUserDiscussion: false,
        showSubmitBtn: true,
        showCommentBtn: false,
        inItemeArry: [],
        lookMoreText: '查看更多...'
      }
    },
    methods: {
      ...mapMutations(['SWITHER_TOPIC', 'SUBMIT_COMMENT', 'THUMB_COMMMENTS', 'CLICK_EDITOR', 'LOOK_MORE_COMMENTS']),
      addPath (path) {
        this.$router.push(path)
      },
      switchIssues (index) {
        if (index === 2) {
          if (this.currentBook.discussionMeun.length < 3) {
            this.alertText = '你还没有议题'
            this.showAlert = true
            return
          } else {
            this.showUserDiscussion = true
            this.SWITHER_TOPIC({index: index})
          }
        } else {
          this.showUserDiscussion = false
          this.SWITHER_TOPIC({index: index})
        }
      },
      closeTip () {
        this.showAlert = false
      },
      submit (index) {
        var now = new Date()
//        var year = now.getFullYear()       // 年
//        var month = now.getMonth() + 1    // 月
//        var day = now.getDate()          // 日
//        var timer = year + '/' + month + '/' + day
        var hours = now.getHours()          // 日
        var minutes = now.getMinutes()          // 日
        var timer = '今天 ' + hours + ':' + minutes
        var obj = {
          headerImg: require('../../../images/乐创编/user.png'),
          name: '我',
          time: timer,
          likeNumber: 0,
          isLiked: false,
          secDisNum: 10,
          secDisNumImg: require('../../../images/icon/Chat.png'),
          likeImg: require('../../../images/icon/thumbs.png'),
          discuss: this.currentDiscussion.userDiscussionList[index].inputMasgges
        }
        console.log(this.currentDiscussion.userDiscussionList[index].inputMasgges)
        //       判断输入内容不能为空
        if (this.currentDiscussion.userDiscussionList[index].inputMasgges.length > 1) {
          console.log(this.currentDiscussion.userDiscussionList[index].inputMasgges.length)
          this.SUBMIT_COMMENT({obj: obj, tpye: 'user', index: index})
        }
        this.currentDiscussion.userDiscussionList[index].inputMasgges = null
      },
  //    点赞
      thumbComments (index, item, out) {
        console.log(out)
        for (var i = 0; i < this.currentDiscussion.userDiscussionList.length; i++) {
          if (this.currentDiscussion.userDiscussionList[i] === out) {
            this.outArryIndex = i
//            console.log(this.outArryIndex)
            if (item.isLiked === false) {
              this.THUMB_COMMMENTS({index: index, tpye: 'user', outIndex: this.outArryIndex})
            }
          }
        }
      },
//    编辑
      inputContent (type, index) {
        this.CLICK_EDITOR({index: index, type: type})
      },
      filterArry (vule, itme) {
        this.inItemeArry = vule
        return vule
      },
      lookMore (index) {
        console.log(index)
        this.LOOK_MORE_COMMENTS({index: index})
      },
      showMoreResponse (item) {
        console.log(item.isSelf + '=========' + item.isFixationHight)
        console.log(item)
        if (item.isSelf === true) {
          if (item.isFixationHight === true) {
            console.log('=============================')
            this.lookMoreText = '查看更多...'
            return item.discussionList.slice(0, 2)
          } else {
//            console.log('+++++++++++++++++++++++++++++++++')
//            this.lookMoreText = '收起更多...'
//            return item.discussionList
          }
        } else {
          if (item.isFixationHight === true) {
//            console.log('=============================')
//            this.lookMoreText = '查看更多...'
//            return item.discussionList.slice(0, 2)
          } else {
            console.log('+++++++++++++++++++++++++++++++++')
            this.lookMoreText = '收起更多...'
            return item.discussionList
          }
        }
//        if (item.isFixationHight === true && item.isSelf === true) {
//          this.lookMoreText = '查看更多...'
//          return item.discussionList.slice(0, 2)
//        } else if (item.isFixationHight === false && item.isSelf === true) {
//          this.lookMoreText = '收起更多...'
//          return item.discussionList
//        }
      },
      hidaSubmitBtn (style) {
        this.$emit('hida-submit-btn', style)
        if (style === 'hide') {
          this.showSubmitBtn = false
          this.showCommentBtn = true
        }
        if (style === 'show') {
          var self = this
          setTimeout(function () {
            self.showCommentBtn = false
            self.showSubmitBtn = true
          }, 300)
        }
      }
    },
    components: {
      headTop,
      alertTip
    },
    computed: {
      ...mapState(['currentBook', 'currentDiscussion', 'swichList']),
      //    下拉和隐藏
      isFixationHight: function (lenght) {
        if (lenght > 2) {
          return {
            fixationHight: true
          }
        } else {
          return {
            fixationHight: false
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
.userDiscussion{
  margin: 0;
}
  .problemDescription_top{
    background: #ffffff;
    /*margin-top: 2rem;*/
    border: solid 1px #9f9f9f;
    border-top: solid 0 #9f9f9f;
    box-shadow: 0px 3px 5px #9f9f9f;
  }
  .problemDescription_name_top{
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .problemDescription_name{
    display: flex;
    justify-content: space-between;
  }
  .sf24{
    font-size: 2rem !important;
  }
  .sf28{
    font-size: 2.3rem !important;
  }
  .sf30{
    font-size: 2.5rem !important;
  }
  .colorBlack{
    color: #000000 !important;
  }
  .colorWhithe{
    color: #ffffff !important;
  }
  .problemDescription_name p{

  }
  .problemDescription{
    background: #ffffff;
    margin: 0rem 1rem 2rem;
    /*letter-spacing: 0.6rem ;*/
  }
  .problemDescription p{
    /*font-size: 1.1rem;*/
    font-size: 2.3rem;
    /*color: #535353;*/
    /*font-size:28px;*/
  }
  .problemDescription_timer{
    display: flex;
    font-size:2rem;
    color: #707070;
    letter-spacing:0rem ;
    justify-content: flex-end;
  }
  .problemDescription_timer p{
    padding-right: 2rem;
  }
  .submit_comment{
    display: flex;
    justify-content: center;
  }
  .submit_comment p{
    margin:0 0 2rem;
    width: 10rem;
    color: #ffffff;
    line-height: 4rem;
    border-radius: 2rem;
    text-align: center;
    background-color: $mainColor;
  }
  /**/
  .selectorButton span:last-child{
    border-right:0;
  }
  .selectorButton span.active{
    color: $mainColor;
  }
  .inputComment{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .input_text{
    height: 10rem;
    width: 96%;
    margin-bottom: 2rem;
    font-size: 2.3rem;
    background: $textBg;
  }
  /*list部分*/
  .discuss_list{
    background: #ffffff;
    /*margin-top: 1rem;*/
    padding: 1rem 0 0;
    border: solid 1px #9f9f9f;
  }
  .Sort_describe{
    line-height: 2rem;
    font-size: 2.5rem;
    padding: 2rem 1rem;
    color: $mainColor;
  }
  .line{
    height: 1px;
    background: #c9c9c9;
  }
  .item_left{
    margin: 0rem 1rem 0rem 0rem;
    display: flex;
  }
  .item_left p{
    width: 7.5rem;
    height: 7.5rem;
    /*margin: auto;*/
    background: no-repeat;
    background-size:100% 100%;
  }
  .discuss_list_li{
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    border-bottom: solid 1px #c9c9c9;
  }
  .item_mian{
    display: flex;
    flex-direction: column;
  }
  .item_mian_top{
    color: #707070;
    display: flex;
    justify-content: space-between;
  }
  .item_mian_bottem{
    color: #707070;
    display: flex;
    justify-content: flex-end;
  }
  .item_right{
    color: #707070;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item_mian{
    flex: 1;
  }
  .item_mian_name{
    font-size: 2.3rem;
    margin-bottom: 1rem;
    color: #707070;
  }
  .item_right{
    text-align: center;
  }
  .participants_img_box{
    position: relative;
    bottom: -1rem;
    display: flex;
    justify-content: flex-end;
    padding-left: 2rem;
  }
  .participants_img{
    width: 4.5rem;
    height: 4.5rem;
    background: no-repeat;
    background-size:70% 70%;
  }
  .participants_img_box:last-child .participants_img{
    background-size:70% 70%;
  }
  .ivu-icon-plus{
    line-height: 5rem;
    width: 2rem;
    size: 5px;
  }
  .participants_likeNumber{
    line-height: 5rem;
  }
  .participants_img_box:first-child{
    /*color: #1a9fff;*/
  }
  .activate{
    color: $mainColor;
  }
  .bottom_btn{
    position: fixed;
    width: 12rem;
    height: 12rem;
    z-index: 100;
    right: 0;
    bottom: 4rem;
    font-size: 4rem;
    display: flex;
    padding: 2rem;
  }
  .bottom_btn_box{
    width: 100%;
    height: 100%;
    background-color: $mainColor;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bottom_btn_box p{
    line-height: 4rem;
    font-size: 2.3rem;
    width: 100% ;
    color: #ffffff;
    text-align: center;
  }
  .bottom_btn_box p:first-child{
    height: 50%;
    width: 100%;
    position: relative;
    background: url("../../../images/icon/Write_white.png") no-repeat center;
  }
  .bottom_btn_box p:last-child{
    position: relative;
    bottom: 1.1rem;
  }
  .discuss_submit p{
    text-align: center;
  }
  .user_discussion_list{
    margin: 2rem 0 0;
  }
  .user_discussion_list_li{
    box-shadow: 0px 3px 5px #9f9f9f;
    /*margin-bottom: 1.3rem;*/
  }
  .lookMore{
    display: flex;
    justify-content: center;
  }
  .lookMore p{
    color: $mainColor;
    line-height: 4rem;
  }
  .lookMore p::before{
    content:"";
    margin-right: 0.5rem;
    padding-right: 2rem;
    background: url("../../../images/icon/down.png")no-repeat center;
  }
  .lookMore.active p::before{
    background: url("../../../images/icon/up.png")no-repeat center;
  }
</style>
