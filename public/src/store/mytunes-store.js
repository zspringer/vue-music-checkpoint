import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results:[]
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    saveMyTunes(state, song){
      state.myTunes.push(song)
      // console.log(state.myTunes)
    },
    removeMyTunes(state, song){
      var index = state.myTunes.indexOf(song)
      state.myTunes.splice(index, 1)
    },
    promoteMyTunes(state, song){
      var index = state.myTunes.indexOf(song)
      state.myTunes.splice((index-1),2,song,state.myTunes[index-1])

    },
    demoteMyTunes(state, song){
      var index = state.myTunes.indexOf(song)
      state.myTunes.splice((index),2,state.myTunes[index+1],song)
    }

  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        //FIX THE JSON PARSE SECTION
       var songs =JSON.parse(data)
        commit('setResults', songs.results)
      })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, song){
      //this will post to your server adding a new track to your tunes
      //TODO: ADD CONDITIONAL THAT WILL PREVENT HAVING DUPLICATE TRACKS
      commit('saveMyTunes', song)
      // console.log(song)
    },
    removeTrack({commit, dispatch}, song){
      //Removes track from the database with delet
      commit('removeMyTunes', song)
    },
    promoteTrack({commit, dispatch}, song){
      //this should increase the position / upvotes and downvotes on the track
      commit('promoteMyTunes', song)
    },
    demoteTrack({commit, dispatch}, song){
      //this should decrease the position / upvotes and downvotes on the track
      commit('demoteMyTunes', song)
    }

  }
})

export default store
