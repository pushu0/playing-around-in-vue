<template>
  <div id="container">
      <transition-group name="image" tag="div" class="image-container"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"

      appear>
      <!-- <div class="image-container"> -->
        <img class="image-bg" v-for="(image,e, index) in backgroundImages" :data-index="index" :src="image.src" :width="image.width" :height="image.height" :alt="image.name" :key="image.name">

      <!-- </div> -->
    </transition-group>
    <transition-group name="text" tag="div" class="text-container"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"

    appear>
      <!-- <div class="text-container"> -->
        <h1 key="h1" data-index="1">VHS to DVD <br>
          <span>and Digital Service</span>
        </h1>
        <p key="p" data-index="2">High tech videotape conversion meets simple mail-in service so you can relive the good ole days digitally.</p>
        <section key="section-1" data-index="3">
          <h3>HOW MANY TAPES DO YOU WANT TO DIGITIZE?</h3>
          <div v-for="tape in tapes" :class="[toClass(tape.name), 'breakdown']" >
            <div class="left">
              <ul>
                <li>{{tape.name}}</li>
                <li>{{tape.price}}</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease" @click="removeitem(tape)"></button>
              <ul class="amount" :style="{transform: 'translateY(-'+tape.amount*50+'px)'}">
                <li v-for="(amount, index) in 20">{{index}}</li>
                <!-- <li>{{item.amount}}</li> -->
              </ul>
              <button class="increase" @click="additem(tape)"></button>
            </div>
          </div>
        </section>
        <section key="section-2" data-index="4">
          <h3>WHAT DO YOU WANT TO GET BACK?</h3>
          <div v-for="(item, index) in returned" :class="[toClass(item.name), 'breakdown']">
            <div class="left">
              <ul>
                <li>{{item.name}}</li>
                <li>{{'£'+item.price}}</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease" @click="removeitem(item)"></button>
              <ul class="amount" :style="{transform: 'translateY(-'+item.amount*50+'px)'}">
                <li v-for="(amount, index) in 20">{{index}}</li>
                <!-- <li>{{item.amount}}</li> -->
              </ul>
              <button class="increase" @click="additem(item)"></button>
            </div>
          </div>

        </section>
        <section key="section-3" data-index="5">
          <div class="total breakdown">
            <div class="left">
              <ul>
                <li>Total</li>
              </ul>
            </div>
            <div class="right">
              <div class="amount">{{'£'+totalAmount}}</div>
            </div>
          </div>
        </section>
        <button class="add-to-cart" :disabled=isDisabled key="button-1" data-index="6">Add to Cart</button>
      <!-- </div> -->
    </transition-group>
      <div class="bg"></div>
  </div>
</template>

<script>
import PicImg from "@/assets/pic.png"
import VhsImg from "@/assets/vhs_pay.png"
import MiniDvImg from "@/assets/mini dv.png"
import IpadImg from "@/assets/ipad.png"
import IphoneImg from "@/assets/iPhone 7.png";


<<<<<<< HEAD
import _ from "lodash";
=======
// import _ from "lodash";
>>>>>>> d227bc02de24b4b404df1e5c127e1fd09340c879

