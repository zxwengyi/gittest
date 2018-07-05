<template>
  <div class="articleTemp" @click="gotoAddress('')">
    <div class="article">{{articleTemp}}</div>
  </div>
</template>
<script>
  export default {
    name: 'articleTemp',
    data () {
      return {
        articleTemp: 'Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：在 CSS 过渡和动画中自动应用 class可以配合使用第三方 CSS 动画库，如 Animate.css在过渡钩子函数中使用 JavaScript 直接操作 DOM可以配合使用第三方 JavaScript 动画库，如 Velocity.js'
      }
    },
    components: {
    },
    props: ['article'],
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
        console.log(this.$router)
      }
    }
  }
</script>
<style>
  .article{
    /*font-size: 2rem;*/
    /*width: 100%;*/
  }
</style>
