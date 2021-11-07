import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Input, Button } from '@chakra-ui/react';

function FilterSection({ value, handleChange, handleClick }) {
  return (
    <Flex justify="space-between">
      <Text fontSize="28px">Recent Trades List</Text>
      <Flex>
        <Input
          w="200px"
          value={value}
          onChange={handleChange}
          size="sm"
          bgColor="#fff"
          mr="13px"
        />
        <Button
          borderRadius="4px"
          bgColor="#2E5BFF"
          w="200px"
          colorScheme="blue"
          size="sm"
          onClick={handleClick}
        >
          Filter
        </Button>
      </Flex>
    </Flex>
  );
}

FilterSection.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default React.memo(FilterSection);
