const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

let stuff = [];

io.on("connection", (socket) => {
  socket.on("add", (message) => {
    //database logic
    stuff.push(message);
    io.emit("listItems", stuff);
  });

  socket.on("delete", (index) => {
    //database logic
    stuff.splice(index, 1);
    io.emit("listItems", stuff);
  });

  socket.on("changeStatus", (index) => {
    //database logic
    if (stuff[index].status === "active") stuff[index].status = "done";
    else stuff[index].status = "active";
    io.emit("listItems", stuff);
  });

  io.emit("listItems", stuff);
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));

