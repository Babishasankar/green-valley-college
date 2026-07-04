const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Email Validation
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    // Only digits allowed
    if (!/^\d+$/.test(phone)) {
        alert("Phone number should contain only digits.");
        return;
    }

    // Less than 10 digits
    if (phone.length < 10) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    // More than 10 digits
    if (phone.length > 10) {
        alert("Phone number cannot contain more than 10 digits.");
        return;
    }

    // Message Validation

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Your enquiry has been submitted successfully!");

    form.reset();

});