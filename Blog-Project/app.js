import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    res.render("post", { post: post });
  } else {
    res.redirect("/");
  }
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    res.render("edit", { post: post });
  } else {
    res.redirect("/");
  }
});

app.post("/posts/:id/edit", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === req.params.id);
  if (postIndex !== -1) {
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;
  }
  res.redirect(`/posts/${req.params.id}`);
});

app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
