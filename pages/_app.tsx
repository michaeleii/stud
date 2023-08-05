import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${inter.className}`}>
        <div className="flex items-center p-5">
          <Nav />
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
        <main className="p-5 xl:p-10">{children}</main>
      </div>
    </ThemeProvider>
  );
}
