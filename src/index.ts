import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
