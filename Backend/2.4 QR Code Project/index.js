/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt({
    type: 'input',
    name: 'url',
    message: 'Enter a URL: '
  })
  .then((answers) => {
    qr.image(answers.url, {
      type: "png"
    }).pipe(fs.createWriteStream("qr.png"));
    
    fs.writeFile("URLinput.txt", answers.url, () => {
      console.log(`URL (${answers.url}) saved!`);
    })
  })
  