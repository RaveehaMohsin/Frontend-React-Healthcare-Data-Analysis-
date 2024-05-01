import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

export default function ChartComponent({ backgroundColor, borderColor }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy previous chart instance
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Doctor Activity',
              data: [
                { x: '8AM', y: 35 },
                { x: '9AM', y: 12 },
                { x: '10AM', y: 18 },
                { x: '11AM', y: 22 },
                { x: '12PM', y: 27 },
                { x: '1PM', y: 30 },
                { x: '2PM', y: 25 },
                { x: '3PM', y: 20 },
                { x: '4PM', y: 15 },
                { x: '5PM', y: 10 },
              ],
              backgroundColor: backgroundColor || 'rgb(137, 190, 197, 1)', // Default to blue color if not provided
              borderColor: borderColor || 'rgb(137, 190, 197, 1)', // Default to blue color if not provided
              pointRadius: 5, // Set point size
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Hour',
              },
              grid: {
                display: true,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Activity Level',
              },
              grid: {
                display: true,
              },
              suggestedMin: 0, // Set minimum value for y-axis
              suggestedMax: 40, // Set maximum value for y-axis
            },
          },
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
          responsive: true,
          maintainAspectRatio: false, // Allow smaller chart size
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup on component unmount
      }
    };
  }, [backgroundColor, borderColor]); // Include props in dependency array

  return <canvas ref={chartRef} width={400} height={200}></canvas>; // Adjust canvas size as needed
}
