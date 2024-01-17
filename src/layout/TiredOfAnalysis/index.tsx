import { Button } from '@/components/Button';

export const TiredOfAnalysis = () => {
  return (
    <section className="w-full flex flex-col items-center py-[40px] md:py-[120px] px-5 lg:px-0 gap-6">
      <Button withoutAction scheme="outlined" className="px-4 py-2">
        <h3 className="text-xs md:text-base lg:text-lg font-medium">CANSADO DE ANÁLISES</h3>
      </Button>
      <h2 className="max-w-[701px] w-full text-center font-rubik font-normal text-3xl lg:text-[40px] lg:leading-[47px]">
        Cansado de análises imprecisas, perdas constantes e estratégias que{' '}
        <b className="font-extrabold text-brand-primary">não funcionam?</b>
      </h2>
      <p className="max-w-[941px] w-full text-center font-extralight text-lg lg:text-[22px] lg:leading-[34px]">
        A desilusão vem quando análises mal fundamentadas levam a perdas contínuas. Com Betstats,
        você quebra esse ciclo vicioso. Nossa abordagem baseada em dados oferece a clareza nec
        essária para transformar cada aposta de um risco incerto em uma decisão estratégica bem
        calculada.
      </p>
    </section>
  );
};
