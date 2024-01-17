'use client';

import { colors } from '@/theme/colors';
import { FiUser } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import SpendMoneyImage from '../../../public/images/spend-money.png';
import Image from 'next/image';
import { useScreenDetector } from '@/hooks/useScreenDetector';

export const SpendMoney = () => {
  const { isMobile } = useScreenDetector();
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 px-7">
      <div className="flex flex-col items-start gap-[34px] md:gap-10 max-w-[540px] w-full">
        <div className="w-full flex items-center gap-7 justify-center md:justify-start">
          <div className="rounded-full bg-bg-secondary p-[10px]">
            <IoMdNotificationsOutline size={isMobile ? 21 : 28} color={colors.brand.primary} />
          </div>
          <div className="rounded-full bg-bg-secondary p-[10px]">
            <FiUser size={isMobile ? 21 : 28} color={colors.brand.primary} />
          </div>
        </div>
        <h2 className="text-center md:text-start font-rubik text-[28px] leading-[34px] md:text-[40px] md:leading-[44px]">
          A dura verdade é que <b className="gradient-text font-bold">apostar sem estratégia</b> é
          jogar seu <b className="gradient-text font-bold">dinheiro fora.</b>
        </h2>
        <p className="text-center md:text-start text-lg md:text-[22px] md:leading-[27px] font-extralight">
          Nós oferecemos análises aprofundadas e dados estatísticos que transformam suas apostas de
          meras tentativas no escuro em estratégias inteligentes e bem fundamentadas.
          <br />
          <br />
          Chega de confiar na sorte! É hora de agir com informações que realmente importam, elevando
          suas apostas a um patamar de sucesso comprovado.
          <br />
          <br />
          Com Betstats, você não apenas aposta, você investe de forma inteligente em cada jogo,
          transformando oportunidades em lucro real.
        </p>
      </div>
      <div className="relative">
        <Image src={SpendMoneyImage} alt="Imagem com um cesto de lixo cheio de dinheiro" />
        <div className="-z-10 absolute bg-brand-primary top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[500px] blur-[40rem]" />
      </div>
    </div>
  );
};
