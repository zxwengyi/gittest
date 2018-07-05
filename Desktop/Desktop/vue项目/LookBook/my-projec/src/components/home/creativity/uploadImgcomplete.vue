<template>
  <div class="complete">
    <section class="main">
      <div class="complete_img">
        <img :src="currentBook.createObj.chooseImg"/>
      </div>
      <div class="complete_btn" @click="submit">
        <p>完成</p>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations(['CHOOSE_IMGE', 'SUBMIT_CREATE', 'CHOOSE_CREATE']),
      //    提交
      submit () {
        var createObj = {
          discuss: this.currentBook.createObj.discuss,
          name: '我',
          time: '2017/10/16',
          CompleteNumber: 0,
          likeNumber: 0,
          isLiked: false,
          likeImg: require('../../../images/icon/thumbs.png'),
          headerImg: this.currentBook.createObj.chooseImg,
          recommendImg: this.currentBook.createObj.chooseImg,
          recommendBgImg: this.currentBook.createObj.recommendBgImg,
          discussionList: []
        }
        this.SUBMIT_CREATE({createObj: createObj})
        this.CHOOSE_CREATE({index: 0})
        this.$router.push({name: 'createComplete', params: {backSteep: -3}})
      }
    },
    components: {
    },
    computed: {
      ...mapState(['currentBook'])
    },
    created: function () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  .main{
    position: fixed;
    top:7.3rem;
    left: 0;
    right: 0;
    bottom: 0;
    /*color: #ffffff;*/
    font-size: 3rem;
  }
  .complete_img{
    height: 80%;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
.complete_btn{
  height:20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  .complete_btn p{
    text-align: center;
    background-color: $mainColor;
    line-height: 8rem;
    margin: 0 2.5rem;
    border-radius: 5rem;
    color: #ffffff;
  }
</style>
