/*!
 * Start Bootstrap - Coming Soon v5.0.1 (https://startbootstrap.com/template-overviews/coming-soon)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-coming-soon/blob/master/LICENSE)
 */

function goToGoogleForms() {
  var gforms = "https://docs.google.com/forms/d/e/1FAIpQLSc6AQbAk0dLnP0Uetqu-Gxno4TQLXehm09pIi2RVksuFk9maA/viewform?entry.1473799162="
  var email = $('#email').val();
  window.location = gforms + email;
}

(function($) {
  "use strict"; // Start of use strict

  $('#myform').ajaxForm({
    success: goToGoogleForms,
    error: goToGoogleForms
  });

})(jQuery); // End of use strict
