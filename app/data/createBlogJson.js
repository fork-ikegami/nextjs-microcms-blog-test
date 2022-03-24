const fs = require('fs');
const axios = require('axios').default;
require('dotenv').config();

const getMicroCMSdata = async() => {
  const url = `https://next-microcms-blog-test.microcms.io/api/v1/blog`;
  const apiKeyHeaderOption = { headers : { "X-MICROCMS-API-KEY": process.env.API_KEY }};

  const getUrlOption = (number, url) => {
    const urlAndOption = url + `?limit=${number}`;

    return String(urlAndOption);
  }

  const getTotalCountUrl = getUrlOption(0, url),
    totalCountUrlData = await axios.get(getTotalCountUrl, apiKeyHeaderOption)
    .then(r => r.data),
    { totalCount } = await totalCountUrlData;
  
  const getContentUrl = getUrlOption(totalCount, url),
    contentUrlData = await axios.get(getContentUrl, apiKeyHeaderOption)
    .then(r => r.data),
    { contents } = await contentUrlData;

  return contents;
}

const createCmsJson = async() => {
  const contents = await getMicroCMSdata();

  // 公開日時で降順ソート
  const sortByDate = contents.sort(function(a, b) {
    return (a.publishedAt > b.publishedAt) ? -1 : 1;
  })
  const jsonData = JSON.stringify(sortByDate, null, 2);
  fs.writeFileSync('data/allBlogData.json', jsonData);
}

createCmsJson();