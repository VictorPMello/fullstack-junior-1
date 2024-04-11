import Header from './components/Header';
import Title from './components/Title';

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-slate-500'>
        <main>
          <Title />
        </main>
      </main>
    </>
  );
}
