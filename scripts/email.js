console.log("email.js is working");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      reason: document.getElementById("reason").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_pqucdks", "template_aezc1la", params)
      .then(function() {
        alert("Message sent successfully!");

        document.getElementById("contact-form").reset();
      })
      .catch(function(error) {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      });
  });
});