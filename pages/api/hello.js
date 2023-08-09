// pages/api/hello.js
const db = require("@/server/config/Mysql");
export default function handler(req, res) {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.status(200).json(results);
  });
}
