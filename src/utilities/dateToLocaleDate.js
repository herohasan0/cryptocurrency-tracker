// convert unix date to yyyy-month-dd format
function dateToLocaleDate(unixDate, isNumericMonth) {
  const date = new Date(unixDate);

  const option = isNumericMonth ? 'numeric' : 'long';

  const convertedDate = `${date.toLocaleDateString('en-US', {
    year: 'numeric',
  })}-${date.toLocaleDateString('en-US', {
    month: option,
  })}-${date.toLocaleDateString('en-US', { day: 'numeric' })}`;

  return convertedDate;
}

export default dateToLocaleDate;
