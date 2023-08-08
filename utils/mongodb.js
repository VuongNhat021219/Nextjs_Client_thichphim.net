import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://vuongdev:Vuong021219@cluster0.gmxn7nw.mongodb.net/?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

export async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(uri, options);
    db = client.db("websitephim");
    console.log("Kết nối thành công tới MongoDB!");
  }
  return { client, db };
}