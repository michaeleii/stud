import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";

import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Logout from "@/components/Logout";

import { useUser } from "@/hooks/authentication/useUser";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { user, isLoadingUser } = useUser();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        <Head>
          <title>Stud - Your Study Dashboard</title>
          <meta
            name="description"
            content="A simple, yet powerful tool to help you manage your school life."
            key="desc"
          />
          <meta property="og:title" content="Stud - Your Study Dashboard" />
          <meta
            property="og:description"
            content="A simple, yet powerful tool to help you manage your school life."
          />
          <meta
            property="og:image"
            content="https://studd.vercel.app/meta.jpg"
          />
        </Head>
      </div>
      <div className={`${inter.className}`}>
        <div className="flex items-center border-b p-5">
          <Link href="/" className="mr-5 text-3xl font-bold">
            stud.
          </Link>
          {!isLoadingUser && user && <Nav />}

          <div className="ml-auto">
            <ModeToggle />
          </div>
          {!isLoadingUser && user && (
            <div>
              <Logout />
            </div>
          )}
        </div>
        <main className="px-5 pt-5 xl:px-10 xl:pt-10">{children}</main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
