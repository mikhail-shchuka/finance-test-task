import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TickerList } from '../TickerList';
import { FetchInterval } from '../FetchInterval';
import { Loader } from '../Loader';

import './Header.scss';

export const Header = () => {
  const tickersLoaded = useSelector((state: RootState) => state.tickersLoaded);

  return (
    <div className="header">
      <FetchInterval />
      {tickersLoaded ? <TickerList /> : <Loader />}
    </div>
  );
};
