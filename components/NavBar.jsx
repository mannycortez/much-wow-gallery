import { React, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

import images from '../assets';

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div>
        <Link href="/">
          <div>
            <Image src={images.logo} objectFit="contain" width={32} height={32} alt="logo" />
            <p>Much Wow Gallery</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
