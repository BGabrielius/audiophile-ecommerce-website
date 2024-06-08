import Link from 'next/link';

type Link = {
  name: string;
  to: string;
};

const links: Link[] = [
  {
    name: 'HOME',
    to: '/',
  },
  {
    name: 'HEADPHONES',
    to: '/headphones',
  },
  {
    name: 'SPEAKERS',
    to: '/speakers',
  },
  {
    name: 'EARPHONES',
    to: '/earphones',
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link: Link) => (
        <li key={link.name}>
          <Link
            href={link.to}
            className='text-white hover:text-orange-clay font-bold font-sub leading-sub tracking-h1'
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
