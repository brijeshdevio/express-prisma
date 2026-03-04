import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
export default app;
