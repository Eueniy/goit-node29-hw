const http = require("http");

const server = http.createServer((req, res) => {
  // req - инфа кот.пользователь отправил нам в своем запросе
  // res - методы и свойства кот помогают нам прочитать запрос и отправить ответ
  console.log("request received");
  // 1. HTTP-method
  // 2.path-params and query
  // 3. request body
  // 4. header - инфа кот.передаем пользователю при обращении к серверу
  const method = req.method; // GET, POST, PUT ... получаем имя метода
  const pathParamsAndQuery = req.url;
  const headers = req.headers;
  let body = "";

  req.on("data", (bodyChunk) => {
    console.log("bodyChunk", bodyChunk);
    // on -метод кот.позволяет повесить обработчик событий. data - click
    bodyChunk += bodyChunk.toString();
  });
  req.on("end", () => {
    // end означает что мы получили все куски нашего запроса
    // body received
    console.log("req", req);

    res.writeHead(201, { "content-type": "text/plain" }); //201-status-code
    res.end(body); //закроет соединение
  });

  res.statusCode = 200;
  res.end("my first server");
});

server.listen(3000, () => {
  console.log("server listening on port 3000"); // принимаем сообщения от нашего клиента на 3000 порту
});
