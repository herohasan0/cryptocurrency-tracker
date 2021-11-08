import React from 'react';

import PropTypes from 'prop-types';

import { Flex, chakra } from '@chakra-ui/react';

const Text = ({ children, width }) => (
  <chakra.p
    align="center"
    color="#BFC5D2"
    fontSize="12px"
    width={width}
  >
    {children}
  </chakra.p>
);

function ListHead() {
  return (
    <Flex px="20px">
      <Text width="102px">ID</Text>
      <Text width="226px">PRICE</Text>
      <Text width="272px">QTY</Text>
      <Text width="193px">QUOTEQTY</Text>
      <Text width="150px">TIME</Text>
    </Flex>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default React.memo(ListHead);
