/* eslint-disable */
<template>
    <div>
        <h1> Search library </h1>
        <button v-on:click="test">press</button>

    </div>
</template>

<script>
import * as CryptoJS from 'crypto-js'
export default {
  methods: {
    test: function () {
      alert('test fuction called')
      let apikey = '1a1f59220896052a0856d1d7c60c752c'
      let privateKey = 'a97ede64f792adc25199c54daf5ff18ab17b28d6'
      let ts = new Date()
      ts = ts.getUTCMilliseconds()
      let hash = CryptoJS.MD5(ts + privateKey + apikey).toString()
      console.log(hash)
      fetch('https://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
        })
    }
  }
}

</script>
