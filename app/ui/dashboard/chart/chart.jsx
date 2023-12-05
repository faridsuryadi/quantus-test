'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./chart.module.css"

const data = [
  { variable: 'Variable 1', value1: 100 },
  { variable: 'Variable 2', value2: 150 },
  { variable: 'Variable 3', value3: 200 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="90%" height="50%" >
      <BarChart
        width={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ backgroundColor: 'white', borderRadius:"10px" }}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="turquoise" name="Variable 1" />
        <Bar dataKey="value2" fill="orange" name="Variable 2" />
        <Bar dataKey="value3" fill="red" name="Variable 3" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
