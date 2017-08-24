<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from './components/Home'
  import MyTunes from './components/MyTunes'

  export default {
    name: 'app',
    components: {
      Home,
      MyTunes
    }
  }

</script>

<style>

</style>