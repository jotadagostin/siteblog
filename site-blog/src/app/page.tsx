import { LandingPage } from "@/templates/landing-page";
import type { Metadata } from "next";

export const metada: Metadata = {
  title: "Site.set",
  description: "Sell ​​your products as an affiliate in one place",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Sell ​​your products as an affiliate in one place",
    url: "https://siteblog-seven.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://siteblog-seven.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
