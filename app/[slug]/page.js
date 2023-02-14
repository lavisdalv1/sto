// import { gql } from '@apollo/client';
// import client from '../../appoloClient';

// import { Sections } from '../../components/sections/Sections';

// async function getPagesSlug() {
//   const res = await client.query({
//     query: gql`
//       query MyQuery {
//         pages {
//           id
//           pageTittle
//           slug
//         }
//       }
//     `,
//   });

//   return res.data;
// }

// async function getDataPage(slug) {
//   // console.log(slug, 'slug');
//   const res = await client.query({
//     query: gql`
//     query MyQuery {
//       page(where: {slug: "${slug}"}) {
//         id
//         slug
//         components {
//           ... on Section {
//             id
//             stage
//             title
//             header
//             serviceField
//           }
//           ... on Sectiontwo {
//             id
//             stage
//             text
//             serviceField
//           }
//         }
//       }
//     }
//     `,
//   });

//   return res.data;
// }

export default async function Page({ params, ...props }) {
  // const data = await getDataPage(params?.slug);
  return <>{/* <Sections dataPages={data.page?.components} /> */}</>;
}

// export async function generateStaticParams() {
//   const pages = await getPagesSlug();

//   return pages.pages.map((page) => ({
//     slug: page.slug === null ? '/' : page?.slug.toString(),
//   }));
// }
