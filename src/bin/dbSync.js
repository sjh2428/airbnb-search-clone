import db from '../database';

const dbSync = ({ force } = { force: false }) => db.sequelize.sync({ force });

export default dbSync;
