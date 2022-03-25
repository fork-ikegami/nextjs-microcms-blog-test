const fs = require('fs');
const axios = require('axios').default;
require('dotenv').config();

const getMicroCMSdata = async() => {
  const url = `https://next-microcms-blog-test.microcms.io/api/v1/category`;
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

const countBlogItems = (contents) => {
  const json = fs.readFileSync('data/allBlogData.json', 'utf-8');
  const allBlogData = JSON.parse(json);

  contents.forEach((category) => {
    const blogCount = allBlogData.filter((blog) => blog.category.id === category.id).length;
    category.count = blogCount;
  })
}

const createCmsJson = async() => {
  const contents = await getMicroCMSdata();
  countBlogItems(contents);
  const jsonData = JSON.stringify(contents, null, 2);
  fs.writeFileSync('data/allCategoryData.json', jsonData);
}

createCmsJson();