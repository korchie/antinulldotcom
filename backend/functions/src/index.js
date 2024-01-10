const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gameCollectionRouter = require("./routes/gameCollectionRouter");
const functions = require("firebase-functions");
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
app.use("/", gameCollectionRouter);

app.use(express.json());

// adding the port info
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// export const api = functions.https.onRequest(app);

module.exports = gameCollectionRouter;
// export default router;
