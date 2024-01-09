import express from "express";
import cors from "cors";
const bodyParser = require("body-parser");
const router = require("./routes/gameCollectionRouter");
import * as functions from "firebase-functions";
require("dotenv/config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

app.use(express.json());

app.use("/", router);

// adding the port info
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// export const api = functions.https.onRequest(app);

// module.exports = router;
export default router;
