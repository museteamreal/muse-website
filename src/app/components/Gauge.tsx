

type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

export default function Gauge({ value, color = '#fb8500', showLabels, min, max }: GaugeProps) {
  const activeCount = Math.round((value / 100) * 40);
  const totalTicks = 40;
  
  const ticks = Array.from({ length: totalTicks }).map((_, i) => {
    // arc from π to 2π
    // i=0 -> angle π, i=39 -> angle 2π
    const angle = Math.PI + (i / (totalTicks - 1)) * Math.PI;
    const r1 = 70; // 80 - 10
    const r2 = 80;
    const cx = 100;
    const cy = 100;
    
    const x1 = cx + r1 * Math.cos(angle);
    const y1 = cy + r1 * Math.sin(angle);
    const x2 = cx + r2 * Math.cos(angle);
    const y2 = cy + r2 * Math.sin(angle);
    
    const isActive = i < activeCount;
    
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        strokeWidth="2.5"
        strokeLinecap="round"
        stroke={isActive ? color : '#d4d4d8'}
      />
    );
  });

  return (
    <div className="w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full overflow-visible">
        {ticks}
        <text x="100" y="105" textAnchor="middle" fontSize="22" fontWeight="600" fill="#171717">
          {value}%
        </text>
      </svg>
      {showLabels && min && max && (
        <div className="flex justify-between items-center text-[11px] text-neutral-500 mt-2 px-6">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
