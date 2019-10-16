import tblName from '../name';

const model = (sequelize, DataTypes) => {
  const User = sequelize.define(
    tblName.user,
    {
      user_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: tblName.user,
      timestamps: true,
      paranoid: true,
    },
  );

  return User;
};

export default model;
