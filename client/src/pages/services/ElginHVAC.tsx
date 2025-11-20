import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';
import { serviceData } from '@/data/serviceData';
import { locationData } from '@/data/locationData';

export default function ElginHVAC() {
  return (
    <ServiceLocationTemplate
      service={serviceData.hvac}
      location={locationData.elgin}
    />
  );
}
