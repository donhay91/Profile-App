import { Flex, Link, HStack, IconButton, Spacer } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon, FaYoutube, FaGithub } from 'react-icons/fa';
import React from 'react';

 function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";

  return <HStack p={5}>
            <Flex w="100%">
            <Spacer></Spacer>
              <Link href="https://www.youtube.com/channel/UCZdmLIKKDAw1zL9XzRbaxQg/featured">
                <IconButton ml="2" isRound><FaYoutube></FaYoutube></IconButton>
              </Link>
              <Link href="https://github.com/donhay91">
                <IconButton ml="2" isRound><FaGithub></FaGithub></IconButton>
              </Link>
                <IconButton ml="2" isRound onClick={toggleColorMode}>{isLight ? <FaMoon></FaMoon> : <FaSun></FaSun>}</IconButton>
            </Flex>
         </HStack>
}

export default Nav;
