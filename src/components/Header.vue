<template>
  <nav>
    <a id="logo" href="/"><img src="../assets/logo.png"></a>
    <a id="menu-but" href="/menu"><img src="../assets/menu-icon.svg"></a>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is the header'
    }
  }
}
</script>
<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
#logo,
#menu-but {
  position: absolute;
  margin: 1em;
  display: block;
}
#logo > img {
  height: 22px;
}
#menu-but {
  right: 0;
}
#menu-but img{
  height: 20px;
}
</style>
