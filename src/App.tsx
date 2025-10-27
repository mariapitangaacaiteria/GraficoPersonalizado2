import React from "react";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { SalesChart } from "./components/SalesChart";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div className="content">
          <Header />
          <InfoCard title="Status">
            <p className="muted">Esse texto e o card já herdam as cores do tema.</p>
          </InfoCard>
          <SalesChart />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
