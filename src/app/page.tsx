import Header from './components/Header';
import ImagesContent from './components/ImagesContent';
import ServiceContent from './components/ServiceContent';
import Title from './components/Title';

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-slate-900 flex'>
        <div>
          <Title />
          <ServiceContent />
        </div>
        <ImagesContent />
      </main>
    </>
  );
}
