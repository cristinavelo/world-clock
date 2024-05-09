function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  londonDateElement = londonElement.querySelector(".date");
  londonTimeElement = londonElement.querySelector(".time");
  londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM DD, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Seoul
  let seoulElement = document.querySelector("#seoul");
  seoulDateElement = seoulElement.querySelector(".date");
  seoulTimeElement = seoulElement.querySelector(".time");
  seoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = seoulTime.format("MMMM DD, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city"">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM DD, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(
        "hh:mm:ss [<small>]A[</small>]"
      )}</div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
