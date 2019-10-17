import models from '../../../database';
import tblName from '../../../database/name';
import errorHandler from '../../../middlewares/error';
import ERROR_CODE from '../../../libraries/error-code';

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
      errorHandler(ERROR_CODE.INTERNAL_SERVER_ERROR, e, req, res);
    }
  },
};

export default controller;
