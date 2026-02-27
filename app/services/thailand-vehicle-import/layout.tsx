import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thailand Vehicle Import & Unpacking | Freightboys",
  description: "Specialized unpacking of import cargo from Thailand, specializing in brand new vehicles. Professional handling for showroom standards.",
  keywords: ["Thailand Import", "Vehicle Unpacking", "Import Cargo", "Logistics", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
