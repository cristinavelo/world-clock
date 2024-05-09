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

updateTime();
setInterval(updateTime, 1000);
