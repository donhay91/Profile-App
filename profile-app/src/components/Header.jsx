import React from 'react'
import { Box, Image,Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import Don from "../assets/don.png";

function Header() {

    const { colorMode } = useColorMode();
    const isLight = colorMode === "light";
    const [isSmallerThan600] = useMediaQuery("(min-width: 600px)");

  return <Stack>
            <Flex
            p="30"
            direction={isSmallerThan600 ? "row" : "column"} >
                <Box ml={isSmallerThan600 ? "80" : "0"}>
                    <Text color={isLight ? "gray.600" : "gray.500" } fontSize="4xl">Hello, i am</Text>
                    <Heading color="cyan.500" mb="2" size="2xl">Donovan Hay</Heading>
                    <Text color={isLight ? "gray.600" : "gray.500" } fontSize="lg">A Developer, YouTuber & Musician. </Text>
                </Box>
                <Image
                    alignSelf="center"
                    borderRadius='full'
                    m={isSmallerThan600 ? "2" : "1"}
                    boxSize='200px'
                    boxShadow='md'
                    src={Don}
                    alt='Donovan hay'
                    />
            </Flex>    
         </Stack>
    
  
}
 
export default Header;