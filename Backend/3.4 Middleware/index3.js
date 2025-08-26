import express from "express";


const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`Request method & URL: ${req.method} ${req.url}`);
  next(); // don't forget to use next() in middlewares
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
