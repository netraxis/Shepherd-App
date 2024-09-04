import React, {useState} from 'react';
import { CustomButton } from '../../../layout';
import { Icon, Box, Text, Stack, Flex, InputGroup, InputRightElement, Input, Button, Tag, TagLabel } from '@chakra-ui/react';
import { BsSend } from 'react-icons/bs';
import { Pointer } from 'lucide-react';
import { MdCircle } from 'react-icons/md';

function Chat() {

  const Send = (str) => {

  }
  
  return (
    <>
      <Stack pt="10" alignItems="center">
        <Box padding={5} backgroundColor="#fff" fontSize="14px" borderRadius="5px">
          <Text>
            Hello! I'm Socrates. Try asking me some questions about your topic or try some of these prompts
          </Text>
        </Box>
        <Box px={5} py={2} borderRadius="25px" fontSize="13px" width="fit-content" border="1px solid #00adff">
          <Text>
            Tell me all I need to know about Relativity for SATs
          </Text>
        </Box>
        <Box px={5} py={2} fontSize="13px" borderRadius="25px" width="fit-content" border="1px solid #00adff">
          <Text>
            Can you explain the concept to me like I am 5 years old?
          </Text>
        </Box>
      </Stack>

      <Stack bottom="10">
        <Flex width="100%">
          <InputGroup
            size="sm"
            width={{ base: '18.5%'}}
            position="fixed"
            bottom="10"
          >
            <InputRightElement marginRight={3} height="40px">
              <BsSend color="#09acfd" size="14px" />
            </InputRightElement>
            <Input
              type="text"
              variant="outline"
              onChange={(e) => Send(e.target.value)}
              size="md"
              fontSize="13px"
              borderRadius="10px"
              placeholder="Ask Socrates a question..."
              width="100%"
              backgroundColor="white"
            />
          </InputGroup>
        </Flex>
      </Stack>
    </>
  );
}

export default Chat;
