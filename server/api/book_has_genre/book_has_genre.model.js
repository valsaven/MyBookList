/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const BookHasGenre = sequelize.define('BookHasGenre', {
      book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    },
    {
      classMethods: {
        associate: function (models) {
          BookHasGenre.belongsTo(models.Book, { foreignKey: 'book_id' });
          BookHasGenre.belongsTo(models.Genre, { foreignKey: 'genre_id' });
        }
      },
      tableName: 'book_has_genre'
    });

  return BookHasGenre;
}
