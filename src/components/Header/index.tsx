/* eslint-disable react-hooks/rules-of-hooks */
import {
  Flex,
  Icon,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { UseNavDrawer } from '../../contexts/NavDrawerContext';
import NavDrawer from './NavDrawer';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function index() {
  const { isOpen, onClose, onOpen } = UseNavDrawer();

  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h={['70px', '70px', '123px']}
      bgColor="green.200"
      justifyContent={['space-between', 'space-between', 'space-around']}
      align="center"
    >
      <Flex w="1131px" justifyContent="space-between">
        <Image
          w={['127px', '127px', '187px']}
          h={['38px', '38px', '50px']}
          src="images/logo.svg"
          alt="logo"
          ml={['20px', '20px', '0px']}
        />

        {isWideVersion ? (
          <>
            <IconButton
              aria-label="Open navigation"
              icon={<Icon as={RiMenuLine} />}
              fontSize="1.5rem"
              variant="unstyled"
              onClick={onOpen}
              mr={['20px', '20px', '0px']}
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></IconButton>
            <NavDrawer isOpen={isOpen} onClose={onClose} />
          </>
        ) : (
          <NavSection>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </NavSection>
        )}
      </Flex>
    </Flex>
  );
}
