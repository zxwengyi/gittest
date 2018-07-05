<template>
  <div>
    <!--顶部导航-->
    <!-- <head-top signin-up='home'  go-back='' title='true'  headTitle='我的信息' message =''> -->
      <!--<span slot='msite-title' class="head_logo">阅读文</span>-->
    <!-- </head-top> -->
    
    <div id="content">
      <div id="content-title" :style="{background:'url('+bgImgSrc+') center center no-repeat',backgroundSize: '100% 100%'}">
        <span id="whiteRadius"  @click="myInfo('/modify')">
          <span id="myInfoEditIcon" :style="{background:'url('+myInfoEditIconSrc+') center center no-repeat',backgroundSize: '100% 100%'}"></span>
          <img class="imgSize200" :src="imgSrc">
        </span>
        <h2 class="text-center">{{title}}</h2>
        <p class="description2">{{description1}}</p>
        <p class="description2">
          <span id="localtionIcon" :style="{background:'url('+localtionIconSrc+') center center no-repeat',backgroundSize: '100% 100%'}"></span>
          <span>{{description2}}</span>
        </p>
      </div>
      <div id="content-main">
      
        <table>
            <tr>
              <td class="first">积分</td>
              <td class="second" v-text = "score">0</td>
              <td class="three">排行</td>
              <td class="four" v-text = "rank">0</td>
              <td class="five">
                <p class="qiandao">
               
                    <span v-if="!checked" @click="changeStateFun">签到
                      <!-- <input v-show="true" v-model="checked" type="checkbox" name="" value=""> -->
                      <span class="bg1"></span>
                    </span>
                  
                  <span class="bg2" v-else>{{newSignTotalDay}}
                    <span class="bg1"></span>
                  </span>
                </p>
              </td>
            </tr>
          </table>

        <div id="menuDiv">
          <ul>
            <li v-for="(item,index) in items" @click="itemRoute(index)">
              <span class="item1"><img :src="item.imgSrc"></span>
              <span class="item2">{{item.desc}}</span>
              <span class="item3">{{item.number}}</span>
              <span class="item4"><img :src="item.jiantou"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--底部导航-->
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../communal/header/head'
  import footGuide from '../communal/footer/foot'
  import store from '@/store/index'
  
  export default {
    name: 'my',
    data () {
      return {
        checked: false,
        headTitle: '我的信息',
        localtionIconSrc: require('./../../assets/GeneralIcon/localIcon.png'),
        myInfoEditIconSrc: require('./../../assets/GeneralIcon/myInfoEditIcon.png'),
        bgImgSrc: require('./../../assets/my/mybgm.png'),
        title: store.state.userInfo['24454565'].userName,
        imgSrc: store.state.userInfo['24454565'].logoImgSrc,
        description1: store.state.userInfo['24454565'].signature,
        description2: store.state.schoolInfo[store.state.userInfo['24454565'].schoolInfoId],
        signTotalDay: store.state.userInfo['24454565'].signTotalDay + 0,
        rank: store.state.userInfo['24454565'].rank + 0,
        score: store.state.userInfo['24454565'].score + 0,
        items: [
          {
            imgSrc: require('./../../assets/GeneralIcon/Heart.png'),
            desc: '我的收藏',
            number: '',
            jiantou: ''
          },
          {
            imgSrc: require('./../../assets/GeneralIcon/Magazine.png'),
            desc: '我的笔记',
            number: '',
            jiantou: ''
          },
          {
            imgSrc: require('./../../assets/GeneralIcon/Write.png'),
            desc: '我的提问',
            number: '',
            jiantou: ''
          },
          {
            imgSrc: require('./../../assets/GeneralIcon/Message.png'),
            desc: '我的消息',
            number: '05',
            jiantou: require('./../../assets/GeneralIcon/rightArrow.png')
          },
          {
            imgSrc: require('./../../assets/GeneralIcon/Settings.png'),
            desc: '个人设置',
            number: '',
            jiantou: ''
          }
        ]
      }
    },
    components: {
      headTop,
      footGuide
    },
    computed: {
      newSignTotalDay: function () {
        return (++this.signTotalDay) + '天'
      }
    },
    methods: {
      myInfo (path) {
        this.$router.push(path)
      },
      itemRoute (index) {
        if (index === 0) {
          this.$router.push('/myCollection')
        } else if (index === 1) {
          this.$router.push('/myNotes')
        } else if (index === 2) {
          this.$router.push('/myQuestion')
        } else if (index === 3) {
          this.$router.push('/message')
        } else if (index === 4) {
          this.$router.push('/personalsSetting')
        }
      },
      changeStateFun () {
        this.checked = !this.checked
      }
    },
    mounted: function () {
      // 计算我的收藏里面有没有数据
      // var userInfoObj = store.state.userInfo
      let bookListArr = store.state.bookList
      let computedNum = 0
      for (let i = 0; i < bookListArr.length; i++) {
        // 找出登录人收藏的书
        if (bookListArr[i].isCollect === true) {
          computedNum++
        }
      }
      if (computedNum !== 0) {
        this.items[0].number = computedNum < 10 ? '0' + computedNum : computedNum
        this.items[0].jiantou = require('./../../assets/GeneralIcon/rightArrow.png')
      } else {
        this.items[0].number = ''
        this.items[0].jiantou = ''
      }
    }
  }
