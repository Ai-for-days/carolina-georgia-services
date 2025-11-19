import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';
import { serviceData } from '@/data/serviceData';
import { locationData } from '@/data/locationData';

export default function ArcadiaLakesElectrical() {
  return (
    <ServiceLocationTemplate
      service={serviceData.electrical}
      location={locationData.arcadiaLakes}
    />
  );
}