export default {
  data (){
    return {
      tapes: {
          'vhs': {
            name: 'VHS',
            price: 15,
            amount: 1
          }
        },
        returned:{
          'thumb': {
            name: 'Thumb Drive',
            price: 35,
            amount: 0
          },
          'dvd': {
            name: 'DVD Set',
            price: 10,
            amount: 0
          },
          'download': {
            name: 'Digital Download',
            price: 15,
            amount: 0
          }
        },
        backgroundImages: {
          "pic": {
            name:"pic",
            src: PicImg,
            width:'3037',
            height:'1594'
          },
          "vhs": {
            name: "vhs",
            // src: './assets/vhs.png',
            src: VhsImg,
            width:'3037',
            height:'1594'
          },
          "mini dv": {
            name:  "mini-dv",
            // src: './assets/mini dv.png',
            src: MiniDvImg,
            width:'3037',
            height:'1594'
          },
          "ipad": {
            name:"ipad",
            // src: './assets/ipad.png',
            src: IpadImg,
            width:'3037',
            height:'1594'
          },
          "iphone": {
            name: "iphone",
            // src: './assets/iPhone 7.png',
            src: IphoneImg,
            width:'3037',
            height:'1594'
          }
        },
        maxAmount: 19,
        totalAmount: 15,
        sendToCart: [],
        validated: false
    }
  },
  mounted: function (){
    this.bindScroll();



  },
  computed: {
    isDisabled: function(){
      var disabled = true;
      for(var cartitem in this.returned){
          if(this.returned[cartitem].amount > 0) {
            disabled = false;
          }
      }
      return disabled;
    },
  },
  methods: {
    beforeEnter: function(el) {
      // console.log("beforeEnter");
      if(el.tagName == "IMG"){
        el.style.opacity = 0;
        el.style.transform = 'translateX(-500px)';
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateX(-100px)';
      }


    },
    enter: function(el, done) {
      // console.log("enter");
      let delay;
      if(el.tagName == "IMG"){
        delay = el.dataset.index * 300 + 400;
      } else {
        delay = el.dataset.index * 100;
      }
      // console.log(delay);
      setTimeout(function() {
        //$(el).animate({ opacity: 1 }, 300, done);
        var duration = 0.5;
        TweenMax.to(el, duration, {transform: 'translateX(0px)', opacity: 1, onComplete:done });
      }, delay);
    },
    leave: function(el, done) {
      // console.log("leave");
      let delay = el.dataset.index*100;
      setTimeout(function() {
        var duration = 0.3;
        TweenMax.to(el, duration, {opacity: 0 ,onComplete:done });
      }, delay);
    },
    toClass: function(name){
      return name.toLowerCase().replace(/\s+/g, '')
    },
    bindScroll: function (){
      var el = document.getElementsByClassName("breakdown");
      // var self = this;

      for(let i=0; i<el.length; i++){
          el[i].addEventListener("wheel", this.handleScroll);
      }
    },
    //try moving throttle after preventDefault
    handleScroll: _.throttle(function (e) {
        e.preventDefault()
        // console.log(_.throttle(function(){},100))
        var item = this.getScrollItem(e.path);
        if(e.deltaY > 0) {
          this.removeitem(item);
        } else {
          this.additem(item);
        }
    }, 300),
    getScrollItem: function(scrollItems){
      var scrolledItem;
      var correctItem = scrollItems.filter(function(item)
      {
        if(item.classList){
          if(item.classList.value.indexOf("breakdown") != -1) {
              scrolledItem = item.classList.value.replace("breakdown", "");
              return item;
          }
        }
      });
      for(var item in this.returned) {
        var match = this.toClass(this.returned[item].name)
        var tomatch = this.toClass(scrolledItem)
        if(tomatch == match) {
          return this.returned[item]
        }
        // !!!!!! needs more work for when there are more products
        else if(tomatch == "vhs") {
          return this.tapes["vhs"]
        }
      }


    },
    additem: function(item) {
      if(item.amount < this.maxAmount) {
        this.sendToCart.push(item);
        item.amount += 1;
        this.sumTotal(item.price);
      }
    },
    removeitem: function(item) {
      //set minimum for vhs 1, the rest 0
      var minimum = item.name != "VHS" ? 0 : 1;

      //make sure it doesnt go below minimum;
      if(item.amount > minimum) {
        this.sendToCart.splice(this.sendToCart.indexOf(item), 1)
        item.amount -= 1;
        this.sumTotal(-item.price);
      }
    },
    sumTotal: function(price) {
      this.totalAmount += price;
    }
  }
}

</script>


<style>
#container {
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  position: relative;
}
section {
  margin-top:0.6em;
  border-top: 1px solid #313131;
}
.text-container{
    width: 50%;
    margin-left: 50%;
    text-align: right;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%) scale(0.8);
    z-index: 10;
    overflow: hidden;
}
h1 {
  font-size: 3em;
  line-height: 0.8em;
  padding-bottom: 0.3em;
}
h1 span {
  font-size: 0.7em;
}
h3 {
    margin-top: 0.6em;
}
ul {
  list-style-type: none;
}

ul li:first-child {
  font-weight: bold;
}
p {
  padding-left:25%;
}
.breakdown {
  width: 100%;
  margin:0.6em auto;
  overflow: hidden;
}
.left,
.right {
  width: 49%;
  display: inline-block;
  /* float: left; */
  vertical-align: middle;
}
.right{
  overflow: hidden;
  height: 3em;
  position: relative;
}

.amount {
  font-size: 3em;
  overflow: hidden;
  position: absolute;
  right: 36px;
  top:-5px;
  transform: translateY(0px);
  transition: all 0.5s ease-out;
}
.amount li {
  line-height: 50px;
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.total .amount {
  left: auto;
  right: 0;
<<<<<<< HEAD
=======
  font-weight: bold;
>>>>>>> d227bc02de24b4b404df1e5c127e1fd09340c879
}
.right > * {
  display: inline-block;
  /* float: right; */
  vertical-align: middle;

}
button:focus {
  outline:0;
}
button{
  border: none;
}
button.decrease{
  margin-right: 80px;
}
.decrease,
.increase{
  width: 25px;
  height: 25px;
  background: url(../assets/more.png);
  margin-top: 6px;
}
.decrease {
  background: url(../assets/less.png);
}
.bg {
  background: url(../assets/white-bg-watercolor.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
}
button.add-to-cart{
  background-color: #313131;
  padding:12px 20px;
  border-radius: 6px;
  color: white;
  font-size: 1em;
  font-family: "Franklin Gothic";
  font-variant: normal;
  font-style: normal;
  margin-top:1.4em;
  transition: all 0.2s ease-out;
}
.add-to-cart:disabled {
   background-color: #c3c3c3;
   color: #a2a2a2;
}
.image-container {
  width:3037px;
  height:1594px;
  position: absolute;
  z-index: 1;
  transform: scale(0.7) rotateZ(-45deg);
  left: calc(-3037px + 110%);
  top: 100px;
}
.image-bg{
  position: absolute;
  top:0;
  left:0;
}
.image-item {
  display: inline-block;
}
.image-enter-active, .image-leave-active {
  transition: all 0.5s ease-out;
}
.image-enter, .image-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-1000px);
}

</style>
