import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(5060, () =>
  console.log("Server is running on http://localhost:5060")
);
