$(document).ready(function(){
 $('button').click(function(){
  $('img').toggle(); 
 });
 $('h1').fadeIn(1000);
 $('p').fadeIn(2000);
 
 $('header').click(function(){
  $('header').css("background-color", "blue");
 });
 
 $('#fancy-text').click(function(){
  $('header').css({"font-style":"italic", "color":"purple", "font-size":"30px"});
 });
 
});
