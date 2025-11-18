import EmergencyLocationTemplate from "@/components/EmergencyLocationTemplate";
import { locationData } from "@/data/locationData";

export default function Irmo() {
  return <EmergencyLocationTemplate location={locationData.irmo} />;
}
