// get day
export const getDaye = date => {
  // console.log(date);
  var a = new Date(date);
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  var r = days[a.getDay()];
  return r;
};

// format date
export const formatDate = dateStr => {
  let dArr = dateStr.split("-"); // ex input "2010-01-18"
  return dArr[2] + " " + dArr[1] + " " + dArr[0]; //ex out: "18 01 2020"
};

// greet
export const greeting = () => {
  let greet;
  let myDate = new Date();
  let hrs = myDate.getHours();

  if (hrs < 10) greet = "Selamat Pagi";
  else if (hrs >= 10 && hrs <= 15) greet = "Selamat Siang";
  else if (hrs >= 15 && hrs <= 18) greet = "Selamat Sore";
  else if (hrs >= 18 && hrs <= 24) greet = "Selamat Malam";

  return greet;
};

//convert time
export const time = time => time.substr(0, 5);

//range time
export const getTime = (start, end) => {
  start = start.split(":");
  end = end.split(":");
  let startDate = new Date(0, 0, 0, start[0], start[1], 0);
  let endDate = new Date(0, 0, 0, end[0], end[1], 0);
  let diff = endDate.getTime() - startDate.getTime();
  let hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(diff / 1000 / 60);

  if (hours < 0) hours = hours + 24;

  return (
    (hours <= 9 ? "0" : "") +
    `${hours}j` +
    " " +
    (minutes <= 9 ? "0" : "") +
    `${minutes}m`
  );
};
