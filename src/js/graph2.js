import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Total Revenue',
      backgroundColor: 'rgb(255, 205, 86)',
      borderColor: 'rgb(255, 205, 86)',
      data: [400000, 700000, 600000, 500000, 400000, 300000, 250000],
      fill: false, // Remove fill for better curve visibility
      tension: 0.4, // Adjust tension for curve smoothness (0-1)
    },
    {
      label: 'Total Transaction',
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
      data: [70000, 100000, 500000, 300000, 200000, 200000, 220000],
      fill: false, // Remove fill for better curve visibility
      tension: 0.4, // Adjust tension for curve smoothness (0-1)
    },
  ],
};

const options = {
  // Add any custom chart options here
};

const DualLineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default DualLineChart;