/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    born: DataTypes.DATEONLY,
    died: DataTypes.DATEONLY,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Author.belongsToMany(models.Book, {
          through: models.BookHasAuthor
        });
      }
    },
    tableName: 'author'
  });

  return Author;
}
