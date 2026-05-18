import { PrismicPreview } from "@prismicio/next";
import { Roboto } from "next/font/google";
import { repositoryName } from "@/prismicio";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
