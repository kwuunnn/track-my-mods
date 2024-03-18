import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/provider/AuthProvider";
import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className={`${overpass.className}`}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
