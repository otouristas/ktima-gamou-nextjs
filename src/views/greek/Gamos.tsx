import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Calendar, MapPin, Star } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';
import Link from 'next/link';

interface WeddingPhoto {
  readonly src: string;
  readonly alt: string;
}

export default function Gamos() {
  const weddingPhotos: readonly WeddingPhoto[] = [
    { src: "/final-photos/gamos/20.jpg", alt: "Διακοσμημένο νυφικό τραπέζι στο Κτήμα Ωρίων" },
    { src: "/final-photos/gamos/DSC_7899.JPG", alt: "Πισίνα και φωτισμός σε γαμήλια δεξίωση" },
    { src: "/final-photos/gamos/DSC_7943.JPG", alt: "Ρομαντικός διάδρομος με φανάρια" },
    { src: "/final-photos/gamos/DSC_8030.JPG", alt: "Στολισμός δεξίωσης με ανθοσυνθέσεις" },
    { src: "/final-photos/gamos/IMG_0169.jpeg", alt: "Ζευγάρι στον κήπο μετά τον γάμο" },
    { src: "/final-photos/gamos/IMG_0174.jpeg", alt: "Στολισμένη καμάρα για φωτογράφηση" },
    { src: "/final-photos/gamos/IMG_0234.jpeg", alt: "Δεξίωση με φωτεινές γιρλάντες" },
    { src: "/final-photos/gamos/IMG_0237.jpeg", alt: "Λεπτομέρεια στολισμού τραπεζιών" },
    { src: "/final-photos/gamos/IMG_0804.jpeg", alt: "Ατμοσφαιρικός φωτισμός δίπλα στην πισίνα" },
    { src: "/final-photos/gamos/IMG_0810.jpeg", alt: "Πολυτελής εξωτερικός χώρος δεξίωσης" },
    { src: "/final-photos/gamos/IMG_0815.jpeg", alt: "Εσωτερική αίθουσα με πολυελαίους" },
    { src: "/final-photos/gamos/IMG_0817.jpeg", alt: "Στολισμένη είσοδος δεξίωσης" },
    { src: "/final-photos/gamos/IMG_0825.jpeg", alt: "Γαμήλιο setup με λευκά λουλούδια" },
    { src: "/final-photos/gamos/IMG_0833.jpeg", alt: "Στολισμένα καθίσματα κήπου" },
    { src: "/final-photos/gamos/IMG_0851.jpeg", alt: "Γαμήλια δεξίωση με θέα στον κήπο" },
    { src: "/final-photos/gamos/IMG_0860.jpeg", alt: "Βραδινή φωτογράφηση ζευγαριού" },
    { src: "/final-photos/gamos/IMG_1795.jpeg", alt: "Γαμήλια τούρτα μπροστά από φωτισμούς" },
    { src: "/final-photos/gamos/IMG_2240.jpeg", alt: "Στολισμός με κρεμαστά φώτα και άνθη" },
    { src: "/final-photos/gamos/IMG_2791.jpeg", alt: "Κεντρικός κήπος για δεξιώσεις" },
    { src: "/final-photos/gamos/IMG_3008.jpeg", alt: "Στολισμένο τραπέζι καλεσμένων" },
    { src: "/final-photos/gamos/IMG_5466.jpeg", alt: "Γαμήλιο setup δίπλα στην πισίνα" },
    { src: "/final-photos/gamos/IMG_7904.JPG", alt: "Άποψη χώρου με πολυτελή φωτισμό" }
  ];

  const weddingFeatures = [
    {
      icon: Heart,
      title: "Προσωποποιημένος Σχεδιασμός",
      description: "Κάθε γάμος είναι μοναδικός και προσαρμόζουμε κάθε λεπτομέρεια στις επιθυμίες σας"
    },
    {
      icon: Users,
      title: "Επαγγελματική Οργάνωση",
      description: "Εμπειρογνωμοσύνη και φαντασία για μια άψογη γαμήλια δεξίωση"
    },
    {
      icon: Camera,
      title: "Μαγευτικές Φωτογραφίες",
      description: "Το φυσικό περιβάλλον του κτήματος δημιουργεί υπέροχα σκηνικά"
    },
    {
      icon: Star,
      title: "Τέλεια Εξυπηρέτηση",
      description: "Η απαίτησή σας για τελειότητα είναι ο απόλυτος στόχος μας"
    }
  ];

  const weddingFAQs = [
    { question: "Πόσο κοστίζει ο γάμος στο Κτήμα Ωρίων;", answer: "Επικοινωνήστε μαζί μας για προσωποποιημένη προσφορά. Κάθε γάμος είναι μοναδικός και οι τιμές εξαρτώνται από τον αριθμό καλεσμένων, το μενού και τις υπηρεσίες που επιλέγετε." },
    { question: "Τι περιλαμβάνει η γαμήλια δεξίωση;", answer: "Η γαμήλια δεξίωση περιλαμβάνει νοίκι χώρου, catering, διακόσμηση, φωτισμό, ηχητικό σύστημα, parking και συντονισμό εκδήλωσης. Μπορούμε να δημιουργήσουμε προσαρμοσμένα πακέτα βάσει των αναγκών σας." },
    { question: "Πόσους καλεσμένους χωράει για γάμο;", answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει γάμους διαφόρων μεγεθών με εκτεταμένο χώρο στάθμευσης. Διαθέτουμε εσωτερικό κλιματιζόμενο χώρο και εξωτερικό χώρο." },
    { question: "Υπάρχουν κοντινές εκκλησίες για την τελετή;", answer: "Ναι, υπάρχουν πολλές όμορφες παραθαλάσσιες εκκλησίες 5-15 λεπτά από το Κτήμα Ωρίων, συμπεριλαμβανομένων των Άγιος Αλέξανδρος, Παναγία Γκαρικά και Προφήτης Ηλίας." },
    { question: "Παρέχετε υπηρεσίες catering;", answer: "Ναι, προσφέρουμε πλήρεις υπηρεσίες catering με προσαρμοσμένα μενού βάσει των προτιμήσεων και απαιτήσεών σας." },
    { question: "Μπορούμε να κάνουμε τόσο την τελετή όσο και τη δεξίωση στο κτήμα;", answer: "Ενώ δεν πραγματοποιούμε τελετές στον χώρο, είμαστε πολύ κοντά σε όμορφες εκκλησίες. Μπορείτε να κάνετε την τελετή σε κοντινή εκκλησία και τη δεξίωση στο Κτήμα Ωρίων." },
    { question: "Υπάρχει διαθέσιμο parking για καλεσμένους;", answer: "Ναι, έχουμε τεράστιο χώρο δωρεάν στάθμευσης με πάνω από 100 θέσεις για όλους τους καλεσμένους του γάμου σας." },
    { question: "Ποιες υπηρεσίες παρέχετε για γάμους;", answer: "Προσφέρουμε ολοκληρωμένες υπηρεσίες γάμου: χώρο, catering, διακόσμηση, φωτισμό, ήχο και συνεργαζόμαστε με επαγγελματίες φωτογράφους. Χειριζόμαστε κάθε λεπτομέρεια για την τέλεια μέρα σας." },
    { question: "Μπορούμε να επισκεφτούμε το κτήμα πριν την κράτηση;", answer: "Απολύτως! Ενθαρρύνουμε τα ζευγάρια να επισκεφτούν το Κτήμα Ωρίων και να δουν το μαγευτικό περιβάλλον. Επικοινωνήστε μαζί μας για να προγραμματίσουμε δωρεάν ξενάγηση." },
    { question: "Είναι ο χώρος κατάλληλος για όλες τις εποχές;", answer: "Ναι, διαθέτουμε τόσο πλήρως κλιματιζόμενη εσωτερική αίθουσα όσο και όμορφους εξωτερικούς χώρους, καθιστώντας τον χώρο μας ιδανικό για γάμους σε οποιαδήποτε εποχή." },
    { question: "Διαθέτετε καταλύματα για καλεσμένους;", answer: "Ενώ δεν έχουμε καταλύματα στο χώρο, μπορούμε να συστήσουμε κοντινά ξενοδοχεία και καταλύματα για τους καλεσμένους σας." },
    { question: "Μπορούμε να προσαρμόσουμε τη διακόσμηση;", answer: "Ναι, συνεργαζόμαστε με έμπειρους διακοσμητές και μπορούμε να προσαρμόσουμε πλήρως τη διακόσμηση σύμφωνα με το όραμα και τις προτιμήσεις σας." },
    { question: "Τι κάνει το Κτήμα Ωρίων ξεχωριστό για γάμους;", answer: "Ο χώρος μας προσφέρει αποκλειστική χρήση (μία εκδήλωση την ημέρα), όμορφο φυσικό περιβάλλον, εγγύτητα σε παραθαλάσσιες εκκλησίες, επαγγελματική εξυπηρέτηση και 15+ χρόνια εμπειρίας στη δημιουργία αξέχαστων γαμήλιων δεξιώσεων." }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Γάμος</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Μοναδικές Στιγμές Αγάπης στο Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ο γάμος σας είναι μια εξαιρετικά σημαντική στιγμή, η έναρξη της κοινής σας πορείας. 
                Μια στιγμή που θα θυμάστε με συγκίνηση και αγάπη μέσα από το <strong>νυφικό τραπέζι</strong> και κάθε λεπτομέρεια της <strong>γαμήλιας δεξίωσης</strong> σας.
              </p>
              
              <p>
                Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της <strong>δεξίωσης γάμου</strong> σας. 
                Η απαίτησή σας για τελειότητα είναι ο απόλυτος στόχος μας, ώστε να σας προσφέρουμε μια ονειρεμένη γαμήλια δεξίωση στον <Link href="/o-horos" className="text-brand-main hover:underline">χώρο δεξιώσεων</Link> μας.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Ελάτε να σας χαρίσουμε τις πιο όμορφες αναμνήσεις στο πιο μοναδικό βράδυ της ζωής σας. Κοντά σε <Link href="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</Link>, με θέα που κόβει την ανάσα.
              </p>
            </div>
          </div>
        </section>

        {/* Wedding Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">{weddingFeatures.map((feature, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Γάμων</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {weddingPhotos.map((photo, index) => (
                <ClickableImage
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  images={weddingPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQs */}
        <FAQ items={weddingFAQs} title="Συχνές Ερωτήσεις για Γάμους" />

        {/* Nearby Churches */}
        <NearbyChurches />

        {/* Related Services */}
        <RelatedServices currentPage="/gamos" />

        {/* Popular Searches */}
        <PopularSearches 
          links={[
            { label: "Κτήμα Γάμου Αθήνα", href: "/el/ktima-gamou-athina" },
            { label: "Athens Riviera", href: "/el/ktima-gamou-athens-riviera" },
            { label: "Δείτε τον Χώρο", href: "/o-horos" },
            { label: "Φωτογράφος", href: "/fotografos" },
            { label: "Εκκλησίες", href: "/ekklisies" },
            { label: "Βάπτιση", href: "/vaptisi" }
          ]}
        />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τον γάμο σας ονειρεμένο
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να σχεδιάσουμε μαζί την τέλεια γαμήλια δεξίωση στο Κτήμα Ωρίων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                </button>
              </a>
              <a href="/el/ekklisiaki-dipla-sti-thalassa">
                <button className="button button4">
                  ΔΕΙΤΕ ΕΚΚΛΗΣΙΕΣ
                </button>
              </a>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a href="/el/ktima-gamou-athina" className="text-brand-main hover:underline">Κτήμα Γάμου Αθήνα</a>
              <span className="text-muted-foreground">•</span>
              <a href="/el/ktima-gamou-athens-riviera" className="text-brand-main hover:underline">Athens Riviera</a>
              <span className="text-muted-foreground">•</span>
              <a href="/o-horos" className="text-brand-main hover:underline">Δείτε τον Χώρο</a>
              <span className="text-muted-foreground">•</span>
              <a href="/fotografos" className="text-brand-main hover:underline">Φωτογράφος</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}