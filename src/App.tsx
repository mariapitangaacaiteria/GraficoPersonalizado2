import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { SalesChart } from "./components/SalesChart";
import { DonutChart } from "./components/DonutChart";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div className="content">
          <Header />

          <InfoCard title="Status">
            <p className="muted">
              Esse texto e o card já herdam as cores do tema.
            </p>
          </InfoCard>

          {/* 🔹 Gráficos lado a lado */}
          <div className="charts-row">
            <div className="chart-item">
              <SalesChart />
            </div>
            <div className="chart-item">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
