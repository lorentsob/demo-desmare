import ServicesLanding from '@/components/services/ServicesLanding';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('services');

export default function ServicesPage() {
  return <ServicesLanding />;
}
