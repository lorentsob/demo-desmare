import ServiceDetail from '@/components/services/ServiceDetail';
import { generateMetadata } from '@/content/metadata';
import { servicesContent } from '@/content/services';

export const metadata = generateMetadata('services/bonifiche');

export default function BonifichePage() {
  return (
    <ServiceDetail service={servicesContent.detail.bonifiche} />
  );
}