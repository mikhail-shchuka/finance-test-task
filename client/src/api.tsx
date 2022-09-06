import io from 'socket.io-client';
import { Tickers } from './types/Ticker';

const socket = io('http://localhost:4000');

type Subscriber = (tickers: Tickers) => void;
type Subscribers = Array<Subscriber>;

const subscribers: Subscribers = [];

export const subscribe = (
  subscriber: Subscriber,
) => {
  subscribers.push(subscriber);
};

socket.on('ticker', (tickers: Tickers) => {
  subscribers.forEach((subscriber) => {
    subscriber(tickers);
  });
});

socket.emit('start');
