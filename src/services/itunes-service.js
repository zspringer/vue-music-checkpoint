export default {
  getMusicByArtist(artist) {
    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist;
    var apiUrl = url + encodeURIComponent(url2);
    return fetch(apiUrl)
  }
}