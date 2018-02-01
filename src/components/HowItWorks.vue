<template>
  <div id="howitworks">
    {{activeindex}}
    <small></small>
      <transition-group name="rotate"
       v-on:enter="enter"
       v-on:appear ="enter"
       v-on:leave="leave"
       >
        <h1 v-for="(item, index) in msg" v-bind:key="item.main"
        v-show="index == activeindex">
            {{item.main}}
          </h1>
    </transition-group>
        <h6 v-if="Object.keys(msg[activeindex])">
          {{msg[activeindex].secondary}}
        </h6>


    <div id="vhs">
      <img id="vhs-img" src="../assets/vhs.png">
      <img id="vhs-tape" src="../assets/roll on.png">
    </div>
    <div id="box">
      <img id="box-send" src="../assets/box.png">
      <img id="stamp" src="../assets/stamp.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'HowItWorks',
  props: ['activeindex'],
  data () {
    return {
      msg: {
        0: {
          main:'Send it',
          secondary: 'We provide you with personalized updates, from start to finish.',
        },
        1: {
          main:'Digitize it',
          secondary: 'We provide you with personalized updates, from start to finish.',
        }
      },

      // activeindex: 1,
      // activemsg: this.msg[this.props.activeindex]


    }
  },
  created: function(){

  },
  mounted: function() {
      // this.changetext();
        // this.activemsg = this.msg[this.activeindex];
  },
  computed: {
    activemsg: function (){
      console.log(activeindex);
    },
  },
  watch: {
    activeindex: function (newVal, oldVal){
      console.log('it was '+oldVal+' and now its '+newVal)
    }
  },
  methods: {
    enter: function() {
      console.log("enter")
      TweenMax.from("h1", 0.85, {rotation: 90, transformOrigin: "-200% 100%", ease: Power2.easeOut }, "fadeIn");
    },
    leave: function() {
      TweenMax.to("h1", 0.6, {rotation: 90, transformOrigin: "-200% 200%", ease: Power2.easeIn }, "fadeOut");
    }

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
#box {
  position: absolute;
  z-index: 2;
  width: 1067px;
  height: 656px;
  top: calc(50vh - 328px);
  left: 40%;
  display: block;
}
#box-send,
#stamp {
  position:absolute;
  left: 0;

}
#stamp {
  z-index: 5;
  left: 3%;
  top: 5%;
  opacity: 1;
}
</style>
