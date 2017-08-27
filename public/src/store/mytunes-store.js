import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)



var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },




  mutations: {
    setResults(state, results) {
      state.results = results
    },

    setMyTunes(state, songs){
      state.myTunes = songs
    },

    saveMyTunes(state, song) {
      state.myTunes.push(song)
      // console.log(state.myTunes)
    },
    removeMyTunes(state, song) {
      // state.myTunes = []
      // var index = state.myTunes.indexOf(song)
      // state.myTunes.splice(index, 1)
    },
    promoteMyTunes(state, song) {
      var index = state.myTunes.indexOf(song)
      state.myTunes.splice((index - 1), 2, song, state.myTunes[index - 1])

    },
    demoteMyTunes(state, song) {
      var index = state.myTunes.indexOf(song)
      state.myTunes.splice((index), 2, state.myTunes[index + 1], song)
    }

  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        //FIX THE JSON PARSE SECTION
        var songs = JSON.parse(data)
        commit('setResults', songs.results)
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      //Had to add a mutation setMyTunes to get the state of the songs on the server
      $.get('//localhost:3000/api/songs')
        .then(songs => {
          commit('setMyTunes', songs);
        })
        .fail(data => {
          console.log(data)
        })
    },
    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes
      //TODO: ADD CONDITIONAL THAT WILL PREVENT HAVING DUPLICATE TRACKS
      $.post('//localhost:3000/api/songs', song)
        .then(song => {
          commit('saveMyTunes', song)
        })
        .fail(data => {
          console.log(data)
        })

      // console.log(song)
    },
    removeTrack({ commit, dispatch }, song) {
      //Removes track from the database with delete
      // commit('removeMyTunes', song)
      //should be an ajax request as it is dealing with a server and not local 
      // console.log("I am at removeTrack")
      $.ajax({
        method: 'DELETE',
        contentType: 'application/json',
        url: '//localhost:3000/api/songs/' + song._id
      })
        .then((res) => {
          dispatch('getMyTunes')
        })
        .fail(() => {
          console.log("could not remove track from myTunes")
        })
    },
    promoteTrack({ commit, dispatch }, song) {
      //this should increase the position / upvotes and downvotes on the track
      commit('promoteMyTunes', song)
    },
    demoteTrack({ commit, dispatch }, song) {
      //this should decrease the position / upvotes and downvotes on the track
      commit('demoteMyTunes', song)
    }

  }
})

export default store
