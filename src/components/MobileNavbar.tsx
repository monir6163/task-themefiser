'use client';

import {
  faBlog,
  faContactCard,
  faHouse,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
// import babul_akter from '../../public/assets/images/babul_akter_mobile.jpg';
import useAppContext from '../hooks/useAppContext';

const MobileNavbar = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <AnimatedMenubar />
      </div>
      <div className={`${isMenuOpen ? '' : ''}`}>
        {isMenuOpen && <MobileMenu />}
      </div>
    </div>
  );
};

export default MobileNavbar;

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <div
      className={`bg-[#252323] ${
        isMenuOpen
          ? 'duration-1000 h-screen flex justify-center items-start flex-col gap-y-8 overflow-x-hidden pl-[35vw] top-0 left-0 right-0 bottom-0 fixed'
          : 'w-0 h-0 duration-300'
      }`}
    >
      <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faHouse} />
          <span className="uppercase font-black">Home</span>
        </span>
      </Link>
      <Link href="#resume" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faUser} />
          <span className="uppercase font-black">Resume</span>
        </span>
      </Link>
      <Link href="#portfolio" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span className="uppercase font-black">Portfolio</span>
        </span>
      </Link>
      <Link href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faBlog} />
          <span className="uppercase font-black">Blog</span>
        </span>
      </Link>
      <Link href="#blog" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faContactCard} />

          <span className="uppercase font-black">Contact</span>
        </span>
      </Link>
    </div>
  );
};

const AnimatedMenubar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  const genericHamburgerLine = `h-1 w-5 rounded-full my-1  bg-white transition ease transform duration-300`;
  return (
    <div className="overflow-x-hidden flex justify-between items-center h-16 py-2 px-4 bg-[#252323] fixed top-0 left-0 right-0">
      <div className="flex items-center gap-x-1.5">
        <span className="uppercase font-black text-2xl">Daryl</span>
        <span className="uppercase font-black text-2xl text-primary">
          Smith
        </span>
      </div>
      <button
        name="mobilemenu"
        aria-label="mobile menu"
        className="flex flex-col h-7 w-7  rounded justify-center items-center group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? '-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};
