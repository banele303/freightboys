import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Import Used Vehicles from Japan & Singapore | Freightboys",
  description: "Specialist containerized importation (5-6 units) of used cars from Japan and Singapore to South Africa and SADC countries. Bonded transit and expert customs clearing.",
  keywords: ["Used Cars", "Japan Import", "Singapore Import", "SADC Transit", "Bonded Shipping", "Freightboys"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
