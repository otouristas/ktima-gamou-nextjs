import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
const pleiadesLogo = "/images/pleiades%20LOGO_transparent.black.png";
const topeventsLogo = "/images/topevents-logo.png";

export const PartnersEn = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-brand">Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selected partners who elevate your event experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-elegant group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex items-center justify-center">
              <Image
                src={pleiadesLogo}
                alt="Pleiades Catering Stars"
                width={320}
                height={320}
                className="w-full max-w-[320px] h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="320px"
              />
            </CardContent>
          </Card>
          
          <Card className="card-elegant group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex items-center justify-center">
              <Image
                src={topeventsLogo}
                alt="Top Events Entertainment Services"
                width={320}
                height={320}
                className="w-full max-w-[320px] h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="320px"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
