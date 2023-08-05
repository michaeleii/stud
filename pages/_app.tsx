import Nav from "@/components/Nav";
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
    <div className={`${inter.className}`}>
      <div className="p-5">
        <Nav />
      </div>
      <main className="p-5 xl:p-10">{children}</main>
    </div>
  );
}
