import { deleteTicker } from '../tickersSlice';
import { store } from '../store';
import { deleteResponse } from './constants';

describe('tickerAsyncThunk.test', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(deleteResponse),
    }));
  });

  it('deleteTicker', async () => {
    await store.dispatch(deleteTicker('A'));

    expect(store.getState().tickers).toEqual([deleteResponse.tickers]);
    expect(global.fetch as jest.Mock).toHaveBeenCalledTimes(1);
    expect(global.fetch as jest.Mock).toHaveBeenCalledWith(
      'http://localhost:4000/tickers/A', { method: 'DELETE' },
    );
  });
});
