import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./db/connecion.js";
import UserModel from "./models/user.js";
import {appMiddleware} from "./middleware/appMiddleware.js";
dotenv.config();

const port = process.env.DOCKER_BACKEND_PORT | 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello From Devops Backend." });
});

app.get("/data1", (req, res) => {
  res.status(200).send({ msg: "I am RJ16" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/user/add", async (req, res) => {
  try {
    const users = await UserModel.create({
      name: "RJ16",
      age: 25,
      email: "ritik9628@gmail.com",
    });
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users/mid",appMiddleware, async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
