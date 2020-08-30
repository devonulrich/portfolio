import $ from 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      var navOffset = $('nav').outerHeight();

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset
      }, 800, function(){
      });
    } 
  });

  $('body').scrollspy({target: "#myNav", offset: $('nav').outerHeight()+1});
});
