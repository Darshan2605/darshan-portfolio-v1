import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Darshan Londhe",
  description: "Darshan Londhe | MERN Stack Developer & DevOps Enthusiast Portfolio",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
