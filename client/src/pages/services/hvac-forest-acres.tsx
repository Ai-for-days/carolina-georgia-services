import ServiceLocationTemplate from "@/components/ServiceLocationTemplate";
import { serviceData } from "@/data/serviceData";
import { locationData } from "@/data/locationData";

export default function HVACForestAcres() {
  return (
    <ServiceLocationTemplate
      service={serviceData.hvac}
      location={locationData.forestAcres}
    />
  );
}
