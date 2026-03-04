import "dotenv/config";
import { app } from "./app";

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
export default app;
