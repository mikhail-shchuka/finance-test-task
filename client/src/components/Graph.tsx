import {
  XYPlot,
  LineSeries,
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { useCoords } from '../hooks/useCoords';

type Props = {
  tickerName: string,
  sign: number,
};

export const Graph: React.FC<Props> = ({ tickerName, sign }) => {
  const data = useCoords(tickerName);

  return (
    <XYPlot width={300} height={100} yDomain={[100, 300]}>
      <LineSeries
        data={data.length > 1 ? data : [
          { x: 0, y: 200 },
          { x: 1, y: 200 },
        ]}
        stroke={sign >= 0 ? 'green' : 'red'}
      />
    </XYPlot>
  );
};
