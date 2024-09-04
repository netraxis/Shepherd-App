import React from 'react';
import { Box, Tag, TagLabel } from '@chakra-ui/react';
import { MdCircle } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';

const Quickbar = ({onChatChange}) => {
  
  return (
    <>
      <Box width="180px" pt="4" pl="2" background="lightslategray">
        {/* <Stack direction="row" justifyContent="end">
          <Button fontSize="12px" py="1" px="5" borderRadius={20}>AI Chat</Button>
        </Stack> */}
        <Box>
          <Tag onClick={onChatChange()} borderRadius="10px" px="3" py="2" backgroundColor="#3d4bf3" cursor="pointer">
            <TagLabel color="white">AI Chat</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <TagLabel color="Black">Quick Actions</TagLabel>
            &nbsp;<FaAngleDown color="#96999C" size="10px" />
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <TagLabel color="Black">Share</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <TagLabel color="Black">Highlight</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <TagLabel color="Black">Generate Flashcards</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <TagLabel color="Black">Listen to Note</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag borderRadius="10px" mt="2" px="3" py="2" backgroundColor="#fff" cursor="pointer">
            <MdCircle color="red" size="7" />
            <TagLabel color="Black" pl="2">Record</TagLabel>
          </Tag>
        </Box>
      </Box>
    </>
  );
}

export default Quickbar;
