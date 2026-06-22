"use client";

import { useState } from "react";

export default function SmartImg({
  src,
  fallback,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [errored, setErrored] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={errored ? fallback : src}
      alt={alt}
      loading={loading}
      onError={() => {
        if (!errored) setErrored(true);
      }}
      className={className}
    />
  );
}
