const Blog = require("../models/posts");
const seedData = require("./seeds.json");

Blog.deleteMany({})
    .then(() => {
        return Blog.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })