import React from 'react';

const HistoricalDataContext = React.createContext({
  historicalData: [],
  setHistoricalData: () => {},
});

export default HistoricalDataContext;
