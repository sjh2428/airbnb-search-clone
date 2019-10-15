const model = (sequelize, DataTypes) => {
  const Host = sequelize.define(
    'tbl_hosts',
    {
      host_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      host_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      host_location: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      host_url: {
        type: DataTypes.STRING(65535),
        allowNull: false,
      },
      host_thumbnail_url: {
        type: DataTypes.STRING(65535),
        allowNull: false,
      },
      host_picture_url: {
        type: DataTypes.STRING(65535),
        allowNull: false,
      },
      super_host: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'tbl_hosts',
      timestamps: true,
      paranoid: true,
    },
  );

  Host.associate = models => {
    Host.hasMany(models.tbl_rooms);
  };

  return Host;
};

export default model;
