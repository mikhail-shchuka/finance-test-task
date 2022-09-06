import classNames from 'classnames';
import { Graph } from '../Graph';

import './InfoList.scss';
import { useTickersData } from '../../hooks/useTickersData';
import { getSignPrice } from '../../utils/getSignPrice';

export const InfoList = () => {
  const { prevTickers, tickers } = useTickersData();

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Exchange</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change percent</th>
            <th>Dividend</th>
            <th>Yield</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map(ticker => {
            const sign = getSignPrice(prevTickers, ticker);

            return (
              <tr key={ticker.ticker}>
                <td>{ticker.ticker}</td>
                <td>
                  {ticker.exchange}
                </td>
                <td className={classNames(
                  'price',
                  { 'price--decrease': sign < 0 },
                )}
                >
                  {ticker.price}
                </td>
                <td>
                  <div>
                    {sign < 0 && '- '}
                    {ticker.change}
                  </div>
                </td>
                <td>{ticker.change_percent}</td>
                <td>{ticker.dividend}</td>
                <td>{ticker.yield}</td>
                <td>
                  <Graph tickerName={ticker.ticker} sign={sign} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
