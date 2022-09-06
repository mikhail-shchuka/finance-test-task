import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { Loader } from '../Loader';
import { deleteTicker } from '../../redux/tickersSlice';

import { Ticker } from '../../types/Ticker';
import { AppDispatch } from '../../redux/store';

type Props = {
  ticker: Ticker;
  sign: number;
};

export const ListItem: React.FC<Props> = ({ ticker, sign }) => {
  const [status, setStatus] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setStatus(prevStatus => !prevStatus);
  }, [ticker]);

  return (
    <li className="tickers__item">
      {isDelete ? <Loader /> : (
        <>
          <CSSTransition in={status} classNames="option" timeout={2000}>
            <div className="icon">
              <svg
                focusable="false"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={sign >= 0 ? '#137333' : '#A40C0C'}
                className={classNames(
                  'icon__img ',
                  { 'icon__img--down': sign < 0 },
                )}
              >
                <path
                  d="M4 12
              l1.41 1.41
              L11 7.83
              V20h2V7.83
              l5.58 5.59
              L20 12
              l-8-8-8 8z"
                />
              </svg>
            </div>
          </CSSTransition>
          <div className="tickers__title">
            <div className="tickers__name">
              {ticker.ticker}
            </div>
            <CSSTransition in={status} classNames="option" timeout={2000}>
              <div className={classNames(
                'tickers__price',
                { 'tickers__price--down': sign < 0 },
              )}
              >
                {ticker.price}
              </div>
            </CSSTransition>
          </div>
          <button
            type="button"
            className="tickers__delete-ticker"
            onClick={() => {
              setIsDelete(true);
              dispatch(deleteTicker(ticker.ticker));
            }}
          >
            {}
          </button>
        </>
      )}
    </li>
  );
};
