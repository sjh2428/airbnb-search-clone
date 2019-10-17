// (hosts: 966 rows, rooms: 2250 rows)
import _ from '../fx/_';
import models from './index';

const csv = require('csvtojson');

const getMoney = _.map(price => (price !== '' ? Number(price.slice(1)) : 0));
const toNumber = _.map(str => Number(str));

const init = csvFilePath => {
  console.log('injecting init data');
  csv()
    .fromFile(csvFilePath)
    .then(async jsonObj => {
      for (const obj of jsonObj) {
        let {
          id: roomId,
          listing_url: roomUrl,
          name: roomName,
          summary: roomSummary,
          picture_url: roomPictureUrl,
          city,
          state,
          country,
          property_type: propertyType,
          room_type: roomType,
          accommodates,
          bathrooms,
          bedrooms,
          beds,
          bed_type: bedType,
          amenities,
          price,
          weekly_price: weeklyPrice,
          monthly_price: monthlyPrice,
          extra_people: pricePerExtraPeople,
          number_of_reviews: reviewers,
          review_scores_rating: reviewsScore,
          host_is_superhost: superhost,
          host_id: hostId,
          host_name: hostName,
          host_url: hostUrl,
          host_location: hostLocation,
          host_thumbnail_url: hostThumbnailUrl,
          host_picture_url: hostPictureUrl,
        } = obj;

        const needToChg = [roomId, accommodates, bathrooms, bedrooms, beds, reviewers, reviewsScore, hostId];
        [roomId, accommodates, bathrooms, bedrooms, beds, reviewers, reviewsScore, hostId] = toNumber(needToChg);

        superhost = superhost === 't';

        const prices = [price, weeklyPrice, monthlyPrice, pricePerExtraPeople];
        [price, weeklyPrice, monthlyPrice, pricePerExtraPeople] = getMoney(prices);

        try {
          await models.tbl_rooms.create({
            room_url: roomUrl,
            room_name: roomName,
            room_summary: roomSummary,
            room_picture_url: roomPictureUrl,
            city,
            state,
            country,
            property_type: propertyType,
            room_type: roomType,
            accommodates,
            bathrooms,
            bedrooms,
            beds,
            bed_type: bedType,
            amenities,
            price,
            weekly_price: weeklyPrice,
            monthly_price: monthlyPrice,
            price_per_extra_people: pricePerExtraPeople,
            reviewers,
            reviews_score: reviewsScore,
            host_id: hostId,
          });
          await models.tbl_hosts.findOrCreate({
            where: {
              host_name: hostName,
            },
            defaults: {
              host_name: hostName,
              host_location: hostLocation,
              host_url: hostUrl,
              host_thumbnail_url: hostThumbnailUrl,
              host_picture_url: hostPictureUrl,
              super_host: superhost,
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
      console.log('injecting done.');
    });
};

export default init;
