const express = require("express");
const app = express();

const isOldEnoughMiddleware = (req, res, next) =>
  req.query.age >= 14
    ? next()
    : res.status(411).json({
        msg: "You are too young for this ride",
      });

// use for all routes.
//  works only on the routes that are below this line not for routes that are above.
app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riddedn the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riddedn the ride 2",
  });
});

app.listen(3000);
