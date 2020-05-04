<template>
  <div id="app">
    <div id="navbar">
      <router-link class="rounded" to="/home"> Home </router-link>
      <router-link class="rounded" to="/about"> About </router-link>
    </div>
    <main>
      <!-- <div class="lines">
        <div class="line"> </div>
      </div> -->
      <router-view/>
    </main>
    <footer>
      <span>
        Copyright &copy; All Rights Reserved
        <!-- <img id="Vlogo" src="./assets/marvel-logo.jpg" width="100" height="67"> -->
      </span>
    </footer>
  </div>
</template>

<script>

export default {
}
</script>

<style>
body{
  background-image: url("../src/assets/backround.jpg");
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
}
#app {
  text-align: center;
  color:white;
  margin-top: 1%;
  font-family: 'Irish Grover', cursive;
  /* background-image: url("../src/assets/rick.png"); */
  /* overflow: scroll; */
}
a {
    font-family: 'Bangers', cursive;
    color:white;
    text-decoration:  none;
    padding-left: 20px;
    padding-right: 16px;
  }
.rounded {
  font-size: 30px;
  color: white;
  border-radius: 30px;
  border: 3px solid white;
  width: 150px;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
}
#navbar{
  margin-right: 60px;
  text-align: right;
  text-shadow: 3px 3px black;
}
#navbar :first-child {
  margin-right: 20px;
}
#navbar a:hover {
  background-color: white;
  color: red;
  /* text-shadow: 3px 3px red; */
}
footer {
  font-family: 'Bangers', cursive;
  text-align: center;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: 15px;
}
#Vlogo{
  margin-right: 60px;
 float: right;
}
</style>
