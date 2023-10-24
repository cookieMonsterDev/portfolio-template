import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mykhailo Toporkov",
  description:
    "Mykhailo Toporkov is a cool full-stack engineer who builds extraordinary and hight performed applications (mostly web) that always make feel of satisfaction.",
  icons: {
    icon: "/logo_2023_hex_letter_dark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className="relative bg-slate-50 dark:bg-slate-950"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
