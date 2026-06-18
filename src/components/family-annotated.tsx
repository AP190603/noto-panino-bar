import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// EDIT THESE to move the arrowheads onto each person's face.
// fx = left/right (0 = far left, 300 = far right)
// fy = up/down   (0 = top,      300 = bottom)
// ─────────────────────────────────────────────────────────────────────────────
const FACES = {
  vincenzo: { fx: 136, fy:  78 },
  kathy:    { fx:  92, fy: 133 },
  dionne:   { fx: 204, fy: 123 },
  leon:     { fx: 164, fy: 192 },
};
// ─────────────────────────────────────────────────────────────────────────────

function ArrowHead({ x, y, deg }: { x: number; y: number; deg: number }) {
  const rad = (deg * Math.PI) / 180;
  const len = 7;
  const sp = 0.42;
  return (
    <path
      d={`M ${x + len * Math.cos(rad + sp)} ${y + len * Math.sin(rad + sp)} L ${x} ${y} L ${x + len * Math.cos(rad - sp)} ${y + len * Math.sin(rad - sp)}`}
      stroke="#F0C46A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  );
}

function Label({ x, y, name, anchor, rotate }: {
  x: number; y: number; name: string;
  anchor: "start" | "middle" | "end"; rotate: number;
}) {
  return (
    <g>
      <text x={x} y={y} textAnchor={anchor} fill="#F0C46A" fontSize="13" fontWeight="600"
        stroke="#1a1008" strokeWidth="3" paintOrder="stroke"
        transform={`rotate(${rotate}, ${x}, ${y})`}>
        {name}
      </text>
    </g>
  );
}

export function FamilyAnnotated({ className = "" }: { className?: string }) {
  const { vincenzo, kathy, dionne, leon } = FACES;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">

        <img
          src="/images/about-family.jpg"
          alt="The De Cesaris family"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full"
          style={{ fontFamily: "'Caveat', cursive" }}>

          {/* Babbo Vincenzo — label top-centre */}
          <Label x={150} y={30} name="Babbo Vincenzo" anchor="middle" rotate={-2} />
          <motion.path d={`M 150 36 C 149 55, 143 70, ${vincenzo.fx} ${vincenzo.fy}`}
            stroke="#F0C46A" strokeWidth="2" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }} />
          <ArrowHead x={vincenzo.fx} y={vincenzo.fy} deg={-49} />

          {/* Kathy — label bottom-left */}
          <Label x={44} y={272} name="Kathy" anchor="middle" rotate={2} />
          <motion.path d={`M 44 260 C 52 228, 66 174, ${kathy.fx} ${kathy.fy}`}
            stroke="#F0C46A" strokeWidth="2" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }} />
          <ArrowHead x={kathy.fx} y={kathy.fy} deg={122} />

          {/* Dionne — label bottom-right */}
          <Label x={292} y={248} name="Dionne" anchor="end" rotate={-2} />
          <motion.path d={`M 258 242 C 250 210, 234 168, ${dionne.fx} ${dionne.fy}`}
            stroke="#F0C46A" strokeWidth="2" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.3 }} />
          <ArrowHead x={dionne.fx} y={dionne.fy} deg={56} />

          {/* Leon — label right-centre */}
          <Label x={286} y={182} name="Leon" anchor="end" rotate={-1} />
          <motion.path d={`M 262 180 C 238 182, 198 182, ${leon.fx} ${leon.fy}`}
            stroke="#F0C46A" strokeWidth="2" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.4 }} />
          <ArrowHead x={leon.fx} y={leon.fy} deg={-16} />

        </svg>
      </div>
    </div>
  );
}
