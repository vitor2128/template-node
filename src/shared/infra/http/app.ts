import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";

import { AppError } from "@shared/errors/AppError";
import { database } from "../database";
import { migrations } from "../database/migrations";
import { router } from "./routes";

const app = express();

app.use(express.json());

(async () => {
  try {
    await migrations(database);
  } catch (error) {}
})();

app.use(cors());
app.use("/api/v1", router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
