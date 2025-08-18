import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    "<h1>Hello World!</h1> <a href='/contact'>Contact</a> <a href='/about'>About me</a>"
  );
});

app.get('/contact', (req, res) => {
  res.send("<h1>Contact me at:</h1><a href='/'>Back</a>")
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1> <a href='/'>Back</a>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});