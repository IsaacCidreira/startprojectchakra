import { HStack, UnorderedList } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
interface NavSectionProps {
  children: ReactNode;
}
export default function NavSection({ children }: NavSectionProps) {
  return (
    <UnorderedList display="flex" flexDirection="row" listStyleType="none">
      <HStack spacing="30px" display="flex">
        {children}
      </HStack>
    </UnorderedList>
  );
}
