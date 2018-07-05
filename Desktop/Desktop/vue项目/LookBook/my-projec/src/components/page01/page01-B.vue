<template>
  <div id="box">
    <ul>
      <li v-for="item in newItems" @click="discussInfo(item)">
        <div id="pgA-area1">
            <img class="imgSize150" :src="item.imgSrc"  alt="logo">      
        </div>
        <div id="pgA-area2">
        <p class="one">
          <span class="fontSize2p7 mainColor">{{item.userName}}</span>
              <span class="right0 fontSize2p">{{item.descTime}}</span>
        </p>
            <p class="two"><span class="center">{{item.yiti}}</span></p>
            <p class="three">
              <span class="fontSize2p">{{item.goodNum}}</span>
              <span @click.stop="goodFun(item)" :style="{background:'url('+item.bgIcon2+') center center no-repeat',backgroundSize:'70% 70%'}" id="thumbsIcon"></span>
              <span class="fontSize2p">{{item.discussNum}}</span>
              <span id="chatIcon" :style="{background:'url('+bgIcon1+') center center no-repeat',backgroundSize:'130% 130%'}"></span>
            </p>      
        </div>
      </li>
    </ul>
    <div id="footerHolder"></div>
  </div>

</template>
<script>
  import store from './../../store/index.js'
  export default {
    name: 'my',
    data () {
      return {
        bgIcon1: require('./../../assets/GeneralIcon/Chat.png'),
        // bgIcon2: require('./../../assets/GeneralIcon/thumbs.png'),
        items: [
        ]
      }
    },
    methods: {
      goodFun (info) {
        // this.backgroundObj.background = 'url(' + require('./../../assets/GeneralIcon/thumbs_yes.png') + ') 0px 0.8rem/3rem no-repeat'
        info.bgIcon2 = require('./../../assets/GeneralIcon/thumbs_yes.png')
        // 点赞更新vueX
        let arr = store.state.publicActiveInfo[info.userInfoID]
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].discussInfoId === info.discussInfoId) {
            if (!arr[i].isThumbs) {
              info.goodNum++
              arr[i].goodNums = info.goodNum
              arr[i].isThumbs = true
              info.isThumbs = true
            }
            break
          }
        }
      },
      discussInfo (params) {
        this.$router.push({name: 'discussInfo', params: {info: params}})
      }
    },
    computed: {
      newItems () {
        let temp = []
        for (let i = 0; i < this.items.length; i++) {
          temp.push(this.items[i])
        }
        return temp.sort(compare('discussNum'))
      }
    },
    created: function () {
      // 先找出登录人的同班同学(这里是金闪闪)
      var userInfoObj = store.state.userInfo
      let schoolInfoId = userInfoObj['24454565'].schoolInfoId
      let classInfoId = userInfoObj['24454565'].classInfoId
      // 金闪闪所有同班同学的ID
      let classmateIDArr = []
      for (let key in userInfoObj) {
        if (key !== '24454565' && userInfoObj[key].schoolInfoId === schoolInfoId && userInfoObj[key].classInfoId === classInfoId) {
          classmateIDArr.push(key)
        }
      }
      // console.log(classmateIDArr)
      let publicActiveObj = store.state.publicActiveInfo
      let userObj = store.state.userInfo
      for (var key in publicActiveObj) {
        // 过滤金闪闪所有同班同学发的动态
        if (classmateIDArr.indexOf(key) !== -1) {
          let arr = publicActiveObj[key]
          for (let i = 0; i < arr.length; i++) {
            let tempObj = {}
            tempObj['imgSrc'] = userObj[key].logoImgSrc
            tempObj['userName'] = userObj[key].userName
            tempObj['descTime'] = arr[i].time
            tempObj['yiti'] = arr[i].theme
            tempObj['detail'] = arr[i].detail
            tempObj['discussNum'] = arr[i].discussNum
            tempObj['goodNum'] = arr[i].goodNums
            tempObj['discussInfoId'] = arr[i].discussInfoId
            tempObj['publicActiveInfoId'] = arr[i].publicActiveInfoId
            tempObj['userInfoID'] = key
            tempObj['isThumbs'] = arr[i].isThumbs
            if (!arr[i].isThumbs) {
              tempObj['bgIcon2'] = require('./../../assets/GeneralIcon/thumbs.png')
            } else {
              tempObj['bgIcon2'] = require('./../../assets/GeneralIcon/thumbs_yes.png')
            }
            this.items.push(tempObj)
          }
        }
      }
      // console.log(this.items)
    },
    store
  }
  // 排序方法
  function compare (property) {
    return function (a, b) {
      var value1 = parseInt(a[property])
      var value2 = parseInt(b[property])
      return value2 - value1
    }
  }
</script>
