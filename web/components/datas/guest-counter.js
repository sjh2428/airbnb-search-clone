const guestCounters = state => [
  { who: 'adult', type: '성인', cnt: state.adultGuests },
  { who: 'child', type: '어린이', cnt: state.childGuests },
  { who: 'infant', type: '유아', cnt: state.infantGuests },
];

export default guestCounters;
