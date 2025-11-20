import EmergencyLocationTemplate from '@/components/EmergencyLocationTemplate';
import { locationData } from '@/data/locationData';

export default function Elgin() {
  return <EmergencyLocationTemplate location={locationData.elgin} />;
}
