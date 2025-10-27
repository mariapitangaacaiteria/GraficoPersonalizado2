import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Themes } from "../theme/ThemeProvider";

export function SalesChart() {
  const { theme } = Themes();
  const isDark = theme === "dark";
  const textColor = isDark ? "#fff" : "#000";

  const series = [
    { name: "PRODUCT A", data: [44, 55, 41, 67, 22, 43] }, // 🔴 Vermelho
    { name: "PRODUCT B", data: [13, 23, 20, 8, 13, 27] },  // 🟡 Amarelo
    { name: "PRODUCT C", data: [11, 17, 15, 15, 21, 14] }, // 🔵 Azul
  ];

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true },
        foreColor: textColor,
      },
      theme: { mode: isDark ? "dark" : "light" },

      // 🔹 Cores personalizadas
      colors: ["#007BFF", "#FFD700","#FF0000" ],

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: { fontSize: "13px", fontWeight: 900, color: textColor },
            },
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
        ],
        labels: { style: { colors: textColor } },
      },
      yaxis: { labels: { style: { colors: textColor } } },
      legend: { position: "right", offsetY: 40, labels: { colors: textColor } },
      fill: { opacity: 1 },
      grid: { borderColor: isDark ? "#2a2a2a" : "#e5e5e5" },
      tooltip: { theme: isDark ? "dark" : "light" },
    }),
    [isDark, textColor]
  );

  const chartKey = `sales-${theme}`;

  return (
    <div
      className="card"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Chart key={chartKey} options={options} series={series} type="bar" height={350} width={700} />
    </div>
  );
}
