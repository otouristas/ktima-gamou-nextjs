import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, Clock, Users, Car, Phone, Navigation2, Heart } from 'lucide-react';

export default function AgiosAlexandrosDaskaleio() {
  const details = [
    { icon: MapPin, title: "Τοποθεσία", value: "Δασκαλειό, Κερατέα" },
    { icon: Clock, title: "Απόσταση από Κτήμα", value: "10 λεπτά (5.2 km)" },
    { icon: Users, title: "Χωρητικότητα", value: "Η διαθεσιμότητα εξαρτάται, και μέσα και έξω. Ζητήστε πληροφορίες" },
    { icon: Car, title: "Parking", value: "Διαθέσιμο" }
  ];

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="text-gradient-brand">Άγιος Αλέξανδρος Δασκαλειό</span>
              </h1>
              <p className="text-xl text-center text-muted-foreground mb-12">
                Ρομαντικό εκκλησάκι δίπλα στη θάλασσα, ιδανικό για γάμο
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {details.map((detail, index) => (
                  <Card key={index} className="card-elegant">
                    <CardContent className="p-6 flex items-center">
                      <detail.icon className="w-10 h-10 text-brand-main mr-4" />
                      <div>
                        <div className="text-sm text-muted-foreground">{detail.title}</div>
                        <div className="font-bold">{detail.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="card-elegant mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gradient-brand">Περιγραφή</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ο Άγιος Αλέξανδρος στο Δασκαλειό είναι ένα από τα πιο γραφικά εκκλησάκια της περιοχής, 
                    με μοναδική θέα στη θάλασσα. Η τοποθεσία του το καθιστά ιδανικό για ρομαντικούς γάμους, 
                    προσφέροντας φωτογενικά σκηνικά και ήσυχο περιβάλλον.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Το εκκλησάκι βρίσκεται μόλις 10 λεπτά από το Κτήμα Ωρίων, καθιστώντας τη μετάβαση από 
                    την τελετή στη δεξίωση απόλυτα ομαλή για εσάς και τους καλεσμένους σας.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gradient-brand">Διαδρομή προς Κτήμα Ωρίων</h2>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold text-brand-main mr-2">1.</span>
                      Από το εκκλησάκι, κατευθυνθείτε προς Κερατέα (5 λεπτά)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-brand-main mr-2">2.</span>
                      Ακολουθήστε τις πινακίδες προς Κτήμα Ωρίων (5 λεπτά)
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-brand-main mr-2">3.</span>
                      Συνολική διάρκεια: 10 λεπτά
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Popular Searches */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href="/el/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/el/profitis-ilias-thoriko" className="text-brand-main hover:underline">Προφήτης Ηλίας</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/gamos" className="text-brand-main hover:underline">Γάμος</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/vaptisi" className="text-brand-main hover:underline">Βάπτιση</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/o-horos" className="text-brand-main hover:underline">Δείτε το Κτήμα</a>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link href="/el/ktima-gamou-athina">
                  <button className="button button4 mb-4">
                    Δείτε το Κτήμα Ωρίων
                  </button>
                </Link>
                <br />
                <Link href="/contact">
                  <button className="button button4">
                    Κλείστε Επίσκεψη
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
