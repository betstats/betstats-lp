'use client';

import { useScreenDetector } from '@/hooks/useScreenDetector';
import TelegramImage from '../../../public/images/telegram-group.png';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { ctaLink } from '@/config';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';

export const TelegramBonus = () => {
  const { isMobile } = useScreenDetector();

  return (
    <section className="mx-auto max-w-[1523px] w-full bg-green-gradient rounded-[30px] mb-[62px] md:mb-[176px] md:pt-6 md:pb-6 md:px-8 xl:pb-5 xl:pt-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
      <div className="mb-5">
        <Image
          src={TelegramImage}
          alt="Imagem mostrando a tela inicial das estatisticas de um jogo"
          className="rounded-[26px] md:rounded-none"
        />
      </div>
      <div className="flex flex-col gap-[37px] md:gap-12 max-w-[518px] w-full px-[48px] pb-[69px] md:px-0 md:pb-0">
        <h2 className="font-rubik text-[28px] leading-[34px] md:text-[40px] md:leading-[44px]">
          Acesse nosso <b>canal exclusivo</b> para assinantes no telegram.
        </h2>
        <p className="text-lg md:text-[22px] leading-[28px]">
          Em parceria com a tipsbr, oferecemos para nossos assinantes um canal exclusivo do
          telegram, o <b>GRUPO VIP TIPSBR</b> onde mandamos apostas e insights diários, aumentando
          ainda mais sua vantagem! <br />
          <br />
          Todas as apostas são enviadas com antecedência e baseadas em análises utilizando a
          Betstats, garantindo que você tenha tempo e meios para analisar e tomar suas próprias
          decisões.
        </p>
        <div className="flex flex-col md:mt-8 gap-[10px] items-center w-full">
          <Button
            isLink
            link={ctaLink}
            target="_blank"
            className="py-4 px-[26px] md:py-[22px] md:px-9 w-full justify-center md:w-auto"
            scheme="white-outlined"
          >
            <span className="text-base font-bold">ACESSE O GRUPO AGORA!</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
