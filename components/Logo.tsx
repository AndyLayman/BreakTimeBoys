export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 4v32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 6c8-4 15 4 23 0v12c-8 4-15-4-23 0V6z" fill="currentColor" />
    </svg>
  );
}
