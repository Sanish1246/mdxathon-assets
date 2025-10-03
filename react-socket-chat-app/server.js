import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

//Listening for an event with the name "connection"
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id} `);

  //Creating events
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID ${socket.id} joined room ${data}`);
  });

  socket.on("send_message", (data) => {
    //Sending data to the front end
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running");
});
