import models from '../../../database';
import tblName from '../../../database/name';

// url: /api/room
const controller = {
  async post(req, res) {
    const {
      room_id,
      room_url,
      room_name,
      room_summary,
      room_picture_url,
      city,
      state,
      country,
      property_type,
      room_type,
      accommodates,
      bathrooms,
      bedrooms,
      beds,
      bed_type,
      amenities,
      price,
      weekly_price,
      monthly_price,
      price_per_extra_people,
      reviewers,
      reviews_score,
      host_id,
    } = req.body;

    try {
      const result = await models[tblName.room].create(
        {
          room_id,
          room_url,
          room_name,
          room_summary,
          room_picture_url,
          city,
          state,
          country,
          property_type,
          room_type,
          accommodates,
          bathrooms,
          bedrooms,
          beds,
          bed_type,
          amenities,
          price,
          weekly_price,
          monthly_price,
          price_per_extra_people,
          reviewers,
          reviews_score,
          host_id,
        },
        { returning: true },
      );
      res.status(201).json(result);
    } catch (e) {
      res.status(500).end();
    }
  },
  async get(req, res) {
    try {
      let { where, limit, offset } = req.query;
      where = where ? JSON.parse(where) : {};
      if (!limit) limit = 20;
      if (!offset) offset = 0;
      const result = await models[tblName.room].findAndCountAll({ where, limit, offset });
      res.json(result);
    } catch (e) {
      res.status(500).end();
    }
  },
};

export default controller;
