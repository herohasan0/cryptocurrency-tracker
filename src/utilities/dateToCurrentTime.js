// convert unix date to hh:mm:ss format
function dateToCurrentTime(unixDate) {
  const date = new Date(unixDate);

  const convertedDate = date.toLocaleTimeString('tr-TR');

  return convertedDate;
}

export default dateToCurrentTime;
