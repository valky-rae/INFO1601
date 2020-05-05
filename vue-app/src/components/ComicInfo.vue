/* eslint-disable */
<template>
<div class="comic-profile">
  <div class="comic-poster">
      <span id="poster-back">
          <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension "/>
      </span>
      <span id="poster-front">
        <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension " width="200"/>
      </span>
  </div>
  <div class="comic-info">
    <div id="heading">
        <h1>{{  comic.title  }}</h1>
        <router-link to="/comicSearch" style="  position: absolute; right: 0;">X</router-link>
    </div>
    <div id="info">
      <span>{{  comic.description  }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      comic: ''
    }
  },
  created () {
    // try {
    //   this.character = this.$parent.character
    // } catch (error) {
    //   console.log(error)
    // }
    if (this.$route.params.comicId) {
      this.comicId = this.$route.params.comicId
    }
    if (this.$route.params.comic) {
      this.comic = this.$route.params.comic
    }
  }
}

</script>

<style scoped>
.comic-profile {
    border-radius: 10px;
    border: 5px solid black;
    background-color:blue;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.comic-poster {
    max-width: 300px;
    margin-right: 12px;
    display: flex;
    transform: translateZ(0);
    position: relative;
}
#poster-back {
    overflow: hidden;
    transform: rotate(5deg);
    top: -20%;
    width: 100%;
    position: absolute;
    bottom: -20%;
    left: -20%;
    height: 150%;
    background-color: gainsboro;
    transform: rotate(5deg);
}
#poster-back img {
    filter: blur(6px);
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: scale(1.4);
}
#poster-front {
    width: 200px;
    left: 56px;
    margin: auto;
    position: relative;
    display: block;
    align-self: center;
    background-color: lightgray;
    border-radius: 2px;
    z-index: 1;
}
#poster-front img {
    display: block;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.6) 0 6px 12px -6px;
}
.comic-info {
    /* border-radius: 10px;
    border: 5px solid black;
    background-color:blue;
    display: flex; */
    flex-direction: column;
    padding: 50px;
    text-align: left;
}
#head {
    display: flex;
    flex-direction: row;
}
#comic-name {
    display: inline-block;
    flex-grow: 10;
    align-self: flex-start;
    margin-left: auto;
    margin-right: auto;
}
#close {
    margin-left: auto;
    flex-grow: 0.1;
    text-align: right;
    display: inline-block;
}
#heading {
  display: flex;
  justify-content: center;
  position: relative;
}
#heading h1 {
    text-align: center;
}
#heading router-link {
  position: absolute;
  right: 0;
}
#info {
    overflow-y: hidden;
}
</style>
