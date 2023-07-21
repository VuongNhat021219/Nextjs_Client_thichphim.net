const database = require("../Config/Database");
const axios = require("axios");

async function fetchData() {
  let page = 1;
  let hasMoreData = true;
  const allData = [];
  while (hasMoreData) {
    try {
      // const phim = await database.getCollection("dataphim");
      // await phim.deleteMany({});
      const response = await axios.get(
        `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`
      );
      const data = response.data.items;
      allData.push(...data);

      if (page > response.data.pagination.totalPages) {
        hasMoreData = false;
      } else {
        page++;
      }
    } catch (error) {
      console.error("Error fetching and storing data", error);
    }
  }
  try {
    const phim = await database.getCollection("dataphim");
    await phim.insertMany(allData);
    console.log("Data fetching and storing completed");
  } catch (error) {
    console.error("Error storing data", error);
  }
}
module.exports = fetchData;
