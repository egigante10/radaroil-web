import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#020617 0%, #071226 100%)",
        minHeight: "100vh",
        color: "#E2E8F0",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "center",
        }}
      >
        {/* LOGO */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "92px",
              fontWeight: "900",
              margin: 0,
              letterSpacing: "6px",
              color: "#F8FAFC",
              textShadow: "0 0 35px rgba(37,99,235,0.25)",
            }}
          >
            RADAR OIL
          </h1>

          <div
            style={{
              width: "140px",
              height: "5px",
              background: "#2563EB",
              margin: "22px auto",
              borderRadius: "999px",
              boxShadow: "0 0 20px rgba(37,99,235,0.5)",
            }}
          />
        </div>

        {/* CLAIM */}
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "300",
            marginBottom: "28px",
            color: "#CBD5E1",
          }}
        >
          Inteligencia energética para estaciones de servicio
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#94A3B8",
          }}
        >
          Plataforma profesional de análisis del mercado energético orientada a
          operadores independientes y estaciones de servicio.
        </p>

        {/* CARDS */}
        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "24px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(51,65,85,0.8)",
              borderRadius: "24px",
              padding: "34px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                color: "#64748B",
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              ESTADO
            </div>

            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#F8FAFC",
              }}
            >
              Plataforma en desarrollo
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(51,65,85,0.8)",
              borderRadius: "24px",
              padding: "34px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                color: "#64748B",
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              PRÓXIMAMENTE
            </div>

            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#F8FAFC",
              }}
            >
              Radar Oil Daily
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(51,65,85,0.8)",
              borderRadius: "24px",
              padding: "34px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                color: "#64748B",
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              ENFOQUE
            </div>

            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#F8FAFC",
              }}
            >
              Mercado energético
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "70px",
            color: "#475569",
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          © 2026 RADAR OIL · ENERGY INTELLIGENCE PLATFORM
        </div>
      </div>
    </div>
  );
}