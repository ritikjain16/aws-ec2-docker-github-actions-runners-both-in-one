
import dotenv from "dotenv";
dotenv.config();

export const appMiddleware = (req, res, next) => {
  if (
    req.get("origin") === process.env.FRONTEND) {
    next();
  } else {
    if (
      req.headers.authorization ===
      `${process.env.USERNAME_R}:${process.env.ADMINPASS}`
    ) {
      next();
    } else {
      res.status(400).send({ msg: "Authentication Error" });
    }
  }
};
