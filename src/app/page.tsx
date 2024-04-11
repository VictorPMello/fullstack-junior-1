import Header from './components/Header';
import ServiceContent from './components/ServiceContent';
import Title from './components/Title';

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-slate-900'>
        <Title />
        <ServiceContent />
      </main>
    </>
  );
}
