<template>
    <div class="tunes">
        <h1>Itunes</h1>
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
                <button @click="addToMyTunes(song)">Add to MyTunes</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Itunes',
        data() {
            return {

            }
        },
        methods: {
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

<style></style>