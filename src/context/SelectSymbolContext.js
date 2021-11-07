import React from 'react';

const SelectSymbolContext = React.createContext({
  selectedSymbol: '',
  setSelectedSymbol: () => {},
});

export default SelectSymbolContext;
