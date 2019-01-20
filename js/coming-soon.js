/*!
 * Start Bootstrap - Coming Soon v5.0.1 (https://startbootstrap.com/template-overviews/coming-soon)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-coming-soon/blob/master/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  $('#myform').ajaxForm(function() {
    alert('Seu interesse foi registrado. Em breve entraremos em contato');
    $('#myform').trigger('reset')
  })

})(jQuery); // End of use strict
