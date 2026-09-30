import type { ReactNode } from "react";

const W = 400;
const H = 250;

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

function Hud({ x, y, text, color = "#0ea5e9", width }: { x: number; y: number; text: string; color?: string; width?: number }) {
  const w = width ?? text.length * 6.4 + 22;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="20" rx="10" fill="#ffffff" fillOpacity="0.92" />
      <circle cx="10" cy="10" r="3.5" fill={color} />
      <text x="18" y="14" fontSize="10" fontWeight="700" fill="#0b1640" fontFamily="ui-monospace, monospace">
        {text}
      </text>
    </g>
  );
}

function Corners({ color = "#ffffff" }: { color?: string }) {
  const d = 14;
  const m = 10;
  return (
    <g stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.9">
      <path d={`M${m} ${m + d}V${m}H${m + d}`} />
      <path d={`M${W - m - d} ${m}H${W - m}V${m + d}`} />
      <path d={`M${m} ${H - m - d}V${H - m}H${m + d}`} />
      <path d={`M${W - m - d} ${H - m}H${W - m}V${H - m - d}`} />
    </g>
  );
}

function DetectBox({ x, y, w, h, score, color = "#06b6d4" }: { x: number; y: number; w: number; h: number; score: string; color?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={color} fillOpacity="0.14" stroke={color} strokeWidth="2" />
      <rect x={x} y={y - 13} width={score.length * 6 + 8} height="13" rx="2" fill={color} />
      <text x={x + 4} y={y - 3.5} fontSize="9" fontWeight="700" fill="#ffffff" fontFamily="ui-monospace, monospace">
        {score}
      </text>
    </g>
  );
}

/* 01 — Real-time Earth observation: satellite imagery with in-orbit object detection */
function EarthObservation() {
  return (
    <Frame label="Earth observation imagery with AI detections">
      <defs>
        <linearGradient id="eo-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="0.85" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="#cde8c4" />
      <polygon points="0,0 150,0 120,90 0,110" fill="#b4dca5" />
      <polygon points="150,0 260,0 240,70 120,90" fill="#e8e0b0" />
      <polygon points="0,110 120,90 140,170 0,200" fill="#9fd192" />
      <polygon points="260,0 400,0 400,60 240,70" fill="#a9d89c" />
      <polygon points="0,200 140,170 170,250 0,250" fill="#dcd6a4" />
      {/* River */}
      <path d="M-10 150C60 130 90 190 170 175S300 90 410 105" stroke="#60a5fa" strokeWidth="18" fill="none" />
      <path d="M-10 150C60 130 90 190 170 175S300 90 410 105" stroke="#93c5fd" strokeWidth="6" fill="none" />
      {/* City blocks */}
      <g fill="#e2e8f0" stroke="#cbd5e1">
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => <rect key={`${c}-${r}`} x={228 + c * 40} y={140 + r * 34} width="32" height="26" rx="2" />),
        )}
      </g>
      <g fill="#94a3b8">
        <rect x="236" y="147" width="10" height="12" />
        <rect x="280" y="182" width="14" height="9" />
        <rect x="318" y="148" width="8" height="14" />
        <rect x="352" y="212" width="12" height="10" />
      </g>
      <path d="M180 250 230 120M0 60 400 40" stroke="#ffffff" strokeWidth="5" />
      {/* Boats on river */}
      <rect x="92" y="165" width="12" height="5" rx="2" fill="#1e3a8a" transform="rotate(20 98 167)" />
      <rect x="300" y="104" width="14" height="5" rx="2" fill="#1e3a8a" transform="rotate(-12 307 106)" />
      <DetectBox x={84} y={156} w={28} h={22} score="SHIP 0.97" />
      <DetectBox x={292} y={95} w={30} h={22} score="SHIP 0.94" />
      <DetectBox x={270} y={174} w={34} h={26} score="NEW 0.91" color="#f59e0b" />
      <rect className="scan" x="0" y="-60" width={W} height="60" fill="url(#eo-scan)" />
      <Corners />
      <Hud x={14} y={H - 34} text="ON-ORBIT AI · 2.3s" />
    </Frame>
  );
}

