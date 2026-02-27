import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Freightboys | Customs Clearing, Road Freight & Container Solutions South Africa",
  description:
    "Freightboys Customs Clearing and Logistics Co. Professional customs clearing, road freight, and container loading/unloading services for the South African freight industry.",
};

// ... Metadata export ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ... existing head links ... */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Freightboys Customs Clearing and Logistics Co.",
              "image": "/freightboys_logo.png",
              "phone": "+27 84 266 7178",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Johannesburg",
                "addressCountry": "ZA"
              },
              "description": "Professional customs clearing, road freight, and container loading/unloading services for the South African freight industry.",
              "url": "https://freightboys.co.za"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
