'use client';

import { FootballBall } from '@/assets/brand/FootballBall';
import { Button } from '@/components/Button';
import { colors } from '@/theme/colors';
import { Card } from './components/Card';
import { useGridContent } from './hooks/useGridContent';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { ctaLink } from '@/config';

export const BetstatsIsForYou = () => {
  const { articles } = useGridContent();
  const { isMobile } = useScreenDetector();

  return (
    <section className="w-full flex flex-col items-center gap-6 pt-16 pb-14 md:pb-[215px] md:pt-[180px] px-5">
      <Button withoutAction scheme="outlined" className="py-2 px-6 border-common-grey-800">
        <FootballBall color={colors.brand.primary} />
        <span className="text-sm font-medium text-common-grey-800">A BETSTATS É PRA VOCÊ</span>
      </Button>
      <h2 className="text-3xl md:text-5xl font-rubik font-bold text-center max-w-[312px] md:max-w-auto">
        A <b className="gradient-text font-bold">BETSTATS</b> É PRA VOCÊ QUE...
      </h2>
      <div className="w-full max-w-[1378px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-5">
        {articles.map((article) => (
          <Card key={article.title} title={article.title} body={article.body} icon={article.icon} />
        ))}
      </div>
      <div className="mt-[40px] md:mt-12 flex flex-col items-center gap-2 md:gap-3">
        <Button isLink link={ctaLink} target="_blank" className="py-4 px-4 md:py-5 md:px-9">
          <span className="font-semibold text-xs md:text-base">
            JUNTE-SE A COMUNIDADE BETSTATS AGORA!
          </span>
          <FootballBall />
        </Button>
        <PagarmeLogo
          width={isMobile ? '152.24' : undefined}
          height={isMobile ? '21.06' : undefined}
        />
      </div>
    </section>
  );
};
