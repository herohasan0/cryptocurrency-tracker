import React from 'react';

const LiveDataContext = React.createContext({
  liveData: '',
  setLiveData: () => {},
});

export default LiveDataContext;
