"use client"
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StandingRequestsChart = ({ typeArray, chartData }) => {
  const backgroundColors = ["#6f5ce7", "orange", "#4b9b8a"];

  const datasets = typeArray.map((type, index) => ({
    label: type,
    data: chartData[index],
    backgroundColor: backgroundColors[index],
  }));

  const data = {
    labels: ["1 month", "3 months"],
    datasets: datasets,
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
   <div className="barchart">
  <Bar data={data} options={options} />
  </div> )
};

export default StandingRequestsChart;
