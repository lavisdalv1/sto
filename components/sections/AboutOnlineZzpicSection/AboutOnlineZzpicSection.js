import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';

import Heading from '../../common/Heading';
import { CloseAccordionIcon, OpenAccordionIcon } from '../../icons';

export const AboutOnlineZzpicSection = ({ data, t }) => {
  return (
    <Box
      backgroundImage="/images/bgAbout.png"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: 'cover' }}
      minH={{ base: 'auto', sm: '680px' }}
      pb={{ base: '30px', sm: '60px' }}
    >
      <Heading
        variant="h2"
        textAlign="center"
        pt={{ base: '60px', sm: '120px' }}
        mb={{ base: '30px', md: '61px' }}
      >
        {t('different.aboutThe')}
      </Heading>

      <Accordion allowToggle variant="aboutOnlineZapis">
        {data?.map(({ name, desc }, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Heading
                    h={{ base: 'auto', sm: '42px' }}
                    fontSize={{ base: 'xxs', sm: 'md' }}
                    fontWeight="medium"
                    variant="h3"
                    flex="1"
                    textAlign="left"
                    lineHeight={{ base: '14px', md: 'smaller' }}
                  >
                    {name}
                  </Heading>
                  {isExpanded ? <CloseAccordionIcon /> : <OpenAccordionIcon />}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <Text fontSize={{ base: 'xxs', sm: 'md' }}>{desc}</Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default AboutOnlineZzpicSection;
