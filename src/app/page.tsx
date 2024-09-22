import BlogSection from '@components/homePage/BlogSection';
import IntroSection from '@components/homePage/IntroSection';
import ProjectsSection from '@components/homePage/ProjectsSection';
import WorkSection from '@components/homePage/WorkSection';

export default function Work() {
  return (
    <main className='pt-10'>
      <div className='flex flex-col gap-12'>
        <IntroSection />
        <WorkSection />
        <ProjectsSection />
        <BlogSection />
      </div>
    </main>
  );
}
