// This code will add a smooth scroll effect to the navigation links.

$(document).ready(function() {
    $('nav a').on('click', function(event) {
      event.preventDefault();
  
      // Get the href of the link that was clicked.
      var href = $(this).attr('href');
  
      // Scroll to the element with the id that matches the href of the link.
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 500);
    });
  });
  