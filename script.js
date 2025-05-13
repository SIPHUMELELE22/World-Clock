function updateTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
    <h2>${cityTime.format("hh:mm:ss A")}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
 <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#cities-select");
citiesSelect.addEventListener("change", updateCity);
