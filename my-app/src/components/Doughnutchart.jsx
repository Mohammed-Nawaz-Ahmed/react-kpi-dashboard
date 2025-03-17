// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { ArcElement, Chart as ChartJS, Title, Tooltip } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
 
// ChartJS.register(ArcElement, Tooltip, Title, ChartDataLabels);
 
// export const Doughnutchart = ({ planned, actual }) => {
//   const progressPercentage = planned
//     ? ((actual / planned) * 100).toFixed(2)
//     : 0;
 
//   const data = {
//     labels: ["Completed", "Remaining"],
//     datasets: [
//       {
//         data: [actual, planned - actual],
//         backgroundColor: ["#555555", "#d3d3d3"],
//         hoverBackgroundColor: ["#444444", "#c0c0c0"],
//         borderWidth: 0,
//       },
//     ],
//   };
 
//   const options = {
//     title: {
//       text: `${progressPercentage}%\n(${actual} of ${planned})`,
//       left: "center",
//     },
 
//     responsive: true,
//     // mainAspectRatio: false,
//     aspectRatio: 1,
//     cutout: "75%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       },
//       datalabels: {
//         color: "#000000",
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         display: false,
//         formater: () => `${progressPercentage}%\n(${actual} of ${planned})`,
//         anchor: "center",
//         align: "center",
//       },
//     },
//   };
//   return (
//     <>
//       <div style={{ width: "250px", height: "250px", position: "relative" }}>
//         <Doughnut data={data} options={options} />
//       </div>
//     </>
//   );
// };
 
// export default Doughnutchart;
 
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Tooltip, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
 
ChartJS.register(ArcElement, Tooltip, Title, ChartDataLabels);
 
export const DoughnutChart = ({ planned, actual }) => {
  const progressPercentage = ((actual / planned) * 100).toFixed(2);
 
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [actual, planned - actual],
        backgroundColor: ["#555555", "#d3d3d3"],
        hoverBackgroundColor: ["#444444", "#c0c0c0"],
        borderWidth: 0,
      },
    ],
  };
 
  const options = {
    responsive: true,
    aspectRatio: 1,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false, // Disable default datalabels
      },
    },
  };
 
  return (
    <div style={{ width: "250px", height: "250px", position: "relative" }}>
      <Doughnut data={data} options={options} />
      {/* Custom centered text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "Bold",
        }}
      >
        {`${progressPercentage}%`}
        <br />
        {`(${actual} of ${planned})`}
      </div>
    </div>
  );
};
 
export default DoughnutChart;