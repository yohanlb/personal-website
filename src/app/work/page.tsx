import NewPageIcon from '@components/ui/NewPageIcon';
import ProfileSection from '@components/work/profileSection/ProfileSection';
import WorkSection from '@components/work/workSection/WorkSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  return (
    <main className='pt-4'>
      <div className='flex flex-col gap-8'>
        <ProfileSection />
        <WorkSection />
      </div>
    </main>
  );
}
