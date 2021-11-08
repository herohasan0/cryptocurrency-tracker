import React, { useState, useEffect, useMemo } from 'react';

import { Flex, Center, Heading } from '@chakra-ui/react';

import shaper from './utilities/shaper';

import List from './components/List';
import Chart from './components/Chart';
import CardList from './components/CardList';

import Websocket from './components/Websocket';

import LiveDataContext from './context/LiveDataContext';
import SelectSymbolContext from './context/SelectSymbolContext';
import HistoricalDataContext from './context/HistoricalDataContext';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState('BTCUSDT');
  const value = useMemo(
    () => ({ selectedSymbol, setSelectedSymbol }),
    [selectedSymbol, setSelectedSymbol],
  );

  const [liveData, setLiveData] = useState([]);
  const liveDatavalue = { liveData, setLiveData };

  const [historicalData, setHistoricalData] = useState([]);
  const historicalDatavalue = useMemo(
    () => ({ historicalData, setHistoricalData }),
    [historicalData, setHistoricalData],
  );

  useEffect(() => {
    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${selectedSymbol}&interval=1d&limit=200`,
    )
      .then((res) => res.json())
      .then((data) => setHistoricalData(shaper(data)))
      .catch((error) => console.log(error));
  }, [selectedSymbol]);

  return (
    <SelectSymbolContext.Provider value={value}>
      <LiveDataContext.Provider value={liveDatavalue}>
        <HistoricalDataContext.Provider value={historicalDatavalue}>
          <Center flexDir="column">
            <CardList />
            <Flex
              mt="20px"
              pt="120px"
              px="20px"
              bgColor="#fff"
              direction="column"
            >
              <Heading as="h3">{selectedSymbol}</Heading>
              <Chart />
            </Flex>
            <Websocket />
            <List />
          </Center>
        </HistoricalDataContext.Provider>
      </LiveDataContext.Provider>
    </SelectSymbolContext.Provider>
  );
}

export default App;
