const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  res.send("Usuario logueado");
};

const register = (req, res) => {
  const user = { username: "ejarabad" };

  const accessToken = generateAccessToken(user);

  res.setHeader("autorization", accessToken).json({
    message: "Usuario autenticado",
    token: accessToken,
  });
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "5m" });
};

module.exports = { login, register };
