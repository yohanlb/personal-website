import IntroSection from '@components/homePage/IntroSection';
import NewPageIcon from '@components/ui/NewPageIcon';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='pt-4'>
      <div className='flex flex-col gap-8'>
        <IntroSection />
      </div>
    </main>
  );
}
