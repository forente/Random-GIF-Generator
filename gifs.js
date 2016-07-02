$(document).ready(function(){

  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
  .then(function(ob){
    $('#gifBucket').append('<img src='+ ob.data.image_url +'>');
  })
  .catch(function(){
    console.log('Something went wrong!');
  });

  $('#random').on('click',function(){
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
    .then(function(ob){
      $('#gifBucket').html('<img src='+ ob.data.image_url +'>');      
    })
    .catch(function(){
      console.log('Something went wrong!');
    });
  });


});
