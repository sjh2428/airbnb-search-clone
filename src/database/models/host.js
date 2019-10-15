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
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      host_location: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      host_url: {
        type: DataTypes.STRING(2083),
        allowNull: false,
      },
      host_thumbnail_url: {
        type: DataTypes.STRING(2083),
        allowNull: false,
      },
      host_picture_url: {
        type: DataTypes.STRING(2083),
        allowNull: false,
      },
      super_host: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: 'tbl_hosts',
      timestamps: true,
      paranoid: true,
    },
  );

  return Host;
};

export default model;
