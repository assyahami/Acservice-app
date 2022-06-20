import sanityClient from '@sanity/client';
// require('dotenv').config();

export default sanityClient({
  projectId: process.env.REACT_APP_SANITYPROJECTID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-06-07',
  token: process.env.REACT_APP_SANITYTOKEN,
});
