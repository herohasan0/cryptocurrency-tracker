// convert unix date to yyyy-month-dd format
function dateToLocaleDate(unixDate) {
  const date = new Date(unixDate);

  const convertedDate = `${date.toLocaleDateString('en-US', {
    year: 'numeric',
  })}-${date.toLocaleDateString('en-US', {
    month: 'long',
  })}-${date.toLocaleDateString('en-US', { day: 'numeric' })}`;

  return convertedDate;
}

export default dateToLocaleDate;
