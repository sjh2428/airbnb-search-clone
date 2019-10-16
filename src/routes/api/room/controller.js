import models from '../../../database';
import tblName from '../../../database/name';

const controller = {
  async post(req, res, next) {
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

    await models[tblName.room].bulkCreate(
      [
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
      ],
      { returning: true },
    );

    res.status(201).end();
  },
  get(req, res, next) {},
};

export default controller;
