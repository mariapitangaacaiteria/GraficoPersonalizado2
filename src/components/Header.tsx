import { Themes } from "../theme/ThemeProvider";

export function Header() {
  const { theme, toggle } = Themes();
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
      <button className="button" onClick={toggle}>
        {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
      </button>
    </div>
  );
}
