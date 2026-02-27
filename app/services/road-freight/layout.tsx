import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road Freight & SADC Cross-Border Transport | Freightboys",
  description: "Secure and timely road freight solutions across South Africa and the SADC region. Real-time tracking and reliable logistics coordination.",
  keywords: ["Road Freight", "Cross-Border Transport", "SADC Logistics", "S.A. Trucking", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
