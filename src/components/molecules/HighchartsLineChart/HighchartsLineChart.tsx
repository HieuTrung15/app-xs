// components/HighchartsLineChart.tsx
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

interface HighchartsLineChartProps {
  data: { name: string; y: number }[];
  handleMouseOver: (event: any) => void;
}
const HighchartsLineChart: React.FC<HighchartsLineChartProps> = ({ data, handleMouseOver  }) => {
  
  const options = {
    title: { text: 'My Line Chart' },
    chart: {
      type: 'line',
      zoomType: 'x',
      height: 500
    },
    xAxis: {
      type: 'category',
      categories: data.map((item) => item.name),
      scrollbar: {
          enabled: true
      },
      tickLength: 0
    },  
    yAxis: {
      min: 0,
      max: 110,
      title: {
        text: '',
        align: 'high'
      }
    },
    series: [
      {
        data,
      },
    ],
    tooltip: {
      valueDecimals: 0,
      crosshairs: [{
          width: 1,
          color: 'Gray'},
      {
          width: 1,
          color: 'gray'}]
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: handleMouseOver
          }
        }
      },
      line: {
        dataLabels: {
          enabled: false
        }
      }
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options}/>
      <p id="tooltip"></p>
    </div>
    );
};

export default HighchartsLineChart;