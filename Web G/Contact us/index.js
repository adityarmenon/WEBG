(function(){
   emailjs.init("Q5-A2t-PCbgYUWoGv");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent form from submitting the traditional way

   emailjs.sendForm('service_garaqs8', 'template_gn30l0l', this)
      .then(function() {
         alert('Your message has been sent successfully!');
      }, function(error) {
         alert('Failed to send the message. Please try again.');
      });
});
