import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Building, PartyPopper, Camera, Church } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  link: string;
}

interface RelatedServicesProps {
  currentPage?: string;
}

export const RelatedServices = ({ currentPage }: RelatedServicesProps) => {
  const allServices: Service[] = [
    {
      title: "Γάμος",
      description: "Μοναδικές γαμήλιες δεξιώσεις με θέα θάλασσα",
      icon: Heart,
      link: "/gamos"
    },
    {
      title: "Βάπτιση",
      description: "Αξέχαστες βαπτιστικές εκδηλώσεις για την οικογένεια",
      icon: Baby,
      link: "/vaptisi"
    },
    {
      title: "Εταιρικές Εκδηλώσεις",
      description: "Επαγγελματικός χώρος για εταιρικά events",
      icon: Building,
      link: "/ypiresies"
    },
    {
      title: "Πάρτι",
      description: "Ιδανικός χώρος για κάθε γιορτή",
      icon: PartyPopper,
      link: "/ypiresies"
    },
    {
      title: "Φωτογράφος",
      description: "Επαγγελματική φωτογράφηση εκδηλώσεων",
      icon: Camera,
      link: "/fotografos"
    },
    {
      title: "Εκκλησίες",
      description: "Παραθαλάσσια εκκλησάκια κοντά στο κτήμα",
      icon: Church,
      link: "/ekklisies"
    }
  ];

  // Filter out current page
  const services = allServices.filter(service => service.link !== currentPage).slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient-brand">Σχετικές Υπηρεσίες</span>
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
                    Μάθετε Περισσότερα →
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
