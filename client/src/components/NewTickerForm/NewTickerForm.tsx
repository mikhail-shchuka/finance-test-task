import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Loader } from '../Loader';
import { addTicker } from '../../redux/tickersSlice';
import { AppDispatch, RootState } from '../../redux/store';

type Props = {
  onCancel: React.Dispatch<React.SetStateAction<boolean>>,
};

export const NewTickerForm: React.FC<Props> = ({ onCancel }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [tickerName, setTickerName] = useState('');
  const [tickerError, setTickerError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const tickerNames = useSelector((state: RootState) => state.tickerNames);

  if (isLoad) {
    return (
      <div className="new-ticker">
        <Loader />
      </div>
    );
  }

  return (
    <div className="new-ticker">
      <form className="new-ticker__form">
        <label className="new-ticker__label">
          <div className="new-ticker__title">
            Ticker
          </div>
          <input
            type="text"
            value={tickerName}
            onChange={event => {
              setTickerError(false);
              setTickerName(event.target.value);
            }}
            className={classNames(
              'new-ticker__field',
              { 'new-ticker__field--error': tickerError },
            )}
          />
        </label>
      </form>
      <div>
        <button
          type="button"
          className="new-ticker__button"
          onClick={() => {
            switch (true) {
              case !tickerName:
                setTickerError(true);
                break;
              case tickerNames.includes(tickerName):
                setTickerError(true);
                break;
              case !tickerError:
                setIsLoad(true);
                dispatch(addTicker(tickerName)).then(() => onCancel(false));
                break;
              default:
                break;
            }
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="new-ticker__button new-ticker__button--cancel"
          onClick={() => {
            onCancel(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
