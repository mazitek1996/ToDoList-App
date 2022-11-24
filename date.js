/// module for generating my own date
//jshint esversion: 6
module.exports = getDate;

function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  let day = today.toLocaleDateString("eng-US", options);

  return day;
}
