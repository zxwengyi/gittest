<template>
    <i-circle :percent="percent"
              :trail-width="6"
              :stroke-width="7"
              stroke-color="#70a595">
      <span class="demo-Circle-inner" style="font-size:2.2rem; color: #70a595;">{{percent}}%</span>
    </i-circle>
  <!--<div>{{percent}}</div>-->
</template>
<script>
//  import Velocity from 'velocity-animate'
  export default {
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    props: ['percent']
  }
</script>
<style>
</style>
