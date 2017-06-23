
// generates a random number
function randPoke () {
  return Math.floor(Math.random() * 811) + 1
}
// Gets a random pokemon from the pokeapi.co
function getPoke (params) {
  fetch('http://pokeapi.co/api/v2/pokemon/'+randPoke()+'/')
  .then(function(res) {
    return res.json()
  })
  .then(function(json) {
    console.log(json)
  }).catch(function(error) {
    console.log('request failed', error)
  })
}
getPoke()