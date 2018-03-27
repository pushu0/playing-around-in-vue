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
              <button class="decrease"></button>
              <div class="amount">1</div>
              <button class="increase"></button>
            </div>
          </div>
        </section>
        <section>
          <h3>WHAT DO YOU WANT TO GET BACK?</h3>
          <div v-for="(item, index) in returned" class="breakdown">
            <div class="left">
              <ul>
                <li>{{item.name}}</li>
                <li>{{'£'+item.price}}</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease" @click="totalAmount-=item.price"></button>
              <ul class="amount">
                <li v-for="(amount, index) in 20">{{index}}</li>
              </ul>
              <button class="increase" @click="totalAmount+=item.price"></button>
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
      </div>
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
            price: 15
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
        totalAmount: 0,
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

</style>
