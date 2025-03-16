import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/contexts/AudioContext";
import { PostHogProviderClient } from "@/components/PostHogProvider";
import PostHogPageView from "@/components/PostHogPageView";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Celaya | Skybox Data Centers Candidate",
  description: "Technical expertise meets next-gen infrastructure - Why I'm the perfect fit for Skybox Data Centers",
  keywords: ["data center", "technician", "Skybox", "infrastructure", "machine learning", "technical expertise"],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <PostHogProviderClient>
          <AudioProvider>
            <PostHogPageView />
            {children}
          </AudioProvider>
        </PostHogProviderClient>
      </body>
    </html>
  );
}
