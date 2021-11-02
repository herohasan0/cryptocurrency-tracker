import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import Card from './Card';

function CardList({ avgPrice, percent, serverTime }) {
  return (
    <Flex justify="center">
      <Card
        color="#2E5BFF"
        title={avgPrice}
        text="Current Average Price"
      />
      <Card
        color="#F7C137"
        title={percent}
        text="Price Change Percent"
      />
      <Card
        color="#8C54FF"
        title={serverTime}
        text="Check Server Time"
      />
    </Flex>
  );
}

CardList.propTypes = {
  avgPrice: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  serverTime: PropTypes.string.isRequired,
};

export default CardList;
