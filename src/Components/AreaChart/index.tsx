import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface AreaChartState {
  series: {
    data: number[];
  }[];
  options: {
    chart: {
      type: "bar";
      height: number;
    };
    plotOptions: {
      bar: {
        borderRadius: number;
        horizontal: boolean;
      };
    };
    title: {
      text: string;
      align: "left";
    };
    dataLabels: {
      enabled: boolean;
    };
    xaxis: {
      categories: string[];
    };
  };
}

function AreaChart() {
  const [state] = useState<AreaChartState>({
    series: [
      {
        data: [
          80000, 83000, 64000, 50200, 154000, 108000, 69000, 110000, 120000,
          138000, 104100, 116600,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },

      title: {
        text: "Total Revenue by Month",
        align: "left",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  });

  return (
    <div id="chart" className=" bg-white rounded p-1">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
        width={550}
      />
    </div>
  );
}

export default AreaChart;
