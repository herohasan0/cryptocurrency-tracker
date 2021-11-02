/* eslint-disable no-undef */
import { createChart } from 'lightweight-charts';

const Chart = (data) => {
  const chart = createChart(document.getElementById('denemex'), {
    width: 1077,
    height: 274,
  });

  const areaSeries = chart.addAreaSeries({
    topColor: 'rgba(33, 150, 243, 0.56)',
    bottomColor: 'rgba(33, 150, 243, 0.04)',
    lineColor: 'rgba(33, 150, 243, 1)',
    lineWidth: 2,
  });

  areaSeries.setData([...data]);
};

export default Chart;
