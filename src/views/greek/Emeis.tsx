import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Star, Phone, Mail, MapPin, Car, Home, TreePine, Utensils, Music } from 'lucide-react';

interface HeroImage {
  readonly src: string;
  readonly alt: string;
}

export default function Emeis() {
  const heroImages: readonly HeroImage[] = [
    { src: "/final-photos/emeis/emeis1.jpg", alt: "Ομάδα Κτήμα Ωρίων σε εκδήλωση" },
    { src: "/final-photos/emeis/emeis2.jpg", alt: "Υπεύθυνη χώρου Κτήμα Ωρίων" }
  ];

  const venueFeatures = [
    {
      icon: Car,
      title: "Χώρο στάθμευσης",
      description: "Τεράστιος χώρος στάθμευσης για όλους τους καλεσμένους"
    },
    {
      icon: Home,
      title: "Ημιυπαίθρια παγόδα",
      description: "Μαγευτικός ημιυπαίθριος χώρος για εκδηλώσεις"
    },
    {
      icon: Utensils,
      title: "Εγκαταστάσεις Barbeque",
      description: "Πλήρης εγκατάσταση για μαγείρεμα και σερβίρισμα"
    },
    {
      icon: Heart,
      title: "Χώρο υποδοχής",
      description: "Χώρος υποδοχής για τους καλεσμένους"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio για το ζευγάρι καθ' όλη τη διάρκεια"
    },
    {
      icon: Award,
      title: "Ηλεκτρογεννήτρια",
      description: "Backup ρεύματος σε περίπτωση διακοπής"
    },
    {
      icon: TreePine,
      title: "Πανέμορφοι κήποι",
      description: "Μεγάλοι κήποι και υπέροχα παρτέρια"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Αγάπη για τη δουλειά μας",
      description: "Κάθε εκδήλωση είναι για μας μια ευκαιρία να δημιουργήσουμε μαγικές στιγμές και αξέχαστες αναμνήσεις."
    },
    {
      icon: Users,
      title: "Προσαρμογή στις ανάγκες σας",
      description: "Κάθε εκδήλωση είναι μοναδική και προσαρμόζουμε τις υπηρεσίες μας στις ανάγκες και το budget σας."
    },
    {
      icon: Award,
      title: "Επαγγελματισμός",
      description: "Εργαζόμαστε με υψηλά στάνταρτς ποιότητας και φροντίζουμε για κάθε λεπτομέρεια."
    },
    {
      icon: Star,
      title: "Αριστεία στην εξυπηρέτηση",
      description: "Η ικανοποίησή σας είναι η προτεραιότητά μας και αφιερώνουμε όλη μας την προσοχή στην εξυπηρέτησή σας."
    }
  ];

  const stats = [
    { number: "200+", label: "Εκδηλώσεις οργανωμένες" },
    { number: "98%", label: "Ευχαριστημένοι πελάτες" },
    { number: "15+", label: "Χρόνια εμπειρίας" },
    { number: "24/7", label: "Υποστήριξη πελατών" }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Εμείς</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-5xl mx-auto mb-12">
              Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης νιώθει αμέσως την λάμψη της πολυτέλειας σε απόλυτη αρμονία με το φυσικό περιβάλλον. Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, μπορείτε να απολαύσετε, με κάθε μεγαλοπρέπεια, τις ξεχωριστές στιγμές όπως το γάμο σας ή τη βάπτιση του παιδιού σας. Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος του κτήματος εγγυούνται την θερμή υποδοχή και την απόλυτη φιλοξενία των καλεσμένων σας.
            </p>
            
            {/* Hero Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {heroImages.map(image => (
                <div key={image.src} className="relative rounded-2xl overflow-hidden shadow-xl h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 100vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Το Κτήμα διαθέτει:</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {venueFeatures.map((feature, index) => (
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

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-brand-main mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Η Συνεργασία μας</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Η συνεργασία μας, με πιστοποιημένα catering εξασφαλίζει, εκτός από το περιβάλλον και τη γαστριμαργική απόλαυση των καλεσμένων σας. Οι επιλεγμένοι συνεργάτες μας φροντίζουν για την μουσική και ηχητική κάλυψη της δεξίωσής σας.
                  </p>
                  <p>
                    Το Κτήμα μας συνδυάζει, παρουσία, άρτια οργάνωση και υψηλό επίπεδο υπηρεσιών. Βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια πάνω στην θάλασσα για την τέλεση του μυστηρίου.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Υπεύθυνη χώρου</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-brand-main">Μπούσουλα Παναγιώτα</div>
                    <div className="text-muted-foreground">Υπεύθυνη χώρου Κτήμα Ωρίων</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  Με εμπειρία και αγάπη για την φιλοξενία, η Μπούσουλα Παναγιώτα εξασφαλίζει 
                  ότι κάθε εκδήλωση στο Κτήμα Ωρίων θα είναι άψογη και αξέχαστη.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Οι Αξίες μας</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
              Ας γνωριστούμε καλύτερα
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τις υπηρεσίες μας 
              και πώς μπορούμε να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </button>
              <button className="button button4">
                ΑΙΤΗΜΑ ΠΛΗΡΟΦΟΡΙΩΝ
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
