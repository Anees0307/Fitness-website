// ProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ProgressChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Progress',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#ff5722', // Gym-themed color
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#333'
        }
      },
      y: {
        grid: {
          color: '#333'
        }
      }
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', borderRadius: '8px' }}>
      <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Training Progress</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
