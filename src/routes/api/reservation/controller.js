import models from '../../../database';
import tblName from '../../../database/name';
import errorHandler from '../../../middlewares/error';
import ERROR_CODE from '../../../libraries/error-code';

const controller = {
  async post(req, res) {
    try {
      const { user_id, room_id, guests, price, start_date, end_date } = req.body;
      const result = await models[tblName.reservation].create(
        {
          user_id,
          room_id,
          guests,
          price,
          start_date,
          end_date,
        },
        { returning: true },
      );
      res.json(result);
    } catch (e) {
      errorHandler(ERROR_CODE.INTERNAL_SERVER_ERROR, e, req, res);
    }
  },
  async get(req, res) {
    try {
      const reservations = await models[tblName.reservation].findAll();
      res.json(reservations);
    } catch (e) {
      errorHandler(ERROR_CODE.INTERNAL_SERVER_ERROR, e, req, res);
    }
  },
  async getByRoomId(req, res) {
    const { id } = req.params;
    try {
      const reservation = await models[tblName.reservation].findByRoomId({ id });
      res.json(reservation);
    } catch (e) {
      errorHandler(ERROR_CODE.INTERNAL_SERVER_ERROR, e, req, res);
    }
  },
};

export default controller;
