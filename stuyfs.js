document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".form__input").forEach(function(input) {
      input.addEventListener("input", function() {
        input.className = input.className.replace(/form__input--error ?/, "");
      });
    });
  });


// event listener to form submit, send to /formsubmit 