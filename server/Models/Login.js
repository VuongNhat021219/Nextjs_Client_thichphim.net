const database = require("../../src/Config/Database");
const bcrypt = require("bcrypt");

const Login = async (email, password) => {
 
  const usersCollection = await database.getCollection("users");
  const users = await usersCollection.find({ email: email }).toArray();
  if (users.length > 0) {
    bcrypt.compare(password, users[0].password, function (err, res) {
      if (res) {
        return users;
      }
    });
    return users;
  } else {
    return null;
  }
};

module.exports = { Login };
