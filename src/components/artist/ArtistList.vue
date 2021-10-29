<template>
  <div class="ArtistList">
    <span v-for="artist in artistList" :key="artist.id">{{ artist.name }} </span>
  </div>
</template>

<script>
export default {
  name: 'ArtistList',
  props: {
    artists: {
      type: Array,
      required: true
    },
    selectedGenre: {
      type: String,
      default: null
    },
    selectedSubGenre: {
      type: String,
      default: null
    }
  },
  computed: {
    artistList () {
      if (!this.selectedGenre && !this.selectedSubGenre) {
        return this.artists
      }

      let artists = this.artists

      if (this.selectedGenre) {
        artists = artists.filter(artist => artist.genres.includes(this.selectedGenre))
      }
      if (this.selectedSubGenre) {
        artists = artists.filter(artist => artist.subGenres.includes(this.selectedSubGenre))
      }

      return artists
    }
  }
}
</script>

<style lang="scss" scoped>
.ArtistList {
  text-align: center;
}
</style>
