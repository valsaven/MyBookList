/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    year: DataTypes.INTEGER,
    currentPage: DataTypes.INTEGER,
    totalPages: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Book.belongsToMany(models.Author, {
          through: models.BookHasAuthor,
          foreignKey: 'book_id',
          constraints: true
        });
      }
    },
    tableName: 'book'
  });

  return Book;
}
