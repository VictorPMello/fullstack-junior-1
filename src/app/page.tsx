import Header from './components/Header';
import ImagesContent from './components/ImagesContent';
import ServiceContent from './components/ServiceContent';
import Title from './components/Title';

export default function Home() {
  return (
    <>
      <Header />

      <main className='flexCenter gap-[1.688rem]'>
        <div className='flex flex-col gap-[7.125rem]'>
          <Title />
          <ServiceContent />
        </div>
        <ImagesContent />
      </main>

      <div
        className='circle w-[68.875rem] h-[68.875rem] 
      top-[16.438rem] left-[60.688rem]'
      />
      <div
        className='circle w-[53.125rem] h-[53.125rem] 
      top-[33.75rem] left-[76.063rem]'
      />
    </>
  );
}
