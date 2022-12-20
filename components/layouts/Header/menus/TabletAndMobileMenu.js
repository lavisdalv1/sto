import { useCallback } from 'react';
import { Global } from '@emotion/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Button,
  Box,
} from '@chakra-ui/react';
import MainLink from '../../../common/MainLink';
import NextLink from 'next/link';

import { MobLogoAndTextIocn, LogoTabletIcon, CloseIcon } from '../../../icons';
import Links from './Links';
import { constants } from '../../../../constants';

export const TabletAndMobileMenu = ({ onClose, isOpen, ...props }) => {
  const closeModal = useCallback(() => onClose(), [onClose]);

  return (
    <>
      <Box
        {...props}
        position="absolute"
        display={isOpen ? 'block' : 'none'}
        bg="white"
        width="100%"
        height="100vh"
        left={0}
        top={0}
        zIndex="2147000000 !important"
      >
        <Global
          styles={{
            body: { overflow: isOpen ? 'hidden' : 'auto' },
          }}
        />
        <Box p="30px 30px 0 30px">
          <Flex h={{ base: '60px', sm: '80px' }} justifyContent="space-between">
            <MainLink href="/" display={{ base: 'none', sm: 'block' }}>
              <LogoTabletIcon />
            </MainLink>
            <MainLink href="/" display={{ base: 'block', sm: 'none' }}>
              <MobLogoAndTextIocn />
            </MainLink>
            <CloseIcon
              onClick={onClose}
              marginTop={{ base: '4px', sm: '17px' }}
            />
          </Flex>
          <Flex alignItems="baseline" display={{ base: 'block', sm: 'none' }}>
            <NextLink href={constants.routs.registration}>
              <Button w="144px"> registration</Button>
            </NextLink>
            <MainLink ml="18px" href={constants.routs.login}>
              signIn
            </MainLink>
          </Flex>
        </Box>
        <Box pt="15px">
          <Accordion allowToggle defaultIndex={0}>
            <AccordionItem border="none">
              <AccordionButton
                fontSize="sm"
                fontWeight={700}
                borderTop="1px dashed rgba(0, 0, 0, 0.5)"
                borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                _expanded={{
                  color: 'blue.blueV1',
                  borderColor: 'blue.blueV1',
                }}
                _focus={{ boxShadow: 'none' }}
                pl="29px"
              >
                ourSolutions
              </AccordionButton>
              <AccordionPanel pl="29px">
                <Links mobile closeModal={closeModal} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none">
              <MainLink
                href={constants.routs.opportunities}
                onClick={closeModal}
              >
                <AccordionButton
                  borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                  fontSize="sm"
                  fontWeight={700}
                  _expanded={{
                    color: 'blue.blueV1',
                    borderColor: 'blue.blueV1',
                  }}
                  _focus={{ boxShadow: 'none' }}
                  pl="29px"
                >
                  opportunities
                </AccordionButton>
              </MainLink>
            </AccordionItem>
            <AccordionItem border="none">
              <MainLink
                href={`/#${constants.anchor.coast}`}
                onClick={closeModal}
              >
                <AccordionButton
                  borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                  fontSize="sm"
                  fontWeight={700}
                  _expanded={{
                    color: 'blue.blueV1',
                    borderColor: 'blue.blueV1',
                  }}
                  _focus={{ boxShadow: 'none' }}
                  pl="29px"
                >
                  price
                </AccordionButton>
              </MainLink>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      {/* <Modal {...props} bg="blue.blueV1">
        <ModalContent maxW="100vw" m="0" h="100vh">
          <ModalHeader>
            <Flex
              h={{ base: '60px', sm: '80px' }}
              justifyContent="space-between"
            >
              <MainLink href="/" display={{ base: 'none', sm: 'block' }}>
                <LogoTabletIcon />
              </MainLink>
              <MainLink href="/" display={{ base: 'block', sm: 'none' }}>
                <MobLogoAndTextIocn />
              </MainLink>
              <CloseIcon
                onClick={onClose}
                marginTop={{ base: '4px', sm: '17px' }}
              />
            </Flex>
            <Flex alignItems="baseline" display={{ base: 'block', sm: 'none' }}>
              <NextLink href={constants.routs.registration}>
                <Button w="144px"> {t('registration')}</Button>
              </NextLink>
              <MainLink ml="18px" href={constants.routs.login}>
                {t('signIn')}
              </MainLink>
            </Flex>
          </ModalHeader>

          <ModalBody p="0px">
            <Accordion allowToggle defaultIndex={0}>
              <AccordionItem border="none">
                <AccordionButton
                  fontSize="sm"
                  fontWeight={700}
                  borderTop="1px dashed rgba(0, 0, 0, 0.5)"
                  borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                  _expanded={{
                    color: 'blue.blueV1',
                    borderColor: 'blue.blueV1',
                  }}
                  _focus={{ boxShadow: 'none' }}
                  pl="29px"
                >
                  {t('ourSolutions')}
                </AccordionButton>
                <AccordionPanel pl="29px">
                  <Links mobile closeModal={closeModal} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none">
                <MainLink
                  href={constants.routs.opportunities}
                  onClick={closeModal}
                >
                  <AccordionButton
                    borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                    fontSize="sm"
                    fontWeight={700}
                    _expanded={{
                      color: 'blue.blueV1',
                      borderColor: 'blue.blueV1',
                    }}
                    _focus={{ boxShadow: 'none' }}
                    pl="29px"
                  >
                    {t('opportunities')}
                  </AccordionButton>
                </MainLink>
              </AccordionItem>
              <AccordionItem border="none">
                <MainLink
                  href={`/#${constants.anchor.coast}`}
                  onClick={closeModal}
                >
                  <AccordionButton
                    borderBottom="1px dashed rgba(0, 0, 0, 0.5)"
                    fontSize="sm"
                    fontWeight={700}
                    _expanded={{
                      color: 'blue.blueV1',
                      borderColor: 'blue.blueV1',
                    }}
                    _focus={{ boxShadow: 'none' }}
                    pl="29px"
                  >
                    {t('price')}
                  </AccordionButton>
                </MainLink>
              </AccordionItem>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default TabletAndMobileMenu;
