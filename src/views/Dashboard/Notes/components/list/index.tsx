import React from 'react';
import { CustomButton } from '../../../layout';
import { Icon, Box, Text, Stack, Flex, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { Pointer } from 'lucide-react';

interface SidebarProps {
  onOptionClick?: (option: 'create-note' | 'upload-document') => void;
}

function NoteList() {
  const handleSearch = (value) => {

  }

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'start'}
      >
        <Box>
          <Text
            fontFamily="Inter"
            fontWeight="600"
            fontSize="32px"
            lineHeight="30px"
            paddingLeft="4px"
            color="#212224"
          >
            Notes
          </Text>

          <Flex pt="10">
            <InputGroup
              size="sm"
              borderRadius="15px"
              width={{ base: '100%'}}
              backgroundColor="white"
            >
              <InputLeftElement marginRight={'10px'} pointerEvents="none" height="32px">
                <BsSearch color="#5E6164" size="14px" />
              </InputLeftElement>
              <Input
                type="text"
                variant="outline"
                onChange={(e) => handleSearch(e.target.value)}
                size="sm"
                borderRadius="17px"
                width="100%"
              />
            </InputGroup>
          </Flex>

          <Stack pt="10">
            <Box>
              <Text color="grey" fontSize={12}>Yesterday</Text>
              <Box flex="1" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
            </Box>
            
            <Box pt="4">
              <Text color="grey" fontSize={12}>1st February 2024</Text>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
            </Box>

            <Box pt="4">
              <Text color="grey" fontSize={12}>3st February 2024</Text>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
            </Box>

            <Box pt="4">
              <Text color="grey" fontSize={12}>27th January 2024</Text>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>... </Text>
                </Flex>
              </Box>
            </Box>

            <Box pt="4">
              <Box flex="1" overflow="auto">
                <Flex justify="space-between">
                  <Text>Pinned</Text>
                  <Text cursor="Pointer">+</Text>
                </Flex>
              </Box>
              <Box flex="1" mt="2" overflow="auto" p="2" backgroundColor="#fff" borderRadius="7" cursor="pointer">
                <Flex justify="space-between">
                  <Text>Relatively Theory</Text>
                  <Text>...</Text>
                </Flex>
              </Box>
            </Box>
          </Stack>

        </Box>
      </Box>
    </>
  );
}

export default NoteList;
