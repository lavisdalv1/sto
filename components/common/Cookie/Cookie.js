// import { useState, useEffect } from 'react';
// import { Box, Button, Text, Image } from '@chakra-ui/react';

// import Heading from '../Heading';

// export const Cookie = () => {
//   const [open, setOpen] = useState();

//   useEffect(() => {
//     if (!localStorage.getItem('CookieModal')) {
//       setOpen(true);
//     }
//   }, []);

//   const onClose = () => {
//     localStorage.setItem('CookieModal', true);
//     setOpen(false);
//   };

//   return (
//     <>
//       {open && (
//         <Box
//           position="fixed"
//           bottom="0px"
//           left="0"
//           right="0"
//           m={{ base: '20px', md: '20px auto' }}
//           maxWidth="1216px"
//           minHeight="160px"
//           borderRadius="56px"
//           p="20px"
//           bg="blue.blueV1"
//           zIndex={100}
//         >
//           <Box
//             display="grid"
//             gridTemplateColumns={{ base: 'none', md: '1fr 3fr' }}
//             gridTemplateRows={{ base: '1fr', md: 'none' }}
//             alignItems="center"
//             justifyItems={{ base: 'center', md: 'normal' }}
//           >
//             <Image
//               src="/images/cookie.svg"
//               alt="cookie"
//               display={{ base: 'none', md: 'block' }}
//               height={{ base: '100px', md: '144px' }}
//               mb={{ base: '20px', md: '0px' }}
//               ml={{ base: '0px', md: '90px' }}
//               w="157px"
//               loading="lazy"
//             />
//             <Box
//               maxW={{ base: '100%', md: '610px' }}
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//             >
//               <Heading variant="h2" color="white" textAlign="center">
//                 Сервис использует файлы Cookie
//               </Heading>
//               <Text
//                 mt="14px"
//                 color="white"
//                 textAlign="center"
//                 color="sub.v3"
//                 fontSize={{ base: '11px', sm: 'initial' }}
//               >
//                 Этот ресурс использует файлы cookie для хранения и анализа
//                 вводимых данных и предпочтений. Продолжая использование ресурса,
//                 вы соглашаетесь с условиями использования сайта а также
//                 предоставляете согласие на использование файлов cookie в
//                 соответствии с политикой конфиденциальности
//               </Text>
//               <Button
//                 _hover={{ bg: 'black' }}
//                 mt="14px"
//                 w="152px"
//                 onClick={onClose}
//               >
//                 Понятно
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       )}
//     </>
//   );
// };
