import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Church, MapPin, Clock } from 'lucide-react';

interface ChurchItem {
  name: string;
  distance: string;
  time: string;
  link: string;
}

export const NearbyChurchesEn = () => {
  const churches: ChurchItem[] = [
    {
      name: "Agios Alexandros, Daskalio",
      distance: "3.8 km",
      time: "8'",
      link: "/en/churches/agios-alexandros-daskaleio"
    },
    {
      name: "Panagia Garika, Keratea",
      distance: "3.1 km",
      time: "6'",
      link: "/en/churches/panagia-gkarika"
    },
    {
      name: "Agia Triada, Keratea",
      distance: "5 km",
      time: "10'",
      link: "/en/churches/agia-triada"
    },
    {
      name: "Profitis Ilias, Thoriko",
      distance: "8.8 km",
      time: "11'",
      link: "/en/churches"
    },
    {
      name: "Agios Panteleimonas, Keratea",
      distance: "8.6 km",
      time: "13'",
      link: "/en/churches/agios-panteleimonas-keratea"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <Church className="w-16 h-16 text-brand-main mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-brand">Nearby Churches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seaside chapels for your ceremony, just minutes away from the venue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {churches.map((church, index) => (
            <Link key={index} href={church.link}>
              <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-brand-main/10 rounded-full flex items-center justify-center">
                      <Church className="w-6 h-6 text-brand-main" />
                    </div>
                    <h3 className="font-bold text-sm leading-tight">{church.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{church.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{church.time} drive</span>
                    </div>
                    <div className="text-brand-main font-semibold text-xs">
                      View Details →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/en/churches">
            <button className="button button4">
              VIEW ALL CHURCHES
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
