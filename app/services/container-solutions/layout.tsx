import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Container Solutions & Stuffing | Freightboys",
  description: "Comprehensive container loading and unloading services for import and export. Strategic lashing and cargo securing for safe maritime transit.",
  keywords: ["Container Solutions", "Stuffing", "De-stuffing", "Maritime Logistics", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
