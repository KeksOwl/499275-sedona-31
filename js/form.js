const search = document.querySelector(".btn-search");
const form = document.querySelector(".search-form");

const arrivalDate = form.querySelector("[name=arrival]");
const departureDate = form.querySelector("[name=departure]");
const adults = form.querySelector("[name=adults]");

form.classList.add("search-form-hide");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-hide");
  form.classList.add("form-show-animation");
  form.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adults.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
  }
});
