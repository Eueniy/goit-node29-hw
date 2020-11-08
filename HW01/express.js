const express = require("express");

const app = express();

app.get("/example", (req, res, next) => {
  // обрабатывает только метод GET и только по пути /example
  return res.send((hello: "hello world")); // аналог метода end, но также может делать автом.парсинги тела ответа
});

app.listen(3000, () => {
  console.log("start listening on port 3000");
});
