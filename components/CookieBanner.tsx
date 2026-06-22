"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("btb-cookie-accepted")) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60]">
      <div className="bg-paper bd hard p-4 flex items-center gap-4">
        <p className="mono text-[0.72rem] leading-relaxed">
          This website uses cookies to improve your web experience.
        </p>
        <button
          onClick={() => {
            try {
              localStorage.setItem("btb-cookie-accepted", "1");
            } catch {
              /* ignore */
            }
            setShow(false);
          }}
          className="btn btn-accent !shadow-none shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
