import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';
import { serviceData } from '@/data/serviceData';
import { locationData } from '@/data/locationData';

export default function BlythewoodPlumbing() {
  return (
    <ServiceLocationTemplate
      service={serviceData.plumbing}
      location={locationData.blythewood}
    />
  );
}
