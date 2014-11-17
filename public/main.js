/*jshint node: true*/
'use strict';

$.getJSON("https://freegeoip.net/json", function(data) {
  var ip = data.ip;
  console.log(ip);
  $.post( "/api/"+ip, function( data ) {
    $( ".message" ).html( '<h3>' + data + '</h3>');
  });
});
