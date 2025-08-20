import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

// Define base URL once
const baseUrl = 'https://munnahleon.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Leon - Full Stack Developer",
  description: "The portfolio of Munna Hasan Leon, a passionate Full Stack Developer creating dynamic and user-friendly web applications.",
  keywords: ["Munna Hasan Leon", "Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio", "Full Stack", "Web Development"],
  authors: [{ name: "Munna Hasan Leon", url: baseUrl }],
  creator: "L3o9 Reborn",

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Munna Hasan Leon - Full Stack Developer',
    description: 'The portfolio of Munna H. Leon...',
    images: [
      {
        url: `${baseUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Munna H. Leon Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Munna H. Leon - Full Stack Developer',
    description: 'The portfolio of Munna H. Leon...',
    images: [`${baseUrl}/og-image.jpeg`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={robotoSerif.className} suppressHydrationWarning >
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen flex-grow">
            <NavbarRes />
            <CustomCursor />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
