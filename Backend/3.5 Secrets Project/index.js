//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function checkAuth(req, res, next) {
  if (req.body.password === "ILoveProgramming") {
    next();
  } else {
    res.status(401).send("Not Authorized");
    console.log(`Wrong password: ${req.body.password}`);
  }
}

app.post("/secrets", checkAuth, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
  console.log("User Authorized.");
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});