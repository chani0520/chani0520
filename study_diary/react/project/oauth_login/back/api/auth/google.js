const express = require("express");
const router = express.Router();

router.post("/google", (req, res, next) => {
  console.log("[server] google login called!");

  console.log(req.body);
  console.log(
    "🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟"
  );

  res.json({
    message: "😀 [server] google login called!",
  });
});

module.exports = router;
