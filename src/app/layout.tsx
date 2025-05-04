import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactPopupProvider } from "@/components/providers/contact-popup-provider";

export const metadata: Metadata = {
  title: "Duradomi | Specialist in duurzame woningverbetering",
  description:
    "Duradomi is specialist in duurzame woningverbetering. Wij helpen woningeigenaren in de randstad hun huis energiezuinig en comfortabel te maken.",
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
        <meta
          name="google-site-verification"
          content="KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4"
        />
        
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTXBG1FJX6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag("config", "G-XTXBG1FJX6");
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ContactPopupProvider>
            <Header />
            {children}
            <Footer />
          </ContactPopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
