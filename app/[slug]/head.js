// import { gql } from '@apollo/client';
// import client from '../../appoloClient';

// async function getMetaData(slug) {
//   const res = await client.query({
//     query: gql`
//       query MyQuery {
//         page(where: { slug: "${slug}" }) {
//           id
//           metas {
//             title
//             id
//           }
//         }
//       }
//     `,
//   });
//   console.log(res, 'res slug');

//   if (res.data.page === null) return {};

//   return res.data.page?.metas[0];
// }

export default async function Head(props) {
  // const data = await getMetaData(props.params.slug);

  // console.log(data, 'data');

  return (
    <>
      {/* <title>{data?.title}</title> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="sto oooooo" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
    </>
  );
}
