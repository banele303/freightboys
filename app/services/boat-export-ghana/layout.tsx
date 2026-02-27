import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boat Export Packing & Lashing to Ghana | Freightboys",
  description: "Professional export packing, loading, and lashing of boats from South Africa to Ghana and worldwide. Full inspection reports provided.",
  keywords: ["Boat Export", "Ghana Shipping", "Maritime Packing", "Lashing", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
