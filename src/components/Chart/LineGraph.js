import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Text
} from "recharts";

const RenderLineChart = ({ data, deletedCountry }) => {
  let [dataArray, setDataArray] = useState([]);
  let [dataTitle, setDataTitle] = useState([]);
  let [chartTitle, setChartTitle] = useState("");

  // useEffect(() => {
  //   let dataTemp = [];
  //   data.reverse();
  //   //Format data
  //   data.map(row => {
  //     return dataTemp.push({
  //       date: row.date,
  //       [row.country.value]: row.value,
  //       title: row.indicator.value
  //     });
  //   });

  //If not first dataset, then merge multiple datasets
  // let dataTempMultiple = [];
  //Merge objects in array
  // dataTemp.map((row, i) => {
  //   return dataTempMultiple.push({ ...row, ...dataArray[i] });
  // });
  // setDataArray(dataTempMultiple);

  // Create list of countries to chart lines
  //   if (data[0]) {
  //     setChartTitle(data[0].indicator.value);
  //     setDataTitle(d => [
  //       ...d,
  //       {
  //         country: data[0].country.value,
  //         color: getRandomColor(),
  //         title: data[0].indicator.value
  //       }
  //     ]);
  //   } else {
  //     setChartTitle("");
  //     setDataTitle([]);
  //   }
  // }, [data]);

  //Remove data from dataArray
  // useEffect(() => {
  //   const dataArrayCopy = [];

  //   dataArray.map(row => {
  //     dataArrayCopy.push({ ...row });
  //   });
  //   dataArrayCopy.map(row => {
  //     delete row[deletedCountry];
  //   });

  //   const dataTitleCopy = dataTitle.filter(
  //     row => row.country !== deletedCountry
  //   );

  //   if (dataTitleCopy.length === 0) {
  //     setChartTitle("");
  //   }

  //   setDataArray(dataArrayCopy);
  //   setDataTitle(dataTitleCopy);
  // }, [deletedCountry]);

  const formatXAxis = tickItem => {
    return tickItem.slice(0, 10);
  };

  return (
    <ResponsiveContainer width="90%" height="100%">
      <LineChart
        width={900}
        height={600}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 50 }}
      >
        <Line type="monotone" dataKey="Cases" stroke="blue" />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Date" tickFormatter={formatXAxis} />
        <YAxis
          label={
            <Text x={0} y={0} dx={30} dy={300} offset={0} angle={-90}>
              Cases
            </Text>
          }
        ></YAxis>
        <Legend
          verticalAlign="top"
          height={36}
          payload={[{ value: data[0].Country, color: "blue" }]}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default RenderLineChart;
