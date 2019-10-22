import variables from '../guest-variables';

const { ADULT_WHO, ADULT_TYPE, CHILD_WHO, CHILD_TYPE, INFANT_WHO, INFANT_TYPE } = variables;

const guestCounters = state => [
  { who: ADULT_WHO, type: ADULT_TYPE, cnt: state.adultGuests },
  { who: CHILD_WHO, type: CHILD_TYPE, cnt: state.childGuests },
  { who: INFANT_WHO, type: INFANT_TYPE, cnt: state.infantGuests },
];

export default guestCounters;