/* 02 — Disaster response: wildfire front and hotspots detected from orbit */
function DisasterResponse() {
  return (
    <Frame label="Wildfire hotspots detected from orbit">
      <defs>
        <pattern id="dr-trees" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3.6" fill="#6fbf73" />
          <circle cx="12" cy="12" r="3.2" fill="#5aae62" />
        </pattern>
        <radialGradient id="dr-heat" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="0.45" stopColor="#f97316" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
        <filter id="dr-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width={W} height={H} fill="#b9e0b1" />
      <rect width={W} height={H} fill="url(#dr-trees)" />
      <path d="M120 250C110 190 150 150 200 150S300 180 330 250Z" fill="#6b4a3a" fillOpacity="0.55" />
      <path d="M120 250C110 190 150 150 200 150S300 180 330 250" stroke="#f97316" strokeWidth="14" fill="none" filter="url(#dr-blur)" />
      <path d="M120 250C110 190 150 150 200 150S300 180 330 250" stroke="#fb923c" strokeWidth="4" fill="none" className="laser" />
      {[
        [150, 185, 26],
        [205, 158, 30],
        [270, 172, 24],
        [310, 215, 20],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="url(#dr-heat)" className="sun-glow" style={{ animationDelay: `${i * 0.6}s` }} />
          <circle cx={x} cy={y} r="4" fill="#fff7ed" />
        </g>
      ))}
      {/* Smoke */}
      <g fill="#ffffff" fillOpacity="0.55">
        <ellipse cx="240" cy="110" rx="46" ry="20" />
        <ellipse cx="290" cy="80" rx="54" ry="22" />
        <ellipse cx="350" cy="50" rx="60" ry="22" />
      </g>
      {/* Evacuation route & shelter */}
      <path d="M60 250C80 205 40 180 48 146" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 6" fill="none" />
      <g transform="translate(33 118)">
        <rect width="30" height="26" rx="6" fill="#ffffff" />
        <path d="M7 16 15 8l8 8M10 14v7h10v-7" stroke="#16a34a" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
      </g>
      <g transform="translate(14 14)">
        <rect width="150" height="46" rx="10" fill="#ffffff" fillOpacity="0.95" />
        <circle cx="16" cy="16" r="5" fill="#ef4444" className="twinkle" />
        <text x="28" y="20" fontSize="11" fontWeight="800" fill="#b91c1c" fontFamily="ui-monospace, monospace">
          FIRE ALERT
        </text>
        <rect x="12" y="29" width="126" height="6" rx="3" fill="#fee2e2" />
        <rect x="12" y="29" width="92" height="6" rx="3" fill="#f97316" />
      </g>
      <Corners />
    </Frame>
  );
}

function Ship({ x, y, angle, color = "#1e3a8a" }: { x: number; y: number; angle: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path d="M-40 0H-12" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="3" strokeDasharray="3 5" />
      <path d="M-12 -5H8L14 0 8 5H-12Z" fill="#ffffff" />
      <rect x="-8" y="-3" width="12" height="6" rx="1" fill={color} />
    </g>
  );
}

/* 03 — Maritime & aviation: vessel and flight tracking over the ocean */
function Maritime() {
  return (
    <Frame label="Global vessel and flight tracking">
      <defs>
        <linearGradient id="mt-sea" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="0.6" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="url(#mt-sea)" />
      <g stroke="#ffffff" strokeOpacity="0.25" fill="none">
        {[40, 90, 140, 190, 230].map((y) => (
          <path key={y} d={`M0 ${y}q25 -8 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0`} />
        ))}
      </g>
      <path d="M0 0H90C70 40 105 70 80 110S40 160 60 250H0Z" fill="#fde68a" />
      <path d="M0 0H74C56 40 88 70 64 110S26 160 44 250H0Z" fill="#a7e3a0" />
      <g fill="#ffffff">
        <rect x="70" y="100" width="18" height="4" />
        <rect x="70" y="108" width="14" height="4" />
      </g>
      <Ship x={150} y={80} angle={-8} />
      <Ship x={200} y={150} angle={12} />
      <Ship x={300} y={115} angle={-20} />
      <Ship x={330} y={205} angle={4} color="#b45309" />
      <DetectBox x={316} y={194} w={34} h={22} score="NO AIS" color="#f59e0b" />
      <DetectBox x={186} y={140} w={32} h={20} score="AIS OK" />
      {/* Flight */}
      <path d="M110 235C180 120 280 60 400 30" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 6" fill="none" />
      <g transform="translate(262 72) rotate(-28)">
        <path d="M-14 0H14M0 0l-7 -12M0 0l-7 12M10 0l-4 -5M10 0l-4 5" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M-14 0H16" stroke="#0b1640" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <Corners />
      <Hud x={W - 132} y={14} text="TRACKS · 12,480" color="#22c55e" />
    </Frame>
  );
}

