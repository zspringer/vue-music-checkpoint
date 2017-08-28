<template>
  <div class="container-fluid home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row header-area">
      <div class="col-xs-12">
        <h1 class="main-header">Zach's Vue version of Music is Fun Checkpoint</h1>
        <!-- <form @submit.prevent="search()">
          <input type="text" v-model="query">
          <button type="submit">Search</button>
        </form> -->

      </div>
    </div>
      
        <div class="row">
          <!-- <div class="col-xs-6"> -->
            <Itunes class="itunes text-center"></Itunes>
          <!-- </div> -->
          <!-- <div class="col-xs-6"> -->
            <MyTunes class="my-tunes text-center"></MyTunes>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store/mytunes-store'
  import Itunes from './Itunes'
  import MyTunes from './MyTunes'
  export default {
    name: 'home',
    data() {
      return {
        // query: ''
      }
    },
    methods: {
      
    },
    components: {
      Itunes,
      MyTunes
    }
  }

</script>


<style>
  .header-area{
    background-color: black;
    padding: 20px;
    color: white;
  }
  .my-tunes {
    display: inline-block;
    min-height: 100%;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 100%;
    min-width: 50%;
  }

</style>