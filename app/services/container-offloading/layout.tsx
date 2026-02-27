import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Container Offloading Services | Freightboys",
  description: "Expert offloading and unpacking of new and used vehicles from shipping containers. Precision handling for high-value cargo in South Africa.",
  keywords: ["Container Offloading", "Vehicle Unpacking", "Cargo Handling", "Logistics", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
