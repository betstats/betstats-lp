'use client';

import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { Button } from '@/components/Button';
import HeroMainImage from '@/../public/images/hero-main-image.png';
import Image from 'next/image';
import { ctaLink } from '@/config';
import { useScreenDetector } from '@/hooks/useScreenDetector';

export const Intro = () => {
  const { isMobile } = useScreenDetector();

  return (
    <section className="relative w-full mb-[110px] md:mb-[62px] mt-[126px] md:mt-0 md:pb-[146px] md:pt-[153px] bg-transparent md:bg-hero-background">
      <div className="flex flex-col items-center max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full">
            <iframe
              className="w-full md:w-[650px] h-[250px] md:h-[455px]"
              src="https://www.youtube.com/embed/RgJj1CI7lrQ?si=vQ7bcAzUWyKQvwDS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="uppercase gradient-text font-rubik font-black text-[32px] leading-[36px] lg:text-5xl">
              2 pelo preço de 1!
            </h2>
            <p className="text-text-primary text-lg md:text-[22px] leading-[28px]">
              A <b>MELHOR</b> plataforma de estatísticas de futebol, com um <b>GRUPO VIP</b> de
              palpites exclusivo para assinantes.
            </p>
            <div className="w-full md:w-auto flex flex-col md:mt-8 gap-[10px] items-center">
              <Button
                isLink
                link={ctaLink}
                target="_blank"
                className="py-4 px-[26px] md:py-[22px] md:px-9 w-full justify-center md:w-auto"
              >
                <span className="text-base font-bold">GARANTA SUA VAGA AGORA!</span>
              </Button>
              <PagarmeLogo
                width={isMobile ? '152.24' : undefined}
                height={isMobile ? '21.06' : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
