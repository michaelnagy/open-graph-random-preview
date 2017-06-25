var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')
var cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res, next) {
  // fetch pokemon data from pokeapi
  fetch('https://pokeapi.co/api/v2/pokemon/'+randPoke()+'/')
  .then(function(res) {
    return res.json()
  })
  .then(async function(json) {
    let desc = await pokeDescription(json.name)
    json.name = capitalize(json.name)
    res.render('index', { title: 'Express', json: json, desc: desc})
  })
  .catch(function(error) {
    console.log('request failed', error)
  })
})

// We need a description from https://pokemondb.net/pokedex/
const pokeDescription = async name => {
  try {
    let html = await (await fetch('https://pokemondb.net/pokedex/'+name+'/')).text()
    let $ = cheerio.load(html)
    return $('#dex-flavor').siblings('table').find('td').first().text()
  } catch (error) {
    console.log(error); 
  }
}

// generates a random number
function randPoke () {
  return Math.floor(Math.random() * 148) + 1
}
// capitalizes the first letter for the Pokemon naming
function capitalize(a) {
  return a.replace(/\b\w/g, function(l){ return l.toUpperCase() })
}

module.exports = router;
