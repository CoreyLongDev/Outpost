const mongoose = require("mongoose");
const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : process.env.DEV_DB_URL;
console.log(mongoURI);
mongoose
  .connect(mongoURI)
  .then((instance) =>
    console.log(`connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log("connection error", error));

module.exports = mongoose;
