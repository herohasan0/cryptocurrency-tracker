import React, { useEffect, useState, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

import ListItem from './ListItem';
import ListHead from './ListHead';
import FilterSection from './FilterSection';

import fixed from '../utilities/fixed';

import settings from '../constants/settings';

function List() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.binance.com/api/v3/trades?symbol=${settings.symbol}&limit=${settings.limit}`,
    )
      .then((res) => res.json())
      .then((datax) => {
        setData(datax);
        setList(datax);
      });
  }, []);

  const [value, setValue] = React.useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setList(data);
    const searched = data.filter((item) =>
      String(item.id).includes(value),
    );
    setList(searched);
  }, [value]);

  return (
    <Flex
      as="section"
      w="1136px"
      px="100px"
      direction="column"
      mt="20px"
      mb="140px"
    >
      <FilterSection
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <Flex direction="column" mt="30px">
        <ListHead />
        <Flex direction="column" as="ul">
          {list.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              price={fixed(item.price, 2)}
              qty={fixed(item.qty, 4)}
              quoteQty={fixed(item.quoteQty, 4)}
              time={item.time}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default React.memo(List);
