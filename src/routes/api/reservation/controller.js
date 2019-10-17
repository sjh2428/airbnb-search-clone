import models from '../../../database';
import tblName from '../../../database/name';

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
      console.log(e);
      res.status(500).end();
    }
  },
  get(req, res) {},
  async getByRoomId(req, res) {
    const { id } = req.params;
    try {
      const reservation = await models[tblName.reservation].findByRoomId({ id });
      if (!reservation) {
        return res.status(401).json(reservation);
      }
      res.json(reservation);
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  },
};

export default controller;
