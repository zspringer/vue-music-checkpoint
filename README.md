# vue-music

## Even more fun with Music!

Alright so it's checkpoint time again so `please dont stop the music...`

### The Setup

You should have from the previous checkpoint a fully functional app that searches the Itunes API for all of your favorite music. However the current state of that application is lacking a certian flare.

It's time to level this app up with Vuejs. Your end goal should be an app which allows you to create a list of your favorite songs that you can easily change the order of and play at your discretion, without having to requery the itunesService.

This project already has the itunes service pulled over but you will be responsible for building out the components necessary to use it. Make sure that you resolve the itunes request.

Once you get the Itunes service drawing to your itunes component it will be time to focus on adding a way for you to keep track of your favorite songs. You will be doing this in the `mytunes-service.js`

> The mytunes-service needs to be completed 

```javascript
export default {
  getTracks() { },
  addTrack() { }, //This guy is already done
  removeTrack() { },
  promoteTrack() { },
  demoteTrack() { }
}
```
Managing your list of songs will likely be the trickest part of the assignment. 

### Step 1 -  Communicating with Services? `Total Points: 10`

Before starting step 1 You should already have a component that is responsible for drawing the `itunes songList` to the page. From your itunes component you will need to add a button to each song as it is rendered to the page so you have the option of adding it to your tracks....

You will need to ensure that your component imports the `MyTunesService`. Focus on hooking up the add button to a function. Make sure you can get the button to pass you the information needed to `identify` the correct song.

Then make sure you take the `entire song object` and pass it to your `myTunes.addTrack` method

```javascript
   addTrack(track){
    //....
      myTunes.addTrack(track) // <--- Make sure you have imported the MyTunesService
    //....
  }
```

Requirements:
- `2.5 points`: All songs are drawn to the page with an extra button
- `5 points`: Entire song objects are passed to the myTunesService
- `2.5 points`: Once a song is sent to the `myTunes` it needs to be added to the `myTracks` array

### Step 2 - The MyTunes Component `Total Points: 10`

The Mytunes Component is the wow factor for your application. It is here where you can be creative in the way you want to manage your list. You will need to add a few more functions to your controller that will be tied to buttons for each of the songs in your list. 

Key features here will include:
- `removeTrack`
- `promoteTrack`
- `demoteTrack`

<div>
  <img src="https://bcw.blob.core.windows.net/public/img/mytunes2.jpg" />
</div>

Also don't forget it would be useless to keep around a list if you couldn't still play the songs.

Requirements:
- `2.5 points`: Remove Track
- `2.5 points`: Promote Track
- `2.5 points`: Demote Track
- `2.5 points`: Persist your data with local storage 
  - This is pretty much a gimme make sure you call the functions when needed

### BONUS - Some enhancing features `Total Points: 5`
Requirements: 
- Have your myTunes List slide in and out when wanting to access it
- Implement dragging to reorder your songs
- Implement a drag to favorites

> Stretch Goal: Allow the user to create multiple playlists and manage the songs on each playlist 
> ***HINT:*** 

```javascript
let myTunes = { 
  playlists: { 
    "90's Rock": {}, 
    "Best of the 90's": {} 
  }
}

// You probably will need a few extra public methods
// CreatePlaylist()
// RemovePlaylist()
```

### Publishing to GH-Pages
To publish to gh-pages you are going to need to run the build command from your command line

```
[~/source/codeworks/vue-music-checkpoint]
$ npm run build
```

When this command finishes you will notice you now have a directory named `docs`

Push your project to github and then navigate to the settings tab for your repo and be sure to change the settings for gh-pages to use the `docs` directory

<img src="gh-pages-example.png" width="600">

Anytime you make changes to your `src` be sure to repeat this step...

### Finished?
When You are finished please slack the url for your github repo to your mentor in a DM. Be sure you add this project to your gh-pages if you want credit for it.