/* 04 — Climate & agriculture: NDVI crop-health map with growth trend */
function ClimateAgri() {
  const colors = ["#16a34a", "#4ade80", "#a3e635", "#facc15", "#22c55e", "#86efac", "#f59e0b", "#65a30d"];
  return (
    <Frame label="Crop health NDVI map">
      <defs>
        <linearGradient id="ag-legend" x1="0" x2="1">
          <stop offset="0" stopColor="#ef4444" />
          <stop offset="0.5" stopColor="#facc15" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="#f5f0dc" />
      <g transform="rotate(-12 200 125) translate(-40 -30)">
        {Array.from({ length: 6 }).map((_, c) =>
          Array.from({ length: 4 }).map((__, r) => (
            <rect
              key={`${c}-${r}`}
              x={c * 82}
              y={r * 80}
              width="76"
              height="74"
              rx="3"
              fill={colors[(c * 3 + r * 5) % colors.length]}
              fillOpacity="0.9"
            />
          )),
        )}
        {Array.from({ length: 6 }).map((_, c) => (
          <path key={c} d={`M${c * 82 + 10} 0V320M${c * 82 + 30} 0V320M${c * 82 + 50} 0V320`} stroke="#ffffff" strokeOpacity="0.18" />
        ))}
      </g>
      {/* Centre-pivot field */}
      <circle cx="96" cy="176" r="40" fill="#15803d" stroke="#f5f0dc" strokeWidth="4" />
      <path d="M96 176 136 176" stroke="#bbf7d0" strokeWidth="2" className="orbit-pivot" />
      {/* Trend card */}
      <g transform="translate(236 14)">
        <rect width="150" height="80" rx="12" fill="#ffffff" fillOpacity="0.95" />
        <text x="12" y="20" fontSize="10" fontWeight="800" fill="#0b1640" fontFamily="ui-monospace, monospace">
          NDVI ▲ 12%
        </text>
        <polyline points="12,66 36,58 60,60 84,46 108,40 136,28" fill="none" stroke="#16a34a" strokeWidth="2.6" strokeLinejoin="round" />
        <polyline points="12,66 36,58 60,60 84,46 108,40 136,28 136,70 12,70" fill="#16a34a" fillOpacity="0.12" />
        <circle cx="136" cy="28" r="3.5" fill="#16a34a" />
      </g>
      <g transform="translate(14 216)">
        <rect width="130" height="22" rx="11" fill="#ffffff" fillOpacity="0.95" />
        <rect x="10" y="8" width="80" height="6" rx="3" fill="url(#ag-legend)" />
        <text x="96" y="15" fontSize="9" fontWeight="700" fill="#0b1640" fontFamily="ui-monospace, monospace">
          NDVI
        </text>
      </g>
      <Corners />
    </Frame>
  );
}

/* 05 — Global AI inference: orbital nodes serving cities on the ground */
function GlobalInference() {
  const cities = [
    [150, 150],
    [205, 125],
    [245, 170],
    [180, 195],
  ];
  const sats = [
    [70, 70],
    [200, 34],
    [330, 70],
  ];
  return (
    <Frame label="Orbital AI inference serving users worldwide">
      <defs>
        <linearGradient id="gi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef2ff" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
        <radialGradient id="gi-earth" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#2563eb" />
        </radialGradient>
        <clipPath id="gi-clip">
          <circle cx="200" cy="200" r="120" />
        </clipPath>
      </defs>
      <rect width={W} height={H} fill="url(#gi-bg)" />
      <circle cx="200" cy="200" r="132" fill="#38bdf8" fillOpacity="0.15" />
      <circle cx="200" cy="200" r="120" fill="url(#gi-earth)" />
      <g clipPath="url(#gi-clip)">
        <path d="M110 140c30-20 70-10 80 10s-10 40 20 50 10 50-30 40-80-40-70-100Z" fill="#a7f3d0" fillOpacity="0.5" />
        <path d="M230 110c30 0 60 20 60 40s-30 20-40 40-40 0-40-30 0-50 20-50Z" fill="#a7f3d0" fillOpacity="0.5" />
        {[-60, -20, 20].map((dy) => (
          <ellipse key={dy} cx="200" cy={200 + dy} rx="125" ry="18" fill="none" stroke="#bfdbfe" strokeOpacity="0.4" />
        ))}
      </g>
      <ellipse cx="200" cy="120" rx="190" ry="70" fill="none" stroke="#a5b4fc" strokeDasharray="3 6" />
      {sats.map(([sx, sy], i) =>
        cities.slice(i, i + 2).map(([cx, cy]) => (
          <line key={`${i}-${cx}`} x1={sx} y1={sy} x2={cx} y2={cy} stroke="#7c3aed" strokeWidth="1.6" strokeOpacity="0.7" className="laser" />
        )),
      )}
      {cities.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="#fbbf24" fillOpacity="0.35" className="sun-glow" style={{ animationDelay: `${i * 0.5}s` }} />
          <circle cx={x} cy={y} r="3.5" fill="#fbbf24" />
        </g>
      ))}
      {sats.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect x="-18" y="-4" width="12" height="8" rx="1" fill="#6366f1" />
          <rect x="6" y="-4" width="12" height="8" rx="1" fill="#0ea5e9" />
          <rect x="-6" y="-6" width="12" height="12" rx="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
        </g>
      ))}
      {/* Chip card */}
      <g transform="translate(300 118)">
        <rect width="86" height="86" rx="14" fill="#ffffff" />
        <g stroke="#94a3b8" strokeWidth="2">
          {[28, 38, 48, 58].map((p) => (
            <g key={p}>
              <path d={`M${p} 12v8M${p} 66v8M12 ${p}h8M66 ${p}h8`} />
            </g>
          ))}
        </g>
        <rect x="22" y="22" width="42" height="42" rx="8" fill="#4f46e5" />
        <text x="43" y="48" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">
          AI
        </text>
      </g>
      <Hud x={14} y={14} text="100% SOLAR" color="#f59e0b" />
    </Frame>
  );
}

