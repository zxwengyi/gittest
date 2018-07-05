<template>
  <div class="lookTop">
    <!--顶部导航-->
    <head-top go-back='true' title='true'  head-title="排行榜" message ='true'></head-top>
    <section class="top">
      <ul class="top_ul">
        <li class="top_li" v-for="(item, index) in currentBook.topList" :key="index">
          <div class="options_li_top">
            <div><p class="ranking">第<span :class="{ active: index < 3 }">{{index+1}}</span>名</p></div>
            <div>
              <p class="top_right_score"><span>{{item.score}}</span>分</p>
            </div>
          </div>
          <div class="top_li_bottom">
            <div class="top_left">
              <div class="top_left_img" :style="{backgroundImage: 'url('+ item.imgUrl +')'}">
              </div>
              <div class="top_left_text">
                <p>{{item.title}}</p>
                <p>{{item.describe}}</p>
              </div>
            </div>
            <div class="top_right">
              <p class="top_right_timer"><span>用时</span>{{item.usedTime}}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import headTop from '../../communal/header/head'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        number: ''
      }
    },
    methods: {

    },
    components: {
      headTop
    },
    mounted () {

    },
    computed: {
      ...mapState(['currentBook'])
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .top{
    margin-top: 7.3rem;
    width: 100%;
    font-size: 3rem;
    background-color: #eeeeee;
    margin-bottom: 2rem;
  }
  .top_ul{
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1rem;

  }
  .top_li{

    background-color: #ffffff;
    padding: 0rem 1.5rem;
    margin-top: 0.3rem;
    /*border-bottom: solid 2px #eeeeee;*/
  }
  .options_li_top{
    font-size: 2.3rem;
    margin: 2.5rem 0 2rem;
    display: flex;
    justify-content: space-between;
  }
  .options_li_top .ranking{
    color: $mainColor;
  }
  .options_li_top .ranking span{
  }
  .options_li_top .ranking .active{
    color: #ff775a;
  }
  .top_li_bottom{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .top_left{
    display: flex;
  }
  .top_left_img{
    width: 7.5rem;
    height: 7.5rem;
    background: no-repeat;
    background-size:100% 100%;  }

  .top_left_text{
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2.5rem;
  }
  .top_right{
    /*width: 15rem;*/
    font-size: 2.3rem;
    color: #707070;
    /*margin: 2rem 0;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .top_right_timer{
    padding-bottom: 2.5rem;
  }
  .top_right_timer span{
    margin-right: 1rem;
    font-size: 2.0rem;
  }
  .top_right_score span{
    color: #ff775a;
  }
  .top_left_text p:nth-child(2),.top_right p:nth-child(2){
    color: #707070;
    margin: 1rem 0 2.5rem;
    font-size: 2.2rem;
  }
  .options_li{
    display: flex;
    border: solid 1px #000000;
    padding: 2rem 0;
    margin: 2rem 0;
  }
  .result{
    background-color: #00d6b2;
  }
  .options_left{
    margin:0 2rem;
  }
  .submit{
    margin: 2rem;
    margin-top: 5rem;
    background-color: #4f7cfe;
    display: flex;
    justify-content: center;
  }
  .submit{
    line-height: 5rem;
  }
</style>
