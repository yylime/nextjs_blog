import "./globals.css";
import { cx } from "@/utils";
import Header from "@/components/Header";
import { Noto_Sans_SC, Geist_Mono, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import siteMetadata from "@/utils/siteMetaData";
import ThemeScript from "@/components/ThemeScript";

const NotoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
});

const RobotoObj = Roboto({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});


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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          RobotoObj.className,
          NotoSansSC.className,
          "antialiased bg-white dark:bg-dark"
        )}
      >
        <ThemeScript />
        <Header />
        <div className="pt-2">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