/* 06 — Deep-space missions: lunar lander and orbiter relaying to Earth */
function DeepSpace() {
  const stars = [
    [30, 30], [80, 60], [140, 20], [190, 70], [250, 30], [60, 120], [120, 100], [230, 110], [360, 150], [20, 170],
  ];
  return (
    <Frame label="Lunar mission with orbital compute relay">
      <defs>
        <linearGradient id="ds-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#312e81" />
          <stop offset="0.6" stopColor="#4c1d95" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
        <radialGradient id="ds-moon" cx="40%" cy="20%" r="80%">
          <stop offset="0" stopColor="#f8fafc" />
          <stop offset="1" stopColor="#94a3b8" />
        </radialGradient>
        <radialGradient id="ds-earth" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#bae6fd" />
          <stop offset="1" stopColor="#2563eb" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill="url(#ds-bg)" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.2} fill="#ffffff" className="twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
      {/* Earth */}
      <circle cx="340" cy="56" r="34" fill="#60a5fa" fillOpacity="0.25" />
      <circle cx="340" cy="56" r="24" fill="url(#ds-earth)" />
      <path d="M328 46c8-4 14 0 14 6s-8 6-6 12-10 4-10-4 0-12 2-14Z" fill="#a7f3d0" fillOpacity="0.7" />
      {/* Moon surface */}
      <ellipse cx="170" cy="330" rx="300" ry="140" fill="url(#ds-moon)" />
      <g fill="#94a3b8" fillOpacity="0.55">
        <ellipse cx="60" cy="226" rx="22" ry="6" />
        <ellipse cx="250" cy="238" rx="30" ry="7" />
        <ellipse cx="330" cy="222" rx="14" ry="4" />
        <ellipse cx="150" cy="244" rx="12" ry="3" />
      </g>
      {/* Lander */}
      <g transform="translate(150 200)">
        <path d="M-16 20-10 6M16 20 10 6M-20 20h8M12 20h8" stroke="#e2e8f0" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="-12" y="-6" width="24" height="14" rx="3" fill="#fbbf24" />
        <rect x="-7" y="-16" width="14" height="11" rx="3" fill="#ffffff" />
        <path d="M0 -16v-10" stroke="#ffffff" strokeWidth="2" />
        <circle cx="0" cy="-27" r="3" fill="#22d3ee" />
      </g>
      {/* Orbiter */}
      <g transform="translate(210 90) rotate(-15)">
        <rect x="-26" y="-6" width="18" height="12" rx="1.5" fill="#6366f1" />
        <rect x="8" y="-6" width="18" height="12" rx="1.5" fill="#0ea5e9" />
        <rect x="-8" y="-9" width="16" height="18" rx="4" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      </g>
      <line x1="150" y1="174" x2="206" y2="100" stroke="#22d3ee" strokeWidth="2" className="laser" />
      <line x1="220" y1="84" x2="320" y2="62" stroke="#fbbf24" strokeWidth="2" className="laser" />
      <Hud x={14} y={14} text="AUTONOMOUS OPS" color="#22d3ee" />
    </Frame>
  );
}

export const appScenes = [EarthObservation, DisasterResponse, Maritime, ClimateAgri, GlobalInference, DeepSpace];
