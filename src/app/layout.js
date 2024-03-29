import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CookieButton from "@/components/cookie/CookieButton";

const roboto = Roboto({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata = {
  title: "American Diner UK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  /* turning off the test layouts for now. */
  const testLayouts = false;

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <Navbar />
        </div>
        {children}
        {testLayouts && (
          <div>
            <div style={{ height: "500px", backgroundColor: "lightcoral" }}>
              Test 0
            </div>
            <div style={{ height: "500px", backgroundColor: "lightblue" }}>
              Test 1
            </div>
          </div>
        )}
        <CookieButton />
        <Footer />
      </body>
    </html>
  );
}
