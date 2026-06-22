export default function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const Row = () => (
    <div className="marquee__row" aria-hidden="true">
      {items.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-6 label">
          {t}
          <span className="text-accent">✶</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${reverse ? "marquee--rev" : ""} ${className}`}>
      <div className="marquee__track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
