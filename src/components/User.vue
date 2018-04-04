<template>
  <div id="container">
    <Header></Header>
    <!-- <HowItWorks ref="howitworks"></HowItWorks> -->
    <!-- <vhsToDvd ref="howitworks"></vhsToDvd> -->
    <transition name="slide-fade"
    >
       <!-- <router-view :is="state" :ref="state" :key="state"></router-view> -->
      {{state}}

      <router-view :is="state"></router-view>
      <!-- <component is="howitworks" :v-if="state==='howitworks'"></component> -->
    </transition>
    <div id="bg"></div>
  </div>

</template>
<script>
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import vhsToDvd from '@/components/vhsToDvd';

// import _ from 'lodash';
//typical import


//or get to the parts that aren't included inside TweenMax (works as of 1.19.1):
// import Draggable from "gsap/Draggable";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

export default {
  name: 'User',
  data () {
    return {
      scrollPosition: 0,
      state: '',
      availablestates: ['howitworks','vhstodvd']
    }
  },
  components: {
    'header': Header,
    'howitworks': HowItWorks,
    'vhstodvd': vhsToDvd
  },
  created: function() {
    console.log(this)
  },
  destroyed: function(){
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

    })


    console.log(this.$route)
    if(this.$route.params.state.replace(/-/g, '') == 'vhstodvd'){
      this.state = 'vhstodvd';
      console.log(this.state);
    } else {
      this.state = 'howitworks';
    }


    document.body.addEventListener("wheel", this.handleScroll);
    this.$on('gotoNextPage', function() {
      this.gotoNextPage();
    })
  },
  computed: {

  },
  watch: {
    '$route.params.state': function (newValue, oldValue){
      if(this.$route.params.state.replace(/-/g, '') == 'vhstodvd'){
        this.state = 'vhstodvd';
      } else {
        this.state = 'howitworks';
      }
    }
  },
  methods: {
    handleScroll: function (e) {


        // if(e.deltaY > 0) {
        //   this.changeState(1);
        //
        //   // this.fadeOutTape();
        // } else {
        //    this.changeState(-1);
        // }
        this.$emit("handle-scroll", e);

        e.preventDefault();
      },
      changetext: function() {

      },
      //
      changeState : _.debounce(function(counter){
        // this.state += counter;
        // this.$refs.howitworks.nextprevState(counter);
        // this.$emit("change-state", counter);
      }, 500)
  }

}
</script>

<!-- /* <style scoped> */ -->
<style scoped>
#bg {
  width: 100%;
  height: 100%;
  background-color: #26d8c2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}
h1, h6 {
  font-family: 'Libre Franklin', sans-serif;
}
#container {
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  position: relative;
}
@-webkit-keyframes mask-play {
  from {
    -webkit-mask-position: 0 0;
    -moz-mask-position: 0 0;
    -ms-mask-position: 0 0;
    -o-mask-position: 0 0;
    mask-position: 0 0; }
  to {
    -webkit-mask-position: 100% 0;
    -moz-mask-position: 100% 0;
    -ms-mask-position: 100% 0;
    -o-mask-position: 100% 0;
    mask-position: 100% 0; } }

@keyframes mask-play {
  from {
    -webkit-mask-position: 0 0;
    -moz-mask-position: 0 0;
    -ms-mask-position: 0 0;
    -o-mask-position: 0 0;
    mask-position: 0 0; }
  to {
    -webkit-mask-position: 100% 0;
    -moz-mask-position: 100% 0;
    -ms-mask-position: 100% 0;
    -o-mask-position: 100% 0;
    mask-position: 100% 0; }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  /* transition: all .2s ease; */
  animation: mask-play .8s steps(16) 0s forwards;
  mask-type: alpha;
  -webkit-mask-type: alpha;
}
.slide-fade-leave-active {
  animation: mask-play .8s steps(16) 0s backwards;
  mask-type: alpha;
  -webkit-mask-type: alpha;
}
.slide-fade-enter,
.slide-fade-leave-to {
/* .slide-fade-leave-active below version 2.1.8 */
  /* transform: translateY(50px);
  opacity: 0; */
  position: absolute;
  top: 0;
  left: 0;
  -webkit-mask-image:url(../assets/film-tear-spritesheet-tiny.png);
  mask-image:url(../assets/film-tear-spritesheet-tiny.png);
  mask-type: alpha;
  -webkit-mask-type: alpha;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;

}
/* @include mask(url("../assets/images/transition.png"));
        @include mask-size(1300% 100%);
        @include mask-position(0 0);
        @include animation(mask-play 0.8s steps(12) 0s both);
    } */

</style>
