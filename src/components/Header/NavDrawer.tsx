import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import NavLink from './NavLink';
import NavSection from './NavSection';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="green.200" p="4">
          <DrawerCloseButton mt={6} />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <NavSection>
              <VStack spacing="30px" alignItems="flex-start" textAlign="start">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </VStack>
            </NavSection>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
