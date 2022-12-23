var randomQuote = "";


function getQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      method: "GET",
      dataType: "jsonp",
      success: function(request) {
        randomQuote = request.quoteText;
        
        $('#header').html(randomQuote);
        
 },
      error: function(xhr, status, error) 
{
    $('#quoteText').text('Not sure what happened there! Click again to generate a new quote!');
       
}
  });
}
  


      getQuote();
