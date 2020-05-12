<template>
  <div id="app">
    <div id="navbar">
      <router-link class="rounded" to="/comicSearch"> Comic Search </router-link>
      <router-link class="rounded" to="/charSearch"> Character Search </router-link>
      <router-link class="rounded" to="/about"> About </router-link>
    </div>
    <main>
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
  /* background-image: url("../src/assets/backround.jpg"); */
  /* background-color: black; */
  /* background-repeat: no-repeat; */
  background-size: cover;
  overflow-y: scroll;
}
body.modal-open {
  overflow: hidden;
}
#app {
  text-align: center;
  color:white;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: 'Acme', cursive;
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
}
*:focus {
  outline: none;
}
footer {
  font-family: 'Bangers', cursive;
  text-align: center;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
footer:hover {
  animation: rubberBand;
  animation-duration: 2s;
}
.component-fade-enter-active {
  animation: fadeInUp;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
button {
  font-family: "K2D", sans-serif;
  background-color: transparent;
  color: white;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 3px 3px white;
  padding: 10px 15px 10px 15px;
  font-size: 18px;
}
button:hover {
  background: linear-gradient(-90deg, #2a0299, #c225c7);
  /* 90b4d2 */
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.form-control {
    margin-top: 40px;
    display: inline-block;
    width: 98%;
    padding: 10px;
    background-color: transparent;
    /* cursor: not-allowed; */
}
.inputs{
    font-size: 1.2em;
    line-height: 1.2em;
    border-color: white;
    box-shadow: 3px 3px white;
    border-radius: 20px;
    padding:5px;
}
</style>
