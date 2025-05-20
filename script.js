function updateTime() {
  let joburgElement = document.querySelector("#johannesburg");
  if (joburgElement) {
    let joburgDateElement = joburgElement.querySelector(".date");
    let joburgTimeElement = joburgElement.querySelector(".time");
    let joburgTime = moment().tz("Africa/Johannesburg");

    joburgDateElement.innerHTML = joburgTime.format("MMMM	Do YYYY");
    joburgTimeElement.innerHTML = joburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
    <h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
 <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;

  citiesElement.style.display = "block";
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#cities-select");
citiesSelect.addEventListener("change", updateCity);
