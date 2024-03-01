import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});