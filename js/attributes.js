$( document ).ready(function() {

  $('.hot').toggleClass('hot favorite');
  $( '.favorite' ).css( "background-color", "red" );
  $('#three').toggleClass('favorite hot');
  $( '#four' ).css( "background-color", "rgb(135,62,35)" );
  $( '.hot' ).css( "background-color", "rgb(135,62,35)" );
});