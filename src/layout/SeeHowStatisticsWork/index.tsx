import Image from 'next/image';
import SeeHowStatisticsWorkImage from '../../../public/images/how-statistics-work.png';

export const SeeHowStatisticsWork = () => {
  return (
    <section className="mx-auto max-w-[1523px] w-full bg-green-gradient rounded-[30px] mt-[55px] md:mt-[178px] md:pt-6 md:pb-6 md:px-8 xl:pb-5 xl:pt-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
      <div className="mb-5">
        <Image
          src={SeeHowStatisticsWorkImage}
          alt="Imagem mostrando a tela inicial das estatisticas de um jogo"
          className="rounded-[26px] md:rounded-none"
        />
      </div>
      <div className="flex flex-col gap-[37px] md:gap-12 max-w-[518px] w-full px-[48px] pb-[69px] md:px-0 md:pb-0">
        <h2 className="font-rubik text-[28px] leading-[34px] md:text-[40px] md:leading-[44px]">
          Tome <b className="font-extrabold">decisões de apostas</b> embasadas em{' '}
          <b className="font-extrabold">análise de classe mundial.</b>
        </h2>
        <p className="text-lg md:text-[22px] leading-[28px]">
          Nosso sistema de análise processa uma{' '}
          <b className="font-bold">grande quantidade de dados</b>, incluindo histórico de jogos,
          performance de jogadores e tendências de mercado.
          <br />
          <br />
          Este método garante que cada recomendação seja baseada em análises técnicas e precisas,
          permitindo que você faça{' '}
          <b className="font-bold">
            apostas com confiança, guiadas por um conhecimento profundo e insights valiosos.
          </b>
        </p>
      </div>
    </section>
  );
};
