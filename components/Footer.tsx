function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-4 tracking-tight md:h-24 md:flex-row">
      <div>
        Built by Michael and Scott. Built using{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium underline underline-offset-4"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium underline underline-offset-4"
        >
          TailwindCSS
        </a>
        , and{" "}
        <a
          href="https://supabase.com/"
          className="font-medium underline underline-offset-4"
        >
          Supabase
        </a>
        .
      </div>
    </footer>
  );
}
export default Footer;