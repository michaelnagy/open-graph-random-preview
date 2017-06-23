
// generates a random number
function randPoke () {
  return Math.floor(Math.random() * 152) + 1
}
// Gets a random pokemon from the pokeapi.co
function getPoke (params) {
  fetch('https://pokeapi.co/api/v2/pokemon/'+randPoke()+'/')
  .then(function(res) {
    return res.json()
  })
  .then(function(json) {
    console.log(json)
    fetchHTML(json)
  }).catch(function(error) {
    console.log('request failed', error)
  })
}
// Fetch the pokemon
getPoke()

// Let's fetch the OpenGraph and the HTML tags
function fetchHTML(json) {
  $('.card-title, .pokemon-name').text(json.name)
  $(".card-img-top").attr("src", 'https://img.pokemondb.net/artwork/'+json.name+'.jpg')
  $("meta[property='og:title']").attr('content',json.name)
  // $( ".card-text" ).load( "https://pokemondb.net/pokedex/"+json.name+" #projects li" );
}
 