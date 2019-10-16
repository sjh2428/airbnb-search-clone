import jwt from 'jsonwebtoken';
import models from '../../../database';
import tblName from '../../../database/name';

// url: api/login
const controller = {
  async post(req, res) {
    const { id } = req.body;
    try {
      const user = await models[tblName.user].findOne({
        where: {
          user_id: id,
        },
      });
      if (!user) {
        return res.status(401).json(user);
      }
      const token = jwt.sign(user.dataValues, process.env.JWT_KEY);
      res.cookie('jwttoken', token, { maxAge: 5 * 60 * 1000 });
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  },
};

export default controller;
