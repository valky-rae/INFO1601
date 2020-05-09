<template>
    <modal name="comic-info" @before-open="beforeOpen">
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
    </modal>
</template>

<script>
export default {
  name: 'comic-info',
  // props: {comic: Object}
  data () {
    return {
      comic: ''
    }
  },
  computed: {
    comicToShow: function () {
      return this.comic
    }
  },
  methods: {
    beforeOpen (event) {
      this.comic = event.params.comic
      console.log(event.params.comic)
    }
  }
// data: function () {
//  return {
//    comic: this.comic
//  }
// }
}
</script>
