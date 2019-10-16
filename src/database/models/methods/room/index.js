import tblName from '../../../name';
import models from '../../../index';

const room = {};

room.create = async newRoomObj => {
  const res = await models[tblName.room].bulkCreate([
    {
      room_url: newRoomObj.roomUrl,
      room_name: newRoomObj.roomName,
      room_summary: newRoomObj.roomSummary,
      room_picture_url: newRoomObj.roomPictureUrl,
      city: newRoomObj.city,
      state: newRoomObj.state,
      country: newRoomObj.country,
      property_type: newRoomObj.propertyType,
      room_type: newRoomObj.roomType,
      accommodates: newRoomObj.accommodates,
      bathrooms: newRoomObj.bathrooms,
      bedrooms: newRoomObj.bedrooms,
      beds: newRoomObj.beds,
      bed_type: newRoomObj.bedType,
      amenities: newRoomObj.amenities,
      price: newRoomObj.price,
      weekly_price: newRoomObj.weeklyPrice,
      monthly_price: newRoomObj.monthlyPrice,
      price_per_extra_people: newRoomObj.pricePerExtraPeople,
      reviewers: newRoomObj.reviewers,
      reviews_score: newRoomObj.reviewsScore,
      host_id: newRoomObj.hostId,
    },
  ]);
  return res;
};

export default room;
