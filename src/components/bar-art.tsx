"use client";

import { useId } from "react";
import type { GlassStyle } from "@/data/portfolio";

export function Drink({ style, color, className = "" }: { style: GlassStyle; color: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 180 240" className={`drink-art ${className}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-glass`} x1="40" x2="145" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff9df" stopOpacity=".28" /><stop offset=".3" stopColor="#fff9df" stopOpacity=".03" /><stop offset=".8" stopColor="#fff9df" stopOpacity=".06" /><stop offset="1" stopColor="#fff9df" stopOpacity=".35" />
        </linearGradient>
        <linearGradient id={`${id}-liquid`} x1="90" y1="70" x2="90" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity=".8" /><stop offset="1" stopColor={color} stopOpacity=".25" />
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="222" rx="61" ry="9" fill="#000" opacity=".25" />
      {style === "rocks" && <>
        <path d="M38 94h104l-8 105q-44 17-88 0z" fill={`url(#${id}-glass)`} stroke="#f9edcd" strokeOpacity=".65" strokeWidth="1.5" />
        <path d="M42 124q48-10 96 0l-6 70q-42 15-84 0z" fill={`url(#${id}-liquid)`} />
        <ellipse cx="90" cy="124" rx="48" ry="7" fill={color} opacity=".5" />
        <rect x="58" y="106" width="34" height="34" rx="5" transform="rotate(-16 58 106)" fill="#fffbe3" fillOpacity=".19" stroke="#ffefd0" strokeOpacity=".38" />
        <rect x="94" y="125" width="29" height="30" rx="5" transform="rotate(15 94 125)" fill="#fffbe3" fillOpacity=".12" stroke="#ffefd0" strokeOpacity=".4" />
        <path d="M52 106l5 82m70-78-5 75M47 199q43 14 86 0" stroke="#fffae2" strokeOpacity=".45" strokeWidth="2" />
        <ellipse cx="90" cy="94" rx="52" ry="8" stroke="#f5ecd5" strokeOpacity=".8" />
        <path d="M103 96a27 27 0 1 1 36-30l-18 21z" fill="#d9a84d" stroke="#f8d78d" strokeWidth="2" />
        <path d="M121 86l-15-22m15 22 8-25m-8 25 19-13" stroke="#f8d78d" strokeOpacity=".8" />
      </>}
      {style === "coupe" && <>
        <path d="M29 91q8 70 61 74 53-4 61-74z" fill={`url(#${id}-glass)`} stroke="#f9edcd" strokeOpacity=".65" strokeWidth="1.5" />
        <path d="M35 109q13 51 55 53 42-2 55-53z" fill={`url(#${id}-liquid)`} />
        <ellipse cx="90" cy="109" rx="55" ry="8" fill={color} opacity=".6" />
        <ellipse cx="90" cy="91" rx="61" ry="9" stroke="#f9edcd" strokeOpacity=".85" strokeWidth="1.5" />
        <path d="M90 165v47m-30 6q30-11 60 0c-12 6-48 6-60 0Z" stroke="#f9edcd" strokeOpacity=".65" strokeWidth="2" />
        <path d="M43 105q9 36 30 45" stroke="#fffbe3" strokeOpacity=".45" strokeWidth="2" />
        <path d="M124 101 147 51" stroke="#d0b170" strokeWidth="2" />
        <ellipse cx="140" cy="67" rx="10" ry="13" transform="rotate(22 140 67)" fill="#879d58" stroke="#b0c27a" /><circle cx="141" cy="66" r="3" fill="#d6b578" />
      </>}
      {style === "highball" && <>
        <path d="M52 59h76l-5 142q-33 12-66 0z" fill={`url(#${id}-glass)`} stroke="#f9edcd" strokeOpacity=".7" strokeWidth="1.5" />
        <path d="M55 96q35-8 70 0l-4 101q-31 11-62 0z" fill={`url(#${id}-liquid)`} />
        <ellipse cx="90" cy="96" rx="35" ry="6" fill={color} opacity=".5" />
        {[0, 1, 2].map(i => <rect key={i} x={65 + i * 7} y={83 + i * 35} width="29" height="28" rx="5" transform={`rotate(${i % 2 ? 16 : -12} 90 ${97 + i * 35})`} fill="#fffbe3" fillOpacity=".16" stroke="#ffefd0" strokeOpacity=".3" />)}
        <path d="m105 172 12-136m-56 37 4 116m54-113-4 112" stroke="#fffbe3" strokeOpacity=".5" strokeWidth="2" />
        <ellipse cx="90" cy="59" rx="38" ry="6" stroke="#f9edcd" strokeOpacity=".8" />
        <path d="M51 71C22 52 35 30 59 42c13-31 38-23 37-2-19-3-25 13-45 31Z" fill="#638664" stroke="#9ebc7d" strokeWidth="1.5" />
        <path d="m51 71 21-27m-21 27L41 47" stroke="#c3d39c" strokeOpacity=".7" />
        {[0, 1, 2, 3].map(i => <circle className="drink-bubble" key={i} cx={76 + (i % 2) * 27} cy={113 + i * 22} r="2" fill="#fff6cd" fillOpacity=".6" style={{ animationDelay: `${i * .45}s` }} />)}
      </>}
    </svg>
  );
}

export function Shelves({ hero = false }: { hero?: boolean }) {
  return <svg className={`shelves ${hero ? "shelves-hero" : ""}`} viewBox="0 0 640 380" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id={hero ? "hero-shelf" : "bar-shelf"} x2="0" y2="1"><stop stopColor="#bda15c" /><stop offset="1" stopColor="#4b3826" /></linearGradient>
    </defs>
    {[80, 200, 320].map((y, shelfIndex) => <g key={y}>
      {Array.from({ length: 13 }, (_, i) => {
        const x = 26 + i * 47;
        const h = 37 + ((i * 17 + shelfIndex * 13) % 40);
        const colors = ["#5e7754", "#a58343", "#2e6050", "#b9b084", "#5d6b48"];
        return <g key={x} opacity={.5 + (i % 3) * .13}>
          <path d={`M${x + 9} ${y - h}v-12h12v12l8 12v${h - 15}q-14 5-28 0v-${h - 15}z`} fill={colors[(i + shelfIndex) % colors.length]} stroke="#d2c793" strokeOpacity=".2" />
          <path d={`M${x + 5} ${y - h + 18}v${Math.max(h - 26, 4)}`} stroke="#e7dec0" strokeOpacity=".3" />
          <rect x={x + 4} y={y - 27} width="22" height="14" rx="1" fill="#ece4c9" fillOpacity=".7" />
          <path d={`M${x + 10} ${y - 20}h10`} stroke="#4b553c" />
        </g>;
      })}
      <path d={`M8 ${y + 5}h624`} stroke={hero ? "url(#hero-shelf)" : "url(#bar-shelf)"} strokeWidth="8" />
      <path className="shelf-light" d={`M8 ${y + 9}h624`} stroke="#ebc56a" strokeOpacity=".65" strokeWidth="2" />
    </g>)}
  </svg>;
}

export function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={className} width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6 9h12v17c0 8-12 8-12 0m17-17h15M30 9v25" stroke="currentColor" strokeWidth="3" /><path d="M4 37h32" stroke="currentColor" strokeOpacity=".5" /></svg>;
}
