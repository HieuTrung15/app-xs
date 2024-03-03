import TopMenu from '../components/TopMenu/TopMenu';
import Chart from '@/components/HighStockChart/HighStockChart';

const Home = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Biểu đồ mẫu',
    },
    series: [
      {
        name: 'Dữ liệu mẫu',
        type: 'bar',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
  return (
    <div>
      <TopMenu />
      <Chart options={options} />
    </div>
  );
};

export default Home;
