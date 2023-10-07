import "@/app/css/style.css";
import { getServerSession } from "next-auth";
import { Quicksand, Oswald } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics";
import Script from "next/script";
import SessionProvider from "@/components/ui/session-provider";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

export const metadata = {
  title: "WorkDifferenetWithAI.com",
  description: "Work Differenet With AI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" className={`${quicksand.variable} ${oswald.variable}`}>
      <head />
      <body className="bg-cocoa_brown-300">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <SessionProvider session={session}>{children}</SessionProvider>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/fbdf7bb495cf00f7924309c0/script.js"
        />
      </body>
    </html>
  );
}
