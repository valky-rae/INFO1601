/* eslint-disable */
<template>
    <div>
        <input v-model="input" type="text" placeholder="Enter Character here..."/>
        <button v-on:click="getCharacter">Search</button>
        <!-- <div id="character"> -->
          <ul>
            <!-- <div id="character" v-for="(character) in results" v-bind:key="character" style="background-image: url('https://image.freepik.com/free-vector/blue-halftone-comic-background_23-2147915001.jpg')"> -->
              <!-- <a :href="character.resourceURI">{{ character.name }}<img class="tiles" :src="character.thumbnail.path + '.' + character.thumbnail.extension " width="200" height="200"/></a> -->
            <div >
              <router-link
                v-for="character in results" :key="character.id" id="character"
                tag="div"
                :to="{ name: 'CharInfo', params: {charId: character.id, char: character}}"
                style="background-image: url('https://image.freepik.com/free-vector/blue-halftone-comic-background_23-2147915001.jpg; width: 200px; height:200px')"
              >
                  {{ character.name }}<img class="tiles" :src="character.thumbnail.path + '.' + character.thumbnail.extension " width="200" height="200"/>
                </router-link>
            </div>
          </ul>

        <!-- </div> -->
      <div v-if="showModal" class="modal-route">
        <div class="modal-content">
          <router-view></router-view>
      </div>
    </div>
    </div>
</template>

<script>
import * as CryptoJS from 'crypto-js'
export default {
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal, oldVal) {
        this.showModal = newVal.meta && newVal.meta.showModal
      }
    }
  },
  data: function () {
    return {
      input: '',
      publicKey: '1a1f59220896052a0856d1d7c60c752c',
      privateKey: 'a97ede64f792adc25199c54daf5ff18ab17b28d6',
      results: [],
      showModal: false
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
      // fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=' + this.input + '&apikey=' + this.publicKey)
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
.tiles{
  background-image: center;
  background-position: center;
  background-position: cover;
}
.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background:transparent;
}
  .modal-content {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
  }
</style>
