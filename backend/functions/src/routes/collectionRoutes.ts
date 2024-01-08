import express from "express";
import { getClient } from "../db";
// import { ObjectId } from "mongodb";
import {MongoCl}
import gameCollectionInterface from "../models/gameCollectionInterface";

const routes = express.Router();

routes.get("/gameCollection", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection("gameCollection").find().toArray();
    res.json(results); // send json results
  } catch (err) {
    console.error("ERROR", err);
    // console.log("server up and running!");
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default routes;
