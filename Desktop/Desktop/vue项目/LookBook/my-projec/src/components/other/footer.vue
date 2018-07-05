<section id='foot_guide' v-if='footBarShow'>
  <section @click="clickFooter(links[0].route,1)" class="guide_item " :class="{'active':links[0].isActive}">
    <span>阅读文</span>
  </section>
  <section @click="clickFooter(links[1].route,2)"  class="guide_item" :class="{'active':links[1].isActive}">
    <span>阅读圈</span>
  </section>
  <section @click="clickFooter(links[2].route,3)"  class="guide_item" :class="{'active':links[2].isActive}">
    <span>我的</span>
  </section>
</section>

<script>
  export default {
    name: 'footguide',
    data () {
      return {
        footBarShow: true,
        links: [
          {
            isActive: true,
            text: '阅读文',
            route: '/articles'
          },
          {
            isActive: false,
            text: '阅读圈',
            route: '/readingCircle'
          },
          {
            isActive: false,
            text: '我的',
            route: '/my'
          }
        ]
      }
    },
    mounted () {

    },
    components: {

    },
    computed: {

    },
    methods: {
      clickFooter (index, number) {
        this.$router.push(index)
        var i = 0
        if (number === 1) {
          for (i = 0; i < this.links.length; i++) {
            this.links[i].isActive = false
          }
          this.links[0].isActive = true
        } else if (number === 2) {
          for (i = 0; i < this.links.length; i++) {
            this.links[i].isActive = false
          }
          this.links[1].isActive = true
        } else if (number === 3) {
          for (i = 0; i < this.links.length; i++) {
            this.links[i].isActive = false
          }
          this.links[2].isActive = true
        } else {
        }
      }
    }
  }
</script>

<style>
  #foot_guide{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5rem;
    font-size: 1.5rem;
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  }
  .guide_item{

    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .guide_item.active{
    background-color: #00d6b2;
  }
  .icon_style{
    margin-bottom: .2rem;
    margin-top: .3rem;
    fill: #ccc;
    width: 2rem;
    height: 2rem;
  }
  span{

  }
</style>
