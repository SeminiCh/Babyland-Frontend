/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function PieChart() {
  const chartOptions: ApexOptions = {
    chart: {
      type: "pie",
      toolbar: { show: false },
      width: 380,
    },
    colors: ["#DDFF55", "#FF9000", "#2FCA67", "#F96464", "#DDFF55"],
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "square",
    },
    states: {
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#BEBDB3",
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    yaxis: {
      seriesName: "Number of Nannies",
    },
    title: {
      text: "Nannies by Agent",
      align: "left",
    },
    labels: [
      "Farlin Nannies Pvt LTD",
      "Wilson and Jason Care Givers",
      "Reeta Caregivers",
      "Sakura Caregivers",
    ],
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
        type="pie"
        width={500}
        height={400}
      />
    </div>
  );
}

export default PieChart;
