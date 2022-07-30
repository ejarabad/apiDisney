const express = require("express");
const movieRoute = require("./routes/movieRoute");
const characterRoute = require("./routes/characterRoute");
const authRoute = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { sequelize } = require("../DataBase/models");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server on Port: ${port}`);

  /* sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Nos conectamos a la Base de datos DisneyDB");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    }); */
});

app.use("/auth", authRoute);
app.use("/movie", movieRoute);
app.use("/characters", characterRoute);
