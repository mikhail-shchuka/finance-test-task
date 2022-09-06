import { Ticker } from '../../types/Ticker';

export const mockTicker: Ticker = {
  ticker: 'A',
  change: '0',
  change_percent: '0',
  dividend: '0',
  exchange: '0',
  last_trade_time: 'Fri Sep 02 2022 13:50:42 GMT+0300',
  price: '0',
  yield: '0',
};

export const deleteResponse = {
  tickers: [
    {
      ticker: 'AAPL',
      exchange: 'NASDAQ',
      price: '187.20',
      change: '176.47',
      change_percent: '0.76',
      dividend: '0.82',
      yield: '1.48',
      last_trade_time: '2022-09-06T08:19:04.000Z',
    },
    {
      ticker: 'GOOGL',
      exchange: 'NASDAQ',
      price: '295.41',
      change: '54.55',
      change_percent: '0.63',
      dividend: '0.53',
      yield: '1.64',
      last_trade_time: '2022-09-06T08:19:04.000Z',
    },
    {
      ticker: 'MSFT',
      exchange: 'NASDAQ',
      price: '211.84',
      change: '185.73',
      change_percent: '0.20',
      dividend: '0.07',
      yield: '1.55',
      last_trade_time: '2022-09-06T08:19:04.000Z',
    },
    {
      ticker: 'AMZN',
      exchange: 'NASDAQ',
      price: '256.66',
      change: '89.20',
      change_percent: '0.62',
      dividend: '0.93',
      yield: '1.65',
      last_trade_time: '2022-09-06T08:19:04.000Z',
    },
    {
      ticker: 'TSLA',
      exchange: 'NASDAQ',
      price: '109.32',
      change: '138.85',
      change_percent: '0.99',
      dividend: '0.13',
      yield: '1.16',
      last_trade_time: '2022-09-06T08:19:04.000Z',
    },
  ],
};
