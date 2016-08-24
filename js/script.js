$(document).ready(function(){
 $('button').click(function(){
  $('img').toggle(); 
 });
 $('h1').fadeIn(1000);
 $('p').fadeIn(2000);
 
 $('header').click(function(){
  $(this).css("background-color", "blue");
 });
 
 $('#fancy-text').click(function(){
  $(this).css("text-style", "italic");
 })
 
});
