const Movie = require("./Movie");
const Character = require("./Character");

module.exports = (sequelize, DataTypes) => {
  let alias = "Character_Movie";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPersonaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPelicula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "personaje_pelicula",
    timesTamps: false,
    createdAt: false,
    updatedAt: false,
    mapToModel: true,
  };

  let Character_Movie = sequelize.define(alias, cols, config);

  /*   Character.belongsToMany(Movie, { through: Character_Movie });

  Movie.belongsToMany(Character, { through: Character_Movie }); */

  return Character_Movie;
};
