/* eslint-disable new-cap */
import classroom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  arr.push(new classroom(19));
  arr.push(new classroom(20));
  arr.push(new classroom(34));
  return arr;
}
