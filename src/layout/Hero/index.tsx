'use client';

import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { Button } from '@/components/Button';
import HeroMainImage from '@/../public/images/hero-main-image.png';
import Image from 'next/image';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { ctaLink } from '@/config';

export const Hero = () => {
  const { isMobile } = useScreenDetector();

  return (
    <section className="relative w-full mb-[62px] mt-[156px] md:pb-[146px] md:mt-0 md:pt-[173px] bg-transparent md:bg-hero-background">
      <div className="flex flex-col items-center max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 lg:gap-0">
          <div className="px-8 md:px-0 flex flex-col items-start gap-6 md:gap-[18px]">
            <Button withoutAction scheme="outlined" className="py-2 px-3 md:px-4 md:py-2">
              <span className="text-sm md:text-lg">BETSTATS</span>
            </Button>
            <div className="flex flex-col items-start gap-6">
              <h2 className="uppercase max-w-[590px] font-rubik font-bold text-[28px] leading-[34px] lg:text-5xl text-text-primary">
                Saiba como os grandes tipsters{' '}
                <b className="font-bold bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-transparent bg-clip-text">
                  conquistam bons resultados
                </b>{' '}
                usando os números a seu favor.
              </h2>
              <p className="text-start max-w-[518px] text-common-white-800 font-light text-lg">
                Deixe os palpites de lado e comece a apostar com análises precisas. A Betstats traz
                a ciência para suas apostas, combinando análise detalhada e dados precisos para uma
                experiência de apostas mais inteligente e lucrativa.
              </p>
            </div>
            <div className="flex flex-col md:mt-8 gap-[10px] items-center">
              <Button
                isLink
                link={ctaLink}
                target="_blank"
                className="py-4 px-[26px] md:py-[22px] md:px-9"
              >
                <span className="md:text-sm lg:text-base text-xs">
                  ACESSE ANÁLISES EXCLUSIVAS AGORA!
                </span>
              </Button>
              <PagarmeLogo
                width={isMobile ? '152.24' : undefined}
                height={isMobile ? '21.06' : undefined}
              />
            </div>
          </div>
          <div className="mt-6 ml-0 md:mt-0 lg:ml-[-32px]">
            <Image
              priority
              src={HeroMainImage}
              alt="Imagem mostrando o dashboard inicial da plataforma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
