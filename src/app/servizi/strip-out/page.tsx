import ServiceDetail from '@/components/services/ServiceDetail';
import { generateMetadata } from '@/content/metadata';
import { servicesContent } from '@/content/services';

export const metadata = generateMetadata('services/strip-out');

export default function StripOutPage() {
  return <ServiceDetail service={servicesContent.detail['strip-out']} />;
}
