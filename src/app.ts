import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./router";
import { handleError } from "./middlewares/handleError";

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log("🤘 Let's Rock!");
  console.log(`🔥 App rodando na porta ${port}`);
});

app.use(router);

app.use(handleError);
