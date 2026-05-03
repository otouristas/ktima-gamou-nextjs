import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Building, PartyPopper, Camera, Church } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  link: string;
}

interface RelatedServicesEnProps {
  currentPage?: string;
}

export const RelatedServicesEn = ({ currentPage }: RelatedServicesEnProps) => {
  const allServices: Service[] = [
    {
      title: "Weddings",
      description: "Unique wedding receptions with sea view",
      icon: Heart,
      link: "/en/weddings"
    },
    {
      title: "Baptisms",
      description: "Unforgettable christening celebrations for the family",
      icon: Baby,
      link: "/en/baptism"
    },
    {
      title: "Corporate Events",
      description: "Professional venue for corporate events",
      icon: Building,
      link: "/en/services"
    },
    {
      title: "Parties",
      description: "Ideal venue for every celebration",
      icon: PartyPopper,
      link: "/en/services"
    },
    {
      title: "Photography",
      description: "Professional event photography services",
      icon: Camera,
      link: "/en/photographer"
    },
    {
      title: "Churches",
      description: "Seaside chapels near the venue",
      icon: Church,
      link: "/en/churches"
    }
  ];

  // Filter out current page
  const services = allServices.filter(service => service.link !== currentPage).slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient-brand">Related Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-brand-main/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-brand-main" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-brand">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <div className="mt-4 text-brand-main font-semibold text-sm">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
