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
