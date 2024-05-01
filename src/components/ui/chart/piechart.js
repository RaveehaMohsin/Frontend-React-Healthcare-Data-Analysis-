import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

export default function ContributionPieChart({ doctorContribution, backgroundColor, borderColor }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy previous chart instance
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: ['Doctor Contribution', 'Hospital Contribution'], // Labels for the pie chart
          datasets: [
            {
              label: 'Contribution',
              data: [13, 100 - 13],
              //THIS IS THE CORRECT LINE FOR BACKEND
             // data: [doctorContribution, 100 - doctorContribution],  Data representing doctor's contribution and hospital's share
              backgroundColor: [backgroundColor || 'rgb(137, 190, 197, 1)', 'rgba(0, 0, 0, 0.1)'], // Colors for the pie segments
              borderColor: borderColor || 'white', // Border color for the segments
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow smaller chart size
          legend: {
            display: true, // Show legend
            position: 'bottom', // Position of the legend
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup on component unmount
      }
    };
  }, [doctorContribution, backgroundColor, borderColor]);

  return <canvas ref={chartRef} width={400} height={200}></canvas>; // Adjust canvas size as needed
}
