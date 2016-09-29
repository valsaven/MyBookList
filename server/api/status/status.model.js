/**
 * Created by val on 9/26/16.
 */

export default function (sequelize, DataTypes) {
  const Status = sequelize.define('Status', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    tableName: 'status'
  });

  return Status;
}
