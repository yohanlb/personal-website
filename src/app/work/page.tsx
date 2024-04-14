import NewPageIcon from '@components/ui/NewPageIcon';
import ProfileSection from '@components/workPage/ProfileSection';
import ProjectsSection from '@components/workPage/ProjectsSection';
import WorkSection from '@components/workPage/WorkSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  return (
    <main className='pt-4'>
      <div className='flex flex-col gap-8'>
        <ProfileSection />
        <WorkSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
