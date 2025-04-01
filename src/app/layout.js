import "./globals.css";
import { cx } from "@/utils";
import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Noto_Sans_SC } from "next/font/google";
import Footer from "@/components/Footer";
import siteMetadata from "@/utils/siteMetaData";
import ThemeScript from "@/components/ThemeScript";


export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const NotoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          GeistSans.className,
          GeistMono.className,
          // NotoSansSC.className,
          "antialiased bg-white dark:bg-dark"
        )}
      >
        <ThemeScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
