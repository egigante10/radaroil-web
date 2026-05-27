import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        RADAR OIL
      </h1>

      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "700px",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Radar Oil Daily
        </h2>

        <p style={{ fontSize: "18px", color: "#9CA3AF" }}>
          Plataforma profesional de análisis energético para estaciones de
          servicio.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gap: "15px",
          }}
        >
          <div
            style={{
              background: "#1F2937",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            Gasoil Londres: +12 €/m³
          </div>

          <div
            style={{
              background: "#1F2937",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            Brent: +1.24%
          </div>

          <div
            style={{
              background: "#1F2937",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            Impacto cuba 32m³: +384 €
          </div>
        </div>
      </div>
    </div>
  );
}