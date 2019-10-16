import models from '../../../database';
import tblName from '../../../database/name';

const controller = {
  post(req, res) {},
  get(req, res) {},
  async getByRoomId(req, res) {
    const { id } = req.params;
    try {
      const reservation = await models[tblName.reservation].findAll({
        where: {
          room_id: id,
        },
      });
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
