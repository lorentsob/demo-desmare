import ServiceDetail from '@/components/services/ServiceDetail';
import { generateMetadata } from '@/content/metadata';
import { servicesContent } from '@/content/services';

export const metadata = generateMetadata('services/rifiuti-pericolosi');

export default function RifiutiPericolosiPage() {
  return (
    <ServiceDetail service={servicesContent.detail['rifiuti-pericolosi']} />
  );
}
