'use client';

import { DesktopLogo } from '@/assets/brand/Logo.desktop';
import { Button } from '../Button';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { ctaLink } from '@/config';

export const Header = () => {
  const { isMobile } = useScreenDetector();

  return (
    <header className=" w-full border-b border-common-white-250 backdrop-blur-xl fixed top-0 z-[10]">
      <h2 className="py-2 block md:hidden font-montserrat font-medium text-common-white-800 text-center text-sm bg-alerts-blue">
        Bônus exclusivo: <b>GRUPO VIP TIPSBR</b> no Telegram
      </h2>
      <nav className="py-4 px-8 mx-auto max-w-[1280px] flex items-center justify-between gap-4">
        <h1>
          <DesktopLogo width={isMobile ? '120' : undefined} height={isMobile ? '36' : undefined} />
        </h1>
        <h2 className="hidden md:block font-montserrat font-medium text-common-white-800 text-center">
          Assinantes betstats ganham acesso ao <b>GRUPO VIP DA TIPSBR</b> no Telegram
        </h2>
        <Button isLink link={ctaLink} target="_blank">
          <span className="text-[8px] leadiing[10px] md:text-xs text-center">
            GARANTA SEU ACESSO!
          </span>
        </Button>
      </nav>
    </header>
  );
};
