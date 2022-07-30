const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.headers["autorization"];
  /* if (!accessToken) {
    res.status(400).json("Access denied");
  } */

  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      res.send("Acces denied, invalid token or expired token");
    } else next();
  });
};

module.exports = validateToken;
