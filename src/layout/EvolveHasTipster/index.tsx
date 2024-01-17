'use client';

import { FootballBall } from '@/assets/brand/FootballBall';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { Button } from '@/components/Button';
import { ctaLink } from '@/config';
import { useScreenDetector } from '@/hooks/useScreenDetector';

export const EvolveHasTipster = () => {
  const { isMobile } = useScreenDetector();

  return (
    <section className="w-full flex flex-col items-center my-[60px] gap-4 px-5 md:mt-[213px] md:gap-12 md:mb-[110px]">
      <div className="flex flex-col gap-4 items-center max-w-[839px] w-full">
        <Button className="w-fit px-4 py-2" scheme="outlined" withoutAction>
          <span className="font-rubik text-xs md:text-lg font-light">
            ESTRATEGISTA COM BETSTATS!
          </span>
        </Button>
        <h2 className="font-semibold text-[28px] leading-[36px] md:text-[32px] md:leading-9 font-rubik text-center">
          Evolua de apostador para{' '}
          <b className="gradient-text font-semibold">estrategista com Betstats!</b>
        </h2>
        <p className="text-lg md:text-[22px] md:leading-7 text-center font-extralight">
          Esse é o momento para abandonar os métodos tradicionais e adotar uma abordagem de apostas
          mais sofisticada. A Betstats oferece as ferramentas e informações que você precisa para se
          tornar um verdadeiro estrategista no jogo.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Button
          isLink
          link={ctaLink}
          target="_blank"
          className="px-[26px] py-4 md:py-[22px] md:px-9"
        >
          <span className="font-semibold text-xs md:text-base">
            TOME UMA ATITUDE E COMECE AGORA!
          </span>
          <FootballBall />
        </Button>
        <PagarmeLogo
          width={isMobile ? '152.24' : undefined}
          height={isMobile ? '21.06' : undefined}
        />
      </div>
    </section>
  );
};
