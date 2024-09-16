
// import {Exo} from "next/font/google";
import Footer from "@/components/Home/Footer";
import "./globals.css";



// const exo = Exo({
//   subsets: ['latin'],
//   weight: ['400', '500','800'],
//   variable: '--font-Exo',
// });

export const metadata = {
  title: "Svipes",
  description: "Svipes Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        {children}
        <Footer />
      </body>
    </html>
  );
}
// className={exo.className}