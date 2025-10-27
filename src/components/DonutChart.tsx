import { useMemo, useState } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Themes } from "../theme/ThemeProvider";

export function DonutChart() {
  const { theme } = Themes();
  const isDark = theme === "dark";
  const textColor = isDark ? "#fff" : "#000";

  const [series, setSeries] = useState<number[]>([44, 55, 13]);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "donut",
        height: 380,
        foreColor: textColor,
        animations: { enabled: !reducedMotion },
      },
      theme: { mode: isDark ? "dark" : "light" },

      // 🔢 Numeração nas fatias
      dataLabels: {
        enabled: true,
        formatter: (_val: number, opts: any) => {
          // mostra apenas o índice (1, 2, 3...)
          return String(opts.seriesIndex + 2);
        },
        style: {
          fontSize: "13px",
          fontWeight: 700,
          colors: [isDark ? "#fff" : "#000"],
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.25,
        },
      },

      // 🏷️ Rótulos das séries (mantém “Item 1…”) e numeração na legenda
      labels: series.map((_, i) => `Item ${i + 1}`),
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
        labels: { colors: textColor },
        formatter: (seriesName: string, opts: any) => {
          const idx = opts.seriesIndex;
          const value = opts.w.config.series[idx];
          return `${idx + 1}. ${seriesName} (${value})`;
        },
      },

      // 🎨 Paleta (opcional)
      colors: ["#FF6B6B", "#FFD166", "#4D96FF", "#22C55E", "#A78BFA", "#F59E0B"],

      responsive: [
        {
          breakpoint: 992,
          options: {
            legend: { position: "bottom", height: undefined },
            chart: { height: 320 },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: { height: 280 },
          },
        },
      ],
      tooltip: { theme: isDark ? "dark" : "light" },
    }),
    [isDark, textColor, reducedMotion, series]
  );

  const appendData = () =>
    setSeries((prev) => [...prev, Math.floor(Math.random() * 100) + 1]);

  const removeData = () =>
    setSeries((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));

  const randomize = () =>
    setSeries((prev) => prev.map(() => Math.floor(Math.random() * 100) + 1));

  const reset = () => setSeries([44, 55, 13, 33]);

  return (
    <section className="card" aria-label="Gráfico do tipo donut com ações">
      <div className="chart-wrap" style={{ width: "150%", overflowX: "auto" }}>
        <Chart options={options} series={series} type="donut" width="100%" />
      </div>

      <div
        className="actions"
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <button className="button" onClick={appendData} aria-label="Adicionar setor">
          + ADD
        </button>
        <button className="button" onClick={removeData} aria-label="Remover setor">
          - REMOVE
        </button>
        <button className="button" onClick={randomize} aria-label="Valores aleatórios">
          RANDOMIZE
        </button>
        <button className="button" onClick={reset} aria-label="Resetar valores">
          RESET
        </button>
      </div>
      
    </section>
  );
}
