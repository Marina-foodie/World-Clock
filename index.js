setInterval(function () {
  let LaElement = document.querySelector("#LA");
  let LaDateElement = LaElement.querySelector(".date1");
  let LaTimeElement = LaElement.querySelector(".time1");
  LaDateElement.innerHTML = moment().format(`dddd, MMMM Do YYYY`);
  LaTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format(`h:mm:ss A`);

  let KlagenfurtElement = document.querySelector("#K-town");
  let KlagenfurtDateElement = KlagenfurtElement.querySelector(".date2");
  let KlagenfurtTimeElement = KlagenfurtElement.querySelector(".time2");
  KlagenfurtDateElement.innerHTML = moment().format(`dddd, MMMM Do YYYY`);
  KlagenfurtTimeElement.innerHTML = moment()
    .tz("Europe/Vienna")
    .format(`h:mm:ss A`);
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let TimeContainerElement = document.querySelector("#Time-Container");
  TimeContainerElement.innerHTML = `
  <div class="city1">
          <h2>${cityName}</h2>
          <div>
            <div class="date1">${cityTime.format(`dddd, MMMM Do YYYY`)}</div>
            <div class="time1">${cityTime.format(`h:mm:ss A`)}</div>
          </div>
        </div>`;
}

let inputElement = document.querySelector("#input");
inputElement.addEventListener("change", updateCity);
