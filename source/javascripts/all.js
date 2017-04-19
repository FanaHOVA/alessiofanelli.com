//= require_tree .
//= require 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function() {
      $(".sections-row").fadeIn(200);
    }, 2800);
    Typed.new('.hello', {
      strings: ["Hello."],
      typeSpeed: 95
    });

    Typed.new('.interests', {
      strings: ["What are you interested in?"],
      startDelay: 1100,
      typeSpeed: 15
    });
});
