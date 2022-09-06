import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useTickersData = () => {
  const hasTickers = useSelector((state: RootState) => state.hasTickers);
  const [prevTickers,
    tickers = prevTickers] = useSelector((state: RootState) => (
    state.tickers.slice(-2)));

  return {
    hasTickers,
    prevTickers,
    tickers,
  };
};
