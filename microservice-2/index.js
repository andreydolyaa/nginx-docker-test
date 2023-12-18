import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Incoming request:", {
    method: req.method,
    url: req.url,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  });
  console.log("_______________________");
  next();
});

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

app.get("/api", async (req, res) => {
  await sleep(3000);
  return res.status(200).send(JSON.stringify("Response from Microservice-2"));
});

// 3002
app.listen(process.env.PORT, () =>
  console.log(`Microservice-2 started on ${process.env.PORT}`)
);
