import express, { type Request, type Response } from "express";

export const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Healthy",
  });
});
