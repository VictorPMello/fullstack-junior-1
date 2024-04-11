import Link from 'next/link';

export function HandleLink({
  isClassActive,
  text,
  link,
}: {
  isClassActive?: string;
  text: string;
  link: string;
}) {
  return (
    <li className={isClassActive ? isClassActive : 'opacity-50'}>
      <Link href={link}>{text}</Link>
    </li>
  );
}
