import React, { useEffect, useContext } from 'react';

import { createChart } from 'lightweight-charts';

import LiveDataContext from '../context/LiveDataContext';
import HistoricalDataContext from '../context/HistoricalDataContext';

import dateToLocaleDate from '../utilities/dateToLocaleDate';

const Chart = () => {
  const { historicalData } = useContext(HistoricalDataContext);
  const { liveData } = useContext(LiveDataContext);

  useEffect(() => {
    const chart = createChart(document.getElementById('chart'), {
      width: 1077,
      height: 274,
    });

    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(33, 150, 243, 0.56)',
      bottomColor: 'rgba(33, 150, 243, 0.04)',
      lineColor: 'rgba(33, 150, 243, 1)',
      lineWidth: 2,
    });

    areaSeries.setData([...historicalData]);

    if (liveData.E) {
      areaSeries.update({
        time: dateToLocaleDate(liveData.E),
        value: liveData.c,
      });
    }
    return () => {
      document.getElementById('chart').innerHTML = '';
    };
  }, [historicalData, liveData]);

  return <div id="chart" />;
};

export default Chart;
