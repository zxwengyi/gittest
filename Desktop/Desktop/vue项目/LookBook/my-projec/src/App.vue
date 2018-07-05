<template>
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    mounted () {
    },
    components: {
    },
    computed: {

    },
    methods: {
    }
  }
</script>

<style>
  body,p,b,dl,dd,table,td,th,input,img,form,div,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    /*-webkit-touch-callout:none;*/
    /*-webkit-user-select:none;*/
    /*-khtml-user-select:none;*/
    /*-moz-user-select:none;*/
    /*-ms-user-select:none;*/
    /*user-select:none;*/
  }

  html, body{
    height: 97%;
    /*background: #f6f6f6;*/
    }
  .app{
    height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity 0s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0.8;
  }
</style>
