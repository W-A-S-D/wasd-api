let dotenv = require("dotenv").config();
let express = require("express");
let http = require("http");

let cors = require("cors");
let socket = require("socket.io");

let router = require('./routes');

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new socket.Server(serverHttp, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());

app.use(router);

module.exports = serverHttp;