import React from 'react';
import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
  ListItem,
} from '@chakra-ui/react';

import ActiveLink from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  href: string;
}
export default function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
    <ListItem>
      <ActiveLink href={href} passHref>
        <ChakraLink>
          <Text lineHeight="25px" fontSize="xl">
            {children}
          </Text>
        </ChakraLink>
      </ActiveLink>
    </ListItem>
  );
}
