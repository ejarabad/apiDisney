const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

//All Movies
router.get("/", movieController.index);

router.get("/:id", movieController.detailMovie);

router.post("/", movieController.createMovie);

router.put("/:id", (req, res) => {
  res.send(`Editar la pelicula ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Eliminar la pelicula ${req.params.id}`);
});

module.exports = router;
