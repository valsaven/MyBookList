/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const BookHasGenre = sequelize.define('BookHasGenre', {
      book_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      genre_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      }
    },
    {
      classMethods: {
        associate: function (models) {
          BookHasGenre.belongsTo(models.Book);
          BookHasGenre.belongsTo(models.Genre);
        }
      },
      tableName: 'book_has_genre'
    });

  return BookHasGenre;
}
