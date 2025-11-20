import EmergencyLocationTemplate from '@/components/EmergencyLocationTemplate';
import { locationData } from '@/data/locationData';

export default function Eastover() {
  return <EmergencyLocationTemplate location={locationData.eastover} />;
}
