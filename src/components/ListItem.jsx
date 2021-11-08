import PropTypes from 'prop-types';
import React from 'react';

import { Flex, chakra } from '@chakra-ui/react';

import dateToLocaleDate from '../utilities/dateToLocaleDate';
import dateToCurrentTime from '../utilities/dateToCurrentTime';

const Text = ({ children, width }) => (
  <chakra.p align="center" fontSize="15px" width={width}>
    {children}
  </chakra.p>
);
function ListItem({ id, price, qty, quoteQty, time }) {
  const convertedTime = `${dateToLocaleDate(
    time,
    true,
  )} ${dateToCurrentTime(time)}`;

  return (
    <Flex
      as="li"
      bg="#fff"
      py="28.5px"
      px="20px"
      alignItems="center"
      mt="10px"
    >
      <Text width="102px">{`#${id}`}</Text>
      <Text width="226px">{`${price}$`}</Text>
      <Text width="272px">{qty}</Text>
      <Text width="193px">{quoteQty}</Text>
      <Text width="160px">{convertedTime}</Text>
    </Flex>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  quoteQty: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default React.memo(ListItem);
