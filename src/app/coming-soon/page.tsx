import HeroComingSoon from '@/components/HeroComingSoon';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('coming-soon');

export default function ComingSoonPage() {
  return <HeroComingSoon />;
}
