import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const day = new Date();
  let today = day.getDay();

  let type = "weekday";
  let advice = "it's time to work hard!";

  if (today === 0 || today === 6) {
    type = "weekend";
    advice = "it's time to have fun!";
  }

  res.render("index.ejs", {
    day: type,
    advice,
  })
});

app.listen(port, (req, res) => {
  console.log(`Listening on http://localhost:${port}`);
});