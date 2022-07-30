module.exports = (sequelize, DataTypes) => {
  let alias = "Character";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auntIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    historia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "personaje",
    timesTamps: false,
    createdAt: false,
    updatedAt: false,
    mapToModel: true,
  };

  const Character = sequelize.define(alias, cols, config);

  Character.associate = function (models) {
    Character.belongsToMany(models.Movie, {
      as: "Movie",
      through: "personaje_pelicula",
      foreignKey: "idPersonaje",
      otherKey: "idPelicula",
      timesTamps: false,
    });
  };

  return Character;
};
