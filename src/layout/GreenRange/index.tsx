'use client';
import { FootballBall } from '@/assets/brand/FootballBall';
import { useScreenDetector } from '@/hooks/useScreenDetector';

const RepeatContent = () => {
  const { isMobile } = useScreenDetector();

  return (
    <div className="flex items-center gap-[5px] md:gap-3 min-w-fit">
      <span className="text-bg-main md:text-base text-[10px]">
        CONQUISTE BONS <b>RESULTADOS</b> COM A <b>BETSTATS</b>
      </span>
      <FootballBall width={isMobile ? '10.3' : undefined} height={isMobile ? '10.28' : undefined} />
    </div>
  );
};

export const GreenRange = () => {
  return (
    <div className="bg-green-gradient w-full h-[47px] md:h-[90px] flex items-center gap-[5px] md:gap-3 overflow-hidden">
      <div className="ml-[-120px] min-w-fit">
        <RepeatContent />
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <RepeatContent key={index} />
      ))}
    </div>
  );
};
