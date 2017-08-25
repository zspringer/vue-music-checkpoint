<template>
  <div class="mytunes">
    <h1>MyTunes</h1>
    <div v-for="song in songs">
      <div class="col-xs-12">
        <h3>{{song.artistName}}</h3>
        <img height="100px" width="100px" class="img-responsive" style="margin:0 auto;" :src="song.artworkUrl100"></img>
        <div>{{song.trackName}}</div>
        <div>Album title: {{song.collectionName}}</div>
        <div>Price: {{song.collectionPrice}}</div>
        <audio controls id="audio-box-song.trackId">
          <source :src=song.previewUrl type="audio/mp4">
        </audio>
        <button @click="removeTrack(song)" class="Remove">Remove Track</button>
        <button @click="promoteTrack(song)" class="Promote">Promote</button>
        <button @click="demoteTrack(song)" class="Demote">Demote</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'mytunes',
    data() {
      return {

      }
    },
    methods: {
      removeTrack(song) {
        this.$store.dispatch("removeTrack", song)
        console.log(song)
      },
      promoteTrack(song) {
        this.$store.dispatch("promoteTrack", song)
      },
      demoteTrack(song) {
        this.$store.dispatch("demoteTrack", song)
      }
    },
    computed: {
      songs() {
        return this.$store.state.myTunes
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>