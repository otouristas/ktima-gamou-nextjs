import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Church } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';
import Link from 'next/link';

export default function Ekklisies() {
  const churches = [
    {
      name: 'Άγιος Αλέξανδρος, Δασκαλειό',
      distance: '3,8 χλμ',
      time: "8'",
      icon: Church
    },
    {
      name: 'Άγιος Παντελεήμονας, Κακή Θάλασσα Κερατέας',
      distance: '8,6 χλμ',
      time: "13'",
      icon: Church
    },
    {
      name: 'Παναγία Γκαρικά, Κερατέα',
      distance: '3,1 χλμ',
      time: "6'",
      icon: Church
    },
    {
      name: 'Αγία Τριάδα, Κερατέα',
      distance: '5 χλμ',
      time: "10'",
      icon: Church
    },
    {
      name: 'Προφήτης Ηλίας, Λιμανάκι Περιγιάλι Κερατέας',
      distance: '8,8 χλμ',
      time: "11'",
      icon: Church
    },
    {
      name: 'Άγιος Νικόλαος, Θορικό Κερατέας',
      distance: '12,3 χλμ',
      time: "12'",
      icon: Church
    },
    {
      name: 'Άγιος Νεκτάριος, Καμάριζα Λαυρίου',
      distance: '15,9 χλμ',
      time: "15'",
      icon: Church
    },
    {
      name: 'Άγιος Ανδρέας, Λαύριο',
      distance: '12,8 χλμ',
      time: "12'",
      icon: Church
    }
  ];

  const churchFAQs = [
    { question: "Πόσο μακριά είναι οι εκκλησίες από το Κτήμα Ωρίων;", answer: "Οι εκκλησίες απέχουν από 3-15 λεπτά οδικώς από το Κτήμα Ωρίων. Η πλησιέστερη είναι η Παναγία Γκαρικά (3.1 km, 6') και ο Άγιος Αλέξανδρος Δασκαλειό (3.8 km, 8')." },
    { question: "Ποιες εκκλησίες είναι δίπλα στη θάλασσα;", answer: "Ο Προφήτης Ηλίας Θορικό και ο Άγιος Παντελεήμονας Κερατέα προσφέρουν εκπληκτική θέα στη θάλασσα και είναι ιδανικές για παραθαλάσσιες τελετές." },
    { question: "Μπορώ να κάνω τόσο τη τελετή όσο και τη δεξίωση την ίδια μέρα;", answer: "Απολύτως! Όλες οι εκκλησίες είναι σε μικρή απόσταση, επιτρέποντάς σας να ολοκληρώσετε την τελετή και να μεταβείτε στο Κτήμα Ωρίων για τη δεξίωση εντός 10-15 λεπτών." },
    { question: "Ποια εκκλησία είναι καλύτερη για μικρούς γάμους;", answer: "Η Παναγία Γκαρικά είναι ιδανική για μικρούς, ιντιμ γάμους. Ο Άγιος Αλέξανδρος Δασκαλειό είναι μεγαλύτερος και κατάλληλος για γάμους έως 170 άτομα." },
    { question: "Παρέχετε οδηγίες για τις εκκλησίες;", answer: "Ναι, παρέχουμε λεπτομερείς οδηγίες για όλες τις εκκλησίες και μπορούμε να σας βοηθήσουμε να συντονίσετε την τελετή και τη δεξίωση." },
    { question: "Χρειάζεται να κλείσω την εκκλησία μόνος μου;", answer: "Συνήθως ναι, αλλά μπορούμε να σας παράσχουμε όλες τις απαραίτητες πληροφορίες επικοινωνίας και να σας βοηθήσουμε με το συντονισμό." }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <Church className="w-20 h-20 text-brand-main mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Εκκλησίες</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Το Κτήμα Ωρίων απέχει ελάχιστα από πολλά γραφικά εκκλησάκια και εκκλησίες στη γύρω περιοχή.
              Σε απόσταση που κυμαίνεται από <strong>5 - 15 λεπτά</strong>, μπορείτε να τελέσετε το μυστήριο του γάμου
              ή της βάπτισης, απολαμβάνοντας καταπληκτική θέα στο Αιγαίο, πριν ολοκληρώσετε την εκδήλωσή σας
              στο Κτήμα Ωρίων.
            </p>
          </div>
        </section>

        {/* Churches List */}
        <section className="section-padding">
          <div className="container-max max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Κοντινές Εκκλησίες</span>
            </h2>

            <div className="grid gap-6">
              {churches.map((church, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-brand-main/10 rounded-full">
                          <church.icon className="w-8 h-8 text-brand-main" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {index + 1}. {church.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Απόσταση: {church.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Χρόνος: {church.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-brand">Χάρτης Εκκλησιών</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Δείτε τις τοποθεσίες όλων των εκκλησιών στον χάρτη και επιλέξτε αυτή που σας ταιριάζει
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1I1J1VWCrLSQc6iwlQkAegUrpr74rcwA&ehbc=2E312F&noprof=1"
                width="100%"
                height="760"
                style={{ border: 0, marginTop: '-70px' }}
                loading="lazy"
                title="Χάρτης Εκκλησιών κοντά στο Κτήμα Ωρίων"
              />
            </div>
          </div>
        </section>

        {/* Church Detail Links */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Εξερευνήστε τις Εκκλησίες</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/el/ekklisies/agios-alexandros-daskaleio" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Άγιος Αλέξανδρος Δασκαλειό
                </h3>
                <p className="text-sm text-muted-foreground mb-3">3.8 km • 8'</p>
                <p className="text-xs text-muted-foreground">Ιδανική για γάμους έως 170 άτομα</p>
              </a>

              <a href="/el/ekklisies/profitis-ilias-thoriko" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Προφήτης Ηλίας Θορικό
                </h3>
                <p className="text-sm text-muted-foreground mb-3">8.8 km • 11'</p>
                <p className="text-xs text-muted-foreground">Εκπληκτική θέα στη θάλασσα</p>
              </a>

              <a href="/el/ekklisies/agios-panteleimonas-keratea" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Άγιος Παντελεήμονας Κερατέα
                </h3>
                <p className="text-sm text-muted-foreground mb-3">8.6 km • 13'</p>
                <p className="text-xs text-muted-foreground">Παραδοσιακή ρουστίκ εκκλησία</p>
              </a>

              <a href="/el/ekklisies/panagia-gkarika" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Παναγία Γκαρικά
                </h3>
                <p className="text-sm text-muted-foreground mb-3">3.1 km • 6'</p>
                <p className="text-xs text-muted-foreground">Ιδανική για μικρούς γάμους</p>
              </a>

              <a href="/el/ekklisies/agia-triada" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Αγία Τριάδα
                </h3>
                <p className="text-sm text-muted-foreground mb-3">5 km • 10'</p>
                <p className="text-xs text-muted-foreground">Πέτρινο γραφικό εκκλησάκι</p>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQ Section */}
        <FAQ items={churchFAQs} title="Συχνές Ερωτήσεις για Εκκλησίες" />

        {/* Related Services */}
        <RelatedServices currentPage="/ekklisies" />

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Συνδυάστε Τελετή & Δεξίωση
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επιλέξτε την εκκλησία που σας ταιριάζει και επικοινωνήστε μαζί μας για να οργανώσουμε
              την υπέροχη δεξίωσή σας στο Κτήμα Ωρίων.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="button button4">
                ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
              </a>
              <a href="/gamos" className="button button4">
                ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ ΓΑΜΟΥ
              </a>
            </div>

            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <a href="/el/ktima-gamou-athina" className="text-brand-main hover:underline">Κτήμα Γάμου Αθήνα</a>
              <span className="text-muted-foreground">•</span>
              <a href="/gamos" className="text-brand-main hover:underline">Γάμος</a>
              <span className="text-muted-foreground">•</span>
              <a href="/vaptisi" className="text-brand-main hover:underline">Βάπτιση</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
