import "@/app/css/style.css";
import GoogleAnalytics from "@/components/google-analytics";
import { ClerkProvider } from "@clerk/nextjs";
import { Quicksand, Oswald } from "next/font/google";
import Script from "next/script";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

export const metadata = {
  title: "WorkDifferenetWithAI.com",
  description: "Work Differenet With AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${oswald.variable}`}>
      <head />
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            socialButtonsPlacement: "bottom",
            privacyPageUrl: "/privacy",
            termsPageUrl: "/terms",
          },
        }}
      >
        <body className="bg-cocoa_brown-950">
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          {children}
          <Script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/fbdf7bb495cf00f7924309c0/script.js"
          />
        </body>
      </ClerkProvider>
    </html>
  );
}
