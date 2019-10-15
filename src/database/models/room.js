const model = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'tbl_rooms',
    {
      room_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      room_url: {
        type: DataTypes.STRING(65535),
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
        type: DataTypes.STRING(65535),
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
        type: DataTypes.STRING(1000),
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
      freezeTableName: true,
      tableName: 'tbl_rooms',
      timestamps: true,
      paranoid: true,
    },
  );

  Room.associate = models => {
    Room.belongsTo(models.tbl_hosts, {
      foreignKey: 'host_id',
    });
    Room.hasMany(models.tbl_reservations);
  };

  return Room;
};

export default model;
