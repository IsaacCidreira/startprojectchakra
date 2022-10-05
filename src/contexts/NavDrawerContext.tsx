/* eslint-disable react-hooks/exhaustive-deps */
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface NavDrawerProviderProps {
  children: ReactNode;
}

type NavDrawerContextData = UseDisclosureReturn;

const NavDrawerContext = createContext({} as NavDrawerContextData);

export function NavDrawerProvider({ children }: NavDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <NavDrawerContext.Provider value={disclosure}>
      {children}
    </NavDrawerContext.Provider>
  );
}

export const UseNavDrawer = () => useContext(NavDrawerContext);
