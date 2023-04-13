/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function BarChart() {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      width: 300,
    },
    colors: ["#DDFF55", "#FF9000", "#2FCA67", "#F96464", "#DDFF55"],
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "square",
    },

    dataLabels: {
      enabled: false,
    },

    fill: {
      opacity: 1,
      colors: ["#F96464"],
    },
    yaxis: {
      seriesName: "Income",
    },
    xaxis: {
      categories: ["Reeta", "Farlin", "Wilson and Jason", "Sakura"],
    },
    title: {
      text: "Income",
      align: "left",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    series: [44, 55, 13, 43],
  };

  return (
    <div id="chart" className=" bg-white rounded p-1">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        width={500}
        height={300}
      />
    </div>
  );
}

export default BarChart;
