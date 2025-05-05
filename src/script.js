document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const date = form.querySelector("input[type='date']").value;
      const message = form.querySelector("textarea").value;

      if (name && email && date && message) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
