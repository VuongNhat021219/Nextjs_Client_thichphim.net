const { MongoClient, ServerApiVersion } = require("mongodb");

let client;
let database;

exports.connectToDatabase = async () => {
  const uri = `mongodb+srv://vuongdev:Vuong021219@cluster0.gmxn7nw.mongodb.net/?retryWrites=true&w=majority`;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    await client.connect();
    database = client.db("websitephim"); // Thay "your_database_name" bằng tên của database bạn muốn sử dụng
    console.log("Kết nối thành công tới MongoDB!");
  } catch (error) {
    console.error("Không thể kết nối tới MongoDB:", error);
  }
};

exports.createConlllection = (collectionName) => {
  if (database) {
    return database.createCollection(collectionName);
  } else {
    throw new Error("Chưa thiết lập kết nối tới MongoDB!");
  }
};

exports.getCollection = (collectionName) => {
  if (database) {
    return database.collection(collectionName);
  } else {
    throw new Error("Chưa thiết lập kết nối tới MongoDB!");
  }
};

exports.closeConnection = async () => {
  if (client) {
    await client.close();
    console.log("Đã đóng kết nối tới MongoDB!");
  }
};


