import Image from 'next/image';

export default function ServiceContent() {
  return (
    <section
      className='flexCenter w-[38.5rem] h-16
      gap-12 text-white text-lg font-semibold
    '>
      <div className='flexCenter gap-4'>
        <span className='icon'>
          <Image
            src='Comments.svg'
            alt='Icone de flecha'
            width={40}
            height={40}
          />
        </span>
        <p>Build Community</p>
      </div>
      <div className='flexCenter gap-4'>
        <span className='icon'>
          <Image
            src='Week Schedule.svg'
            alt='Icone de flecha'
            width={40}
            height={40}
          />
        </span>
        <p>Share Events</p>
      </div>
      <div className='flexCenter gap-4'>
        <span className='icon'>
          <Image
            src='Post.svg'
            alt='Icone de flecha'
            width={40}
            height={40}
          />
        </span>
        <p>Get Information</p>
      </div>
    </section>
  );
}
