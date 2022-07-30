module.exports = (sequelize, DataTypes) => {
  let alias = "Gender";

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
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "genero",
    timesTamps: false,
    createdAt: false,
    updatedAt: false,
    mapToModel: true,
  };

  const Gender = sequelize.define(alias, cols, config);

  Gender.associate = function (models) {
    Gender.hasMany(models.Movie, { foreignKey: "Genero_id" });
  };

  return Gender;
};
