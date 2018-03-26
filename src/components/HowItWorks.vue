<template>
  <div id="howitworks">
    {{stateindex}}
    <div id="slider">
        <div class="slider-circle"></div>
        <div class="slider-line"></div>
        <div class="slider-circle"></div>
        <div class="slider-line"></div>
        <div class="slider-circle"></div>
    </div>
    <transition
      v-on:enter="enterLeft"
      v-on:leave="leaveLeft"
      v-bind:css="false"
      appear
    >
    <h1 v-if="state=='send'" :key="1">
        {{msg[0].main}}
    </h1>
  </transition>
  <transition
    v-on:enter="enterLeft"
    v-on:leave="leaveLeft"
    v-bind:css="false"
    appear
  >
    <h6 v-if="state=='send'" :key="1">
      {{msg[0].secondary}}
    </h6>
    </transition>
    <transition
      v-on:enter="enterLeft"
      v-on:leave="leaveLeft"
      v-bind:css="false"
      appear
    >
    <h1 v-if="state=='digitize'" :key="2">
        {{msg[1].main}}
    </h1>
  </transition>
  <transition
    v-on:enter="enterLeft"
    v-on:leave="leaveLeft"
    v-bind:css="false"
    appear
  >
    <h6 v-if="state=='receive'" :key="2">
      {{msg[2].secondary}}
    </h6>
    </transition>
    <transition
      v-on:enter="enterLeft"
      v-on:leave="leaveLeft"
      v-bind:css="false"
      appear
    >
    <h1 v-if="state=='receive'" :key="2">
        {{msg[2].main}}
    </h1>
  </transition>
  <transition
    v-on:enter="enterLeft"
    v-on:leave="leaveLeft"
    v-bind:css="false"
    appear
  >
    <h6 v-if="state=='digitize'" :key="2">
      {{msg[1].secondary}}
    </h6>
    </transition>
    <transition
      v-on:enter="enterRight"
      v-on:leave="leaveRight"
      v-bind:css="false"
      appear
    >
      <div id="vhs" v-if="state=='send'">
        <img id="vhs-img" src="../assets/vhs.png">
        <img id="vhs-tape" src="../assets/roll on.png">
      </div>
    </transition>
    <transition
      v-on:enter="enterRight"
      v-on:leave="leaveRight"
      v-bind:css="false"
      appear
    >
      <div id="box" v-if="state=='send'">
        <img id="box-send" src="../assets/box.png">
        <img id="stamp" src="../assets/stamp.png">
      </div>
    </transition>
    <transition
      v-on:enter="enterVideo"
      v-on:leave="leaveVideo"
      v-bind:css="false"
      appear
    >
      <div id="video" v-if="state=='digitize'">
        <div id="video-overlay"></div>
        <video id="videoclip" autoplay>
          <source src="../assets/vhs-loop.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </transition>
    <transition
      v-on:enter="enterRightReturn"
      v-on:leave="leaveRightReturn"
      v-bind:css="false"
      appear
    >
      <div id="box-receive" v-if="state=='receive'">
        <img id="box-receive-lid" src="../assets/box-return-lid.png">
        <img id="box-receive-items" src="../assets/box-return.png">
      </div>
    </transition>
    <div id="bg-how" :style="{backgroundColor: bgColor}"></div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorks',
  // props: ['routerstate'],
  data () {
    return {
      msg: {
        0: {
          state: 'send',
          main:'Send it',
          secondary: 'We provide you with personalized updates, from start to finish.',
          color: '#26d8c2'
        },
        1: {
          state: 'digitize',
          main:'Digitize it',
          secondary: 'We provide you with personalized updates, from start to finish.',
          color: 'white'
        },
        2: {
          state: 'receive',
          main:'Receive it',
          secondary: 'We provide you with personalized updates, from start to finish.',
          color: '#bbf173'
        }
      },
      state: '',
      stateindex: 0,
      bgColor: '',
      activeindex: 0,
      availablestates: ['send','digitize', 'receive']
      // activemsg: this.msg[this.props.activeindex]


    }
  },
  created: function(){

  },
  mounted: function() {
      // this.changetext();
        // this.activemsg = this.msg[this.activeindex];
        //check if the route is same as state

        //initialize !!!!!!!!!!!!!!!!
        if(this.$route.path != this.state) {
          this.state = this.$route.params['state'];


        }
        this.initSlider(this.getState());
        //rotate vhs tape loop
        TweenMax.to("#vhs-tape", 3.3, {rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease:Linear.easeNone}, "fadeIn")
  },
  computed: {
    activemsg: function (){
      console.log(activeindex);
    },
  },
  watch: {
    activeindex: function (newVal, oldVal){
      if(newVal < 0 || newVal > 2) {
        this.activeindex = oldVal;
      }
    },
    '$route.params.state': function (newValue, oldValue){
        console.log("route state")

        for(let j=0; j < this.availablestates.length; j++){
          if(this.availablestates[j] == newValue){

            this.bgColor = this.msg[j].color;
            this.sliderSelect(j);
            // console.log(this.bgColor);
            this.state = newValue;
            return;
            // this.bgColor = this.
            }
        }
    }
  },
  methods: {
    initSlider: function(selectedIndex) {
      this.sliderSelect(selectedIndex);
      var circles = document.querySelectorAll(".slider-circle");
      var self = this;
      for(var z = 0; z < circles.length; z++) {
          (function(index){
            var elem = circles[index];
            elem.onclick = function() {
                self.changeState(index);
                //console.log(self.changeState());
                return false;
            };
          })(z);
      }

    },
    sliderSelect: function(index){

        var circles = document.querySelectorAll(".slider-circle");
        var selectedCircle = document.querySelectorAll(".slider-circle.selected");
        //remove the selected
        if(selectedCircle.length) selectedCircle[0].classList.remove("selected");
        circles[index].classList.add("selected");
        // circles[j]

    },
    enterLeft: function(el, done) {
      var duration = el.nodeName == "H6" ? 1 : 0.85;
      TweenMax.from(el, duration, {rotation: 90, transformOrigin: "-200% 100%", ease: Power2.easeOut,onComplete:done });
    },
    leaveLeft: function(el, done) {
      var duration = el.nodeName == "H6" ? 0.6: 0.55;
      TweenMax.to(el, duration, {rotation: -90, transformOrigin: "-200% 100%", ease: Power2.easeIn, clearProps:"all",onComplete:done });
    },
    enterRight: function(el, done) {
      var duration = el.id == "vhs" ? 0.3 : 0.8;
      var delayed =  el.id == "vhs" ? 0 : 0.3;
      TweenMax.from(el, duration, {rotation: 90, transformOrigin: "+200% 100%", ease: Power2.easeOut,onComplete:done, delay: delayed });
    },
    enterRightReturn: function(el,done) {
      var tl = new TimelineMax({onComplete: done});
      tl
      .from(el, 0.5, {rotation: 90, transformOrigin: "+200% 100%", ease: Power2.easeOut })
      .to("#box-receive-lid", 0.2, {transform:"scale(1.01)", ease: Power2.easeOut}, "+=0.5")
      .to("#box-receive-lid", 3, {rotation: -90, transformOrigin: "+150% 100%", ease: Power2.easeOut}, "+=0.2");
    },
    leaveRightReturn: function(el, done) {
      var doneAppended = function (){
        TweenMax.set("#box-receive-lid", {clearProps:"all"});
        done();
      }
      TweenMax.to(el, 0.6 , {rotation: -90, transformOrigin: "+200% 100%", ease: Power2.easeIn, clearProps:"all",onComplete:doneAppended });

    },
    leaveRight: function(el, done) {
      var duration = el.nodeName == "H6" ? 0.6: 0.55;
      TweenMax.to(el, duration, {rotation: -90, transformOrigin: "+200% 100%", ease: Power2.easeIn, clearProps:"all",onComplete:done });
    },
    enterVideo: function(el, done) {
      TweenMax.to("#video-overlay", 0.3, {opacity: 0, transformOrigin: "50% 50%", ease:Power2.easeOut });
      TweenMax.from(el, 0.5, {transform: 'scaleY(0)', transformOrigin: "50% 50%", ease:Power2.easeOut, onComplete:done });

      var video = document.getElementById("videoclip");
      video.currentTime = 0;
      video.play()
    },
    leaveVideo: function(el, done) {
      TweenMax.to(el, 0.3, {transform: 'scaleY(0)', transformOrigin: "50% 50%",clearProps: "all", ease:Power2.easeIn, onComplete:done});
      TweenMax.to("#video-overlay", 0.2, {opacity: 1, transformOrigin: "50% 50%", ease:Power2.easeIn}, "+=0.1");
    },
    //e is the index of the state
    nextprevState: function(e){
        var oldindex;
        oldindex = parseInt(this.getState()) + e;
        this.changeState(oldindex);
    },
    changeState: function (e){
      console.log(e);

        var oldindex = e;
        var oldState;

        // console.log(!_isNumber(oldindex))
        // if(!_isNumber(oldindex)) {
        //   oldindex = this.activeindex;
        // }

         switch(oldindex) {
           case 0:
           // this.state = 'send'
           oldState='/send'
           break;
           case 1:
           // this.state = 'digitize'
           oldState = '/digitize'
           break;
           case 2:
           // this.state = 'digitize'
           oldState = '/receive'
           break;
           default:
           oldState = '';
           break;
         }

         if(oldState.length != '') {
           this.$router.push({path:oldState})
         }
    },
    getState: function(){
      var self = this;
      //returns number
      return _.findKey(this.availablestates, function(states) { return states==self.state; })
    },


  }
}
</script>

