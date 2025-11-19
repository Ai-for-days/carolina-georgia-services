import EmergencyLocationTemplate from '@/components/EmergencyLocationTemplate';
import { locationData } from '@/data/locationData';

export default function Blythewood() {
  return (
    <EmergencyLocationTemplate location={locationData.blythewood} />
  );
}
