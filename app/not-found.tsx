import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bd-b">
      <div className="container-x py-24 md:py-40">
        <p className="label text-accent mb-6">[ Error 404 ]</p>
        <h1 className="huge text-[clamp(3rem,16vw,13rem)]">
          Page <span className="stroke-ink">not</span> found.
        </h1>
        <p className="mono text-sm mt-8 max-w-md leading-relaxed">
          // The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-accent">
            ← Back home
          </Link>
          <Link href="/logo-work" className="btn">
            See logo work
          </Link>
        </div>
      </div>
    </section>
  );
}
