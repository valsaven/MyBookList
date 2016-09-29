/**
 * Created by val on 9/29/16.
 */

export default function (sequelize, DataTypes) {
  const Genre = sequelize.define('Genre', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    }, {
      tableName: 'genre'
    }
  );

  return Genre;
}
