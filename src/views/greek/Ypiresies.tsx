import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Camera } from 'lucide-react';
import Link from 'next/link';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { PopularSearches } from '@/components/PopularSearches';

export default function Ypiresies() {
  const services = [
    {
      title: "Φωτογράφος",
      href: "/fotografos",
      description: "Επαγγελματική φωτογραφία και βιντεοσκόπηση για τις πιο σημαντικές στιγμές της ζωής σας. Καταγράφουμε με αγάπη και τέχνη κάθε λεπτομέρεια της εκδήλωσής σας.",
      icon: Camera
    }
  ];

  const additionalServices = [
    {
      title: "Ειδικό Μενού για Παιδιά",
      description: "Προσαρμοσμένο μενού με επιλογές για όλες τις ηλικίες, συμπεριλαμβανομένων ειδικών πιάτων για παιδιά."
    },
    {
      title: "Φωτογραφία & Video",
      description: "Επαγγελματική καταγραφή όλων των στιγμών - από την προετοιμασία έως το τέλος του πάρτι - για να διατηρήσετε για πάντα αυτές τις αξέχαστες στιγμές."
    },
    {
      title: "Διακόσμηση & Στολισμός",
      description: "Μαγευτική διακόσμηση με λουξ στοιχεία και φυσικά άνθη που θα δημιουργήσει την τέλεια ατμόσφαιρα."
    }
  ];

  const servicesFAQs = [
    { question: "Ποιες υπηρεσίες παρέχετε;", answer: "Προσφέρουμε ολοκληρωμένες υπηρεσίες: catering, διακόσμηση, φωτισμό, ήχο, επαγγελματία φωτογράφο (Studio Alpha) και πλήρη συντονισμό της εκδήλωσης." },
    { question: "Μπορούμε να επιλέξουμε μόνο ορισμένες υπηρεσίες;", answer: "Φυσικά! Μπορείτε να επιλέξετε τις υπηρεσίες που σας ενδιαφέρουν και να φέρετε δικούς σας συνεργάτες για τις υπόλοιπες." },
    { question: "Συνεργάζεστε με φωτογράφους;", answer: "Ναι, συνεργαζόμαστε με το επαγγελματικό Studio Alpha που διαθέτει πολύχρονη εμπειρία σε γάμους και βαπτίσεις." },
    { question: "Παρέχετε DJ ή μουσική;", answer: "Μπορούμε να σας προτείνουμε έμπειρους DJ και μουσικούς ή μπορείτε να φέρετε τους δικούς σας." },
    { question: "Μπορούμε να φέρουμε δικούς μας συνεργάτες;", answer: "Απολύτως! Είστε ελεύθεροι να επιλέξετε όποιους συνεργάτες επιθυμείτε." },
    { question: "Υπάρχει διακοσμητής;", answer: "Συνεργαζόμαστε με έμπειρους διακοσμητές ή μπορείτε να φέρετε τον δικό σας." },
    { question: "Τι περιλαμβάνει το catering;", answer: "Το catering περιλαμβάνει πλήρες μενού προσαρμοσμένο στις επιθυμίες σας, με επιλογές για όλες τις ηλικίες." },
    { question: "Παρέχετε τούρτα;", answer: "Ναι, μπορούμε να οργανώσουμε την τούρτα σας μέσω των συνεργατών μας ή μπορείτε να φέρετε τη δική σας." }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Υπηρεσίες</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Επαγγελματικές Υπηρεσίες στο Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Στο <Link href="/o-horos" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> παρέχουμε ολοκληρωμένες υπηρεσίες για όλες τις εκδηλώσεις σας. 
                Από τον σχεδιασμό μέχρι τη <Link href="/fotografos" className="text-brand-main hover:underline">φωτογράφιση</Link>, φροντίζουμε κάθε λεπτομέρεια να είναι άψογη για τον <Link href="/gamos" className="text-brand-main hover:underline">γάμο</Link> ή τη <Link href="/vaptisi" className="text-brand-main hover:underline">βάπτιση</Link> σας.
              </p>
              
              <p>
                Με εμπειρία, ευελιξία και αφοσίωση στη λεπτομέρεια, 
                δημιουργούμε μαγικές εμπειρίες που θα θυμάστε για πάντα.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Κύριες Υπηρεσίες</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <service.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Link
                          href={service.href}
                          className="inline-block button button4 group-hover:scale-105 transition-transform duration-300"
                        >
                          ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Επιπλέον Υπηρεσίες</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQs */}
        <FAQ items={servicesFAQs} title="Συχνές Ερωτήσεις για Υπηρεσίες" />

        {/* Popular Searches */}
        <PopularSearches 
          links={[
            { label: "Φωτογράφος", href: "/fotografos" },
            { label: "Γάμος", href: "/gamos" },
            { label: "Βάπτιση", href: "/vaptisi" },
            { label: "Χώρος", href: "/o-horos" }
          ]}
        />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας συζητήσουμε τις ανάγκες σας
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τις υπηρεσίες μας 
              και πώς μπορούμε να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
                </button>
              </a>
              <a href="/gamos">
                <button className="button button4">
                  ΔΕΙΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ ΜΑΣ
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
