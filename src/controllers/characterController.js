const db = require("../../DataBase/models");

const index = (req, res) => {
  db.Character.findAll({ include: { association: "Movie" } }).then(
    (character) => {
      console.log(character.Movie);
      res.status(200).json({
        characters: character.map((character) => {
          return {
            id: character.id,
            nombre: character.nombre,
            imagen: character.imagen,
            Movie: character.Movie,
          };
        }),
      });
    }
  );
};

const createCharacter = (req, res) => {
  console.log({ ...req.body });
  db.Character.create(req.body).catch((error) => {
    console.log(error);
  });
  res.status(200).send({ Mensaje: "Personaje creado con exito" });
};

const getOneCharacter = (req, res) => {
  id = req.params.id;
  db.Character.findOne({
    where: { id: id },
    include: { association: "Movie", model: db.Movie },
  }).then((character) => {
    console.log(character.Movie.Genero_id);
    res.status(200).json({
      nombre: character.nombre,
      edad: character.edad,
      peso: character.peso,
      imagen: character.imagen,
      historia: character.historia,
      Movies: character.Movie.map((mov) => {
        return {
          titulo: mov.titulo,
          imagen: mov.imagen,
          fecha_de_creacion: mov.fecha_de_creacion,
        };
      }),
    });
  });
};

const editCharacter = (req, res) => {
  console.log(req.body);
  id = Number(req.params.id);
  db.Character.findByPk(id).then(
    db.Character.update(
      {
        ...req.body,
      },
      {
        where: {
          id: id,
        },
      }
    )
  );
  res.status(200).send({ Mensaje: "Personaje actualizado con exito" });
};

const deleteCharacter = (req, res) => {
  id = req.params.id;
  console.log(id);

  db.Character.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.status(200).json({
      Mensaje: "Personaje eliminado con exito",
    });
  });
};

module.exports = {
  index,
  createCharacter,
  getOneCharacter,
  editCharacter,
  deleteCharacter,
};
