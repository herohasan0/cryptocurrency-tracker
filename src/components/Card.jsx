import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Text, Spinner } from '@chakra-ui/react';

function Card({ color, title, text }) {
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
      mr="27.5px"
    >
      <Heading fontSize="48px" fontWeight="300">
        {title === 'NaN' || title === 'Invalid Date' ? (
          <Spinner size="md" />
        ) : (
          title
        )}
      </Heading>
      <Text fontSize="15px" mt="2px">
        {text}
      </Text>
    </Flex>
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
