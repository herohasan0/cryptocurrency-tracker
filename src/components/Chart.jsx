/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data }) => {
  useEffect(() => {
    document.getElementById('chart').innerHTML = '';
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

    areaSeries.setData([...data]);
  }, [data]);

  return <div id="chart" />;
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Chart;
