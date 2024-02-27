import Image from 'next/image';
import seal from '../../../public/images/seal.png';

export const WarrantySection = () => {
    return (
        <section className="mx-auto max-w-[1140px] w-full px-6 py-20">
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between md:gap-[76px]">
                <div>
                    <Image
                        src={seal}
                        alt="Imagem do selo de garantia de 7 dias"
                        className="w-auto h-64 md:h-auto"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h1 className="max-w-[439px] font-rubik font-semibold gradient-text text-4xl text-center md:text-5xl md:text-start mt-7">
                        7 Dias de garantia 
                    </h1>
                    <p className="text-[22px] leading-7 max-w-[600px] text-center md:text-left "> 
                        Durante os 7 primeiros dias da sua assinatura, você pode solicitar reembolso a qualquer momento e por qualquer motivo, o dinheiro será devolvido sem enrolação.
                        <br />
                        <br />
                        A solicitação pode ser feita via e-mail: contato@betstats.online
                        <br />
                        Ou pelo direct do Instagram: @betstats.online
                    </p>  
                </div>
            </div>
        </section>
    )
}

export default WarrantySection;

