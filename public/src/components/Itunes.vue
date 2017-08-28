<template>
    <div class="col-xs-6">
        <div class="tunes">
            <h1>Itunes</h1>
            <form @submit.prevent="search()">
                <input type="text" v-model="query">
                <button type="submit">Search</button>
            </form>
            <div v-for="song in songs">
                <h3>{{song.artistName}}</h3>
                <img height="100px" width="100px" class="img-responsive" style="margin:0 auto;" :src="song.artworkUrl100"></img>
                <div>{{song.trackName}}</div>
                <div>Album title: {{song.collectionName}}</div>
                <div>Price: {{song.collectionPrice}}</div>
                <audio controls id="audio-box-song.trackId">
                    <source :src=song.previewUrl type="audio/mp4">
                </audio>
                <div class="row">
                    <button @click="addToMyTunes(song)">Add to MyTunes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Itunes',
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                this.$store.dispatch('getMusicByArtist', this.query)
            },
            addToMyTunes(song) {
                this.$store.dispatch("addToMyTunes", song)
                // console.log(song)
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            }
        },
        components: {

        }
    }

</script>

<style>
    .tunes {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 10px;
        max-height: 1000px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>