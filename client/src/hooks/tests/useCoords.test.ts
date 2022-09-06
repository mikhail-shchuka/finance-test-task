import { getCoords } from '../../utils/getCoords';
import { mockTicker1 } from './constants';
import { useCoords } from '../useCoords';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => getCoords([[mockTicker1]], '1')),
}));

describe('useCoords', () => {
  it('should return the correct coordinates', () => {
    const [{ x, y }] = useCoords('1');
    const date = 'Fri Sep 02 2022 13:50:42 GMT+0300';

    expect(x).toEqual(+new Date(date));
    expect(y).toEqual(100);
  });
});
