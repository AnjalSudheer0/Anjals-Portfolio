// Initialize EmailJS
(function() {
    // Replace with your EmailJS Public Key
    emailjs.init({
      publicKey: "o91B-0s8Q8mPut2Wo",
    });
})();

// EmailJS Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitBtnText = document.getElementById('submit-btn-text');
            const originalText = submitBtnText.innerHTML;
            
            submitBtnText.innerHTML = "TRANSMITTING...";
            submitBtn.disabled = true;

            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS keys
            emailjs.sendForm('service_f3sulds', 'template_r91jfrs', this)
                .then(() => {
                    console.log('SUCCESS!');
                    submitBtnText.innerHTML = "SIGNAL SENT!";
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtnText.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                }, (error) => {
                    console.log('FAILED...', error);
                    submitBtnText.innerHTML = "TRANSMISSION FAILED";
                    
                    setTimeout(() => {
                        submitBtnText.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                });
        });
    }
});
