// create simple express app
import express from "express";
import type { Request, Response, Application } from "express";
const app: Application = express();
app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
app.get("/health", (req: Request, res: Response) => res.send("OK!"));

if (process.env.NODE_ENV === "production") {
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
}
export default app;
