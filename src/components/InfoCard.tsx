import React from "react";

export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>Resumo</div>
      <div style={{ marginTop: 12 }}>{children}</div>
    </div>
  );
}
