import MainLayout from "@/components/layouts/main-layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <MainLayout>content</MainLayout>
    </main>
  );
}
