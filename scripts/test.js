document.addEventListener('DOMContentLoaded', function () {
    // Get the button and form elements
    var showFormBtn = document.getElementById('showFormBtn');
    var contactForm = document.getElementById('contactForm');

    // Add a click event listener to the button
    showFormBtn.addEventListener('click', function () {
        // Toggle the 'hidden' class on the contact form
        contactForm.classList.toggle('hidden');
    });
});
