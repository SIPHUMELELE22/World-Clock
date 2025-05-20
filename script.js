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

  if (selectedCityTimezone) {
    let cityTime = moment().tz(selectedCityTimezone);
    let selectedDate = document.querySelector("#selected-date");
    let selectedTime = document.querySelector("#selected-time");

    if (selectedDate && selectedTime) {
      selectedDate.innerHTML = cityTime.format("MMMM Do YYYY");
      selectedTime.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
    }
  }
}

let selectedCityTimezone = null;

function updateCity(event) {
  selectedCityTimezone = event.target.value;
  if (selectedCityTimezone === "current") {
    selectedCityTimezone = moment.tz.guess();
  }

  let cityName = selectedCityTimezone.split("/")[1].replace("_", " ");
  let citiesElement = document.querySelector("#city");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date" id="selected-date"></div>
      </div>
      <div class="time" id="selected-time"></div>
    </div>
  `;

  citiesElement.style.display = "block";
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#cities-select");
citiesSelect.addEventListener("change", updateCity);
