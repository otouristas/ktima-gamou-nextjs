import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Baby, Star, Sparkles } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';
import Link from 'next/link';

interface BaptismPhoto {
  readonly src: string;
  readonly alt: string;
}

export default function Vaptisi() {
  const baptismPhotos: readonly BaptismPhoto[] = [
    { src: "/final-photos/vaftisi/10.jpeg", alt: "Γλυκές λιχουδιές σε παιδικό τραπέζι βάπτισης" },
    { src: "/final-photos/vaftisi/11.JPG", alt: "Εξωτερικός χώρος βάπτισης με σκίαση" },
    { src: "/final-photos/vaftisi/12.JPG", alt: "Βραδινή δεξίωση βάπτισης με φωτισμούς" },
    { src: "/final-photos/vaftisi/2.jpeg", alt: "Αναμνηστικό τραπέζι με θεματική διακόσμηση" },
    { src: "/final-photos/vaftisi/3.jpeg", alt: "Candy bar βάπτισης με γλυκά και στολισμό" },
    { src: "/final-photos/vaftisi/4.jpg", alt: "Εξωτερικός χώρος στολισμένος με γαλάζια παλέτα" },
    { src: "/final-photos/vaftisi/5.jpg", alt: "Centerpiece βάπτισης με φυσικά άνθη" },
    { src: "/final-photos/vaftisi/6.jpg", alt: "Παιδικό καθιστικό γεμάτο χρώμα" },
    { src: "/final-photos/vaftisi/7.JPG", alt: "Βάπτιση με θέα στη θάλασσα" },
    { src: "/final-photos/vaftisi/8.jpeg", alt: "Διαδρομή με φανάρια και λουλούδια" },
    { src: "/final-photos/vaftisi/9.jpeg", alt: "Γωνιά υποδοχής καλεσμένων βάπτισης" },
    { src: "/final-photos/vaftisi/IMG_1128.jpeg", alt: "Λεπτομέρεια μπομπονιέρας με vintage στοιχεία" },
    { src: "/final-photos/vaftisi/IMG_1133.jpeg", alt: "Διακόσμηση με fluffy σύννεφα και αρκουδάκια" },
    { src: "/final-photos/vaftisi/IMG_1140.jpeg", alt: "Ξύλινα διακοσμητικά και υφές λινάτσας" },
    { src: "/final-photos/vaftisi/IMG_3443.jpeg", alt: "Candy bar βάπτισης με θεματική παρουσίαση" },
    { src: "/final-photos/vaftisi/IMG_3444.jpeg", alt: "Λεπτομέρεια φωτογραφικού corner βάπτισης" },
    { src: "/final-photos/vaftisi/IMG_3446.jpeg", alt: "Μπουφέ με παστέλ χρώματα και γλυκά" },
    { src: "/final-photos/vaftisi/IMG_3449.jpeg", alt: "Στολισμένο τραπέζι ευχών" },
    { src: "/final-photos/vaftisi/IMG_5527.jpeg", alt: "Καθιστικό κάτω από δέντρα για την οικογένεια" },
    { src: "/final-photos/vaftisi/IMG_6187.jpeg", alt: "Πανοραμική άποψη χώρου για βάπτιση" }
  ];

  const baptismFeatures = [
    {
      icon: Heart,
      title: "Τρυφερή Ατμόσφαιρα",
      description: "Δημιουργούμε μια ζεστή και φιλική ατμόσφαιρα για την οικογένεια"
    },
    {
      icon: Sparkles,
      title: "Μοναδική Διακόσμηση",
      description: "Προσεγμένη διακόσμηση που θα κάνει την ημέρα αξέχαστη"
    },
    {
      icon: Users,
      title: "Οικογενειακή Γιορτή",
      description: "Ιδανικό περιβάλλον για να γιορτάσετε με όλη την οικογένεια"
    }
  ];

  const baptismServices = [
    {
      title: "Ειδικό Μενού για Παιδιά",
      description: "Προσαρμοσμένο μενού που θα ικανοποιήσει και τους μικρότερους καλεσμένους."
    },
    {
      title: "Φωτογραφία & Video",
      description: "Επαγγελματική καταγραφή όλων των στιγμών για να διατηρήσετε για πάντα αυτές τις αξέχαστες αναμνήσεις."
    },
    {
      title: "Διακόσμηση & Στολισμός",
      description: "Μαγευτική διακόσμηση με λουξ στοιχεία και φυσικά άνθη που θα δημιουργήσει την τέλεια ατμόσφαιρα."
    }
  ];

  const baptismFAQs = [
    { question: "Τι περιλαμβάνει η βαπτιστική δεξίωση;", answer: "Η βαπτιστική δεξίωση περιλαμβάνει catering με ειδικό παιδικό μενού, διακόσμηση, εξυπηρέτηση και χρήση όλων των χώρων μας (εσωτερικού, εξωτερικού, χώρου παιχνιδιού)." },
    { question: "Μπορώ να κάνω βάπτιση το μεσημέρι;", answer: "Φυσικά! Οι βαπτίσεις συνήθως γίνονται το μεσημέρι ακολουθούμενες από brunch ή μεσημεριανή δεξίωση." },
    { question: "Υπάρχει χώρος για τα παιδιά να παίξουν;", answer: "Ναι, διαθέτουμε ασφαλή εξωτερικό χώρο όπου τα παιδιά μπορούν να παίξουν υπό επίβλεψη." },
    { question: "Με ποιες εκκλησίες συνεργάζεστε για βαπτίσεις;", answer: "Συνεργαζόμαστε με 4 όμορφες παραθαλάσσιες εκκλησίες κοντά στο κτήμα: Άγιος Αλέξανδρος, Προφήτης Ηλίας, Άγιος Παντελεήμονας και Παναγία Γκαρικά." },
    { question: "Μπορώ να φέρω τον δικό μου διακοσμητή;", answer: "Απολύτως! Είστε ελεύθεροι να επιλέξετε τους δικούς σας συνεργάτες ή να χρησιμοποιήσετε τους προτεινόμενους από εμάς." },
    { question: "Πόσο διαρκεί η δεξίωση;", answer: "Η διάρκεια της δεξίωσης προσαρμόζεται στις ανάγκες σας, συνήθως 4-6 ώρες." },
    { question: "Παρέχετε ειδικό μενού για παιδιά;", answer: "Ναι, προσφέρουμε προσαρμοσμένο παιδικό μενού με επιλογές που αρέσουν στα παιδιά, όπως nuggets, πατάτες, μακαρόνια και πιο υγιεινές επιλογές." },
    { question: "Υπάρχει parking για τους καλεσμένους;", answer: "Ναι, έχουμε τεράστιο χώρο δωρεάν στάθμευσης με πάνω από 100 θέσεις." },
    { question: "Μπορώ να φέρω τη δική μου τούρτα;", answer: "Ναι, μπορείτε να φέρετε τη δική σας τούρτα ή μπορούμε να φροντίσουμε εμείς μέσω των συνεργατών μας." },
    { question: "Τι κάνει το Κτήμα Ωρίων ξεχωριστό για βαπτίσεις;", answer: "Προσφέρουμε οικογενειακή ατμόσφαιρα, ασφαλείς χώρους για παιδιά, εγγύτητα σε όμορφες εκκλησίες, ειδικό παιδικό μενού και 15+ χρόνια εμπειρίας σε βαπτιστικές δεξιώσεις." },
    { question: "Πόσους καλεσμένους χωράει για βάπτιση;", answer: "Μπορούμε να φιλοξενήσουμε βαπτίσεις διαφόρων μεγεθών, από μικρές οικογενειακές εκδηλώσεις μέχρι μεγάλες βαπτίσεις με πολλούς καλεσμένους." },
    { question: "Παρέχετε φωτογράφο για τη βάπτιση;", answer: "Συνεργαζόμαστε με επαγγελματία φωτογράφο (Studio Alpha) ή μπορείτε να φέρετε τον δικό σας." }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Βάπτιση</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Δημιουργήστε Αξέχαστες Αναμνήσεις για τη Βάπτιση του Παιδιού σας
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Πόσο ιδιαίτερο αλλά και πόσο χαρούμενο γεγονός! Πόσο τρυφερό αλλά και πόσο απαιτητικό!
              </p>
              
              <p>
                Η τελετή, αλλά και η <strong>δεξίωση βάπτισης</strong> που θα ακολουθήσει πρέπει να αντιπροσωπεύει την οικογένεια και για αυτό αξίζει ό,τι το καλύτερο. 
                Θα πρέπει να μεταδίδει χαρά ώστε να δημιουργηθεί μια υπέροχη γιορτή για όλα τα αγαπημένα σας πρόσωπα. 
                Με συναίσθηση της σημασίας που έχει η δεξίωση της βάπτισης στο <Link href="/o-horos" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link>, στεκόμαστε δίπλα σας, ώστε μαζί σας να οργανώσουμε την βάπτιση του παιδιού σας, 
                με πολύ αγάπη και μεράκι. Κοντά σε <Link href="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</Link>.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Πραγματοποιήστε τη δεξίωση της βάπτισής σας, σε ένα πολυχώρο διαφορετικό από τους άλλους.
              </p>
            </div>
          </div>
        </section>

        {/* Baptism Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {baptismFeatures.map((feature, index) => (
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

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Υπηρεσίες Βάπτισης</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {baptismServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Βαπτίσεων</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {baptismPhotos.map((photo, index) => (
                <ClickableImage
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  images={baptismPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Ειδικές Λεπτομέρειες Βάπτισης</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ειδικό Μενού</h3>
                    <p className="text-muted-foreground">
                      Προσαρμοσμένο μενού με επιλογές για όλες τις ηλικίες, συμπεριλαμβανομένων ειδικών πιάτων για παιδιά.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Φωτογραφία & Video</h3>
                    <p className="text-muted-foreground">
                      Επαγγελματική καταγραφή όλων των στιγμών - από την προετοιμασία έως το τέλος του πάρτι - 
                      για να διατηρήσετε για πάντα αυτές τις αξέχαστες στιγμές.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Γιατί το Κτήμα Ωρίων;</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Τρυφερή ατμόσφαιρα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Εμπειρία σε βαπτιστικές δεξιώσεις</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Επαγγελματική ομάδα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Προσαρμοσμένες λύσεις</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQs */}
        <FAQ items={baptismFAQs} title="Συχνές Ερωτήσεις για Βαπτίσεις" />

        {/* Nearby Churches */}
        <NearbyChurches />

        {/* Related Services */}
        <RelatedServices currentPage="/vaptisi" />

        {/* Popular Searches */}
        <PopularSearches 
          links={[
            { label: "Βαπτιστική Δεξίωση Κερατέα", href: "/vaptisi" },
            { label: "Χώρος Βάπτισης", href: "/o-horos" },
            { label: "Εκκλησίες", href: "/ekklisies" },
            { label: "Γάμος", href: "/gamos" },
            { label: "Φωτογράφος", href: "/fotografos" }
          ]}
        />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τη βάπτιση του παιδιού σας αξέχαστη
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να σχεδιάσουμε μαζί την τέλεια βαπτιστική δεξίωση στο Κτήμα Ωρίων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                </button>
              </a>
              <a href="/el/ktimata-vaptisis-athina">
                <button className="button button4">
                  ΠΕΡΙΣΣΟΤΕΡΑ ΓΙΑ ΒΑΠΤΙΣΗ
                </button>
              </a>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a href="/el/ktimata-vaptisis-athina" className="text-brand-main hover:underline">Κτήματα Βάπτισης Αθήνα</a>
              <span className="text-muted-foreground">•</span>
              <a href="/el/ekklisiaki-dipla-sti-thalassa" className="text-brand-main hover:underline">Εκκλησάκια</a>
              <span className="text-muted-foreground">•</span>
              <a href="/o-horos" className="text-brand-main hover:underline">Δείτε τον Χώρο</a>
              <span className="text-muted-foreground">•</span>
              <a href="/ypiresies" className="text-brand-main hover:underline">Catering & Υπηρεσίες</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}