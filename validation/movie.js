const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMovieInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.director = !isEmpty(data.director) ? data.director : "";
  data.rating = !isEmpty(data.rating) ? data.rating : "";
  data.yearofrelease = !isEmpty(data.yearofrelease) ? data.yearofrelease : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.director)) {
    errors.director = "Director field is required";
  }

  if (Validator.isEmpty(data.rating)) {
    errors.rating = "Rating field is required";
  }

  if (Validator.isEmpty(data.yearofrelease)) {
    errors.yearofrelease = "Year of release field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
