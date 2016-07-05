$(document).ready(function(){

    getGif('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');
// load in the tag and remove the spaces for the address bar
  $('#randomGif').on('click',function(){
    //
    var theTag = $('#tag').val();
    theTag = theTag.replace(" ","+");

    getGif('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+theTag);
  });
  $('#randomStick').on('click',function(){
    //
    var theTag = $('#tag').val();
    theTag = theTag.replace(" ","+");

    getSticker('http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag='+theTag);

  });


//
//functions
  function getGif (link){
    $.get(link)
    .then(function(ob){
      $('#gifBucket').html('<img src='+ ob.data.image_url +'>');
    })
    .catch(function(){
      console.log('Something went wrong!');
    })
  }

  function getSticker (link){
    $.get(link)
    .then(function(ob){
      $('#gifBucket').html('<img src='+ ob.data.image_original_url +'>');

    })
    .catch(function(){
      console.log('Something went wrong!');
    })
  }








});
