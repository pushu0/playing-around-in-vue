<template>
  <div id="container">
    <Header></Header>
    <!-- <HowItWorks ref="howitworks"></HowItWorks> -->
    <vhsToDvd ref="howitworks"></vhsToDvd>
    <div id="bg"></div>
  </div>

</template>
<script>
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import vhsToDvd from '@/components/vhsToDvd';
//typical import
import {TweenMax, Power2, TimelineLite} from "gsap";
import _ from "lodash";

//or get to the parts that aren't included inside TweenMax (works as of 1.19.1):
// import Draggable from "gsap/Draggable";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

export default {
  name: 'User',
  data () {
    return {
      scrollPosition: 0,
      state: 0
    }
  },
  components: {
    Header, HowItWorks, vhsToDvd
  },
  created: function() {
  },
  destroyed: function(){
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

    })
    document.body.addEventListener("wheel", this.handleScroll);
    // this.fadeInTape();
// TweenMax.set("#box", {scale: 1.1, rotation: 90, transformOrigin: "200% 200%"})
    // var boxCover = new TimelineMax();
    //boxCover
    // console.log()

  },
  computed: {

  },
  methods: {
    handleScroll: function (e) {

        if(e.deltaY > 0) {
          this.changeState(1);

          // this.fadeOutTape();
        } else {
           this.changeState(-1);

        }
      },
      changetext: function() {

      },
      //
      changeState : _.debounce(function(counter){
        // this.state += counter;
        this.$refs.howitworks.nextprevState(counter);
      }, 500)
  }

}
</script>

<!-- /* <style scoped> */ -->
<style>
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

</style>
