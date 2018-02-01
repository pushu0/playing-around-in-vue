<template>
  <div id="container">
    <Header></Header>
    <HowItWorks :activeindex="this.state"></HowItWorks>
    <div id="bg"></div>
  </div>

</template>
<script>
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
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
    Header, HowItWorks
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
    this.fadeInTape();
TweenMax.set("#box", {scale: 1.1, rotation: 90, transformOrigin: "200% 200%"})
    var boxCover = new TimelineMax();
    //boxCover
    console.log()

  },
  computed: {

  },
  methods: {
    handleScroll: function (e) {
      if(e.deltaY > 0) {
        this.changeState(1);
        //this.fadeOutTape();
      } else {
        this.changeState(-1);

      }

        console.log(e.deltaY);


      },
      changetext: function() {

      },
      changeState : _.debounce(function(counter){
        this.state += counter;
      }, 300),
      fadeInTape: function (){
        var fadeIn = new TimelineMax()
        // fadeIn
        // .set("#box", {scale: 1.1, rotation: 90, transformOrigin: "200% 200%"})
        //
        // .from("#vhs", 0.8, {rotation: 90, transformOrigin: "200% 100%", ease: Power2.easeOut }, "fadeIn")
        //
        // .from("h6", 1, {rotation: 90, transformOrigin: "-200% 100%", ease: Power2.easeOut }, "fadeIn")
        // .to("#vhs-tape", 3.3, {rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease:Linear.easeNone}, "fadeIn")

      },
      fadeOutTape: function (){
        var fadeOut = new TimelineMax();
        // fadeOut
        //   .to("h1", 0.75, {rotation: 90, transformOrigin: "-200% 200%", ease: Power2.easeIn }, "fadeIn")
        //   .to("h6", 0.6, {rotation: 90, transformOrigin: "-200% 200%", ease: Power2.easeIn }, "fadeIn")
        //   .to("#box", 1, {scale: 1.01, rotation: 0, transformOrigin: "200% 100%",  ease:Power2.easeOut},"fadeIn")
        //   .to("#box", 0.3, {scale: 1, transformOrigin: "200% 100%", ease:Power2.easeIn} )
        //   .from("#stamp", 0.5, {scale: 2, opacity: 0, ease:Power2.easeIn})

          // HowItWorks.changetext()
          this.state += 1;



      }
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
