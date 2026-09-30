const C = 300;

function point(r: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  return { x: +(C + r * Math.cos(a)).toFixed(2), y: +(C + r * Math.sin(a)).toFixed(2) };
}

function Satellite({ x, y, angle, scale = 1 }: { x: number; y: number; angle: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle + 90}) scale(${scale})`}>
      <rect x="-22" y="-5" width="15" height="10" rx="1.5" fill="url(#panel)" />
      <rect x="7" y="-5" width="15" height="10" rx="1.5" fill="url(#panel)" />
      <line x1="-7" y1="0" x2="7" y2="0" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="-6" y="-7" width="12" height="14" rx="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="2.2" fill="#f59e0b" />
    </g>
  );
}

const STARS = [
  [40, 60, 1.6], [120, 30, 1.2], [210, 70, 1.8], [560, 250, 1.4], [575, 420, 1.8], [520, 560, 1.3],
  [30, 300, 1.4], [70, 500, 1.8], [180, 575, 1.2], [360, 30, 1.3], [440, 580, 1.6], [15, 180, 1.1],
] as const;

export function HeroVisual() {
  const inner = [0, 60, 120, 180, 240, 300].map((deg) => ({ deg, ...point(200, deg) }));
  const outer = [30, 120, 210, 300].map((deg) => ({ deg, ...point(258, deg) }));
  const beamFrom = inner[1];
  const beamTo = point(128, 60);

  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Orbital compute constellation">
      <defs>
        <radialGradient id="earth" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#93c5fd" />
          <stop offset="0.45" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id="atmo" cx="50%" cy="50%" r="50%">
          <stop offset="0.78" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="0.9" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff7d6" />
          <stop offset="0.35" stopColor="#fcd34d" />
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="laser" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <clipPath id="earth-clip">
          <circle cx={C} cy={C} r="120" />
        </clipPath>
      </defs>

      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#6366f1" className="twinkle" style={{ animationDelay: `${i * 0.35}s` }} />
      ))}

      {/* Sun */}
      <circle cx="515" cy="85" r="80" fill="url(#sun)" className="sun-glow" />
      <circle cx="515" cy="85" r="24" fill="#fde68a" />

      {/* Earth */}
      <circle cx={C} cy={C} r="150" fill="url(#atmo)" />
      <circle cx={C} cy={C} r="120" fill="url(#earth)" />
      <g clipPath="url(#earth-clip)" fill="none" stroke="#bfdbfe" strokeOpacity="0.35" strokeWidth="1">
        {[-80, -40, 0, 40, 80].map((dy) => (
          <ellipse key={dy} cx={C} cy={C + dy} rx="125" ry="18" />
        ))}
        {[40, 80, 120].map((rx) => (
          <ellipse key={rx} cx={C} cy={C} rx={rx} ry="125" />
        ))}
        <path
          d="M215 250c25-20 55-18 70-4s10 34-12 44-30 30-20 50-40 20-50-8-8-60 12-82Zm120 50c20-8 45 0 55 18s-4 40-24 42-38-8-42-28 3-26 11-32Zm-10-110c18-4 40 6 42 20s-18 18-30 12-26-28-12-32Z"
          fill="#a7f3d0"
          fillOpacity="0.35"
          stroke="none"
        />
      </g>
      <circle cx="260" cy="250" r="55" fill="#ffffff" fillOpacity="0.12" />

      {/* Outer orbit */}
      <g className="orbit-b">
        <circle cx={C} cy={C} r="258" fill="none" stroke="#a5b4fc" strokeOpacity="0.55" strokeDasharray="2 8" />
        {outer.map((s) => (
          <Satellite key={s.deg} x={s.x} y={s.y} angle={s.deg} scale={0.8} />
        ))}
      </g>

      {/* Inner orbit with laser mesh */}
      <g className="orbit-a">
        <circle cx={C} cy={C} r="200" fill="none" stroke="#93c5fd" strokeOpacity="0.7" />
        <polygon
          points={inner.map((s) => `${s.x},${s.y}`).join(" ")}
          fill="none"
          stroke="url(#laser)"
          strokeWidth="2"
          className="laser"
        />
        <line x1={inner[0].x} y1={inner[0].y} x2={inner[3].x} y2={inner[3].y} stroke="url(#laser)" strokeOpacity="0.35" strokeWidth="1.2" className="laser" />
        <line x1={inner[1].x} y1={inner[1].y} x2={inner[4].x} y2={inner[4].y} stroke="url(#laser)" strokeOpacity="0.35" strokeWidth="1.2" className="laser" />
        <line x1={beamFrom.x} y1={beamFrom.y} x2={beamTo.x} y2={beamTo.y} stroke="#f59e0b" strokeWidth="2.5" className="laser" />
        {inner.map((s) => (
          <g key={s.deg}>
            <circle cx={s.x} cy={s.y} r="16" fill="#38bdf8" fillOpacity="0.15" />
            <Satellite x={s.x} y={s.y} angle={s.deg} />
          </g>
        ))}
      </g>
    </svg>
  );
}
