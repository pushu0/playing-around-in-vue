<template>
  <div id="container">
      <div class="text-container">
        <h1>VHS to DVD <br>
          <span>and Digital Service</span>
        </h1>
        <p>High tech videotape conversion meets simple mail-in service so you can relive the good ole days digitally.</p>
        <section>
          <h3>HOW MANY TAPES DO YOU WANT TO DIGITIZE?</h3>
          <div class="breakdown">
            <div class="left">
              <ul>
                <li>VHS</li>
                <li>£15</li>
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
          <div class="breakdown">
            <div class="left">
              <ul>
                <li>Thumb Drive</li>
                <li>£15</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease"></button>
              <div class="amount">1</div>
              <button class="increase"></button>
            </div>
          </div>
          <div class="breakdown">
            <div class="left">
              <ul>
                <li>DVD Set</li>
                <li>£10</li>
              </ul>
            </div>
            <div class="right">
              <button class="decrease"></button>
              <div class="amount">0</div>
              <button class="increase"></button>
            </div>
          </div>
          <div class="breakdown">
            <div class="left">
              <ul>
                <li>Digital Download</li>
                <li>£15</li>
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
          <div class="breakdown">
            <div class="left">
              <ul>
                <li>Total</li>
              </ul>
            </div>
            <div class="right">
              <div class="amount">£1</div>
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
          vhs: {
            name: 'VHS',
            price: '15'
          }
        },
        returned: {
          thumb: {
            name: 'Thumb Drive',
            price: '15'
          },
          dvd: {
            name: 'DVD Set',
            price: '15'
          },
          thumb: {
            name: 'Digital Download',
            price: '15'
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
button{
  border: none;
}
.amount {
  font-size: 3em;
  padding-left:1em;
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
