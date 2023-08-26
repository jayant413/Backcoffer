import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const timefrmae = [
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
];

const BarChart = ({ charData }) => {
  const timeData = {
    labels: timefrmae.map((time) => time),
    datasets: [
      {
        label: "Intensity Trend",
        data: [1, 4, 2, 8, 4, 6, 3, 1, 10, 12, 5],
        fill: false,
        borderColor: "blue",
      },
    ],
  };
  return (
    <div>
      <h1> Intensity Trend Over the Years</h1>
      <div className="h-[40vh]">
        <Line data={timeData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default BarChart;
