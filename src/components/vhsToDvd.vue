<template>
  <div id="container">
      <div class="text-container">
        <h1>VHS to DVD <br>
          <span>and Digital Service</span>
        </h1>
        <p>High tech videotape conversion meets simple mail-in service so you can relive the good ole days digitally.</p>
        <section>
          <h3>HOW MANY TAPES DO YOU WANT TO DIGITIZE?</h3>
          <div v-for="tape in tapes" class="breakdown" >
            <div class="left">
              <ul>
                <li>{{tape.name}}</li>
                <li>{{tape.price}}</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease" @click="removeitem(tape)"></button>
              <ul class="amount" :style="'translateY('+tape.amount+'em)'">
                <!-- <li v-for="(amount, index) in 20">{{index}}</li> -->
                <li>{{tape.amount}}</li>
              </ul>
              <button class="increase" @click="additem(tape)"></button>
            </div>
          </div>
        </section>
        <section>
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
        <section>
          <div class="breakdown">
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
        <button class="add-to-cart" :disabled=isDisabled>Add to Cart</button>
      </div>

      <!-- <ul>
        <li v-for="item in sendToCart">{{item.name}}</li>
      </ul> -->
      <div class="bg"></div>
  </div>
</template>

<script>
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
      if(this.sendToCart.length > 0) {
        disabled = false;
      }
      return disabled;
    },


  },
  methods: {
    toClass: function(name){
      return name.toLowerCase().replace(/\s+/g, '')
    },
    bindScroll: function (){
      var el = document.getElementsByClassName("breakdown");
      var self = this;
      for(let i=0; i<el.length; i++){
          el[i].addEventListener("wheel", self.handleScroll);
      }

    },
    handleScroll: function (e) {
        this.getScrollItem(e.path)
        if(e.deltaY > 0) {
          console.log("up")


        } else {

          console.log("down");
        }
    },
    getScrollItem: function(scrollItems){
      var scrolledItem;
      var correctItem = scrollItems.filter(function(item)

      {
        if(item.classList){
          if(item.classList.value.indexOf("breakdown") != -1) {
              // /let gooditem = item.classList.value.replace("breakdown", "")
              // console.log(item.classList.value.replace("breakdown", ""))
              scrolledItem = item.classList.value.replace("breakdown", "")
              return item;
          }
        }

      });
      var newitem = this.returned.filter(function(returnedItem){
          return this.toClass(returnedItem.name) === scrolledItem
      })
      console.log(scrolledItem);
      console.log(newitem);

    },
    additem: function(item) {
      this.sendToCart.push(item);
      item.amount += 1;
      this.sumTotal(item.price);
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
    width: 55%;
    margin-left: 40%;
    text-align: right;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%) scale(0.8);
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
button{
  border: none;
}
button.decrease{
  margin-right: 80px;
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
}
.right > * {
  display: inline-block;
  /* float: right; */
  vertical-align: middle;

}
button:focus {outline:0;}
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

</style>
