/* eslint-disable */
import { useEffect, useState, useContext } from 'react';

import useWebSocket from 'react-use-websocket';

import LiveDataContext from '../context/LiveDataContext';

import settings from '../constants/settings';

function Websocket() {
  const lowerCased = settings.symbol.toLowerCase();

  const [socketUrl, setSocketUrl] = useState(
    `wss://stream.binance.com:9443/ws/${lowerCased}@ticker`,
  );

  const { setLiveData } = useContext(LiveDataContext);

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
