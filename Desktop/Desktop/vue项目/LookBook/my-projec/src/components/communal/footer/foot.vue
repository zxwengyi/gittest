<template>
  <div >
    <section id='foot_guid'>
      <section v-for="(item, index) in links" @click="gotoAddress(item.route)"
               class="guide_item "
               :class="{'active':$route.path.indexOf(item.path)!== -1}">
        <div class="guide_item_div">
          <div class="img_box">
            <div class="img_div">
              <div class="img" :style="{backgroundImage:$route.path.indexOf(item.path)!== -1? 'url('+ item.guideItemActImg +')':'url('+ item.guideItemImg +')'}"></div>
            </div>
          </div>
          <p>{{item.text}}</p>
        </div>
      </section>
      <!--<section @click="gotoAddress(links[0].route)" class="guide_item " :class="{'active':$route.path.indexOf('articles')!== -1}">-->
        <!--<div class="guide_item_div">-->
          <!--&lt;!&ndash;<div class="img_box"><p></p></div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>阅读文</p>&ndash;&gt;-->
        <!--</div>-->
      <!--</section>-->
      <!--<section @click="gotoAddress(links[1].route)"  class="guide_item" :class="{'active':$route.path.indexOf('readingCircle')!== -1}">-->
        <!--<div class="guide_item_div">-->
          <!--&lt;!&ndash;<div class="img_box"><p></p></div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>阅读圈</p>&ndash;&gt;-->
        <!--</div>-->
      <!--</section>-->
      <!--<section @click="gotoAddress(links[2].route)"  class="guide_item" :class="{'active':$route.path.indexOf('my')!== -1}">-->
        <!--<div class="guide_item_div">-->
          <!--&lt;!&ndash;<div class="img_box"><p></p></div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>我的</p>&ndash;&gt;-->
        <!--</div>-->
      <!--</section>-->
    </section>
  </div>
</template>
<script>
  export default {
    name: 'foot_guide',
    data () {
      return {
        footBarShow: true,
        links: [
          {
            isActive: false,
            text: '悦读圈',
            route: '/readingCircle',
            path: 'readingCircle',
            guideItemImg: require('../../../images/icon/Readers.png'),
            guideItemActImg: require('../../../images/icon/Readers_yes.png')
          },
          {
            isActive: true,
            text: '悦读文',
            route: '/articles',
            path: 'articles',
            guideItemImg: require('../../../images/icon/Article.png'),
            guideItemActImg: require('../../../images/icon/Article_yes.png')
          },
          {
            isActive: false,
            text: '我的',
            route: '/myInfo',
            path: 'myInfo',
            guideItemImg: require('../../../images/icon/my.png'),
            guideItemActImg: require('../../../images/icon/my_yes.png')
          }
        ]
      }
    },
    props: ['footShow'],
    mounted () {

    },
    components: {

    },
    computed: {

    },
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  #foot_guid{
    background-color:#ffffff;
    /*background: url("../../../images/icon/menu_bar.png") ;*/
    background-size:100% 100%;
    position: fixed;
    z-index: 100;
    /*height: 130px;*/
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 2rem;
    display: flex;
    /*border-top: solid 1px #cccccc;*/
    box-shadow: -10px 0px 10px #dddddd;

  }
  .guide_item{
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .guide_item{
  background: no-repeat center ;
  background-size: 100px 100px;
  }
  .guide_item_div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
  }
  .guide_item.active .guide_item_div{
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
  }
  .img{
    position: relative;
    width: 20rem;
    height: 5rem;
    background: no-repeat center;
  }
  .guide_item.active .img_box{
    position: absolute;
    width: 8rem;
    height: 8rem;
    top: -3rem;
    margin-left:-1rem;
    background: #ffffff;
    border-radius: 8rem;
    /*border: 1px solid #9f9f9f;*/
    box-shadow: -0px 0 0 green,
    /*0 -5px 0 #dddddd,*/
    0px -5px 5px #dddddd,
    0 0px 0 red,
    0px 0 0 yellow;
    display: flex;
    justify-content: center;
  }
  .guide_item.active:last-child .img_box{
    margin-left:-2rem;
  }
  .guide_item.active  .img_box .img_div{
    margin: auto;
    width: 7rem;
    height: 7rem;
    background: $mainColor;
    border-radius: 3.5rem;
    display: flex;
    justify-content: center;
  }
  .img_box .img_div .img{
    margin: auto;
    background: no-repeat center;
  }
  .guide_item_div p{
    line-height: 4rem;
  }
</style>
