<template>
<transition name="component-fade" mce="in-out" appear>
    <div id="home">
        <h1 class="tester"> WELCOME TO GET SCHWIFTY 50 </h1>
        <h2> Home Of The Comics </h2>
    </div>
</transition>
</template>

<script>
export default {
  methods: {
    tester: function () {
      alert('wow')
    }
  }
}
</script>

<style scoped>
#home{
  margin-top: 3%;
  margin-left: 5%;
  text-align: center;
  overflow: hidden;
}
.tester {
  animation: rotateIn;
  animation-duration: 2s;
}
</style>
