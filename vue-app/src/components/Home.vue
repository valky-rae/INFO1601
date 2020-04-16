<template>
    <div>
        <h1> Home page </h1>
        <div>
            <router-link class="nav" to="/home/daily"> Daily |</router-link>
            <router-link class="nav" to="/home/search"> Searchable</router-link>
        </div>
    </div>
</template>

<style scoped>
.nav {
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  color: black;
}
a {
    font-weight: bold;
    color: black;
    text-decoration:  none;
    padding-top: 50px;
    text-align: bottom;
  }
svg{
  padding-bottom: 100px;
}
</style>
