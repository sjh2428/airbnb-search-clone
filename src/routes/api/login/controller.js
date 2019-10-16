import jwt from 'jsonwebtoken';
import models from '../../../database';
import tblName from '../../../database/name';

const controller = {
  async post(req, res) {
    const { id } = req.body;
    const token = jwt.sign({ id: 'test2' }, process.env.JWT_KEY);
    const decodeVal = jwt.verify(token, process.env.JWT_KEY);
    console.log(token, decodeVal);
    try {
      const user = await models[tblName.user].findOne({
        where: {
          user_id: id,
        },
      });
      if (!user) {
        return res.status(401).json(user);
      }
      res.cookie('jwt', token);
      res.json(user);
    } catch (e) {
      res.status(500).end();
    }
  },
};

export default controller;
