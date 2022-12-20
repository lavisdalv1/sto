import { Box } from '@chakra-ui/react';

import Heading from '../../common/Heading';
import { CardReviev } from './CardReviev';

const data = [
  {
    id: 1,
    desc: 'Год назад внедрили сервис в нашу сеть салонов BeautyExpress. Сервис позволил существенно упростить рабочий процесс для администрации  и сотрудников, отказаться от лишней бумажной работы. Готовы рекомендовать, как отличное решение автоматизации бизнес- процессов.',
    name: 'Екатерина',
    job: 'Франшиза “Beauty Express”',
    src: '/images/ekaterina.png',
  },
  {
    id: 1,
    desc: 'Работаем на платформе уже несколько месяцев. Очень удобная, интуитивно понятная программа для записи клиентов и получения отчётов. Функционал постоянно обновляется, что даёт много инструментов для автоматизации процессов и анализа. Представители помогают и консультируют, оказывают поддержку.',
    name: 'Татьяна',
    job: 'Сеть “Город красоты”',
    src: '/images/zal.png',
  },
  {
    id: 1,
    desc: 'Используем программу online-zapis.com для автоматизации медцентра и регистратуры. Отличное соотношение цена - возможности, замечательная поддержка. Рекомендуем.',
    name: 'Елена',
    job: 'Медицинский центр Вивальди Медика',
    src: '/images/tatiyna.png',
  },
];

export const PeopleAboutUsSection = ({ t }) => {
  return (
    <Box>
      <Box
        backgroundImage={`url('/images/peopleAboutUsBg.png')`}
        backgroundPosition="0 0"
        backgroundRepeat="no-repeat"
        backgroundSize={{ base: 'cover', md: '100% 650px' }}
        mt="80px"
        position="relative"
      >
        <Box
          pt={{ base: '77px', md: '115px' }}
          pb={{ base: '50px', md: '100px' }}
          maxWidth="1216px"
          margin="0 auto"
          minHeight={{ base: 'auto', md: '670px' }}
        >
          <Heading
            variant="h2"
            display="flex"
            justifyContent="center"
            mb="62px"
          >
            {t('different.peopleAboutUS')}
          </Heading>
          <Box
            overflowX={{ base: 'scroll', md: 'auto' }}
            display={{ base: 'flex', md: 'grid' }}
            gridTemplateColumns={{ base: 'none', md: '1fr 1fr 1fr' }}
            gap="27px"
            width="100%"
            pl="50px"
            pr="50px"
          >
            {data.map((reviev, index) => (
              <CardReviev key={index} {...reviev} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PeopleAboutUsSection;