<!-- /* <style scoped> */ -->
<style>
#howitworks {
  position: relative;
  width: 100vw;
  height: 100vh;
}
h6 {
  z-index: 2;
  position: absolute;
  right: 66%;
  top: calc(50vh + 1em);
  text-align: right;
  width: 22%;
  font-size: 1em;
}
h1 {
  font-size: 4em;
  z-index: 2;
  position: absolute;
  right: 66%;
  top: calc(50vh - 1em);
}
#vhs {
  position: absolute;
  top: calc(50vh - 314px);

  left: 33%;
  display: block;
  width: 1147px;
  height: 628px;
}
#vhs-img,
#vhs-tape {
  display: block;
  z-index: 2;
  position: absolute;
  left: 0;
}
#vhs-tape {
  z-index: 1;
  left: 10%;
  top: 140px;
  left: 188px;
}
#box,
#box-receive {
  position: absolute;
  z-index: 2;
  width: 1067px;
  height: 656px;
  top: calc(50vh - 328px);
  left: 40%;
  display: block;
}
#box-receive {
  width: 1230px;
  height: 634px;
  left: 35%;
}
#box-send,
#stamp,
#box-receive-items,
#box-receive-lid {
  position:absolute;
  left: 0;

}
#box-receive-lid {
  z-index: 2;
}
#stamp {
  z-index: 5;
  left: 3%;
  top: 5%;
  opacity: 1;
}
#video  {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;

}
#video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 2;
}
video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    /* display: block; */
    /* background-color: white !important;  */
}
#bg-how {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transition: background-color 2s ease;
    z-index: -1;
}
#slider{
  width: 20px;
  height: auto;
  position: absolute;
  left: 1em;
  top: calc(50% - 118px);
  z-index: 100;
  transition: all 0.3s ease;
  transform: scale(0.7);
}
.slider-circle {
  width: 8px;
  height: 8px;
  background-color: transparent;
  border-radius: 28px;
  text-align: center;
  margin: 1em auto;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  /* box-shadow: 0 0 7px #000; */
  border: 2px solid #2c3e50;
  cursor:pointer;
}
.slider-circle.selected {
  background-color: #2c3e50;
  width: 20px;
  height: 20px;
  box-shadow: none;
  border: none;
}
.slider-line {
  background-color: #2c3e50;
  width: 1px;
  height: 50px;
  margin: 5px auto;
}
</style>
