import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vintage & Collector Vehicle Packing to New Zealand | Freightboys",
  description: "Specialized relocation of prized used collectors vehicles to New Zealand. Carefully lashed and packed for dent and scratch-free transit.",
  keywords: ["Vintage Cars", "Vehicle Packing", "New Zealand Relocation", "Lashing", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
