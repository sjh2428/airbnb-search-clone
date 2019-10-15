const model = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'tbl_users',
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
      freezeTableName: true,
      tableName: 'tbl_users',
      timestamps: true,
      paranoid: true,
    },
  );

  return User;
};

export default model;
