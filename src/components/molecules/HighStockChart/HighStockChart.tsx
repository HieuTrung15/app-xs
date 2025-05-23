"use client"
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";

const HighStockChart = () => {
  const [hoverData, setHoverData] = useState(null);
  const [mess, setMess] = useState<any>([]);
  useEffect(() => {
      if (typeof window !== 'undefined') {
        fetch("http://localhost:5000/api/get-gdb").then(
          res => res.json()
        ).then(data => {
          setMess(data.data)
        }).catch(error => {
          console.error('Error fetching data:', error);
        });
      }
  }, []);
  let get_date = mess.map((date:any) => date.date);
  console.log(mess)
  let numb = mess.map((numb: any) => numb.gdb);
  let numb_format = numb.map(Number).filter((number: any) => !isNaN(number))
  
  const [chartOptions, setChartOptions] = useState({
    yAxis: {
      title: {
      }
    },
    xAxis: {
      categories: mess.map((date:any) => date.date),
    },
    series: [
      {
        data: numb_format 
      }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e: any){
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  const updateSeries = () => {
    setChartOptions({
        ...chartOptions, 
        series: [{data: numb_format}]
    });
  }

  return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          constructorType={"stockChart"}
        />
        <h3>Hovering over {hoverData}</h3>
        <button onClick={updateSeries}>Update Series</button>
      </div>
    )
}

export default HighStockChart;