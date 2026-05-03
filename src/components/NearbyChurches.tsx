import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Church, MapPin, Clock } from 'lucide-react';

interface ChurchItem {
  name: string;
  distance: string;
  time: string;
  link: string;
}

export const NearbyChurches = () => {
  const churches: ChurchItem[] = [
    {
      name: "Άγιος Αλέξανδρος, Δασκαλειό",
      distance: "3,8 χλμ",
      time: "8'",
      link: "/el/ekklisies/agios-alexandros-daskaleio"
    },
    {
      name: "Παναγία Γκαρικά, Κερατέα",
      distance: "3,1 χλμ",
      time: "6'",
      link: "/el/ekklisies/panagia-gkarika"
    },
    {
      name: "Αγία Τριάδα, Κερατέα",
      distance: "5 χλμ",
      time: "10'",
      link: "/el/ekklisies/agia-triada"
    },
    {
      name: "Προφήτης Ηλίας, Θορικό",
      distance: "8,8 χλμ",
      time: "11'",
      link: "/ekklisies"
    },
    {
      name: "Άγιος Παντελεήμονας, Κερατέα",
      distance: "8,6 χλμ",
      time: "13'",
      link: "/el/ekklisies/agios-panteleimonas-keratea"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <Church className="w-16 h-16 text-brand-main mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-brand">Κοντινές Εκκλησίες</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Παραθαλάσσια εκκλησάκια για την τελετή σας, σε απόσταση αναπνοής από το κτήμα
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
                      <span>{church.time} οδικώς</span>
                    </div>
                    <div className="text-brand-main font-semibold text-xs">
                      Δείτε Λεπτομέρειες →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/ekklisies">
            <button className="button button4">
              ΔΕΙΤΕ ΟΛΕΣ ΤΙΣ ΕΚΚΛΗΣΙΕΣ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
