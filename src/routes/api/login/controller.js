import jwt from 'jsonwebtoken';
import models from '../../../database';
import tblName from '../../../database/name';
import errorHandler from '../../../middlewares/error';
import ERROR_CODE from '../../../libraries/error-code';

// url: api/login
const controller = {
  async post(req, res) {
    const { id, password } = req.body;
    try {
      const user = await models[tblName.user].findOne({
        where: {
          user_id: id,
          user_password: password,
        },
      });
      if (!user) {
        return res.status(401).json(user);
      }
      const token = jwt.sign(user.dataValues, process.env.JWT_KEY);
      res.cookie('jwttoken', token, { maxAge: 5 * 60 * 1000 });
      res.json(user);
    } catch (e) {
      errorHandler(ERROR_CODE.INTERNAL_SERVER_ERROR, e, req, res);
    }
  },
};

export default controller;
