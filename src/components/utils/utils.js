import dayjs from "dayjs";

//this function give an array that contains the day for each day of the calendar (2 dimensional array)

export function getMonth(month = dayjs().month()) {   //month will be from 0-11, default empty value is current month
  month = Math.floor(month);
  //console.log(month)
  const year = dayjs().year();
  //console.log('year:', year);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  //console.log("firstDayOfTheMonth:", firstDayOfTheMonth);
  let currentMonthCount = 0 - firstDayOfTheMonth;
  //console.log("currentMonthCount:", currentMonthCount);

  //create 5 rows(as arrays) and fill every row with empty array and map to populate array and for every array create 7 columns( another arrays) end fill it by default value null and map it
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      //console.log(currentMonthCount)
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
