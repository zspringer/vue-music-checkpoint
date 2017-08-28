import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'



vue.use(vuex)

var server = '//vue-music-is-fun.herokuapp.com'

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },




  mutations: {
    setResults(state, results) {
      state.results = results
    },

    setMyTunes(state, songs) {
      //This was a new mutation that was added when I needed to access the server storage
      //references all the songs in myTunes on the server and not local storage
      state.myTunes = songs
    },

    saveMyTunes(state, song) {
      state.myTunes.push(song)
      // console.log(state.myTunes)
    },
    removeMyTunes(state, song) {
      //Below was only good for local storage of the songs and not the server style setup
      //The removal of tracks is not being handled by the ajax request
      // state.myTunes = []
      // var index = state.myTunes.indexOf(song)
      // state.myTunes.splice(index, 1)
    },
    promoteMyTunes(state, song) {
      //Commented out code below is only good for local storage
      // var index = state.myTunes.indexOf(song)
      // state.myTunes.splice((index - 1), 2, song, state.myTunes[index - 1])

    },
    demoteMyTunes(state, song) {
      //Commented out code below is only good for local storage
      // var index = state.myTunes.indexOf(song)
      // state.myTunes.splice((index), 2, state.myTunes[index + 1], song)

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
      // $.get('//localhost:3000/api/songs')
      // To get promote and demote to work I need some sort of sorting function when getting the tracks so that it orders the tracks correctly
      $.get(server + '/api/songs')
        .then(songs => {
          songs.sort(function (songA, songB){
            // var songA = songA.artistName.toLowerCase()
            // var songB = songB.artistName.toLowerCase()
            return songA.songOrder - songB.songOrder
          }).reverse();
          commit('setMyTunes', songs);
        })
        .fail(data => {
          console.log(data)
        })
    },
    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes
      //TODO: ADD CONDITIONAL THAT WILL PREVENT HAVING DUPLICATE TRACKS


      $.post(server + '/api/songs', song)
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
        url: server + '/api/songs/' + song._id
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
      //the commit below code is only good for rearranging in local storage
      //commit('promoteMyTunes', song)
      // debugger
      var ranking = {"songOrder":song.songOrder + 1}
      $.ajax({
        method: 'PUT',
        contentType: 'application/json',
        url: server + '/api/songs/' + song._id,
        data: JSON.stringify(ranking)
      })
        .then((song) => {
          dispatch('getMyTunes')
          console.log('you are here')
        })
        .fail(() => {
          console.log("promote track did not work")
        })
        console.log("Hello from promote")
        console.log(song)
    },
    demoteTrack({ commit, dispatch }, song) {
      //this should decrease the position / upvotes and downvotes on the track
      //see the note in the promote track for why commit doesn't work for server style storage
      //commit('demoteMyTunes', song)
      //Need a 'put' ajax request
      var ranking = {"songOrder": song.songOrder -1}
      $.ajax({
        method: 'PUT',
        contentType: 'application/json',
        url: server + '/api/songs/' + song._id,
        data: JSON.stringify(ranking)
      })
        .then((song) => {
          dispatch('getMyTunes')
          console.log('you are here')
        })
        .fail(() => {
          console.log("demote track did not work")
        })
        console.log(song)
    }

  }
})

export default store
