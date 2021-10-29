<template>
  <div class="Home">
    <div class="Home-title">
      Music Organizer
    </div>

    <div class="Home-search">
      <input
          v-model="searchText"
          class="Home-search-bar Home-search-input"
          placeholder="Search what you want"
      />

      <search-result :filterText="searchText" />
    </div>
  </div>
</template>

<script>
import SearchResult from './SearchResult'

export default {
  name: 'Home',
  components: {
    SearchResult
  },
  data () {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  background: linear-gradient(-25deg, #E73C7E, #23A6D5);
  /*background: linear-gradient(-45deg, rgba(231, 60, 126, 0.68), rgba(35, 166, 213, 0.73));*/
}
</style>
<style lang="scss" scoped>
.Home {
  .Home-title {
    text-align: center;
    color: white;
    font-size: 50px;
    font-weight: bold;
  }

  .Home-search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .Home-search-bar {
      width: 50%;
    }
  }
}
</style>
