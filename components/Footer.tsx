export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-20 md:py-28">
        <p className="muted max-w-md text-sm leading-relaxed">
          Looking for collaboration for your next project? Do not hesitate to
          contact us to say hello.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-end">
          <h2 className="display font-bold text-5xl md:text-6xl leading-[1.04]">
            Don&apos;t be shy.
            <br />
            Say sallut.
          </h2>
          <div className="md:justify-self-end w-full md:max-w-xs">
            <div className="h-px bg-white/30 mb-4" />
            <a
              href="mailto:info@breaktimeboys.com"
              className="text-lg hover:underline"
            >
              info@breaktimeboys.com
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between text-sm">
          <span className="muted">Breaktimeboys.com ©</span>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/breaktimeboys/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Fb.
            </a>
            <a
              href="https://www.instagram.com/breaktimeboysstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Ig.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
