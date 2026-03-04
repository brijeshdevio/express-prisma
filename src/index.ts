import express, { Request, Response } from "express";

export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
