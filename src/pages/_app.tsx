import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrationOverlay>
      <Component {...pageProps} />
    </HydrationOverlay>
  );
}
