import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
export default function IconStack() {
  return (
    <HStack spacing="20px">
      <Icon as={FaFacebookF} height="18px" />
      <Icon as={FaInstagram} height="18px" />
      <Icon as={FaTwitter} height="18px" />
      <Icon as={FaPinterestP} height="18px" />
      <Icon as={FaTiktok} height="18px" />
      <Icon as={FaWhatsapp} height="18px" />
      <Icon as={FaYoutube} height="18px" />
    </HStack>
  );
}
