import React, { useEffect, useState, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

import ListItem from './ListItem';
import FilterSection from './FilterSection';
import ListHead from './ListHead';

import fixed from '../utilities/fixed';
import TOKENS from '../constants/tokens';

function List() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setData([]);
    const promises = TOKENS.map((symbol) =>
      fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`,
      ),
    );

    Promise.all(promises.map((promise) => promise))
      .then((allPromises) =>
        allPromises.map((allResponses) => allResponses.json()),
      )
      .then((results) =>
        results.map((result) =>
          result.then((item) => {
            setData((prev) => [...prev, item]);
            setList((prev) => [...prev, item]);
          }),
        ),
      );
  }, []);

  const [value, setValue] = React.useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setList(data);
    const searched = data.filter((item) =>
      item.symbol.includes(value),
    );
    setList(searched);
  }, [value]);

  return (
    <Flex
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

        <Flex direction="column">
          {React.Children.toArray(
            list.map((item) => (
              <ListItem
                symbol={item.symbol}
                price={fixed(item.lastPrice, 2)}
                lastQty={fixed(item.lastQty, 4)}
                bidQty={fixed(item.bidQty, 4)}
                closeTime={item.closeTime}
              />
            )),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default React.memo(List);
