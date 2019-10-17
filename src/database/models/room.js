import tblName from '../name';

const model = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    tblName.room,
    {
      room_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      room_url: {
        type: DataTypes.STRING(2083),
        allowNull: false,
      },
      room_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      room_summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      room_picture_url: {
        type: DataTypes.STRING(2083),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      property_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      room_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      accommodates: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      beds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bed_type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      amenities: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weekly_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      monthly_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price_per_extra_people: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reviewers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reviews_score: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
      },
      host_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: tblName.room,
      timestamps: true,
      paranoid: true,
    },
  );

  Room.findAndCountAllCustom = (where, limit = 20, offset = 0) => Room.findAndCountAll({ where, limit, offset });

  return Room;
};

export default model;
