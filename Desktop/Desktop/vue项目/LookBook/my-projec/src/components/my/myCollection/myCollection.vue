<template>
	<div>
		<!--顶部导航-->
	    <head-top signin-up='home'  go-back='true' title='true'  :headTitle='headTitle' message =''>
	    </head-top>
		<div class="content">
      <div v-show="show">
        <ul>
          <li v-for="(item,index) in bookList" :key="index" v-show="item.isCollect">
            <span class="collect-left-bookImg"  @click="addPath(item.bookID)">
              <img :src="item.bookImg" alt="书封面图">
            </span>
            <span class="collect-right">
              <span  class="collect-right-container">
                <div class="collect-right-top" v-text="item.bookName">书名</div>
                <div class="collect-right-middle">
                  <span class="collect-right-middle-left">作者：</span>
                  <span class="collect-right-middle-right" v-text="item.bookAuthor">作者名</span>
                </div>
                <div class="collect-right-bottom">
                  <span class="collect-right-bottom-left">推荐：9岁以上</span>
                  <span class="collect-right-bottom-right" :style="{background:'url('+ bgIcon1 +') no-repeat center left'}" @click="cancleCollectFun(index)">取消收藏</span>
                </div>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="!show" id="noCollectPannel">
      <p>暂无收藏书籍赶紧去收藏一本吧!</p>
    </div>
    <alert-temp v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertObj="alertObj"></alert-temp>
	</div>
</template>

<script>
  import headTop from '../../communal/header/head'
  import footGuide from '../../communal/footer/foot'
  import alertTemp from '../../communal/alertTemp'
  import store from './../../../store/index.js'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'personalsSetting',
    data () {
      return {
        headTitle: '我的收藏',
        bgIcon1: require('./../../../assets/GeneralIcon/TrashCan.png'),
        show: true,
        deleteIndex: 0,
        showAlert: false,
        showResult: '',
        alertObj: {
          alertText: '将删除该书籍你确定要继续吗?',
          alertWarn: ''
        },
        collectNum: 0,
        bookList: [
        // {
        //   bookImg: require('./../../../images/home/picture1.jpg'),
        //   bookID: '1',
        //   isCollect: false,
        //   bookName: '创世神话里的秘密',
        //   bookAuthor: '维鲁斯'
        // }
        ]
      }
    },
    components: {
      headTop,
      alertTemp,
      footGuide
    },
    methods: {
      ...mapMutations(['CLICK_BOOKLIST', 'SWICH_POEM']),
      addPath (index) {
        this.CLICK_BOOKLIST({index: parseInt(index) - 1})
        this.$router.push('/textIntroduces')
      },
      cancleCollectFun (index) {
        this.showAlert = true
        this.deleteIndex = index
      },
      closeTip (result) {
        this.showAlert = false
        if (result === true) {
          this.bookList[this.deleteIndex].isCollect = false
          // 更新vueX
          // console.log(parseInt(this.bookList[this.deleteIndex].bookID) - 1)
          store.state.bookList[parseInt(this.bookList[this.deleteIndex].bookID) - 1].isCollect = false
          this.collectNum--
          this.collectNum === 0 ? this.show = false : this.show = true
        }
      }
    },
    created: function () {
      // 先找出登录人(这里是金闪闪)
      // var userInfoObj = store.state.userInfo
      var bookListArr = store.state.bookList
      // let schoolInfoId = userInfoObj['24454565'].schoolInfoId
      // let classInfoId = userInfoObj['24454565'].classInfoId
      // console.log(bookListArr)
      for (let i = 0; i < bookListArr.length; i++) {
        // 找出登录人收藏的书
        if (bookListArr[i].isCollect === true) {
          let obj = {}
          obj.bookName = bookListArr[i].bookName
          obj.bookImg = bookListArr[i].bookImg
          obj.bookAuthor = '未知'
          obj.bookID = bookListArr[i].bookID
          obj.isCollect = bookListArr[i].isCollect
          this.bookList.unshift(obj)
        }
      }
      // console.log(this.items)
      this.collectNum = this.bookList.length
      if (this.collectNum === 0) {
        this.show = false
      }
    },
    store,
    mapState
  }
</script>
<style type="text/css" media="screen">
  .content{
    margin-top: 117px;
    /*font-size: 30px;*/
  }  
.content div ul li{
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    height: auto;
    width: 920px;
    line-height: 100px;
    font-size: 36px;
    margin-bottom: 0px;
    text-align: center;
    background: white;
    border-bottom: 4px solid #EEEEEE;
}
.content div ul li .collect-left-bookImg{
  width: auto;
  height: auto;
  margin: 1rem;
  box-shadow: 3px 3px 3px 3px #000000;
}
.content div ul li .collect-left-bookImg img{
  width: 14.8rem;
  height: 17.8rem;
}
.content div ul li .collect-right{
  width: 100%;
}
.content div ul li .collect-right .collect-right-container{
  display: flex;
  height: 100%;
  text-align: left;
  padding: 0px 20px;
  flex-direction: column;
  justify-content: space-between;
}
.content div ul li .collect-right .collect-right-top{
  width: auto;
}
.content div ul li .collect-right .collect-right-bottom{
  display: flex;
  justify-content: space-between;
}
.content div ul li .collect-right .collect-right-bottom .collect-right-bottom-right{
  border: 1px solid black;
  border-radius: 5px;
  color: #1A9FFF;
  height: 60px;
  line-height: 63px;
  width: 210px;
  margin-top: 20px;
  text-align: center;
  /*background: url('./../../../assets/GeneralIcon/Trash Can.png') no-repeat center left;*/
  background-size:3.5rem;
  text-indent: 3rem;
}
#noCollectPannel{
  text-align: center;
  font-size: 40px;
  height: auto;
  line-height: auto;
}
</style>
