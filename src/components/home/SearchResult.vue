<template>
  <div class="SearchResult">
    <genre-list :genres="genres" :filterText="filterText" @select-genre="setSelectedGenre" />

    <genre-list :genres="subGenres" :filterText="filterText" :filter-parent="selectedGenre" @select-genre="setSelectedSubGenre" />

    <artist-list :artists="artists" :selectedGenre="selectedGenre" :selectedSubGenre="selectedSubGenre" />
  </div>
</template>

<script>
import { ARTISTS, GENRES, SUB_GENRES } from '../../mock/data'

import GenreList from '../genre/GenreList'
import ArtistList from '../artist/ArtistList'

export default {
  name: 'SearchResult',
  components: {
    GenreList,
    ArtistList
  },
  props: {
    filterText: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selectedGenre: null,
      selectedSubGenre: null
    }
  },
  computed: {
    genres () {
      return GENRES
    },
    subGenres () {
      return SUB_GENRES
    },
    artists () {
      return ARTISTS
    }
  },
  methods: {
    setSelectedGenre (genreId) {
      this.selectedGenre = genreId
    },
    setSelectedSubGenre (subGenreId) {
      this.selectedSubGenre = subGenreId
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
