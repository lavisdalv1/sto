import { useState } from 'react';
import {
  Container,
  Box,
  Text,
  Select,
  Radio,
  RadioGroup,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Heading from '../../common/Heading';
import { DashesIcon } from '../../icons';
import { CardCalculation } from './CardCalculation';
import { constants } from '../../../constants';
import { usePosition } from '../../../hooks/usePostion';
import { dataPrice } from '../../../data/dataPrice';

const defaultSelectByPath = (path) => {
  switch (path) {
    case constants.routs.auto:
      return constants.typePrice.auto;
    case constants.routs.medic:
      return constants.typePrice.medic;
    case constants.routs.masters:
      return constants.typePrice.beautySalon;
    default:
      return constants.typePrice.beautySalon;
  }
};

export const CostСalculationSection = () => {
  const { asPath } = useRouter();
  const [radio, setRadio] = useState(constants.coast.before5);
  const [type, setType] = useState(defaultSelectByPath(asPath));
  const { cityName } = usePosition();
  const t = useTranslations();
  const typeCurrecny = cityName === 'Belarus';

  return (
    <Container
      id={constants.anchor.coast}
      pt={{ base: '50px', md: '100px' }}
      pb={{ base: '50px', md: '100px' }}
    >
      <Heading
        variant="h2"
        display="flex"
        justifyContent="center"
        pb={{ base: '30px', md: '62px' }}
      >
        {t('CostСalculationSection.head')}
        <DashesIcon />
      </Heading>

      <Box
        display={'flex'}
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Text fontSize="sm" maxWidth="720px">
          {`${t('CostСalculationSection.desc.one')}`}
          <Text as="span" color="blue.blueV1">
            {t('CostСalculationSection.desc.blue')}{' '}
          </Text>
          {t('CostСalculationSection.desc.two')}
        </Text>

        <Box display="flex" alignItems="center">
          <Text mr="5px">{t('CostСalculationSection.type')}</Text>
          <Select
            width="155px"
            variant="transparent"
            onChange={(e) => {
              setRadio(constants.coast.before5);
              setType(e.target.value);
            }}
            value={type}
          >
            <option value={constants.typePrice.beautySalon}>
              {t('CostСalculationSection.select.beauty')}
            </option>
            <option value={constants.typePrice.medic}>
              {t('CostСalculationSection.select.medic')}
            </option>
            <option value={constants.typePrice.auto}>
              {t('CostСalculationSection.select.auto')}
            </option>
          </Select>
        </Box>
      </Box>

      <Box
        display="flex"
        pt={{ base: '46px', md: '70px' }}
        pb={{ base: '26px', md: '40px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Text
          mr={{ base: '0px', md: '198px' }}
          fontSize="lg"
          fontWeight="medium"
          color="black"
        >
          {t('CostСalculationSection.staffNumber')}
        </Text>

        <RadioGroup
          defaultValue="1"
          onChange={(e) => setRadio(e)}
          value={radio}
          defaultValue={constants.coast.before5}
        >
          <HStack justifyContent={'center'} flexWrap="wrap" spacing={0}>
            <Radio
              variant="coins"
              value={constants.coast.before5}
              marginInlineEnd="30px !important"
            >
              {t('CostСalculationSection.numbers.to5')}
            </Radio>
            {type === constants.typePrice.auto ? (
              <Radio
                variant="coins"
                value={constants.coast.over5}
                marginInlineEnd="30px !important"
              >
                {t('CostСalculationSection.numbers.over')}
              </Radio>
            ) : (
              <>
                <Radio
                  variant="coins"
                  value={constants.coast.before10}
                  marginInlineEnd="30px !important"
                >
                  {t('CostСalculationSection.numbers.to10')}
                </Radio>
                <Radio
                  variant="coins"
                  value={constants.coast.before20}
                  marginInlineEnd="30px !important"
                >
                  {t('CostСalculationSection.numbers.to20')}
                </Radio>
                <Radio
                  variant="coins"
                  value={constants.coast.before30}
                  marginInlineEnd="30px !important"
                >
                  {t('CostСalculationSection.numbers.to30')}
                </Radio>
                <Radio
                  variant="coins"
                  value={constants.coast.before60}
                  marginInlineEnd="30px !important"
                >
                  {t('CostСalculationSection.numbers.over30')}
                </Radio>
              </>
            )}
          </HStack>
        </RadioGroup>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        gap="40px"
        justifyItems="center"
      >
        {dataPrice(radio, type, typeCurrecny, t).map((card) => (
          <CardCalculation
            key={card.id}
            {...card}
            typeCurrecny={typeCurrecny}
            t={t}
          />
        ))}
      </SimpleGrid>

      <Text fontSize="xxs" pt={{ base: '42px' }}>
        {t('CostСalculationSection.text.one')}
      </Text>

      <Text fontSize="xxs">{t('CostСalculationSection.text.two')}</Text>

      <Text fontSize="xxs">{t('CostСalculationSection.text.three')}</Text>
    </Container>
  );
};

export default CostСalculationSection;
