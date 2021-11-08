import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { Flex, chakra } from '@chakra-ui/react';

import SelectSymbolContext from '../context/SelectSymbolContext';

import dateToLocaleDate from '../utilities/dateToLocaleDate';

const Text = ({ children, width }) => (
  <chakra.p align="center" fontSize="15px" width={width}>
    {children}
  </chakra.p>
);

function ListItem({ symbol, price, lastQty, bidQty, closeTime }) {
  const { setSelectedSymbol } = useContext(SelectSymbolContext);

  const time = dateToLocaleDate(closeTime, true);

  return (
    <Flex
      as="li"
      bg="#fff"
      py="28.5px"
      px="20px"
      alignItems="center"
      mt="10px"
      cursor="pointer"
      onClick={() => setSelectedSymbol(symbol)}
    >
      <Text width="102px">{symbol}</Text>
      <Text width="226px">{price}</Text>
      <Text width="272px">{lastQty}</Text>
      <Text width="193px">{bidQty}</Text>
      <Text width="160px">{time}</Text>
    </Flex>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

ListItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  lastQty: PropTypes.string.isRequired,
  bidQty: PropTypes.string.isRequired,
  closeTime: PropTypes.number.isRequired,
};

export default React.memo(ListItem);
