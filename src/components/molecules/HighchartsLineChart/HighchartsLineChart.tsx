// components/HighchartsLineChart.tsx
import React from 'react';
import Highcharts from 'highcharts';
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
      // scrollablePlotArea: {
      //   minWidth: 700,
      //   scrollPositionX: 1
      // }
    },
    xAxis: {
      categories: data.map((item) => item.name),
      crosshair: true,
      scrollbar: {
        enabled: true,
        scrollbars: {
          xAixis: 0
        }
      },
      showInNavigator: true,
    },
    series: [
      {
        data,
      },
    ],
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