import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Star, Camera } from 'lucide-react';
import Link from 'next/link';

export default function Dexiosi() {
  const eventTypes = [
    {
      title: "Γάμος",
      href: "/gamos",
      description: "Μοναδικές στιγμές αγάπης στο Κτήμα Ωρίων. Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της δεξίωσης σας.",
      icon: Heart
    },
    {
      title: "Βάπτιση",
      href: "/vaptisi",
      description: "Πόσο ιδιαίτερο αλλά και πόσο χαρούμενο γεγονός! Η τελετή, αλλά και η δεξίωση που θα ακολουθήσει πρέπει να αντιπροσωπεύει την οικογένεια.",
      icon: Users
    },
    {
      title: "Εταιρικές Εκδηλώσεις",
      href: "/eterikes-ekdiloseis",
      description: "Η επαγγελματική σας εκδήλωση επαγγελματική μας ευθύνη. Η εμπειρία των συνεργατών μας καθιστεί τον χώρο μας ιδανικό για επιτυχημένες εκδηλώσεις.",
      icon: Star
    },
    {
      title: "Πάρτι",
      href: "/parti",
      description: "Στο Κτήμα Ωρίων, μετατρέπουμε τις ξεχωριστές σας στιγμές σε αξέχαστες εμπειρίες. Γενέθλια, αρραβώνας ή εταιρικό party.",
      icon: Camera
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Δεξίωση</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Εκδηλώσεις στο Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Το Κτήμα Ωρίων προσφέρει τον ιδανικό χώρο για όλες τις ειδικές σας στιγμές. 
                Από γάμους και βαπτίσεις έως εταιρικές εκδηλώσεις και πάρτι, 
                δημιουργούμε μαγικές εμπειρίες που θα θυμάστε για πάντα.
              </p>
              
              <p>
                Με εμπειρία, ευελιξία και αφοσίωση στη λεπτομέρεια, 
                εξασφαλίζουμε ότι κάθε εκδήλωσή σας θα είναι άψογη και αξέχαστη.
              </p>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Τύποι Εκδηλώσεων</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <event.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gradient-brand mb-4">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                        <Link
                          href={event.href}
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

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας δημιουργήσουμε μαζί την τέλεια εκδήλωση
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες της εκδήλωσής σας 
              και να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
              </button>
              <button className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
