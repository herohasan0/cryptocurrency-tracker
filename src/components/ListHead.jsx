import React from 'react';

import PropTypes from 'prop-types';

import { Flex, chakra } from '@chakra-ui/react';

const Text = ({ children, width }) => (
  <chakra.p color="#BFC5D2" fontSize="12px" width={width}>
    {children}
  </chakra.p>
);

function ListHead() {
  return (
    <Flex px="20px" justifyContent="space-around">
      <Text width="238px">ID</Text>
      <Text width="225px">PRICE</Text>
      <Text width="212px">QTY</Text>
      <Text width="257px">QUOTEQTY</Text>
      <Text width="206px">TIME</Text>
    </Flex>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default React.memo(ListHead);
