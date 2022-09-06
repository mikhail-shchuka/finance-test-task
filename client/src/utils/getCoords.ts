import { Tickers } from './../types/Ticker';
type Point = {
  x: number,
  y: number,
};

export const getCoords = (tickers: Tickers[], tickerName: string) => {
  const coords = tickers.slice(-100)
    .reduce((prevCoords: Point[], tickersPoint) => {
      const ticker = tickersPoint
        .find(tickerItem => tickerItem.ticker === tickerName);

      if (ticker) {
        const point = {
          x: +new Date(ticker.last_trade_time),
          y: +ticker.price,
        };

        return prevCoords.concat(point);
      }

      return prevCoords;
    }, []);

  return coords;
};
