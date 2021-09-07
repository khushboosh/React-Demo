import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointvalue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValues  = Math.max(...dataPointvalue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
