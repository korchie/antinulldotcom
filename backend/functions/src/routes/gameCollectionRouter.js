const express = require("express");
const router = express.Router();
import { getClient } from "../db";
// import {MongoCl}
// import { ObjectId } from "mongodb";
// import GameCollectionInterface from "../models/GameCollectionInterface";

// router.get("/gameCollection", async (req, res) => {
//   try {
//     const client = await getClient();
//     const results = await client
//       .db()
//       .collection("gameCollection")
//       .find()
//       .toArray();
//     res.json(results); // send json results
//   } catch (err) {
//     console.error("ERROR", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }d
// });

router.get("/gameCollection", (req, res) => {
  const gameData = [
    {
      // _id: ObjectId("65982bb688fadc707df61f07"),
      Platform: "Dreamcast",
      Type: "VideoGame",
      Owned: 1,
      ForSale: 0,
      Wishlist: 0,
      Title: "Shenmue",
      Publisher: "Sega",
      Developer: "Sega AM2 R&D Division",
      DateAdded: "04/14/2022",
      Ownership: "CIB+",
      PriceLoose: 16,
      PriceCIB: 32.46,
      PriceNew: 120.01,
      YourPrice: 32.46,
      PricePaid: -1,
      ItemCondition: "?",
      BoxCondition: "?",
      ManualCondition: "?",
      Beat: "No",
      PlayedCompletion: " 0%",
    },
  ];

  res.send(gameData);
  //   res.json(gameData);
});

// module.exports = router;
export default router;
