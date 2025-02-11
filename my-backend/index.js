import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.DOCKER_BACKEND_PORT | 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello From Devops Backend." });
});

app.get("/data1", (req, res) => {
  res.status(200).send({ msg: "I am RJ16" });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
