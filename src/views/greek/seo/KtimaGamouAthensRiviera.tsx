import { Layout } from '@/components/Layout';
import { MapPin, Camera, Heart, Sunset, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PopularSearches } from '@/components/PopularSearches';
import Link from 'next/link';

export default function KtimaGamouAthensRiviera() {
  const faqs = [
    {
      question: "Πόσο απέχει το Κτήμα Ωρίων από την Αθήνα;",
      answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα, μόλις 45 λεπτά από το κέντρο της Αθήνας μέσω Αττικής Οδού. Η εύκολη πρόσβαση το καθιστά ιδανικό για γάμους στην Athens Riviera."
    },
    {
      question: "Υπάρχουν ξενοδοχεία κοντά για τους καλεσμένους;",
      answer: "Ναι! Στην περιοχή της Athens Riviera (Λαύριο, Σούνιο, Πόρτο Ράφτη) υπάρχουν πολλά ξενοδοχεία και boutique hotels. Μπορούμε να σας προτείνουμε επιλογές για κάθε budget."
    },
    {
      question: "Πόσα άτομα χωράει το κτήμα;",
      answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει από 50 έως 350 καλεσμένους. Διαθέτει εσωτερικό και εξωτερικό χώρο με αποκλειστική χρήση για την εκδήλωσή σας."
    },
    {
      question: "Ποια είναι η καλύτερη εποχή για γάμο στην Athens Riviera;",
      answer: "Άνοιξη (Απρίλιος-Ιούνιος) και φθινόπωρο (Σεπτέμβριος-Οκτώβριος) είναι ιδανικές με ήπιο καιρό. Το καλοκαίρι προσφέρει μαγευτικά ηλιοβασιλέματα και θερμές νύχτες."
    }
  ];

  const schemaData = {
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
  };

  const advantages = [
    {
      icon: MapPin,
      title: "Προνομιακή Τοποθεσία",
      description: "Στην καρδιά της Athens Riviera, κοντά σε Σούνιο, Πόρτο Ράφτη, και Λαύριο. Εύκολη πρόσβαση από Αθήνα και αεροδρόμιο."
    },
    {
      icon: Sunset,
      title: "Μαγευτικά Ηλιοβασιλέματα",
      description: "Θέα προς τη θάλασσα και καταπληκτικά ηλιοβασιλέματα που δημιουργούν το τέλειο φόντο για φωτογραφίσεις και την δεξίωση σας."
    },
    {
      icon: Building2,
      title: "Αποκλειστική Χρήση",
      description: "Ολόκληρο το κτήμα είναι δικό σας για την ημέρα του γάμου. Εσωτερικός και εξωτερικός χώρος, parking, και πλήρης ιδιωτικότητα."
    },
    {
      icon: Camera,
      title: "Φωτογενικό Περιβάλλον",
      description: "Κατάφυτοι κήποι, θέα θάλασσα, και πολλά σημεία για αξέχαστες φωτογραφίσεις. Κοντά σε γραφικά παραθαλάσσια εκκλησάκια."
    },
    {
      icon: Heart,
      title: "All-Inclusive Πακέτα",
      description: "Catering, διακόσμηση, μουσική, φωτισμός, συντονισμός. Αναλαμβάνουμε όλες τις λεπτομέρειες για έναν ξεγνοίαστο γάμο."
    },
    {
      icon: Users,
      title: "Ευελιξία Χωρητικότητας",
      description: "Από intimate γάμους 50 ατόμων μέχρι μεγάλες εκδηλώσεις 350 ατόμων. Προσαρμοζόμαστε στις ανάγκες σας."
    }
  ];

  return (
    <Layout>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-main/10 to-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Κτήμα Γάμου <span className="text-gradient-brand">Athens Riviera</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Κτήμα Ωρίων στην Κερατέα - Ο Ιδανικός Προορισμός για τον Γάμο σας
            </p>
          </div>
        </div>
      </section>

      {/* Why Athens Riviera */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί να επιλέξετε <span className="text-gradient-brand">Athens Riviera</span> για τον Γάμο σας;
            </h2>
            <div className="card-elegant p-8 text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Η Athens Riviera είναι μια από τις πιο γοητευτικές περιοχές της Αττικής, συνδυάζοντας 
                την εγγύτητα στην Αθήνα με την ομορφιά της θάλασσας και την ηρεμία της φύσης. Το Κτήμα Ωρίων 
                βρίσκεται στην καρδιά αυτής της περιοχής, προσφέροντας:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Εύκολη πρόσβαση:</strong> Μόλις 45 λεπτά από Αθήνα και 30 λεπτά από το αεροδρόμιο μέσω Αττικής Οδού</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Θέα θάλασσα:</strong> Πανοραμική θέα στο Αιγαίο και μαγευτικά ηλιοβασιλέματα</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Κοντά σε iconic προορισμούς:</strong> Ναός Ποσειδώνα Σούνιο, Πόρτο Ράφτη, Λαύριο</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Διαμονή καλεσμένων:</strong> Πολλές επιλογές ξενοδοχείων στην περιοχή</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Παραθαλάσσια εκκλησάκια:</strong> 7 γραφικά εκκλησάκια σε απόσταση 5-15 λεπτών</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="card-elegant p-6 hover:scale-105 transition-transform">
                <advantage.icon className="w-10 h-10 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gradient-brand">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding bg-gradient-to-b from-champagne/30 to-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Γειτονικοί <span className="text-gradient-brand">Προορισμοί</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elegant p-6">
              <h3 className="text-xl font-bold mb-3 text-gradient-brand">Ναός Ποσειδώνα - Σούνιο</h3>
              <p className="text-muted-foreground mb-2">20 λεπτά από το κτήμα</p>
              <p className="text-muted-foreground leading-relaxed">
                Το iconic μνημείο της Athens Riviera. Ιδανικό για pre-wedding φωτογραφίσεις με 
                εκπληκτική θέα στο ηλιοβασίλεμα.
              </p>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-bold mb-3 text-gradient-brand">Πόρτο Ράφτη</h3>
              <p className="text-muted-foreground mb-2">15 λεπτά από το κτήμα</p>
              <p className="text-muted-foreground leading-relaxed">
                Γραφική παραθαλάσσια περιοχή με όμορφες παραλίες, ταβέρνες και ξενοδοχεία. 
                Ιδανική για τη διαμονή των καλεσμένων σας.
              </p>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-bold mb-3 text-gradient-brand">Λαύριο</h3>
              <p className="text-muted-foreground mb-2">15 λεπτά από το κτήμα</p>
              <p className="text-muted-foreground leading-relaxed">
                Ιστορική πόλη με λιμάνι, αρχαιολογικό πάρκο Λαυρίου, και όμορφες παραλίες. 
                Πολλές επιλογές φαγητού και διασκέδασης.
              </p>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-bold mb-3 text-gradient-brand">Παραλίες Αττικής</h3>
              <p className="text-muted-foreground mb-2">10-20 λεπτά</p>
              <p className="text-muted-foreground leading-relaxed">
                Πολυάριθμες όμορφες παραλίες (Κάκη Θάλασσα, Θορικό, Δασκαλειό) για after-wedding 
                φωτογραφίσεις και χαλάρωση.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Opportunities */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Φωτογραφίσεις <span className="text-gradient-brand">Athens Riviera</span>
          </h2>
          
          <div className="card-elegant p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient-brand">Μοναδικά Σκηνικά</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Η Athens Riviera προσφέρει ασύγκριτα σκηνικά για τις φωτογραφίσεις του γάμου σας:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Golden Hour Magic:</strong> Ηλιοβασιλέματα με χρυσό φως πάνω στη θάλασσα</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Παραθαλάσσια Εκκλησάκια:</strong> Λευκά κτίρια, γαλάζιοι θόλοι, απέραντο γαλάζιο</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Κήποι του Κτήματος:</strong> Καταπράσινο περιβάλλον με λουλούδια και δέντρα</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Ρομαντικές Παραλίες:</strong> Αμμουδιές, βράχια, και κρυστάλλινα νερά</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Σούνιο Backdrop:</strong> Ο Ναός του Ποσειδώνα στο background των φωτογραφιών</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-champagne/30 to-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Συχνές <span className="text-gradient-brand">Ερωτήσεις</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient-brand">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-main/10 to-sage/20">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ονειρευτείτε τον Γάμο σας στην <span className="text-gradient-brand">Athens Riviera</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Το Κτήμα Ωρίων σας περιμένει για να δημιουργήσετε μαζί μας τις πιο όμορφες αναμνήσεις 
            της ζωής σας στην Athens Riviera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button button4" asChild>
              <a href="/epikoinonia">Κλείστε Επίσκεψη Σήμερα</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/gamos">Δείτε Πακέτα Γάμου</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
