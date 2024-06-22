import express from "express";

const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const today = new Date();
  const day = today.getDate();
  let advice;

  if (day === 0 || day === 6) {
    advice = "Hey! It's the weekend, it's time to have fun!"
  } else {
    advice = "Hey! It's the weekday, it's time to work hard!";
  }

   res.render("index", { advice: advice });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});