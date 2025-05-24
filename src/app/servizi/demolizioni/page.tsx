import ServiceDetail from '@/components/services/ServiceDetail';
import { generateMetadata } from '@/content/metadata';
import { servicesContent } from '@/content/services';

export const metadata = generateMetadata('services/demolizioni');

export default function DemolizioniPage() {
  return <ServiceDetail service={servicesContent.detail.demolizioni} />;
}
