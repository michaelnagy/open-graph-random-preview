function openGraphScraper() {
  $.post(
    'https://graph.facebook.com',
    {
      id: 'https://qual-seu-pokemon.herokuapp.com/',
      scrape: true
    },
    function(response){
      console.log(response);
    }
  )
}
openGraphScraper()
 