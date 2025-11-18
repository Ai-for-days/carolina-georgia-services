import EmergencyLocationTemplate from "@/components/EmergencyLocationTemplate";
import { locationData } from "@/data/locationData";

export default function ForestAcres() {
  return <EmergencyLocationTemplate location={locationData["forest-acres"]} />;
}
