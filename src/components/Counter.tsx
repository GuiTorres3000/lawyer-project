// components/Counter.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number;  
  start?: number;
  suffix?: string;
  prefix?: string;
  once?: boolean;
  formatK?: boolean;     
  kDecimals?: number;    
  roundTo?: number;     
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Counter({
  end,
  start = 0,
  duration = 1500,
  suffix = "",
  prefix = "",
  once = true,
  formatK = false,
  kDecimals = 0,
  roundTo = 1,
  className,
}: CounterProps) {
  const [val, setVal] = useState(start);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (!visible) return;
        if (once && startedRef.current) return;
        startedRef.current = true;

        const t0 = performance.now();
        const from = start;
        const delta = end - from;

        function tick(now: number) {
          const elapsed = now - t0;
          const t = Math.min(1, elapsed / duration);
          const eased = easeOutCubic(t);
          let current = from + delta * eased;

          if (roundTo > 1) {
            current = Math.round(current / roundTo) * roundTo;
          } else {
            current = Math.round(current);
          }

          setVal(current);

          if (t < 1) requestAnimationFrame(tick);
          else setVal(end);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [start, end, duration, once, roundTo]);

  function formatNumber(n: number) {
    if (formatK) {
      const k = n / 1000;
      if (k >= 1) return `${k.toFixed(kDecimals)}K`;
      if (kDecimals > 0) return `${k.toFixed(kDecimals)}K`;
      return `${Math.round(n)}${suffix ? "" : ""}`; 
    }
    return `${Math.round(n)}`;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(val)}
      {suffix}
    </span>
  );
}
