import React, { useContext } from 'react';

import { Flex } from '@chakra-ui/react';

import Card from './Card';

import fixed from '../utilities/fixed';

import LiveDataContext from '../context/LiveDataContext';
import dateToCurrentTime from '../utilities/dateToCurrentTime';

function CardList() {
  const { liveData } = useContext(LiveDataContext);

  return (
    <Flex justify="center">
      <Card
        color="#2E5BFF"
        title={fixed(liveData.w, 3)}
        text="Current Average Price"
      />
      <Card
        color="#F7C137"
        title={fixed(liveData.p / 100, 2)}
        text="Price Change Percent"
      />
      <Card
        color="#8C54FF"
        title={dateToCurrentTime(liveData.E)}
        text="Check Server Time"
      />
    </Flex>
  );
}

export default CardList;
