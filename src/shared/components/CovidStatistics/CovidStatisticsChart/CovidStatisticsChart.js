import React from "react";
import { Line } from "react-chartjs-2";

import "./CovidStatisticsChart.css";

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
  legend: {
    labels: {
      fontSize: 16,
      fontColor: "#fff",
      fontFamily: '"Barlow", sans-serif',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

export const CovidStatisticsChart = ({ properties, data }) => {
  const lineData = {
    labels: data.map(({ date }) => {
      const monthAndDay = date.split(",")[0];
      return `${monthAndDay.slice(0, 3)} ${monthAndDay.split(" ")[1]}`;
    }),
    datasets: [
      {
        label: "# of Confirmed",
        data: data.map(({ confirmed }) => confirmed),
        fill: false,
        backgroundColor: "rgb(0, 63, 92)",
        borderColor: "rgba(0, 63, 92, .7)",
      },
      {
        label: "# of Deaths",
        data: data.map(({ deaths }) => deaths),
        fill: false,
        backgroundColor: "rgb(122, 81, 149)",
        borderColor: "rgba(122, 81, 149, .7)",
      },
      {
        label: "# of Recovered",
        data: data.map(({ recovered }) => recovered),
        fill: false,
        backgroundColor: "rgb(239, 86, 117)",
        borderColor: "rgba(239, 86, 117, .7)",
      },
      {
        label: "# of Active",
        data: data.map(({ active }) => active),
        fill: false,
        backgroundColor: "rgb(255, 166, 0)",
        borderColor: "rgba(255, 166, 0, .7)",
      },
    ].filter(({ label }) => properties.includes(label)),
  };

  return (
    <div className="covid-statistics-char__container">
      <Line data={lineData} options={options} />
    </div>
  );
};
