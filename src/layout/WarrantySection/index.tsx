import Image from 'next/image';
import Seal from '../../../public/images/warranty-seal.png';

export const WarrantySection = () => {
  return (
    <section className="mx-auto max-w-[1140px] w-full px-6 mb-20 md:mb-[176px]">
      <div className="flex flex-col items-center justify-center md:flex-row gap-8 md:items-center md:justify-between md:gap-[76px]">
        <Image
          src={Seal}
          alt="Imagem do selo de garantia de 7 dias"
          className="w-auto h-64 md:h-auto"
        />
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="font-rubik font-bold gradient-text text-[28px] leading-[36px] md:text-[40px] md:leading-[44px] text-center md:text-start">
            7 Dias de garantia
          </h2>
          <p className="text-lg md:text-[22px] md:leading-7 text-text-secondary font-light text-center md:text-start">
            Durante os 7 primeiros dias da sua assinatura, você pode solicitar reembolso a qualquer
            momento e por qualquer motivo, o dinheiro será devolvido sem enrolação.
            <br />
            <br />
            A solicitação pode ser feita via e-mail: contato@betstats.online
            <br />
            Ou pelo direct do Instagram: @betstats.online
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
