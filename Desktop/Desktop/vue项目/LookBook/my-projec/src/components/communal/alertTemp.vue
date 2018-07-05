<template>
  <div class="alet_container">
    <section class="tip_text_container">
      <div class="tip_text_box">
        <p class="tip_text">{{alertObj.alertText}}</p>
        <p class="tip_warn">{{alertObj.alertWarn}}</p>
      </div>
      <!--<div class="confrim" @click="closeTip">确认</div>-->
      <div class="confrim">
        <div class="no" @click="closeTip(false)">否</div>
        <div class="ok" @click="closeTip(true)">是</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        positionY: 0,
        timer: null
      }
    },
    mounted () {

    },
    props: ['alertObj'],
    methods: {
      closeTip (result) {
        this.$emit('closeTip', result)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  @keyframes tipMove{
    0%   { transform: scale(1) }
    35%  { transform: scale(.8) }
    70%  { transform: scale(1.1) }
    100% { transform: scale(1) }
  }
  .alet_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
  }
  .tip_text_container {
    width: 100%;
    margin: auto 10rem;
    left: 2rem;
    animation: tipMove .4s;
    background-color: rgba(255, 255, 255, 1);
    border: 1px;
    padding-top: .6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 1px solid #000000;
    border-radius: 0.25rem;
  }
  .tip_text_container div{
    width: 100%;
  }
  .tip_text_box{
     margin: 2rem;
    text-align: center;
  }
  .tip_text{
    margin-bottom: 2rem;
    font-size: 3rem;
  }
.confrim{
  width: 100%;
  display: flex;
  margin: 1rem 0;
  text-align: center;
  font-size: 2rem;
}
  .confrim div{
    border: solid 1px #000000;
    padding: 1rem 0;
    margin:0 1rem;
    border-radius: 0.8rem;
  }
</style>
