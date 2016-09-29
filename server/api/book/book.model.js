/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    description: DataTypes.STRING,
    created: DataTypes.DATEONLY,
    currentPage: DataTypes.INTEGER,
    totalPages: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Book.belongsToMany(models.Author, {
          through: models.BookHasAuthor
        });
      }
    },
    tableName: 'book'
  });

  return Book;
}
