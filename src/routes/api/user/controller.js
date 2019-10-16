import models from '../../../database';
import tblName from '../../../database/name';

// url: /api/user
const controller = {
  async post(req, res) {
    const { id, name, password } = req.body;
    try {
      const result = await models[tblName.user].bulkCreate(
        [
          {
            user_id: id,
            user_name: name,
            user_password: password,
          },
        ],
        { returning: true },
      );
      res.status(201).json(result);
    } catch (e) {
      res.status(500).end();
    }
  },
  async getWithId(req, res) {
    const { id } = req.params;
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
