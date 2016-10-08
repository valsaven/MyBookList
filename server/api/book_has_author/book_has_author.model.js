/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const BookHasAuthor = sequelize.define('BookHasAuthor', {
    book_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    author_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function (models) {
        BookHasAuthor.belongsTo(models.Book);
        BookHasAuthor.belongsTo(models.Author);
      }
    },
    tableName: 'book_has_author'
  });

  return BookHasAuthor;
}
