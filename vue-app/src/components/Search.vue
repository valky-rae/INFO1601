/* eslint-disable */
<template>
    <div>
        <input v-model="input" type="text" placeholder="Enter Character here..."/>
        <button v-on:click="getCharacter">Search</button>
        <!-- <div id="character"> -->
          <ul>
            <div id="character" v-for="(character) in results" v-bind:key="character">
              {{ character.name }}
              <!-- <img :src=character.thumbnail.path '.' character.thumbnail.path /> -->
            </div>
          </ul>

        <!-- </div> -->

    </div>
</template>

<script>
import * as CryptoJS from 'crypto-js'
export default {
  data: function () {
    return {
      input: '',
      publicKey: '1a1f59220896052a0856d1d7c60c752c',
      privateKey: 'a97ede64f792adc25199c54daf5ff18ab17b28d6',
      results: []
    }
  },
  methods: {
    getCharacter: function () {
      // makes an api call to a string and returns the result json
      alert('api fuction called')
      let ts = new Date()
      ts = ts.getUTCMilliseconds()
      let hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString()
      console.log(hash)
      fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=' + this.input + '&ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          this.results = data.data.results
          // console.log(data.data.results[0])
        })
      // call get comics
    },
    getComics: function () {
      // gets comics related to the given character
    }
  }
}

</script>

<style scoped>
#character{
  display: inline-block;
  background-color: black;
  height: 200px;
  width: 200px;
  color: white;
  margin: 20px;
  text-align: center;
}
</style>
