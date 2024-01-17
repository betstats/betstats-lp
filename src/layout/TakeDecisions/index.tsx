import Image from 'next/image';
import MobileDashboard from '../../../public/images/mobile-dashboard.png';

export const TakeDecisions = () => {
  return (
    <section className="w-full px-5">
      <div className="mx-auto max-w-[1523px] w-full bg-green-gradient rounded-[30px] md:px-9 md:pt-6 md:pb-6 xl:pb-5 xl:pt-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
        <div className="w-full">
          <Image
            priority
            src={MobileDashboard}
            alt="Imagem mostrando a versao mobile do dashboard"
            className="rounded-[26px] md:rounded-none"
          />
        </div>
        <div className="flex flex-col items-start gap-[37px] lg:gap-12 max-w-[900px] w-full pb-[69px] px-[48px] md:px-0 md:pb-0">
          <h2 className="font-rubik text-[28px] leading-[34px] md:text-[40px] md:leading-[48px] w-full">
            Tome <b>decisões de apostas</b> embasadas em <b>análise de classe mundial.</b>
          </h2>
          <p className="text-lg md:text-[22px] leading-[28px]">
            Nosso sistema de análise processa uma <b>grande quantidade de dados</b>, incluindo
            histórico de jogos, performance de jogadores e tendências de mercado.
            <br />
            <br />
            Este método garante que cada recomendação seja baseada em análises técnicas e precisas,
            permitindo que você faça{' '}
            <b>apostas com confiança, guiadas por um conhecimento profundo e insights valiosos.</b>
          </p>
        </div>
      </div>
    </section>
  );
};
