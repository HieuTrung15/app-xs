import React, { useEffect, useState } from 'react';
import HighchartsLineChart from '../../molecules/HighchartsLineChart/HighchartsLineChart';
import TopMenu from '@/components/molecules/TopMenu/TopMenu';
interface DayData {
    name: string;
    y: number;
}

const SpecialPrize = () => {
  const [hoverData, setHoverData] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [hoverDayName, setHoverDayName] = useState(null);

  const [data, setData] = useState<DayData[]>([]);

  const handleSeriesClick = (event: any) => {
    setHoverData(event.target.y);
    setHoverDate(event.target.name);
    setHoverDayName(event.target.dayName);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/gdb');
      const data = await response.json();
      console.log("data", data);
      var result = data.data.map((x:any) => ({y: x.gdb, name: x.date, dayName: x.dayName}))
      setData(result)
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <TopMenu/>
      <div id="container">
        <HighchartsLineChart data={data} handleMouseOver={handleSeriesClick}/>
      </div>
      <h3>Day of week: {hoverDayName} /Date: {hoverDate}/ Value: {hoverData} </h3>
    </>
  )
}

export default SpecialPrize;

