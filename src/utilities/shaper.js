import dateToLocaleDate from './dateToLocaleDate';

function shaper(rawData) {
  const slicedData = rawData.map((data) => data.slice(0, 5));

  const shapedData = slicedData.map((data) => ({
    time: dateToLocaleDate(data[0]),
    value: data[4],
  }));

  return shapedData;
}

export default shaper;
