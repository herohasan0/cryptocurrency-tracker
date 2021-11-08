import { useEffect, useState, useContext } from 'react';

import useWebSocket from 'react-use-websocket';

import SelectSymbolContext from '../context/SelectSymbolContext';
import LiveDataContext from '../context/LiveDataContext';

function Websocket() {
  const { selectedSymbol } = useContext(SelectSymbolContext);
  const lowerCased = selectedSymbol.toLowerCase();

  const [socketUrl, setSocketUrl] = useState(
    `wss://stream.binance.com:9443/ws/${lowerCased}@ticker`,
  );

  const { setLiveData } = useContext(LiveDataContext);

  useEffect(() => {
    setLiveData('');
    setSocketUrl(
      `wss://stream.binance.com:9443/ws/${lowerCased}@ticker`,
    );
  }, [selectedSymbol]);

  const { lastMessage } = useWebSocket(socketUrl, {
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const parsedData = JSON.parse(lastMessage.data);

      setLiveData(parsedData);
    }
  }, [lastMessage]);

  return null;
}

export default Websocket;
