import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function BarChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Function to create gradient
    const createGradient = (ctx, chartArea, colorStart, colorEnd) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      return gradient;
    };

    const config = {
      type: 'bar',
      data: {
        labels: ["June", "July", "August", "September", "October", "November"],
        datasets: [{
          label: "Revenue",
          data: [400000, 700000, 600000, 500000, 400000, 300000, 250000],
          backgroundColor: (context) => {
            const { chart } = context;
            const { ctx, chartArea } = chart;

            // Ensure chartArea is defined
            if (!chartArea) {
              return null;
            }

            // Return gradient for each bar based on index
            const gradients = [
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)'),
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)'),
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)'),
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)'),
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)'),
              createGradient(ctx, chartArea, 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 0.3)')
            ];
            return gradients[context.dataIndex % gradients.length];
          },
          borderRadius: {
            topLeft: 20,
            topRight: 20,
            bottomLeft: 0,
            bottomRight: 0
          }, // Apply border radius to specific corners
          borderSkipped: false // Ensure radius is applied to all corners
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: '100%', height: '400px', backgroundColor: '#F5F5FA' }} />
    </div>
  );
}
