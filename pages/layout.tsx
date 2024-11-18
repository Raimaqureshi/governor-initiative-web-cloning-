
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Head from 'next/head';
export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="/fonts/GeistMonoVF.woff" />
        <title>{Metadata.title}</title>
        <meta name="description" content={Metadata.description} />
      </Head>
      <body style={{ fontFamily: "GeistSans, sans-serif" }}>
        <Header />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
