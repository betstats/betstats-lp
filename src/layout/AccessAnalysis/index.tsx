'use client';
import Image from 'next/image';
import AccessAnalysisImage from '../../../public/images/access-analysis-image.png';
import { Button } from '@/components/Button';
import { FootballBall } from '@/assets/brand/FootballBall';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { ctaLink } from '@/config';

export const AccessAnalysis = () => {
  const { isMobile } = useScreenDetector();

  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-11 my-[64px] md:mt-[132px] md:mb-[176px]">
      <div>
        <Image
          src={AccessAnalysisImage}
          alt="Imagem de uma bola e um pano verde com o dashboard de fundo com opcaidade baixa"
        />
      </div>
      <div className="flex flex-col items-start gap-[22px] md:gap-10 max-w-[558px] w-full px-5 md:px-0">
        <h2 className="font-rubik text-[28px] leading-[36px] md:text-[40px] md:leading-[44px] text-center md:text-start">
          <b className="text-brand-primary font-extrabold">Chega de adivinhação!</b> Acesse análises
          que transformam cada aposta em uma jogada de mestre.
        </h2>
        <p className="text-lg md:text-[22px] md:leading-7 text-text-secondary font-light text-center md:text-start">
          Nossas ferramentas e insights são desenhados para dar a você uma vantagem incontestável,
          transformando suas apostas de meros palpites em estratégias bem planejadas e vitoriosas.
        </p>
        <div className="flex flex-col items-center gap-[10px] w-full md:w-auto">
          <Button
            isLink
            link={ctaLink}
            target="_blank"
            className="px-[26px] py-4 md:px-9 md:py-[22px]"
          >
            <span className="font-semibold text-xs md:text-base">
              ACESSE ANÁLISES EXCLUSIVAS AGORA!
            </span>
            <FootballBall />
          </Button>
          <PagarmeLogo
            width={isMobile ? '152.24' : undefined}
            height={isMobile ? '21.06' : undefined}
          />
        </div>
      </div>
    </section>
  );
};
