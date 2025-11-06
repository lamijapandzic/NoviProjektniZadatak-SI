const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "Hvala! Vaša poruka je uspješno poslana.";
  form.reset();
});
