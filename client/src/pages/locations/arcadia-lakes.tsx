import EmergencyLocationTemplate from '@/components/EmergencyLocationTemplate';
import { locationData } from '@/data/locationData';

export default function ArcadiaLakes() {
  return (
    <EmergencyLocationTemplate location={locationData.arcadiaLakes} />
  );
}
