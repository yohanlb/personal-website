import IntroSection from '@components/homePage/IntroSection';
import ProjectsSection from '@components/workPage/ProjectsSection';
import WorkSection from '@components/workPage/WorkSection';

export default function Work() {
  return (
    <main className='pt-10'>
      <div className='flex flex-col gap-12'>
        <IntroSection />
        <WorkSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
