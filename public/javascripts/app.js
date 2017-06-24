function openGraphScraper() {
  $.post(
    'https://graph.facebook.com',
    {
      id: 'https://michaelnagy.github.io/qual-seu-pokemon/',
      scrape: true
    },
    function(response){
      console.log(response);
    }
  )
}
openGraphScraper()
 