/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const BookHasAuthor = sequelize.define('BookHasAuthor', {
    book_id: {
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Book',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    author_id: {
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Author',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate(models) {
        BookHasAuthor.belongsTo(models.Book, { foreignKey: 'id' });
        BookHasAuthor.belongsTo(models.Author, { foreignKey: 'id' });
      },
    },
    tableName: 'book_has_author',
  });

  return BookHasAuthor;
}
