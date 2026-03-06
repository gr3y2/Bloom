"use client";

const boxes = [
  { size: 80, top: "10%", left: "5%", opacity: 0.06, delay: "0s", duration: "7s", rotate: "15deg" },
  { size: 50, top: "20%", right: "8%", opacity: 0.08, delay: "1s", duration: "9s", rotate: "-10deg" },
  { size: 120, top: "45%", left: "2%", opacity: 0.04, delay: "2s", duration: "11s", rotate: "25deg" },
  { size: 60, top: "65%", right: "5%", opacity: 0.07, delay: "0.5s", duration: "8s", rotate: "-20deg" },
  { size: 90, top: "80%", left: "15%", opacity: 0.05, delay: "3s", duration: "10s", rotate: "8deg" },
  { size: 40, top: "35%", right: "20%", opacity: 0.09, delay: "1.5s", duration: "6s", rotate: "-30deg" },
  { size: 70, top: "55%", left: "30%", opacity: 0.04, delay: "2.5s", duration: "13s", rotate: "18deg" },
];

export default function FloatingBoxes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {boxes.map((box, i) => (
        <div
          key={i}
          className="absolute border border-[#9B1B30]"
          style={{
            width: box.size,
            height: box.size,
            top: box.top,
            left: "left" in box ? (box as { left: string }).left : undefined,
            right: "right" in box ? (box as { right: string }).right : undefined,
            opacity: box.opacity,
            transform: `rotate(${box.rotate})`,
            animation: `float ${box.duration} ease-in-out infinite ${box.delay}`,
          }}
        />
      ))}
    </div>
  );
}
