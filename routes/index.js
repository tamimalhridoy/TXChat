const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

router.use("/api/v1", apiRouter);

router.use((req, res) => {
  res.status(404).send("page not found");
});

module.exports = router;
