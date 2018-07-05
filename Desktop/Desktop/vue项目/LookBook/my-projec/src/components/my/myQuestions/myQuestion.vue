<template>
	<div>
		<!--顶部导航-->
	    <head-top signin-up='home'  go-back='true' title='true'  :headTitle='headTitle' message =''>
	    </head-top>
		 <div class="content">
        <div v-show="!show" id="noQusetionPannel">
          <p>暂无提问</p>
        </div>
      </div>
	</div>
</template>

<script>
  import headTop from '../../communal/header/head'
  import footGuide from '../../communal/footer/foot'

  export default {
    name: 'personalsSetting',
    data () {
      return {
        headTitle: '我的提问',
        show: false
      }
    },
    components: {
      headTop,
      footGuide
    }
  }
</script>
<style type="text/css" media="screen">
  #noQusetionPannel{
  text-align: center;
  font-size: 40px;
  height: auto;
  line-height: auto;
}  
</style>
