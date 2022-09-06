import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockTicker, mockPrevTicker } from './constants';
import { TickerList } from '../TickerList';

const mockNewTickerTestId = 'newTicker-test-id';
const mockListItemTestId = 'listItem-test-id';

jest.mock('../../../hooks/useTickersData', () => ({
  useTickersData: () => (
    { tickers: [mockTicker], prevTickers: [mockPrevTicker], hasTickers: true }),
}));

jest.mock('../../ListItem', () => {
  return {
    ListItem: () => (<div data-testid={mockListItemTestId} />),
  };
});

jest.mock('../../NewTicker', () => {
  return {
    NewTicker: () => (<div data-testid={mockNewTickerTestId} />),
  };
});

describe('TickerList', () => {
  it('should match with snapshot', () => {
    const { baseElement } = render(<TickerList />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should be rendered necessary components if tickers not null', () => {
    render(<TickerList />);
    expect(screen.getByTestId(mockNewTickerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(mockListItemTestId)).toBeInTheDocument();
  });
});
