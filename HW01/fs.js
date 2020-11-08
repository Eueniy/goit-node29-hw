const fs = require("fs");
const { promises: fsPromises } = fs;
const path = require("path");

// fs.writeFile("example.txt", "some text in file", (err) => {
//   if (err) console.log("err", err);
//   fs.readFile("example.txt", "utf-8", (err, data) => {
//     console.log("data", data);

//     fs.appendFile("example.txt", "second write", (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   });
// });

// // через Промисы
// fsPromises
//   .writeFile("example.txt", "new text promises")
//   .then(() => {
//     return fsPromises.readFile("example.txt", "utf-8");
//   })
//   .then((data) => {
//     console.log("data", data);
//     return fsPromises.appendFile("example.txt", "second write");
//   });

// // через async await
// async function main() {
//   await fsPromises.writeFile("example1.txt", "async function");

//   const data = await fsPromises.readFile("example1.txt", "utf-8");
//   console.log("data", data);

//   await fsPromises.appendFile("example.txt", "second write");
// }

// main();

async function main2() {
  const pathToHigherPackageJson = path.join(__dirname, "package.json");
  console.log(await fsPromises.readFile(pathToHigherPackageJson, "utf-8"));
}

main2();
