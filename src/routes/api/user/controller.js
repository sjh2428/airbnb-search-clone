import models from '../../../database';
import tblName from '../../../database/name';

// url: /api/user
const controller = {
  post(req, res, next) {},
  async get(req, res) {
    const { id } = req.query;
    try {
      const user = await models[tblName.user].findOne({
        where: {
          user_id: id,
        },
      });
      res.json(user);
    } catch (e) {
      res.status(500).end();
    }
  },
};

export default controller;
