const mongoose = require("../db/connections");

const BlogSchema = new mongoose.Schema({
  title: String,
  location: String,
  activity: String,
  content: String,
});

const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
