/* eslint-disable */
<template>
<div class="char-profile">
  <div class="char-poster">
      <span id="poster-back">
          <img :src="character.thumbnail.path + '.' + character.thumbnail.extension "/>
      </span>
      <span id="poster-front">
        <img :src="character.thumbnail.path + '.' + character.thumbnail.extension " width="200" height="200"/>
      </span>
  </div>
  <div class="char-info">
    <div id="heading">
        <h1>{{  character.name  }}</h1>
        <router-link to="../" style="  position: absolute; right: 0;">X</router-link>
    </div>
    <div id="info">
      <span>{{  character.description  }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      character: ''
    }
  },
  created () {
    // try {
    //   this.character = this.$parent.character
    // } catch (error) {
    //   console.log(error)
    // }
    if (this.$route.params.charId) {
      this.charId = this.$route.params.charId
    }
    if (this.$route.params.char) {
      this.character = this.$route.params.char
    }
  }
}

</script>

<style scoped>
.char-profile {
    border-radius: 10px;
    border: 5px solid black;
    background-color:blue;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.char-poster {
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
.char-info {
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
#char-name {
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
