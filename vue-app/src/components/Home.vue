<template>
<transition name="component-fade" mce="in-out" appear>
    <div id="home">
        <h1 class="tester"> Home page </h1>
        <h2> testing animations </h2>
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
  margin-left: 5%;
  text-align: center;
  overflow: hidden;
}
.tester {
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
</style>
