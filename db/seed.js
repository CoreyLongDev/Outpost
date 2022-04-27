const Posts = require("../models/posts");
const seedData = require("./seeds.json");

Posts.deleteMany({})
    .then(() => {
        return Posts.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })