import { ListItem } from '../ListItem';
import { NewTicker } from '../NewTicker';
import './TickerList.scss';
import { useTickersData } from '../../hooks/useTickersData';
import { getSignPrice } from '../../utils/getSignPrice';

export const TickerList = () => {
  const { hasTickers, prevTickers, tickers } = useTickersData();

  if (!hasTickers) {
    return <NewTicker />;
  }

  return (
    <ul className="tickers">
      {tickers.map(ticker => {
        const sign = getSignPrice(prevTickers, ticker);

        return <ListItem key={ticker.ticker} ticker={ticker} sign={sign} />;
      })}
      <NewTicker />
    </ul>
  );
};
