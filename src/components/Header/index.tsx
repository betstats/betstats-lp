'use client';

import { DesktopLogo } from '@/assets/brand/Logo.desktop';
import { Button } from '../Button';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { ctaLink } from '@/config';

export const Header = () => {
  const { isMobile } = useScreenDetector();

  return (
    <header className="px-8 w-full py-4 border-b border-common-white-250 backdrop-blur-xl fixed top-0 z-[10]">
      <nav className="mx-auto max-w-[1280px] flex items-center justify-between gap-4">
        <h1>
          <DesktopLogo width={isMobile ? '120' : undefined} height={isMobile ? '36' : undefined} />
        </h1>
        <h2 className="hidden md:block font-montserrat font-medium text-common-white-800 text-center">
          Conquiste bons resultados com a betstats
        </h2>
        <Button isLink link={ctaLink} target="_blank">
          <span className="text-[8px] leadiing[10px] md:text-xs text-center">
            ANÁLISES EXCLUSIVAS AGORA!
          </span>
        </Button>
      </nav>
    </header>
  );
};
