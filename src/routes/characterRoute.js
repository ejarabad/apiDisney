const express = require("express");
const characterController = require("../controllers/characterController");
const router = express.Router();

//Get all characters
router.get("/", characterController.index);

//Get one character
router.get("/:id", characterController.getOneCharacter);

//Create a new character
router.post("/", characterController.createCharacter);

//Edit one character
router.put("/:id", characterController.editCharacter);

//Delete one character
router.delete("/:id", characterController.deleteCharacter);

module.exports = router;
