<template>
    <div class="tunes">
        <h1>Itunes</h1>
        <div v-for="song in songs">
            <div class="col-xs-12">
                <h3>{{song.artistName}}</h3>
                <img height="100px" width="100px" class="img-responsive" style="margin:0 auto;" :src="song.artworkUrl100"></img>
            <!-- <div onclick="document.getElementById('{{song.trackId}}').play()">Song title:{{song.title}}</div>
            <div>Album title: {{song.collection}}</div>
            <div>Price: {{song.price}}</div>
            <audio controls id="audio-box-{{song.trackId}}">
                <source src="{{song.preview}}" type="audio/mp4">
            </audio> -->
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