import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <div className={`${inter.className}`}>
          <div className="flex items-center border-b p-5">
            <div className="mr-5 text-3xl font-bold">stud.</div>
            <Nav />
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
          <main className="p-5 xl:p-10">{children}</main>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
