import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Star, Home, Car, TreePine, Utensils, Award, MapPin, Phone, Mail } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { PopularSearches } from '@/components/PopularSearches';
import Link from 'next/link';
import { ClickableImage } from '@/components/ImageLightbox';

interface VenuePhoto {
  readonly src: string;
  readonly alt: string;
  readonly category: string;
}

export default function OHoros() {
  const venuePhotos: readonly VenuePhoto[] = [
    { src: "/final-photos/xwros/1.jpeg", alt: "Πανοραμική άποψη του Κτήματος Ωρίων", category: "Χώρος" },
    { src: "/final-photos/xwros/2.jpeg", alt: "Στολισμένος διάδρομος κήπου", category: "Χώρος" },
    { src: "/final-photos/xwros/2.jpg", alt: "Εξωτερικός χώρος με φυσικό φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/3.jpeg", alt: "Κήπος με πλούσια βλάστηση", category: "Χώρος" },
    { src: "/final-photos/xwros/4.jpeg", alt: "Κεντρικός κήπος με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/5.jpeg", alt: "Λεπτομέρεια διακόσμησης", category: "Χώρος" },
    { src: "/final-photos/xwros/6.jpeg", alt: "Λεπτομέρεια διακόσμησης εξωτερικού χώρου", category: "Χώρος" },
    { src: "/final-photos/xwros/7.jpeg", alt: "Άποψη πισίνας και χώρου δεξιώσεων", category: "Χώρος" },
    { src: "/final-photos/xwros/8.jpeg", alt: "Εξωτερικός διάδρομος με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/9.jpeg", alt: "Κήπος με φυσικό περιβάλλον", category: "Χώρος" },
    { src: "/final-photos/xwros/10.jpg", alt: "Πανοραμική άποψη χώρου", category: "Χώρος" },
    { src: "/final-photos/xwros/DSC_7738.jpeg", alt: "Εσωτερικός χώρος δεξιώσεων", category: "Χώρος" },
    { src: "/final-photos/xwros/DSC_7922.JPG", alt: "Σαλόνι δεξιώσεων με πολυτελή φωτισμό", category: "Γάμος" },
    { src: "/final-photos/xwros/DSC_7928.JPG", alt: "Εσωτερική αίθουσα με πολυτελές setup", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0229.jpeg", alt: "Γαμήλια διακόσμηση εξωτερικού χώρου", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0232.jpeg", alt: "Στολισμένος χώρος για γάμο", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0304.jpeg", alt: "Γαμήλιο setup με λουλούδια", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0802.jpeg", alt: "Στολισμένο νυφικό τραπέζι δίπλα στην πισίνα", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0805.jpeg", alt: "Γαμήλια δεξίωση με θέα", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0824.jpeg", alt: "Νυφικό τραπέζι με διακόσμηση", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0832.jpeg", alt: "Κήπος διαμορφωμένος για τελετή", category: "Γάμος" },
    { src: "/final-photos/xwros/IMG_0842.jpeg", alt: "Περιοχή lounge με αναπαυτικά καθίσματα", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_0844.jpeg", alt: "Εταιρική εκδήλωση με επαγγελματικό setup", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_0852.jpeg", alt: "Επαγγελματική διάταξη τραπεζιών", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_0864.jpeg", alt: "Ατμοσφαιρικός φωτισμός για εταιρικές εκδηλώσεις", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_0865.jpeg", alt: "Εταιρική εκδήλωση με networking χώρο", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_0871.jpeg", alt: "Επαγγελματικός χώρος συναντήσεων", category: "Εταιρικά" },
    { src: "/final-photos/xwros/IMG_1052.jpeg", alt: "Γωνιά χαλάρωσης για καλεσμένους", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1147.jpeg", alt: "Πάρτι με διακόσμηση", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1149.jpeg", alt: "Εορταστική ατμόσφαιρα", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1150.jpeg", alt: "Γιορταστικός χώρος", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1667.jpeg", alt: "Πάρτι με φωτισμό", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1669.jpeg", alt: "Εορταστική διακόσμηση", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1670.jpeg", alt: "Γιορταστικός setup", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1684.jpeg", alt: "Πάρτι με θέα", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_1783.jpeg", alt: "Cocktail setup στον εξωτερικό χώρο", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_2757.jpeg", alt: "Εορταστική αίθουσα", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_2791.jpeg", alt: "Γιορταστικός χώρος με διακόσμηση", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_2836.jpeg", alt: "Στολισμός μπουφέ με φωτιστικά στοιχεία", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_2989.jpeg", alt: "Εορταστική διακόσμηση με φώτα", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_2995.jpeg", alt: "Πάρτι με ατμοσφαιρικό φωτισμό", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3009.jpeg", alt: "Γιορταστικός χώρος με setup", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3012.jpeg", alt: "Εορταστική αίθουσα με διακόσμηση", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3013.jpeg", alt: "Πάρτι με φωτισμό και διακόσμηση", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3029.jpeg", alt: "Γιορταστικός χώρος με φώτα", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3061.jpeg", alt: "Εορταστική διακόσμηση με setup", category: "Πάρτι" },
    { src: "/final-photos/xwros/IMG_3419.jpeg", alt: "Παιχνιδιάρικη γωνιά για παιδιά", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3420.jpeg", alt: "Βαπτιστική διακόσμηση με παστέλ", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3421.jpeg", alt: "Χώρος βάπτισης με διακόσμηση", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3422.jpeg", alt: "Βαπτιστική γωνιά με στοιχεία", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3423.jpeg", alt: "Διακόσμηση βάπτισης με παστέλ χρώματα", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3425.jpeg", alt: "Candy bar βάπτισης", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3426.jpeg", alt: "Βαπτιστική διακόσμηση με λεπτομέρειες", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3427.jpeg", alt: "Χώρος βάπτισης με στολισμό", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3428.jpeg", alt: "Βαπτιστική γωνιά με διακόσμηση", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3429.jpeg", alt: "Λεπτομέρεια διακόσμησης βάπτισης", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3432.jpeg", alt: "Λεπτομέρεια candy bar βάπτισης", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3433.jpeg", alt: "Βαπτιστική διακόσμηση με στοιχεία", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3434.jpeg", alt: "Χώρος βάπτισης με minimal διακόσμηση", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3436.jpeg", alt: "Βαπτιστική γωνιά με λουλούδια", category: "Βάπτιση" },
    { src: "/final-photos/xwros/IMG_3438.jpeg", alt: "Διαδρομή με φανάρια και λουλούδια", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3439.jpeg", alt: "Κήπος με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3440.jpeg", alt: "Εξωτερικός χώρος με διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3449.jpeg", alt: "Στολισμένο τραπέζι υποδοχής", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3453.jpeg", alt: "Χώρος με φυσικό φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3455.jpeg", alt: "Κήπος με διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3456.jpeg", alt: "Εξωτερικός χώρος με setup", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_3458.jpeg", alt: "Χώρος με φωτισμό και διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_5285.jpeg", alt: "Πανοραμική άποψη χώρου", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_6187.jpeg", alt: "Εξωτερικός χώρος με θέα", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7099.jpeg", alt: "Κήπος με φυσικό περιβάλλον", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7211.jpeg", alt: "Χώρος με διακόσμηση και φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7222.jpeg", alt: "Εξωτερικός χώρος με setup", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7224.jpeg", alt: "Κήπος με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7227.jpeg", alt: "Χώρος με διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7232.jpeg", alt: "Εξωτερικός χώρος με φυσικό φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_7727.jpeg", alt: "Πανοραμική άποψη με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9152.jpeg", alt: "Χώρος με διακόσμηση και setup", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9226.jpeg", alt: "Κήπος με φυσικό περιβάλλον", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9228.jpeg", alt: "Εξωτερικός χώρος με θέα", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9229.jpeg", alt: "Χώρος με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9449.jpeg", alt: "Κήπος με διακόσμηση και φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9528.jpeg", alt: "Πανοραμική άποψη χώρου με φωτισμό", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9529.jpeg", alt: "Βραδινή άποψη με φωτισμένη πισίνα", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9530.jpeg", alt: "Εξωτερικός χώρος με setup", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9532.jpeg", alt: "Κήπος με φωτισμό και διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9533.jpeg", alt: "Κήπος με minimal διακόσμηση", category: "Χώρος" },
    { src: "/final-photos/xwros/IMG_9534.jpeg", alt: "Εξωτερικός χώρος με boho στοιχεία", category: "Χώρος" }
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
      icon: Heart,
      title: "Χώρο υποδοχής",
      description: "Χώρος υποδοχής για τους καλεσμένους"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio για το ζευγάρι καθ' όλη τη διάρκεια"
    }
  ];

  const venueHighlights = [
    {
      title: "Μαγευτικό Φυσικό Περιβάλλον",
      description: "Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης νιώθει αμέσως την λάμψη της πολυτέλειας σε απόλυτη αρμονία με το φυσικό περιβάλλον.",
      icon: TreePine
    },
    {
      title: "Ιδανική Τοποθεσία",
      description: "Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, μπορείτε να απολαύσετε τις ξεχωριστές στιγμές της ζωής σας.",
      icon: MapPin
    },
    {
      title: "Σύγχρονες Εγκαταστάσεις",
      description: "Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος του κτήματος εγγυούνται την θερμή υποδοχή και την απόλυτη φιλοξενία των καλεσμένων σας.",
      icon: Home
    },
    {
      title: "Κοντά σε Εκκλησάκια",
      description: "Βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια πάνω στην θάλασσα για την τέλεση του μυστηρίου.",
      icon: Heart
    }
  ];

  const eventTypes = [
    {
      title: "Γάμοι",
      description: "Μοναδικές στιγμές αγάπης στο Κτήμα Ωρίων. Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της δεξίωσης σας.",
      count: "200+",
      icon: Heart
    },
    {
      title: "Βαπτίσεις",
      description: "Πόσο ιδιαίτερο αλλά και πόσο χαρούμενο γεγονός! Η τελετή, αλλά και η δεξίωση που θα ακολουθήσει πρέπει να αντιπροσωπεύει την οικογένεια.",
      count: "150+",
      icon: Users
    },
    {
      title: "Εταιρικές Εκδηλώσεις",
      description: "Η επαγγελματική σας εκδήλωση επαγγελματική μας ευθύνη. Η εμπειρία των συνεργατών μας καθιστεί τον χώρο μας ιδανικό για επιτυχημένες εκδηλώσεις.",
      count: "100+",
      icon: Star
    },
    {
      title: "Πάρτι & Γιορτές",
      description: "Στο Κτήμα Ωρίων, μετατρέπουμε τις ξεχωριστές σας στιγμές σε αξέχαστες εμπειρίες. Γενέθλια, αρραβώνας ή εταιρικό party.",
      count: "300+",
      icon: Camera
    }
  ];

  const venueFAQs = [
    { question: "Πού βρίσκεται το Κτήμα Ωρίων;", answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα Αττικής, με εύκολη πρόσβαση από την Αττική Οδό. Προσφέρει ένα πανέμορφο φυσικό περιβάλλον κοντά στην Αθήνα." },
    { question: "Ποια είναι η χωρητικότητα του χώρου;", answer: "Ο χώρος μας μπορεί να φιλοξενήσει μεγάλες εκδηλώσεις με εκτεταμένο χώρο στάθμευσης για πάνω από 100 οχήματα. Διαθέτουμε τόσο κλειστούς κλιματιζόμενους όσο και εξωτερικούς χώρους." },
    { question: "Υπάρχει χώρος στάθμευσης;", answer: "Ναι, διαθέτουμε τεράστιο δωρεάν χώρο στάθμευσης με πάνω από 100 θέσεις για όλους τους καλεσμένους σας." },
    { question: "Έχετε εσωτερικούς και εξωτερικούς χώρους;", answer: "Ναι, προσφέρουμε πλήρως κλιματιζόμενη εσωτερική αίθουσα και μαγευτική ημιυπαίθρια παγόδα, κατάλληλη για όλες τις εποχές και τις καιρικές συνθήκες." },
    { question: "Μπορούμε να επισκεφτούμε τον χώρο πριν την κράτηση;", answer: "Απολύτως! Ενθαρρύνουμε τα ζευγάρια να επισκεφτούν το Κτήμα Ωρίων και να δουν από κοντά το μαγευτικό περιβάλλον που θα φιλοξενήσει την εκδήλωσή τους. Επικοινωνήστε μαζί μας για να κανονίσουμε μια δωρεάν ξενάγηση." },
    { question: "Είστε κοντά σε εκκλησίες;", answer: "Ναι, βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια δίπλα στη θάλασσα (5-15 λεπτά), ιδανικά για γαμήλιες και βαπτιστικές τελετές." }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Ο Χώρος</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Κτήμα Ωρίων - Μαγευτικός Χώρος για Εκδηλώσεις
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης νιώθει αμέσως την λάμψη της πολυτέλειας 
                σε απόλυτη αρμονία με το φυσικό περιβάλλον. Ιδανικό για <Link href="/gamos" className="text-brand-main hover:underline">γάμους</Link>, <Link href="/vaptisi" className="text-brand-main hover:underline">βαπτίσεις</Link> και εταιρικές εκδηλώσεις. Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, 
                μπορείτε να απολαύσετε τις ξεχωριστές στιγμές της ζωής σας.
              </p>
              
              <p>
                Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος του κτήματος εγγυούνται την θερμή υποδοχή 
                και την απόλυτη φιλοξενία των καλεσμένων σας. Βρισκόμαστε πολύ κοντά σε <Link href="/ekklisies" className="text-brand-main hover:underline">γραφικά εκκλησάκια</Link> πάνω στην θάλασσα 
                για την τέλεση του μυστηρίου.
              </p>
            </div>
          </div>
        </section>

        {/* Venue Features */}
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

        {/* Venue Highlights */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {venueHighlights.map((highlight, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <highlight.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-4">{highlight.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Οι Εκδηλώσεις μας</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <event.icon className="w-16 h-16 text-brand-main mx-auto mb-4" />
                    <div className="text-3xl font-bold text-brand-main mb-2">{event.count}</div>
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Χώρου</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {venuePhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  images={venuePhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partnership & Services */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Η Συνεργασία μας</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Η συνεργασία μας, με πιστοποιημένα catering εξασφαλίζει, εκτός από το περιβάλλον και τη γαστριμαργική απόλαυση των καλεσμένων σας. 
                    Οι επιλεγμένοι συνεργάτες μας φροντίζουν για την μουσική και ηχητική κάλυψη της δεξίωσης σας.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Το Κτήμα μας συνδυάζει, παρουσία, άρτια οργάνωση και υψηλό επίπεδο υπηρεσιών. 
                    Βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια πάνω στην θάλασσα για την τέλεση του μυστηρίου.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Υπεύθυνη χώρου</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-brand-main">Μπούσουλα Παναγιώτα</div>
                    <div className="text-muted-foreground">Υπεύθυνη χώρου Κτήμα Ωρίων</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Με εμπειρία και αγάπη για την φιλοξενία, η Μπούσουλα Παναγιώτα εξασφαλίζει
                  ότι κάθε εκδήλωση στο Κτήμα Ωρίων θα είναι άψογη και αξέχαστη.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQ Section */}
        <FAQ items={venueFAQs} title="Συχνές Ερωτήσεις για τον Χώρο" />

        {/* Popular Searches */}
        <PopularSearches 
          links={[
            { label: "Γάμος", href: "/gamos" },
            { label: "Βάπτιση", href: "/vaptisi" },
            { label: "Εκκλησίες", href: "/ekklisies" },
            { label: "Υπηρεσίες", href: "/ypiresies" },
            { label: "Φωτογράφος", href: "/fotografos" }
          ]}
        />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Επισκεφτείτε το Κτήμα Ωρίων
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ραντεβού για επίσκεψη στο Κτήμα Ωρίων και να δείτε από κοντά 
              το μαγευτικό περιβάλλον που θα φιλοξενήσει την εκδήλωσή σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/contact" className="button button4">
                ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
              </a>
              <a href="/gamos" className="button button4">
                ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Τοποθεσία</div>
                <div className="text-muted-foreground">Κερατέα, Αττική</div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Τηλέφωνο</div>
                <div className="text-muted-foreground">2299068812 / 6981889560</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@ktimaorion.gr</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}