import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Text } from '@chakra-ui/react';

function Indicator({ color, title, text }) {
  return (
    <Flex
      bg={color}
      w="264px"
      h="117px"
      py="20px"
      pl="20px"
      color="white"
      direction="column"
      justify="center"
    >
      <Heading fontSize="48px" fontWeight="300">
        {title}
      </Heading>
      <Text fontSize="15px" mt="2px">
        {text}
      </Text>
    </Flex>
  );
}

Indicator.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Indicator;
