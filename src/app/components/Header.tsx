'use client';

import Image from 'next/image';
import { HandleLink } from './HandleLink';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('active');

  // Adicionar lógica para mudar a class Active

  return (
    <header className='flex items-center justify-between px-40 bg-black text-yellow-50 w-full h-[7.5rem]'>
      <h1 className='font-bold text-pink text-4xl leading-[2.828rem]'>
        Gath<span className='text-white'>Session</span>.
      </h1>
      <nav className='flexCenter gap-20'>
        <ul className='flexCenter gap-12 text-lg leading-[1.688rem] font-normal'>
          <HandleLink
            isClassActive={activeLink}
            text='Home'
            link='/'
          />
          <HandleLink isClassActive={''} text='Features' link='/' />
          <HandleLink isClassActive={''} text='Blog' link='/' />
          <HandleLink isClassActive={''} text='Contact' link='/' />
          <HandleLink isClassActive={''} text='About Us' link='/' />
        </ul>
        <Image
          src='Menu.svg'
          alt='Icone de Menu'
          width={24}
          height={24}
        />
      </nav>
    </header>
  );
}
