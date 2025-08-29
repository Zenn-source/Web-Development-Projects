import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"].length;
  const lastName = req.body["lName"].length;
  const totalLetters = firstName + lastName;
  res.render("index.ejs", {
    numberOfLetters: totalLetters,
  });
});
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
