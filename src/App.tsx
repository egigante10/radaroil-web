import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              margin: "0",
              fontWeight: "800",
              letterSpacing: "4px",
            }}
          >
            RADAR OIL
          </h1>

          <div
            style={{
              width: "120px",
              height: "4px",
              background: "#2563EB",
              margin: "20px auto",
              borderRadius: "20px",
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "34px",
            fontWeight: "300",
            marginBottom: "25px",
            color: "#CBD5E1",
          }}
        >
          Inteligencia energética para estaciones de servicio
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#94A3B8",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          Plataforma profesional de análisis del mercado energético orientada
          al sector de estaciones de servicio y operadores independientes.
        </p>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#0F172A",
              padding: "24px 32px",
              borderRadius: "18px",
              border: "1px solid #1E293B",
              minWidth: "220px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#64748B",
                marginBottom: "8px",
              }}
            >
              ESTADO
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Plataforma en desarrollo
            </div>
          </div>

          <div
            style={{
              background: "#0F172A",
              padding: "24px 32px",
              borderRadius: "18px",
              border: "1px solid #1E293B",
              minWidth: "220px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#64748B",
                marginBottom: "8px",
              }}
            >
              PRÓXIMAMENTE
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Radar Oil Daily
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}