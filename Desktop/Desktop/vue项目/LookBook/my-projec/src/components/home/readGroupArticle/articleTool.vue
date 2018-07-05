<template>
  <div >
    <section id='aritcle_foot_guide'>
      <!-- 弹出目录-->
      <transition name="bounce">
      <div class="over" v-if="showCategories" @click="toggleCategories">
        <ul class="aritcle_categories_ul">
          <li v-for="(item,index) in currentBook.articleList" :key="index" class="aritcle_categories_li" @click="switcArticle(index)">
            <span>{{item.titel}}</span>
          </li>
        </ul>
      </div>
      </transition>
      <section v-for="(item,index) in menuList" :key="index" @click="aritcleGuide(item, index)" class="aritcle_guide_item ">
       <div class="guide_img" :style="{backgroundImage: item.active? 'url('+ item.activeImgUrl +')':'url('+ item.imgUrl +')'}"></div>
        <!--<span class="icon_style">-->
          <!--<div></div>-->
        <!--</span>-->
        <!--<span>{{item.title}}</span>-->
      </section>
    </section>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'foot_guide',
    data () {
      return {
        footBarShow: true,
        showCategories: false,
//        菜单栏列表
        menuList: [{
          title: '上一篇',
          imgUrl: require('../../../images/home/article/prev.png'),
          activeImgUrl: require('../../../images/home/article/prev_yes.png'),
          active: false
        }, {
          title: '目录',
          imgUrl: require('../../../images/home/article/menu.png'),
          activeImgUrl: require('../../../images/home/article/menu_yes.png'),
          active: false
        }, {
          title: '护眼',
          imgUrl: require('../../../images/home/article/keep.png'),
          activeImgUrl: require('../../../images/home/article/keep_yes.png'),
          active: false
        }, {
          title: '下一篇',
          imgUrl: require('../../../images/home/article/next.png'),
          activeImgUrl: require('../../../images/home/article/next_yes.png'),
          active: false
        }]
      }
    },
    computed: {
      ...mapState([
        'currentArticle', 'isKeepEye', 'currentBook'
      ])
    },
    components: {
    },
    created: function () {
//      进入之前判断是否为护眼模式
      if (this.isKeepEye === true) {
        this.menuList[2].active = true
      }
//      进入之前判断是否为第一本或者最后一本书
      if (this.currentBook.readArticleStye === 0) {
        this.menuList[0].active = true
      }
      if (this.currentBook.readArticleStye === this.menuList.length) {
        this.menuList[this.menuList.length - 1].active = true
      }
    },
    methods: {
      ...mapMutations(['CHANGE_ARTICLE', 'IS_KEEPEYE']),
      aritcleGuide (item, index) {
        switch (index) {
          case 0:
            this.preAritcle()
            break
          case 1:
            this.toggleCategories()
//            this.aritcleGuide(index)
            this.menuList[1].active = !this.menuList[1].active
            break
          case 2:
            this.keepEye()
            this.menuList[2].active = !this.menuList[2].active
//            this.changeToolImge(index)
            break
          case 3:
            this.nextAritcle()
            break
          default:
            break
        }
      },
      changeToolImge (index) {
        for (var i = 1; i < this.menuList.length - 1; i++) {
          this.menuList[i].active = false
        }
        this.menuList[index].active = true
      },
//        上一篇
      preAritcle () {
        this.showPreAndNextBtnStye('pre')
        if (this.currentArticle.id > 1) {
          this.CHANGE_ARTICLE(this.currentArticle.id - 2)
        }
      },
//      点击上下篇是判断按钮的颜色
      showPreAndNextBtnStye (source) {
        if (source === 'pre') {
          this.menuList[this.menuList.length - 1].active = false
          if (this.currentArticle.id <= 2) {
            this.menuList[0].active = true
          } else {
            this.menuList[0].active = false
          }
        }
        if (source === 'next') {
          this.menuList[0].active = false
          if (this.currentArticle.id >= this.currentBook.articleList.length - 1) {
            this.menuList[this.menuList.length - 1].active = true
          } else {
            this.menuList[0].active = false
            this.menuList[this.menuList.length - 1].active = false
          }
        }
      },
      nextAritcle () {
        this.showPreAndNextBtnStye('next')
        if (this.currentArticle.id < this.currentBook.articleList.length) {
          this.CHANGE_ARTICLE(this.currentArticle.id)
        }
      },
      switcArticle (index) {
        if (index === 0) {
          this.menuList[0].active = true
        } else {
          this.menuList[0].active = false
        }
        if (index === this.currentBook.articleList.length - 1) {
          this.menuList[this.menuList.length - 1].active = true
        } else {
          this.menuList[this.menuList.length - 1].active = false
        }
        this.CHANGE_ARTICLE(index)
      },
      keepEye () {
        this.IS_KEEPEYE()
      },
      toggleCategories () {
//        console.log(this.showCategories)
        this.menuList[1].active = false
        this.showCategories = !this.showCategories
      }
    }
  }
</script>

<style>
  #aritcle_foot_guide{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    height: 110px;
    font-size: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    background: #666666;
  }
  .aritcle_guide_item{
    display: flex;
    justify-content: space-evenly;
  }
  .guide_img{
    margin: auto;
    width: 10rem;
    height: 100%;
    background: no-repeat center;
    /*background-size:45% 65%;*/
  }
  .aritcle_guide_item span{
    flex: 1;
  }
  .icon_style{
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .icon_style div{
    margin-bottom: .2rem;
    margin-top: .3rem;
    width: 2rem;
    height: 2rem;
    background-color: #1a9fff;
  }
  /*目录*/
  .over{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
  }
  .aritcle_categories_ul{
    position: absolute;
    background: #ffffff;
    bottom: 110px
  }
  .aritcle_categories_li{
    font-size: 2.5rem;
    color: #000000;
    display: flex;
    /*justify-content: center;*/
    border-top: 1px solid #e1e1e1;
  }
  .aritcle_categories_li span {
    padding: 0 2rem;
    /*text-align: center;*/
    line-height: 7.7rem;
  }
  /* over动画*/
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
     opacity: 0;
      left: -30rem;
    }
    /*50% {*/
      /*transform:rotate(0deg);*/
    /*}*/
    100% {
      /*transform:rotate(360deg);*/
      opacity: 1;
      left: 0px;
    }
  }
</style>
