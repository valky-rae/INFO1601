<template>
    <div id="home">
        <h1> Home page </h1>
        <Search>
        </Search>
    </div>
</template>

<script>
import Search from '../components/Search'
export default {
  components: {
    Search
  },
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
</style>
