import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

export const metadata = {
  title: "KayCribs",
  description: "Real estate platform for rent, sale, and legal property services"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
