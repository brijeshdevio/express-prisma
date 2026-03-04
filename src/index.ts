import "dotenv/config";
import { app } from "./app";

const isDev = process.env.NODE_ENV === "development";
if (isDev) {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
export default app;
