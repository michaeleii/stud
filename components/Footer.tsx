function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-4 tracking-tight md:h-24 md:flex-row">
      <div>
        Built by{" "}
        <a
          href="https://github.com/michaeleii"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          Michael
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/scottchen98"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          Scott
        </a>
        . Built using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          shadcn UI
        </a>
        , and{" "}
        <a
          href="https://supabase.com/"
          target="_blank"
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
