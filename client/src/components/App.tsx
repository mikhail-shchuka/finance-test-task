import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';

import './App.scss';
import { InfoList } from './InfoList';
import { startGettingTickers } from '../redux/tickersSlice';
import { AppDispatch, RootState } from '../redux/store';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [tickersLoaded, hasTickers] = useSelector((state: RootState) => (
    [state.tickersLoaded, state.hasTickers]));

  useEffect(() => {
    dispatch(startGettingTickers());
  }, []);

  return (
    <div className="container">
      <Header />
      {tickersLoaded && hasTickers && <InfoList />}
    </div>
  );
};
