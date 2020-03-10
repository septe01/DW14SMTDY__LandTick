// get day
export const getDaye = date => {
  //yyyy-mm-dd
  let day = new Date(date);
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[day.getDay() - 1];
};

// format date
export const formatDate = dateStr => {
  let dArr = dateStr.split("-"); // ex input "2010-01-18"
  return dArr[2] + " " + dArr[1] + " " + dArr[0]; //ex out: "18 01 2020"
};
