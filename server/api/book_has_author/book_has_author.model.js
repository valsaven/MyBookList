/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const BookHasAuthor = sequelize.define('BookHasAuthor', {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        BookHasAuthor.belongsTo(models.Book, { foreignKey: 'book_id' });
        BookHasAuthor.belongsTo(models.Author, { foreignKey: 'author_id' });
      }
    },
    tableName: 'book_has_author'
  });

  return BookHasAuthor;
}
