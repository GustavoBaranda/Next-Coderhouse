import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Navbar";

const roboto = Roboto({
  weight : ["300", "500", "700"],
  style:["normal"],
  subsets: ["latin"] 
  });

export const metadata = {
  title: "LasVerde",
  description: "Lasverde",
  keywords: ["jugo", "natural"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
