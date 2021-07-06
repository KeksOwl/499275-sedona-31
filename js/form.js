const search = document.querySelector(".btn-search");
const form = document.querySelector(".search-form");

form.classList.add("search-form-hide");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-hide");
  form.classList.add("form-show-animation");
});
