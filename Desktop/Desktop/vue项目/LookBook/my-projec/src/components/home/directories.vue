<template>
  <div id="directories">
  <aside class="directories_list">
    <!--<div class="directories_title" @click="chockdirectories(-1)"><p>目录</p></div>-->
    <ul>
     <li v-for="(item,index) in catalogueListes" :key="index" class="directories_li" v-bind:class="{active: item.active}" @click="chockdirectories(index)"><span>{{item.text}}</span></li>
   </ul>
  </aside>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'directories',
    data () {
      return {
      }
    },
    mounted () {

    },
    components: {

    },
    methods: {
      ...mapMutations(['SWICH_CATALOGUE']),
      chockdirectories (index) {
        console.log(index)
        this.$emit('checkmark', index)
        if (index >= 0) {
          this.SWICH_CATALOGUE({index: index, type: 'catalogue'})
        }
      }
    },
    computed: {
      ...mapState(['catalogueListes'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  #directories{
    position: fixed;
    z-index: 99999;
    width: 16rem;
    /*right: 0;*/
  }
  .directories_list{
    background-color: #fff;
    position: absolute;
    /*z-index: 9999999;*/
    /*right: 0;*/
    font-size: 2.5rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    width:16rem ;
    background-color:$mainColor;
  }
  .directories_list p{
   line-height: 6.7rem;
    text-align: center;
  }
  .directories_title{
    font-size: 2rem;
    height: 6.7rem;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    font-size: 3rem;
  }
  .directories_list ul li{
    text-align: center;
    /*padding-left: 2rem;*/
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
    opacity: 0.8;
    color: rgb(0, 0, 0);
  }
  .directories_list ul li.active{
    /*background-color: #000000;*/
    /*opacity: 0.5;*/
    color: #ffffff;
  }
  .directories_list ul li:last-child{
     border-bottom: 0;
  }
  .directories_list ul li span{
    line-height: 5.7rem;;
  }
</style>