</script>

<style>
  html{
      background-color: #FAFAFA;
  }
  #content {
    font-size:2.4rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #FAFAFA;
/*    margin-top: 115px;*/

}

#content #content-title{
  width: 100%;
  height: 100%;
  /*background: url(./../../assets/my/mybgm.png) center center no-repeat;*/
  background-size: 100% 100%;
  padding-top: 4rem;
  padding-bottom: 1rem;
  color: white;
}

#content #content-main{
 /*padding: 30px;*/
}
#whiteRadius{
  position: relative;
  display: inline-block;
  width: 220px;
  height: 220px;
  background-color: white;
  border-radius: 50%;
  /*text-align: center;*/
}
#myInfoEditIcon{
  display: inline-block;
  position: absolute;
  right: -3rem;
  top: 1rem;
  width: 5rem;
  height: 5rem;
}
.imgSize200{
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top:10px;
}
.imgSize100{
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.qiandao{
  height: 145px;
  width: 20rem;
  font-size: 2.5rem;
}
.qiandao .bg1{
  position: relative;
  display: inline-block;
  background: url('./../../assets/GeneralIcon/Sign.png') 10rem 0rem no-repeat;
  /*background-size: 25% 50%;*/
  color: white;
  right: 0px;
  top: -3rem;
}
.qiandao .bg2{
  position: relative;
  display: inline-block;
  background-color: #BFBFBF;
  color: white;
  text-indent: -1.8em;
  text-align: center;
  border-radius: 50px;
  width: 250px;
  height: 80px;
  padding-top: 0.6rem;
  right: 2rem;
  top: 2rem
}
.qiandao span{
  position: relative;
  display: inline-block;
  background-color: #70A595;
  color: white;
  text-indent: -1.8em;
  text-align: center;
  border-radius: 50px;
  width: 250px;
  height: 80px;
  padding-top: 0.6rem;
  right: 2rem;
  top: 2rem
}

.qiandao input{
  display: inline-block;
  position: absolute;
  top: -5px;
  right: -50px;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.text-center{
  margin: 0 0;
  padding-bottom: 30px;
  color: #2a5a72;
  font-weight: bolder;
}
.description2{
  /*color: #333333;*/
  margin: 0 0;
  padding-bottom: 30px;
  margin-top: 10px;
  font-size: 2.2rem;
  line-height: 32px;
  color: #37909d;
}
.description2 #localtionIcon{
  position: relative;
  top: 0.5rem;
  display: inline-block;
  width: 2rem;
  height: 2.5rem;
  line-height: 2.5rem;
}
#content table,tr, td{
  table-layout:fixed;
  border-collapse: collapse;
  font-size: 2.2rem;
}
.last1{
  border-bottom: 1px solid rgba(0,0,0,0);
}

#content table{
  position: relative;
  left:2.6rem;
  right: 13rem;
  width:100%;
  height:8rem;
}
#content table tr td.first{
  width:10%;
}
#content table tr td.second{
  width:10%;
  color: #70A595;
}
#content table tr td.three{
  width:10%;
}
#content table tr td.four{
  width:10%;
  color: #70A595;
}
#content table tr td.five{
  width:90%;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
}
.last2 input{
    position: absolute;
    top: 626px;
    right: 100px;
    margin:50px auto;
    font-size:3.5rem;
    width: 300px;
    background-color: #6699ff;
    border-radius: 10px;
    border: 0px;
    height: 80px;
    color: white;
    font-family: "微软雅黑"
 }
#content #menuDiv{
  background: white;
  /*margin-top: 30px;*/
  margin-bottom: 300px;
  /*box-shadow: 0px 3px 3px #999999;*/
}
#content ul li{
  display:block;
  height: 10rem;
  text-align: center;
  border-bottom:2px solid #F4F4F4;
  display: flex;
  justify-content: space-around;
}

#content ul li span.item1{
  display: flex;
  align-items: center;
  width: 60px;
  height: 10rem;
  margin-left: 2rem;
}
#content ul li span.item2{
  align-items: center;
  width: 200px;
  height: 10rem;
  font-size: 2.5rem;
  line-height: 10rem;
}
#content ul li span.item3{
  align-items: center;
  width: 80px;
  height: 10rem;
  line-height: 10rem;
  margin-left: 500px; 
}
#content ul li span.item4{
  align-items: center;
  width: 60px;
  height: 10rem;
  color: #70A595;
  font-weight: bolder;
  line-height: 10rem;
  margin-right: 1rem;
}

#content ul li span.item1 img{
  width:3.5rem;
  height:3.5rem;
}
#content ul li span.item4 img{
  padding-top: 3.5rem;
  text-align: center;
  /*width:2rem;
  height:2rem;*/
}
</style>
