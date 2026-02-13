import type { Metadata } from "next";
import { Roboto, JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
});

const crimsonPro = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Yannick Gloster",
  description: "Portfolio of Yannick Gloster",
};

const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${roboto.variable} ${jetbrainsMono.variable} ${crimsonPro.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
