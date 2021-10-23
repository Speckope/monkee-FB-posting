const fetch = require('node-fetch');

const accessToken =
  process.env.ACCESS_TOKEN;
const pageID = '117358150114427';
const photoURL =
  'https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

async function postPhoto() {
  const url = `https://graph.facebook.com/v8.0/${pageID}/photos?url=${photoURL}&access_token=${accessToken}`;
  const response = await fetch(url, {
    method: 'POST',
  });
  return response.json();
}

postPhoto().then((data) => console.log(data));
