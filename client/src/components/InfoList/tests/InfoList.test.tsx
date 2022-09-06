import { render, screen } from '@testing-library/react';
import { InfoList } from '../InfoList';
import { mockPrevTicker, mockTicker } from './constants';

const mockGraphTestId = 'Graph-test-id';

jest.mock('../../../hooks/useTickersData', () => ({
  useTickersData: () => (
    { tickers: [mockTicker], prevTickers: [mockPrevTicker] }),
}));

jest.mock('../../Graph', () => {
  return {
    Graph: () => (<div data-testid={mockGraphTestId} />),
  };
});

describe('InfoList', () => {
  it('should match with snapshot', () => {
    const { baseElement } = render(<InfoList />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should be rendered ticker info', () => {
    render(<InfoList />);

    expect(screen.getByTestId(mockGraphTestId)).toBeInTheDocument();
    expect(screen.getByText(mockTicker.ticker)).toBeInTheDocument();
  });
});
