import express from "express";
import router from "../routes";
import "dotenv/config";
import "../shared/middlewares/services/translationyup";
const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`🔥 Server started is Port ${process.env.PORT}`)
);

export default app;
