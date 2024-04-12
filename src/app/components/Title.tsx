import Image from 'next/image';
import Link from 'next/link';

export default function Title() {
  return (
    <section className='text-white w-[49rem] h-[33.688] mt-[2.625rem]'>
      <h2 className='font-bold text-[5rem] leading-[6.285rem]'>
        Build your best community starting from here.
      </h2>
      <p
        className='font-normal text-2xl leading-10 opacity-50 w-[40.5rem]
      pt-6 pb-[2.125rem]'>
        Meet and communicate with the best people to run projects,
        events or other activities in a more effective and fun way
      </p>
      <div className='flex '>
        <Link
          href='/'
          className='bg-pink rounded-3xl rounded-es-none py-4 px-16
        font-normal text-lg leading-[1.688rem]
        '>
          Get Started
        </Link>
        <Link
          href='/'
          className='flexCenter y-4 px-[2.125rem]
         font-semibold text-lg leading-[1.688rem]
         underline
         '>
          Learn More
          <Image
            className='mt-1'
            src='Arrow.svg'
            alt='Icone de flecha'
            width={40}
            height={40}
          />{' '}
        </Link>
      </div>
    </section>
  );
}
