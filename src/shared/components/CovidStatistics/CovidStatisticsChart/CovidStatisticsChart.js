import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: true,
          color: "#2b2b2b",
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: true,
          color: "#2b2b2b",
        },
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: false,
};

export const CovidStatisticsChart = ({ data }) => {
  const lineData = {
    labels: data.map(({ date }) => {
      const monthAndDay = date.split(",")[0];
      return `${monthAndDay.slice(0, 3)} ${monthAndDay.split(" ")[1]}`;
    }),
    datasets: [
      {
        label: "# of Active",
        data: data.map(({ active }) => active),
        fill: false,
        backgroundColor: "#7b86fd",
        borderColor: "#4353ff",
      },
    ],
  };

  return <Line height={600} data={lineData} options={options} />;
};
