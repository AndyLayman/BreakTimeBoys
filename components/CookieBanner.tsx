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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-32px)] max-w-xl">
      <div className="flex items-center justify-between gap-4 rounded-full bg-white border border-[#ececec] shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-5 py-3">
        <p className="text-sm text-ink">
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
          className="btn btn-solid shrink-0 !py-2 !px-5"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
