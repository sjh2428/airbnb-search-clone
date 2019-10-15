const model = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    'tbl_reservations',
    {
      reservation_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      room_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: 'tbl_reservations',
      timestamps: true,
      paranoid: true,
    },
  );

  Reservation.associate = models => {
    Reservation.belongsTo(models.tbl_users, {
      foreignKey: 'user_id',
    });
    Reservation.belongsTo(models.tbl_rooms, {
      foreignKey: 'room_id',
    });
  };

  return Reservation;
};

export default model;
