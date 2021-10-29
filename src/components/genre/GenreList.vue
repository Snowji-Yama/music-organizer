<template>
  <div class="GenreList">
    <span v-if="!genreList.length">No match</span>
    <div v-else>
      <button
          v-for="genre in genreList"
          :key="genre.id"
          class="GenreList-button"
          :class="getButtonCustomClasses(genre.id)"
          @click="selectGenre(genre.id)"
      >
        {{ genre.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenreList',
  props: {
    genres: {
      type: Array,
      required: true
    },
    filterText: {
      type: String,
      default: null
    },
    filterParent: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selectedGenre: null
    }
  },
  computed: {
    genreList () {
      if (!this.filterText && !this.filterParent) {
        return this.genres
      }

      let genres = this.genres

      if (this.filterParent) {
        genres = genres.filter(genre => genre.parentGenreId === this.filterParent)
      }
      if (this.filterText) {
        genres = genres.filter(genre => genre.name.toLowerCase().includes(this.filterText.toLowerCase()))
      }

      return genres
    }
  },
  methods: {
    selectGenre (genreId) {
      if (this.selectedGenre === genreId) {
        this.selectedGenre = null
      } else {
        this.selectedGenre = genreId
      }

      this.$emit('select-genre', this.selectedGenre)
    },
    getButtonCustomClasses (stylId) {
      const classes = []

      if (this.selectedGenre === stylId) {
        classes.push('GenreList-button-selected')
      }

      return classes.join(' ')
    }
  },

  watch: {
    filterText: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedGenre = null
        this.$emit('select-genre', this.selectedGenre)
      }
    },
    filterParent: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedGenre = null
        this.$emit('select-genre', this.selectedGenre)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.GenreList {
  text-align: center;

  .GenreList-button {
    background-color: white;
    color: black;
  }
  .GenreList-button-selected {
    background-color: grey;
    color: black;
  }
}
</style>
