$(document).ready(function(){

    getGif('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');
// load in the
  $('#random').on('click',function(){
    //
    var theTag = $('#tag').val();
    theTag = theTag.replace(" ","+");

    getGif('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+theTag);
  });

  function getGif ( link){
    $.get(link)
    .then(function(ob){
      $('#gifBucket').html('<img src='+ ob.data.image_url +'>');
    })
    .catch(function(){
      console.log('Something went wrong!');
    })
  }


});
