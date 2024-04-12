import Image from 'next/image';

export default function ImagesContent() {
  return (
    <section className='flex gap-8'>
      <div className='flex flex-col gap-8'>
        <Image
          className='rounded-[5.625rem] bg-[#6E1FED]'
          src='/handsome-serious.png'
          alt='Icone de flecha'
          width={240}
          height={509}
        />
        <Image
          className='rounded-[5.625rem] bg-[#DB2A6B]'
          src='/vertical-shot.png'
          alt='Icone de flecha'
          width={240}
          height={240}
        />
      </div>
      <div className='flex flex-col gap-8'>
        <Image
          className='rounded-[5.625rem] bg-[#60D3D9]'
          src='/pretty-young.png'
          alt='Icone de flecha'
          width={240}
          height={240}
        />
        <Image
          className='rounded-[5.625rem] bg-[#FF7E29]'
          src='/positive-smiling.png'
          alt='Icone de flecha'
          width={240}
          height={509}
        />
      </div>
      <div className='flexCenter'>
        <Image
          className='rounded-[5.625rem] bg-[#F4B840]'
          src='/positive-dark.png'
          alt='Icone de flecha'
          width={240}
          height={509}
        />
      </div>
    </section>
  );
}
