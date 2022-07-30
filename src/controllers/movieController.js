const db = require("../../DataBase/models");

const index = async (req, res) => {
  await db.Movie.findAll({
    include: {
      model: db.Gender,
    },
  })
    .then((movie) => {
      res.status(200).json({
        movie: movie.map((movie) => {
          return {
            id: movie.id,
            titulo: movie.titulo,
            imagen: movie.imagen,
            fecha_de_creacion: movie.fecha_de_creacion,
            Genero: {
              nombre: movie.Gender.nombre,
              imagen: movie.Gender.imagen,
            },
          };
        }),
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const detailMovie = async (req, res) => {
  id = req.params.id;
  await db.Movie.findOne({
    where: {
      id: id,
    },
    include: {
      model: db.Gender,
    },
  }).then((movie) =>
    res.status(200).json({
      id: movie.id,
      titulo: movie.titulo,
      imagen: movie.imagen,
      fecha_de_creacion: movie.fecha_de_creacion,
      Genero: {
        nombre: movie.Gender.nombre,
        imagen: movie.Gender.imagen,
      },
    })
  );
};

const createMovie = (res, req) => {
  console.log({ ...req.body });
  db.Movie.create(req.body).catch((error) => console.log(error));
};

module.exports = { index, detailMovie, createMovie };
