import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
export const metadata: Metadata = {
  title: "duradomi - Specialist in duurzame woningverbetering",
  description: "duradomi is specialist in duurzame woningverbetering. Wij helpen woningeigenaren in Midden-Nederland hun huis energiezuinig en comfortabel te maken.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta name="google-site-verification" content="KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


