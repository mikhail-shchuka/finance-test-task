import { getCoords } from './../utils/getCoords';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useCoords = (tickerName: string) => {
  const data = useSelector((state: RootState) => {
    return getCoords(state.tickers, tickerName);
  });

  return data;
};
