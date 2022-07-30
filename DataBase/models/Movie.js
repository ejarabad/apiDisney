module.exports = (sequelize, DataTypes) => {
  let alias = "Movie";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auntIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_de_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "pelicula",
    timesTamps: false,
    createdAt: false,
    updatedAt: false,
    mapToModel: true,
  };

  let Movie = sequelize.define(alias, cols, config);

  Movie.associate = function (models) {
    Movie.belongsTo(models.Gender, { foreignKey: "Genero_id" });

    Movie.belongsToMany(models.Character, {
      as: "Character",
      through: "personaje_pelicula",
      foreignKey: "idPelicula",
      otherKey: "idPersonaje",
      timesTamps: false,
    });
  };

  return Movie;
};
