import React, { useEffect, useState } from 'react';
import HighchartsLineChart from '../molecules/HighchartsLineChart/HighchartsLineChart';

interface DayData {
    name: string;
    y: number;
}

const GiaiDB = () => {
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
      const response = await fetch('http://localhost:5000/api/get-gdb');
      const data = await response.json();

      var result = data.data.map((x:any) => ({y: x.gdb, name: x.date, dayName: x.dayName}))
      setData(result)
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <HighchartsLineChart data={data} handleMouseOver={handleSeriesClick}/>
      <h3>Value: {hoverData}</h3>
      <h3>Date: {hoverDate}</h3>
      <h3>Thứ: {hoverDayName}</h3>
    </>
  )
}

export default GiaiDB;

