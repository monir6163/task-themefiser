/* eslint-disable @next/next/no-img-element */
"use client";

import {
  faBlog,
  faBriefcase,
  faContactBook,
  faHome,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function NavBar() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:hidden overflow-x-hidden z-50">
        <MobileNavbar />
      </div>
      <div className="col-span-12 hidden lg:flex lg:mt-16 flex-col gap-y-4 lg:px-6 lg:mr-40 z-50 relative">
        <div className="flex items-center justify-start">
          <div className="text-pure-off-white p-1 rounded-full size-8 flex justify-start items-center">
            <Link href="/" title="Home">
              <FontAwesomeIcon icon={faHome} width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="text-pure-off-white p-1 rounded-full size-8 flex justify-start items-center">
            <Link href="#resume" title="Resume">
              <FontAwesomeIcon icon={faUserLarge} width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="text-pure-off-white p-1 rounded-full size-8 flex justify-start items-center">
            <Link href="#portfolio" title="Portfolio">
              <FontAwesomeIcon icon={faBriefcase} width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="text-pure-off-white p-1 rounded-full size-8 flex justify-start items-center">
            <Link href="#blog" title="Blog">
              <FontAwesomeIcon icon={faBlog} width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="text-pure-off-white p-1 rounded-full size-8 flex justify-start items-center">
            <Link href="#contact" title="Contact">
              <FontAwesomeIcon icon={faContactBook} width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0">
        <img
          src="/images/navi.png"
          alt="line"
          className="hidden lg:block h-96 w-24"
        />
      </div>
    </div>
  );
}
