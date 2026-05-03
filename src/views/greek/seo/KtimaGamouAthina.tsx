import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Heart, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Baby, Sparkles, Calendar, Clock } from 'lucide-react';
import { PopularSearches } from '@/components/PopularSearches';
import { RelatedServices } from '@/components/RelatedServices';
export default function KtimaGamouAthina() {
  const features = [{
    icon: MapPin,
    title: "Θέα Θάλασσα",
    description: "Μοναδική θαλασσινή ατμόσφαιρα με πανοραμική θέα"
  }, {
    icon: Home,
    title: "Αποκλειστική Χρήση",
    description: "Ολόκληρο το κτήμα μόνο για εσάς"
  }, {
    icon: Users,
    title: "50-350 Άτομα",
    description: "Ευέλικτες διαρρυθμίσεις για κάθε μέγεθος"
  }, {
    icon: Car,
    title: "Άνετος Χώρος Στάθμευσης",
    description: "Δωρεάν parking για 100+ αυτοκίνητα"
  }, {
    icon: Church,
    title: "Κοντινά Εκκλησάκια",
    description: "Παραθαλάσσιοι ναοί σε απόσταση αναπνοής"
  }, {
    icon: Camera,
    title: "Φωτογενικό Περιβάλλον",
    description: "Υπέροχα σκηνικά για τις φωτογραφίες σας"
  }];
  const churches = [{
    name: "Άγιος Αλέξανδρος Δασκαλειό",
    distance: "10 λεπτά",
    link: "/el/ekklisies/agios-alexandros-daskaleio"
  }, {
    name: "Προφήτης Ηλίας Θορικού",
    distance: "15 λεπτά",
    link: "/el/ekklisies/profitis-ilias-thoriko"
  }, {
    name: "Άγιος Παντελεήμονας Κερατέα",
    distance: "8 λεπτά",
    link: "/el/ekklisies/agios-panteleimonas-keratea"
  }, {
    name: "Παναγία Γκαρικά",
    distance: "12 λεπτά",
    link: "/el/ekklisies/panagia-gkarika"
  }];
  const packages = [{
    title: "Βασικό Πακέτο",
    price: "Από 45€/άτομο",
    features: ["Catering", "Διακόσμηση βασική", "Ηχητική κάλυψη", "Χώρος υποδοχής"]
  }, {
    title: "Premium Πακέτο",
    price: "Από 65€/άτομο",
    features: ["Catering deluxe", "Πλήρης διακόσμηση", "DJ & ηχητικά", "Φωτισμός", "Φωτογράφος"]
  }, {
    title: "VIP Πακέτο",
    price: "Από 85€/άτομο",
    features: ["Gourmet catering", "Luxury διακόσμηση", "Live μουσική", "Φωτο & video", "Event coordinator"]
  }];
  const faqs = [{
    question: "Πόσα άτομα μπορούμε να φιλοξενήσουμε;",
    answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει από 50 έως 350 άτομα με διαφορετικές διαρρυθμίσεις εσωτερικού και εξωτερικού χώρου. Ο χώρος μας προσαρμόζεται τόσο για γάμους όσο και για δεξιώσεις βαπτισης κάθε μεγέθους."
  }, {
    question: "Μπορούμε να τελέσουμε το μυστήριο σε εκκλησάκι δίπλα στη θάλασσα;",
    answer: "Ναι! Υπάρχουν πολλά γραφικά παραθαλάσσια εκκλησάκια στην περιοχή όπως ο Άγιος Αλέξανδρος στο Δασκαλειό (10 λεπτά), Προφήτης Ηλίας Θορικού (15 λεπτά) και Παναγία Γκαρικά (12 λεπτά). Μπορείτε να δείτε όλες τις εκκλησίες κοντά μας στη σελίδα εκκλησιών."
  }, {
    question: "Υπάρχει χώρος στάθμευσης;",
    answer: "Ναι, διαθέτουμε τεράστιο χώρο στάθμευσης που μπορεί να φιλοξενήσει πάνω από 100 αυτοκίνητα με άνεση, κάτι σπάνιο για κτήματα στην περιοχή."
  }, {
    question: "Τι περιλαμβάνουν τα πακέτα γάμου;",
    answer: "Τα πακέτα μας περιλαμβάνουν catering, διακόσμηση, ηχητική κάλυψη, φωτισμό και προαιρετικά φωτογραφία, video και event coordination. Όλα προσαρμόζονται στις ανάγκες σας για γαμήλιες δεξιώσεις ή δεξιώσεις βαπτισης. Μάθετε περισσότερα για τις υπηρεσίες μας."
  }, {
    question: "Πόσο κοστίζει ένας γάμος στο Κτήμα Ωρίων;",
    answer: "Τα πακέτα μας ξεκινούν από 45€/άτομο για το βασικό πακέτο και φτάνουν έως 85€/άτομο για το VIP πακέτο. Το τελικό κόστος εξαρτάται από τον αριθμό καλεσμένων και τις υπηρεσίες που επιλέγετε. Η τιμή για δεξίωση βαπτισης είναι ανάλογη. Επικοινωνήστε μαζί μας για προσαρμοσμένη προσφορά."
  }, {
    question: "Υπάρχει plan B σε περίπτωση βροχής;",
    answer: "Φυσικά! Διαθέτουμε πλήρως κλιματιζόμενη αίθουσα και καλυμμένους χώρους για να μην ανησυχείτε για τις καιρικές συνθήκες. Ο χώρος μας προσαρμόζεται σε κάθε κατάσταση."
  }, {
    question: "Πόσο νωρίς πρέπει να κλείσουμε ραντεβού;",
    answer: "Συνιστούμε να επικοινωνήσετε μαζί μας 8-12 μήνες πριν την ημερομηνία του γάμου σας, ειδικά για Σαββατοκύριακα υψηλής ζήτησης (Μάιο-Οκτώβριο). Για δεξιώσεις βαπτισης, συνιστούμε 3-4 μήνες νωρίτερα."
  }, {
    question: "Μπορούμε να επισκεφθούμε το κτήμα πριν κλείσουμε;",
    answer: "Απολύτως! Προτείνουμε πάντα μια επίσκεψη στον χώρο για να δείτε τις εγκαταστάσεις μας και να συζητήσουμε τις επιθυμίες σας. Καλέστε μας στο 22990 68812 ή στείλτε μας αίτημα online για να κλείσετε ραντεβού για γάμο ή δεξίωση βαπτισης."
  }, {
    question: "Προσφέρετε υπηρεσίες και για δεξιώσεις βαπτισης;",
    answer: "Ναι! Το Κτήμα Ωρίων είναι ιδανικό και για δεξιώσεις βαπτισης. Προσφέρουμε ειδικό παιδικό μενού, ασφαλή εξωτερικό χώρο για παιδιά και διακόσμηση κατάλληλη για οικογενειακές εκδηλώσεις. Είμαστε ένα από τα καλύτερα κτήματα βαπτισης Αθήνα με πάνω από 15 χρόνια εμπειρίας."
  }, {
    question: "Υπάρχει φωτογράφος για τον γάμο ή τη δεξίωση βαπτισης;",
    answer: "Ναι, συνεργαζόμαστε με το Studio Alpha για επαγγελματική φωτογραφία και βίντεο. Μπορείτε να προσλάβετε τον φωτογράφο μέσω μας ή ανεξάρτητα. Η φωτογραφία γάμου και βαπτιστικής δεξίωσης είναι διαθέσιμη."
  }, {
    question: "Πόσο μακριά είναι το κτήμα από την Αθήνα;",
    answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα Αττικής, σε απόσταση περίπου 45 λεπτών από το κέντρο της Αθήνας. Με εύκολη πρόσβαση από την Αττική Οδό, είναι η ιδανική επιλογή για κτήμα γάμου Αθήνα ή κτήμα για δεξίωση βαπτισης."
  }, {
    question: "Ποια είναι τα πλεονεκτήματα ενός κτήματος κοντά στην Αθήνα;",
    answer: "Το κτήμα μας κοντά στην Αθήνα προσφέρει την απόλυτη ατμόσφαιρα ενός εξοχικού χώρου με την ευκολία πρόσβασης από την πρωτεύουσα. Είναι ιδανικό για όσους αναζητούν κτήμα για γάμο στην Αθήνα ή χώρο για δεξίωση βαπτισης χωρίς να ταξιδέψουν μακριά."
  }];
  return <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-brand">Κτήμα Γάμου στην Αθήνα με Θέα Θάλασσα</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Δημιουργήστε τον ονειρεμένο γάμο σας στο Κτήμα Ωρίων Κερατέα
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="button button4">
                    Δείτε το Κτήμα – Κλείστε Δωρεάν Επίσκεψη
                  </button>
                </Link>
                <a href="tel:+302299068812">
                  <button className="button button4">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Καλέστε Τώρα
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Το <Link href="/o-horos" className="text-brand-main hover:underline font-semibold">Κτήμα Ωρίων</Link> στην Κερατέα Αττικής αποτελεί την <strong>ιδανική επιλογή για γάμους και δεξιώσεις βαπτισης</strong> κοντά στην Αθήνα. Ως ένα από τα καλύτερα <strong>κτήματα γάμου Αθήνα</strong> και <Link href="/el/ktimata-vaptisis-athina" className="text-brand-main hover:underline">κτήματα βαπτισης Αθήνα</Link>, προσφέρουμε μια μαγευτική εμπειρία που συνδυάζει την πολυτέλεια με τη φυσική ομορφιά της θάλασσας.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Αν αναζητάτε <strong>κτήμα για γάμο στην Αθήνα</strong> ή <strong>χώρο για δεξίωση βαπτισης</strong>, το Κτήμα Ωρίων είναι η απόλυτη επιλογή. Με πλήρως κλιματιζόμενους χώρους, <Link href="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</Link> σε απόσταση αναπνοής και εξαιρετικό <Link href="/ypiresies" className="text-brand-main hover:underline">catering</Link>, διασφαλίζουμε ότι κάθε <Link href="/gamos" className="text-brand-main hover:underline">γαμήλια δεξίωση</Link> ή <Link href="/vaptisi" className="text-brand-main hover:underline">δεξίωση βαπτισης</Link> θα είναι αξέχαστη.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Το <strong>κτήμα μας κοντά στην Αθήνα</strong> (45 λεπτά από το κέντρο) προσφέρει ευκολία πρόσβασης, ενώ ταυτόχρονα παρέχει την απομονωμένη ατμόσφαιρα που χρειάζεστε για τις πιο σημαντικές στιγμές της ζωής σας. Είτε οργανώνετε <strong>γάμο με θέα θάλασσα</strong>, είτε <strong>δεξίωση βαπτισης</strong> για το μικρό σας παιδί, είμαστε εδώ για να μετατρέψουμε τα όνειρά σας σε πραγματικότητα.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων για τον γάμο σας;</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Το Κτήμα Ωρίων συνδυάζει την μαγεία της θάλασσας με την πολυτέλεια ενός σύγχρονου χώρου, 
              προσφέροντας την ιδανική τοποθεσία για έναν αξέχαστο <Link href="/gamos" className="text-brand-main hover:underline">γάμο</Link> στην Αθήνα. Ως ένα από τα καλύτερα <strong>κτήματα γάμου Αθήνα</strong>, προσφέρουμε πλήρης υπηρεσίες για <Link href="/gamos" className="text-brand-main hover:underline">γαμήλιες δεξιώσεις</Link> και <Link href="/vaptisi" className="text-brand-main hover:underline">δεξιώσεις βαπτισης</Link>.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Nearby Churches Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Τελετή & Εκκλησάκια κοντά μας</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              <Link href="/ekklisies" className="text-brand-main hover:underline">Γραφικά παραθαλάσσια εκκλησάκια</Link> σε μικρή απόσταση από το κτήμα για μια ρομαντική τελετή δίπλα στη θάλασσα. Ιδανικά για <strong>γάμους και βαπτιστικές τελετές</strong>, τα <Link href="/el/ekklisiaki-dipla-sti-thalassa" className="text-brand-main hover:underline">εκκλησάκια κοντά στη θάλασσα</Link> προσφέρουν μοναδική ατμόσφαιρα.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {churches.map((church, index) => <Link key={index} href={church.link}>
                  <Card className="card-elegant hover:shadow-xl transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <Church className="w-12 h-12 text-brand-main mx-auto mb-4" />
                      <h3 className="font-bold mb-2">{church.name}</h3>
                      <p className="text-brand-main font-semibold">{church.distance}</p>
                      <p className="text-xs text-muted-foreground mt-2">Κάντε κλικ για λεπτομέρειες</p>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>
          </div>
        </section>

        {/* Wedding Packages Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Πακέτα Γάμου</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Προσφέρουμε ολοκληρωμένα πακέτα <Link href="/gamos" className="text-brand-main hover:underline">γαμήλιας δεξίωσης</Link> που προσαρμόζονται στις ανάγκες σας. Από το βασικό πακέτο μέχρι το VIP, κάθε <strong>γάμος στο Κτήμα Ωρίων</strong> είναι μοναδικός και προσωποποιημένος.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gradient-brand">{pkg.title}</h3>
                    <p className="text-2xl font-bold text-brand-main mb-6">{pkg.price}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-brand-main mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href="/contact">
                        <button className="button button4 w-full">
                          Ζητήστε Προσφορά
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-6">
                Όλα τα πακέτα μας περιλαμβάνουν πρόσβαση στον <Link href="/o-horos" className="text-brand-main hover:underline">χώρο δεξιώσεων</Link>, βασικό διακόσμηση και προσωπικό εξυπηρέτησης. Μάθετε περισσότερα για τις <Link href="/ypiresies" className="text-brand-main hover:underline">υπηρεσίες μας</Link> και επικοινωνήστε μαζί μας για προσαρμοσμένη προσφορά.
              </p>
            </div>
          </div>
        </section>

        {/* Baptism Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="text-gradient-brand">Δεξίωση Βαπτισης στο Κτήμα Ωρίων</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                Δημιουργήστε αξέχαστες αναμνήσεις για τη <strong>δεξίωση βαπτισης</strong> του παιδιού σας. Το Κτήμα Ωρίων είναι ένα από τα καλύτερα <Link href="/el/ktimata-vaptisis-athina" className="text-brand-main hover:underline">κτήματα βαπτισης Αθήνα</Link>, προσφέροντας ιδανικό περιβάλλον για οικογενειακές εκδηλώσεις.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <Baby className="w-12 h-12 text-brand-main mb-4" />
                    <h3 className="text-xl font-bold mb-3">Ειδικό Μενού για Παιδιά</h3>
                    <p className="text-muted-foreground mb-4">
                      Προσαρμοσμένο <strong>μενού για βαπτιστικές δεξιώσεις</strong> που θα ικανοποιήσει και τους μικρότερους καλεσμένους. Μενού που είναι νόστιμο και υγιεινό για όλη την οικογένεια.
                    </p>
                    <Link href="/vaptisi" className="text-brand-main hover:underline font-semibold">
                      Δείτε περισσότερα για βαπτιστικές δεξιώσεις →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <Sparkles className="w-12 h-12 text-brand-main mb-4" />
                    <h3 className="text-xl font-bold mb-3">Μοναδική Διακόσμηση</h3>
                    <p className="text-muted-foreground mb-4">
                      Προσεγμένη διακόσμηση για τη <strong>δεξίωση βαπτισης</strong> που θα κάνει την ημέρα αξέχαστη. Δημιουργούμε ένα μαγευτικό περιβάλλον που ταιριάζει στο ύφος της γιορτής σας.
                    </p>
                    <Link href="/contact" className="text-brand-main hover:underline font-semibold">
                      Συζητήστε τη διακόσμηση μαζί μας →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <Church className="w-12 h-12 text-brand-main mb-4" />
                    <h3 className="text-xl font-bold mb-3">Κοντινές Εκκλησίες</h3>
                    <p className="text-muted-foreground mb-4">
                      <Link href="/ekklisies" className="text-brand-main hover:underline">Παραθαλάσσια εκκλησάκια</Link> σε απόσταση 5-15 λεπτών για την τελετή της βαπτισης. Ο <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος Δασκαλειό</Link> και άλλα γραφικά ναούς προσφέρουν την τέλεια ατμόσφαιρα.
                    </p>
                    <Link href="/ekklisies" className="text-brand-main hover:underline font-semibold">
                      Εξερευνήστε τις εκκλησίες →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-brand-main mb-4" />
                    <h3 className="text-xl font-bold mb-3">Οικογενειακή Ατμόσφαιρα</h3>
                    <p className="text-muted-foreground mb-4">
                      Ιδανικό περιβάλλον για <strong>δεξίωση βαπτισης</strong> με ασφαλή εξωτερικό χώρο όπου τα παιδιά μπορούν να παίξουν. Ο χώρος μας προσαρμόζεται σε οικογενειακές εκδηλώσεις.
                    </p>
                    <Link href="/vaptisi" className="text-brand-main hover:underline font-semibold">
                      Μάθετε περισσότερα →
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Το Κτήμα Ωρίων είναι η <strong>καλύτερη επιλογή για δεξίωση βαπτισης</strong> κοντά στην Αθήνα. Με πάνω από 15 χρόνια εμπειρίας σε <Link href="/vaptisi" className="text-brand-main hover:underline">βαπτιστικές εκδηλώσεις</Link>, διασφαλίζουμε ότι κάθε λεπτομέρεια θα είναι τέλεια.
                </p>
                <Link href="/contact">
                  <button className="button button4">
                    Κλείστε Ραντεβού για Δεξίωση Βαπτισης
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Process Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Οδηγός Οργάνωσης Γάμου & Δεξίωσης Βαπτισης</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="w-8 h-8 text-brand-main mr-3" />
                  Γάμος - Χρονοδιάγραμμα
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold mb-2">8-12 μήνες πριν: Κλείστε το Κτήμα</h4>
                      <p className="text-muted-foreground text-sm">Επικοινωνήστε μαζί μας για να κλείσετε την ημερομηνία του <Link href="/gamos" className="text-brand-main hover:underline">γάμου σας</Link>. Οι δημοφιλείς ημερομηνίες (Μάιο-Οκτώβριο) εξαντλούνται γρήγορα.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold mb-2">6-8 μήνες πριν: Επιλέξτε Εκκλησία</h4>
                      <p className="text-muted-foreground text-sm">Επισκεφτείτε τα <Link href="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</Link> κοντά μας και κλείστε την τελετή. Ο <Link href="/el/ekklisies/profitis-ilias-thoriko" className="text-brand-main hover:underline">Προφήτης Ηλίας Θορικού</Link> και ο <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος</Link> είναι δημοφιλείς επιλογές.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold mb-2">4-6 μήνες πριν: Καθορίστε Πακέτο</h4>
                      <p className="text-muted-foreground text-sm">Επιλέξτε το πακέτο γάμου και τις <Link href="/ypiresies" className="text-brand-main hover:underline">υπηρεσίες</Link> που θέλετε. Συζητήστε <Link href="/fotografos" className="text-brand-main hover:underline">φωτογράφηση</Link>, catering και διακόσμηση.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold mb-2">2-3 μήνες πριν: Τελικές Λεπτομέρειες</h4>
                      <p className="text-muted-foreground text-sm">Ολοκληρώστε το μενού, τη διακόσμηση και όλες τις λεπτομέρειες της <strong>γαμήλιας δεξίωσης</strong>. Κάνουμε μια τελική επίσκεψη στον <Link href="/o-horos" className="text-brand-main hover:underline">χώρο</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="w-8 h-8 text-brand-main mr-3" />
                  Δεξίωση Βαπτισης - Χρονοδιάγραμμα
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold mb-2">3-4 μήνες πριν: Κλείστε την Ημερομηνία</h4>
                      <p className="text-muted-foreground text-sm">Επικοινωνήστε για να κλείσετε τη <strong>δεξίωση βαπτισης</strong>. Το <Link href="/vaptisi" className="text-brand-main hover:underline">κτήμα μας</Link> προσφέρει ευέλικτες ημερομηνίες.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold mb-2">2-3 μήνες πριν: Επιλέξτε Εκκλησία</h4>
                      <p className="text-muted-foreground text-sm">Επισκεφτείτε τις <Link href="/ekklisies" className="text-brand-main hover:underline">εκκλησίες</Link> για την τελετή. Η <Link href="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</Link> και ο <Link href="/el/ekklisies/agios-panteleimonas-keratea" className="text-brand-main hover:underline">Άγιος Παντελεήμονας</Link> είναι ιδανικές για βαπτιστικές τελετές.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold mb-2">1-2 μήνες πριν: Καθορίστε Μενού</h4>
                      <p className="text-muted-foreground text-sm">Επιλέξτε το μενού για τη <strong>δεξίωση βαπτισης</strong>, συμπεριλαμβανομένου ειδικού παιδικού μενού. Συζητήστε διακόσμηση και <Link href="/ypiresies" className="text-brand-main hover:underline">υπηρεσίες</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-main text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold mb-2">2-3 εβδομάδες πριν: Τελικός Έλεγχος</h4>
                      <p className="text-muted-foreground text-sm">Ολοκληρώστε όλες τις λεπτομέρειες της <strong>δεξίωσης βαπτισης</strong>. Επισκεφτείτε το <Link href="/o-horos" className="text-brand-main hover:underline">χώρο</Link> για τελικό έλεγχο.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Ολοκληρωμένες Υπηρεσίες για Γάμους & Δεξιώσεις Βαπτισης</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Camera className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Φωτογραφία & Βίντεο</h3>
                  <p className="text-muted-foreground mb-4">
                    Συνεργασία με το <Link href="/fotografos" className="text-brand-main hover:underline">Studio Alpha</Link> για επαγγελματική <strong>φωτογραφία γάμου</strong> και βίντεο. Καταγράψτε κάθε λεπτομέρεια της <strong>γαμήλιας δεξίωσης</strong> ή της <strong>δεξίωσης βαπτισης</strong>.
                  </p>
                  <Link href="/fotografos" className="text-brand-main hover:underline font-semibold">
                    Μάθετε περισσότερα →
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Catering & Μενού</h3>
                  <p className="text-muted-foreground mb-4">
                    Gourmet <strong>catering για γάμους και δεξιώσεις βαπτισης</strong>. Μενού προσαρμοσμένο στις επιθυμίες σας, με επιλογές για όλες τις ηλικίες. Ειδικό παιδικό μενού για <strong>δεξιώσεις βαπτισης</strong>.
                  </p>
                  <Link href="/ypiresies" className="text-brand-main hover:underline font-semibold">
                    Δείτε τα μενού μας →
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Home className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Χώρος & Εγκαταστάσεις</h3>
                  <p className="text-muted-foreground mb-4">
                    Πλήρως κλιματιζόμενος <Link href="/o-horos" className="text-brand-main hover:underline">χώρος δεξιώσεων</Link> με εξωτερικό χώρο για <strong>γάμους και δεξιώσεις βαπτισης</strong>. Parking για 100+ αυτοκίνητα, WC, χώρος προετοιμασίας.
                  </p>
                  <Link href="/o-horos" className="text-brand-main hover:underline font-semibold">
                    Εξερευνήστε τον χώρο →
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Church className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Εκκλησίες Κοντά Μας</h3>
                  <p className="text-muted-foreground mb-4">
                    <Link href="/ekklisies" className="text-brand-main hover:underline">4 γραφικά παραθαλάσσια εκκλησάκια</Link> σε απόσταση 5-15 λεπτών για την τελετή. Ιδανικά για <strong>γάμους και βαπτιστικές τελετές</strong> με θέα θάλασσα.
                  </p>
                  <Link href="/ekklisies" className="text-brand-main hover:underline font-semibold">
                    Δείτε τις εκκλησίες →
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Event Coordination</h3>
                  <p className="text-muted-foreground mb-4">
                    Πλήρης συντονισμός <strong>γάμου ή δεξίωσης βαπτισης</strong>. Το προσωπικό μας εξασφαλίζει ότι όλα θα πάνε όπως πρέπει, από την έναρξη μέχρι το τέλος.
                  </p>
                  <Link href="/contact" className="text-brand-main hover:underline font-semibold">
                    Συζητήστε τις ανάγκες σας →
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-elegant hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Star className="w-12 h-12 text-brand-main mb-4" />
                  <h3 className="text-xl font-bold mb-3">Διακόσμηση & Φωτισμός</h3>
                  <p className="text-muted-foreground mb-4">
                    Επαγγελματική διακόσμηση και φωτισμός για κάθε <strong>γαμήλια δεξίωση</strong> ή <strong>δεξίωση βαπτισης</strong>. Προσαρμόζουμε το στυλ στις επιθυμίες σας.
                  </p>
                  <Link href="/ypiresies" className="text-brand-main hover:underline font-semibold">
                    Μάθετε περισσότερα →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Τι Λένε οι Χαρούμενοι Ζευγάρι & Οικογένειες</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-main fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Ο <strong>γάμος μας</strong> στο Κτήμα Ωρίων ήταν απόλυτα τέλειος! Η <strong>γαμήλια δεξίωση</strong> με θέα θάλασσα ήταν ό,τι ονειρευόμασταν. Το προσωπικό ήταν εξαιρετικό και το catering υπέροχο. Συνιστούμε ανεπιφύλακτα!"
                  </p>
                  <p className="font-semibold">— Μαρία & Γιάννης, Γάμος 2024</p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-main fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Οργανώσαμε τη <strong>δεξίωση βαπτισης</strong> του μικρού μας στο Κτήμα Ωρίων και ήταν μαγευτική! Ο χώρος είναι τέλειος για οικογενειακές εκδηλώσεις, το παιδικό μενού ήταν υπέροχο και τα παιδιά έπαιξαν στο εξωτερικό χώρο. Ευχαριστούμε!"
                  </p>
                  <p className="font-semibold">— Ελένη & Δημήτρης, Δεξίωση Βαπτισης 2024</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/reviews">
                <button className="button button4">
                  Δείτε Περισσότερες Κριτικές
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs Section with Schema */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Συχνές Ερωτήσεις</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-brand-text">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/10 to-brand-main/5">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τον γάμο σας πραγματικότητα
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για να κλείσετε επίσκεψη και να λάβετε προσωπική προσφορά για <strong>γάμο</strong> ή <strong>δεξίωση βαπτισης</strong>. Το Κτήμα Ωρίων είναι εδώ για να μετατρέψει τα όνειρά σας σε πραγματικότητα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+302299068812">
                <button className="button button4">
                  <Phone className="w-5 h-5 inline mr-2" />
                  22990 68812
                </button>
              </a>
              <Link href="/contact">
                <button className="button button4">
                  Στείλτε Αίτημα Online
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Related Services */}
      <RelatedServices currentPage="/el/ktima-gamou-athina" />

      {/* Popular Searches */}
      <PopularSearches 
        links={[
          { label: "Κτήμα Γάμου Αθήνα", href: "/el/ktima-gamou-athina" },
          { label: "Κτήματα Βαπτισης Αθήνα", href: "/el/ktimata-vaptisis-athina" },
          { label: "Athens Riviera", href: "/el/ktima-gamou-athens-riviera" },
          { label: "Χώρος Δεξιώσεων", href: "/o-horos" },
          { label: "Γάμος", href: "/gamos" },
          { label: "Δεξίωση Βαπτισης", href: "/vaptisi" },
          { label: "Εκκλησίες", href: "/ekklisies" },
          { label: "Φωτογράφος", href: "/fotografos" },
          { label: "Υπηρεσίες", href: "/ypiresies" }
        ]}
      />

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })}
      </script>
    </Layout>;
}