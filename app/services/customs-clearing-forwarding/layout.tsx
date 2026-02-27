import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customs Clearing & Forwarding Services | Freightboys",
  description: "Professional customs brokerage in South Africa. We handle import/export documentation, compliance, and seamless border crossings for global trade.",
  keywords: ["Customs Clearing", "Freight Forwarding", "SARS Compliance", "Import Export", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
