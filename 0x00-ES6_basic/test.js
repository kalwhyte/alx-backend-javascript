/* eslint-disable import/extensions */
import getNeighborhoodsList from './2-arrow';

test('returns the list of neighborhoods', () => {
  const neighborhoodsList = new getNeighborhoodsList();
  expect(neighborhoodsList.addNeighborhood('Tenderloin')).toStrictEqual([
    'SOMA',
    'Union Square',
    'Tenderloin',
  ]);
});
