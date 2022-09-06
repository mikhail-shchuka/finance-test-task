import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Header } from '../Header';

const mockFetchIntervalTestId = 'FetchInterval-test-id';
const mockTickerListTestId = 'TickerList-test-id';
const mockLoaderTestId = 'Loader-test-id';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../../FetchInterval', () => {
  return {
    FetchInterval: () => (<div data-testid={mockFetchIntervalTestId} />),
  };
});

jest.mock('../../TickerList', () => {
  return {
    TickerList: () => (<div data-testid={mockTickerListTestId} />),
  };
});

jest.mock('../../Loader', () => {
  return {
    Loader: () => (<div data-testid={mockLoaderTestId} />),
  };
});

describe('Header', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockClear();
  });

  it('should match with snapshot', () => {
    (useSelector as jest.Mock).mockImplementation(() => true);
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should be rendered FetchInterval and TickerList if useSelector return true', () => {
    (useSelector as jest.Mock).mockImplementation(() => true);
    render(<Header />);

    expect(screen.getByTestId(mockFetchIntervalTestId)).toBeInTheDocument();
    expect(screen.getByTestId(mockTickerListTestId)).toBeInTheDocument();
  });

  it('should be rendered FetchInterval and Loader if useSelector return false', () => {
    (useSelector as jest.Mock).mockImplementation(() => false);
    render(<Header />);

    expect(screen.getByTestId(mockFetchIntervalTestId)).toBeInTheDocument();
    expect(screen.getByTestId(mockLoaderTestId)).toBeInTheDocument();
  });
});
