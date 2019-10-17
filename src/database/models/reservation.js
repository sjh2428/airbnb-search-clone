import tblName from '../name';

const model = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    tblName.reservation,
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
      guests: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      price: {
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
      tableName: tblName.reservation,
      timestamps: true,
      paranoid: true,
    },
  );

  Reservation.findByRoomId = ({ id }) =>
    Reservation.findAll({
      where: {
        room_id: id,
      },
    });

  return Reservation;
};

export default model;
