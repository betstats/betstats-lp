'use client';

import { Button } from '@/components/Button';
import { PlanCard } from './components/components/PlanCard';
import { usePlans } from './components/hooks/usePlans';
import { ctaLink } from '@/config';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { useScreenDetector } from '@/hooks/useScreenDetector';

export const Prices = () => {
  const { plans } = usePlans();
  const { isMobile } = useScreenDetector();

  return (
    <section className="w-full flex flex-col items-center mb-[62px] md:mb-[176px] px-5 lg:px-0 gap-6">
      <Button withoutAction scheme="outlined" className="px-4 py-2">
        <h3 className="text-xs md:text-base lg:text-lg font-medium">PREÇOS</h3>
      </Button>
      <h2 className="max-w-[701px] w-full text-center font-rubik font-normal text-3xl lg:text-[40px] lg:leading-[47px]">
        Confira nossos planos
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:px-5">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
      <div className="w-full max-w-[400px] flex flex-col md:mt-4 gap-[10px] items-center">
        <Button
          isLink
          link={ctaLink}
          target="_blank"
          className="py-4 px-[26px] md:py-[22px] md:px-9 w-full justify-center"
        >
          <span className="text-base font-bold">FAÇA SUA INSCRIÇÃO!</span>
        </Button>
        <PagarmeLogo
          width={isMobile ? '152.24' : undefined}
          height={isMobile ? '21.06' : undefined}
        />
      </div>
    </section>
  );
};
