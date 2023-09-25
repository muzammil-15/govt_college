import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Programs",
  description: "Programs section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
