import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import routes from "./routes/collectionRoutes";
// import collectionRoutes from "./routes/collectionRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// adding the port info
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));

app.use("/", routes);
// app.use("/", collectionRoutes);

export const api = functions.https.onRequest(app);
