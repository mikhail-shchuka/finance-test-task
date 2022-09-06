/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Tickers } from '../types/Ticker';
import { subscribe } from '../api';

export interface State {
  tickers: Array<Tickers>,
  tickerNames: Array<string>,
  tickersLoaded: boolean,
  hasTickers: boolean,
  interval: number,
}

const initialState: State = {
  tickers: [],
  tickersLoaded: false,
  hasTickers: true,
  interval: 5,
  tickerNames: [],
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    tickersReceived: (state, action: PayloadAction<Tickers>) => {
      state.tickers.push(action.payload);
      state.tickersLoaded = true;
    },
    intervalUpdated: (state, action: PayloadAction<number>) => {
      state.interval = action.payload;
    },
    viewTickers: (state, action: PayloadAction<boolean>) => {
      state.hasTickers = action.payload;
    },
    tickersChanged: (state, action: PayloadAction<string>) => {
      if (state.tickerNames.includes(action.payload)) {
        state.tickerNames = state.tickerNames.filter(
          name => name !== action.payload,
        );
      } else {
        state.tickerNames.push(action.payload);
      }
    },
  },
});

export const {
  tickersReceived, intervalUpdated, viewTickers, tickersChanged,
} = tickersSlice.actions;

export default tickersSlice.reducer;

export const startGettingTickers = createAsyncThunk(
  'tickers/startGettingTickers',
  (_, { dispatch }) => {
    subscribe(
      (tickers: Tickers) => {
        dispatch(tickersReceived(tickers));
      },
    );
  },
);

export const deleteTicker = createAsyncThunk(
  'tickers/deleteTicker',
  (tickerName: string, { dispatch }) => {
    fetch(`http://localhost:4000/tickers/${tickerName}`, {
      method: 'DELETE',
    }).then(response => {
      return response.json();
    }).then(result => {
      if (result.tickers.length > 0) {
        dispatch(tickersReceived(result.tickers));
      } else {
        dispatch(viewTickers(false));
      }

      dispatch(tickersChanged(tickerName));
    });
  },
);

export const addTicker = createAsyncThunk(
  'tickers/deleteTicker',
  (tickerName: string, { dispatch }) => {
    fetch(' http://localhost:4000/tickers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ ticker: tickerName }),
    }).then(response => {
      return response.json();
    }).then(result => {
      dispatch(tickersReceived(result.tickers));
      dispatch(tickersChanged(tickerName));
      dispatch(viewTickers(true));
    });
  },
);
