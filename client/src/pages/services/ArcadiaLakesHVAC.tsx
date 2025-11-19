import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';
import { serviceData } from '@/data/serviceData';
import { locationData } from '@/data/locationData';

export default function ArcadiaLakesHVAC() {
  return (
    <ServiceLocationTemplate
      service={serviceData.hvac}
      location={locationData.arcadiaLakes}
    />
  );
}
