<template>
	<div>
		<!--顶部导航-->
	    <head-top signin-up='home'  go-back='true' title='true'  :headTitle='headTitle' message =''>
	    </head-top>

      <div id="settingDiv">
          <ul>
            <li v-for="(item,index) in items" :key="index" @click="itemClick(index)">
              <!-- <span class="item1"><img :src="item.imgSrc"></span> -->
              <span class="item2">{{item.desc}}</span>
              <span class="item3">{{item.number}}</span>
              <span class="item4"><img :src="item.jiantou"></span>
            </li>
          </ul>
    </div>
	</div>
</template>

<script>
  import headTop from '../../communal/header/head'
  import footGuide from '../../communal/footer/foot'

  export default {
    name: 'personalsSetting',
    data () {
      return {
        headTitle: '个人设置',
        items: [
          {
            // imgSrc: require('./../../assets/GeneralIcon/Heart.png'),
            desc: '修改手机号',
            number: '1312348888',
            jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
          },
          {
            // imgSrc: require('./../../assets/GeneralIcon/Magazine.png'),
            desc: '修改密码',
            number: '',
            jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
          },
          {
            // imgSrc: require('./../../assets/GeneralIcon/Write.png'),
            desc: '清理缓存',
            number: '',
            jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
          },
          {
            // imgSrc: require('./../../assets/GeneralIcon/Message.png'),
            desc: '关于群文阅读',
            number: '',
            jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
          },
          {
            // imgSrc: require('./../../assets/GeneralIcon/Settings.png'),
            desc: '退出登录',
            number: '',
            jiantou: require('./../../../assets/GeneralIcon/rightArrow.png')
          }
        ]
      }
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
      itemClick (index) {
        // if (index === 0) {
        //   // this.$router.push('/myCollection')
        // } else if (index === 1) {
        //   // this.$router.push('/myNotes')
        // } else if (index === 2) {
        //   // this.$router.push('/myQuestion')
        // } else if (index === 3) {
        //   // this.$router.push('/message')
        // } else if (index === 4) {
        //   // this.$router.push('/personalsSetting')
        // }
      }
    }
  }
</script>
<style type="text/css" media="screen">
    #settingDiv {
    font-size:36px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 115px;
    background: #EEEEEE;
    background: white;
    width: 96%;
    margin:115px auto;
    box-shadow: 0px 3px 3px #eeeeee;
  }
#content #settingDiv{
  background: white;
  margin-top: 30px;
  margin-bottom: 300px;
  box-shadow: 0px 3px 3px #eeeeee;
}
#settingDiv ul li{
  display:block;
  height: 120px;
  border-bottom:1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
}
#settingDiv ul li:hover{
  background-color: #C7C7C7;
}
#settingDiv ul li span.item1{
  display: flex;
  align-items: center;
  width: 60px;
  height: 120px;
}
#settingDiv ul li span.item2{
  align-items: center;
  text-align: left;
  width: 220px;
  height: 120px;
  line-height: 120px;
}
#settingDiv ul li span.item3{
  align-items: center;
  width: 120px;
  height: 120px;
  line-height: 120px;
  margin-left: 350px; 
  margin-right: 50px;
}
#settingDiv ul li span.item4{
  align-items: center;
  width: 60px;
  height: 120px;
  line-height: 120px;
}

#settingDiv ul li span.item1 img{
  width:60px;
  height:60px;
}
</style>
