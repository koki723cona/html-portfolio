import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve the form
app.get("/", (req, res) => {
  res.render("index.ejs")
});

// Handle form submission
app.post("/submit", (req, res) => {
   const firstName = req.body.fName;
   const lastName = req.body.lName;
   const totalLength = firstName.length + lastName.length;

   res.render("index.ejs", {
    totalLength
   });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
