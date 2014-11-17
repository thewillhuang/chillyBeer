/*jshint node: true*/
'use strict';

$.getJSON("//ip-api.com/json/?callback=?", function(data) {
  var ip = data.query;
  $.post( "/api/"+ip, function( data ) {
    $( ".message" ).html( '<h3>' + data + '</h3>');
  });
});
