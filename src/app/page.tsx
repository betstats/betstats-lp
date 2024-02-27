import { Footer } from '@/components/Footer';
import { AccessAnalysis } from '@/layout/AccessAnalysis';
import { BetstatsIsForYou } from '@/layout/BetstatsIfForYour';
import { EvolveHasTipster } from '@/layout/EvolveHasTipster';
import { FAQ } from '@/layout/FAQ';
import { GreenRange } from '@/layout/GreenRange';
import { Hero } from '@/layout/Hero';
import { SeeHowStatisticsWork } from '@/layout/SeeHowStatisticsWork';
import { SpendMoney } from '@/layout/SpendMoney';
import { TakeDecisions } from '@/layout/TakeDecisions';
import { TiredOfAnalysis } from '@/layout/TiredOfAnalysis';
import MobileGreenLight from '@/../public/images/mobile-green-light.png';
import Image from 'next/image';
import {WarrantySection} from '@/layout/WarrantySection'

export default function Home() {
  return (
    <main className="flex flex-col text-text-primary relative">
      <div className="md:hidden block absolute top-0 right-0">
        <Image src={MobileGreenLight} alt="Luz verde" />
      </div>
      <Hero />
      <GreenRange />
      <TiredOfAnalysis />
      <TakeDecisions />
      <BetstatsIsForYou />
      <SpendMoney />
      <SeeHowStatisticsWork />
      <AccessAnalysis />
      <WarrantySection />
      <FAQ />
      <EvolveHasTipster />
      <Footer />
    </main>
  );
}
