(function($) {
  "use strict"; // Start of use strict

  $('#myform').ajaxForm(function() {
    alert('Seu interesse foi registrado. Em breve entraremos em contato');
    $('#myform').trigger('reset')
  })

})(jQuery); // End of use strict
