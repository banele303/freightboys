import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Export Packing & Container Stuffing | Freightboys",
  description: "Expert handling of all commodity loading into shipping containers for worldwide export. Secure lashing and optimized volume.",
  keywords: ["Export Packing", "Container Stuffing", "Cargo Loading", "Worldwide Shipping", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
