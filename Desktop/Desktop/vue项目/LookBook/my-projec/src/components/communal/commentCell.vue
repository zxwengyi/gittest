<template>
  <div class="discuss_cell">
    <ul class="discuss_list_ul">
      <li v-for="(item,index) in itemList" :key="index" class="discuss_list_li">
        <section class="item_left">
          <p :style="{backgroundImage: 'url('+ item.headerImg +')'}"></p>
        </section>
        <section class="item_mian">
          <div class="item_mian_top">
            <span class="item_mian_name">{{item.name}}</span>
            <span class="participants">{{item.time}}</span>
          </div>
          <div>
            <span class="participants">{{item.discuss}}</span>
          </div>
          <div class="item_mian_bottem">
            <p class="participants_img_box">
              <span class="participants_img" :style="{backgroundImage: 'url('+ item.secDisNumImg +')'}"></span>
              <!--<Icon type="plus"></Icon>-->
              <span class="participants_likeNumber">{{item.secDisNum}}</span>
            </p>
            <p class="participants_img_box" :class="{activate: item.isLiked}" @click="thumbComments(index,item,type)">
              <span class="participants_img" :style="{backgroundImage: 'url('+ item.likeImg +')'}"></span>
              <span class="participants_likeNumber">{{item.likeNumber}}</span>
            </p>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        positionY: 0,
        timer: null
      }
    },
    mounted () {
    },
    props: ['itemList', 'type'],
    methods: {
      ...mapMutations(['THUMB_COMMMENTS']),
      closeTip (result) {
//        this.$emit('closeTip', result)
      },
      //    点赞
      thumbComments (index, item, type) {
        if (item.isLiked === false) {
          if (type === 'creativity') {
            console.log(this.type)
            this.THUMB_COMMMENTS({index: index, tpye: 'creativity'})
          }
          if (type === 'system') {
            this.THUMB_COMMMENTS({index: index, tpye: 'system'})
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .discuss_list_ul{
    /*padding: 1rem;*/
    background-color: #DDDDDD;
  }
  .discuss_list_li{
    background-color:#ffffff;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    border-bottom: solid 1px #c9c9c9;
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
  .item_mian{
    display: flex;
    flex-direction: column;
  }
  .item_mian_top{
    color: #707070;
    display: flex;
    justify-content: space-between;
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
    /*color: #707070;*/
  }
  .item_right{
    text-align: center;
  }
  .item_mian_bottem{
    color: #707070;
    display: flex;
    justify-content: flex-end;
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
    /*background-size:110% 110%;*/
    background-size:70% 70%;
  }
  /*.participants_img_box:last-child .participants_img{*/
    /*background-size:70% 70%;*/
  /*}*/
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
    background-color: #1a9fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0em 0rem 0.5rem 0.3rem rgba(0,0,0,0.3);
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
    background: url("../../images/icon/Write_white.png") no-repeat center;
  }
  .bottom_btn_box p:last-child{
    position: relative;
    bottom: 1.1rem;
  }
  .discuss_submit p{
    text-align: center;
  }
</style>
