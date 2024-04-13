import NewPageIcon from '@components/ui/NewPageIcon';
import ProfileSection from '@components/work/profileSection/ProfileSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  return (
    <main>
      <Link rel='stylesheet' href='/'>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Home <NewPageIcon />
        </h2>
      </Link>
      <ProfileSection />
    </main>
  );
}
