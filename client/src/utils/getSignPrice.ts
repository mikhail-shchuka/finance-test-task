import { Ticker, Tickers } from '../types/Ticker';

export const getSignPrice = (prevTickers: Tickers, ticker: Ticker) => {
  const prevTicker = prevTickers.find(prevTickerItem => (
    prevTickerItem.ticker === ticker.ticker));
  let sign = 0;

  if (prevTicker) {
    sign = +ticker.price - +prevTicker.price;
  }

  return sign;
};
