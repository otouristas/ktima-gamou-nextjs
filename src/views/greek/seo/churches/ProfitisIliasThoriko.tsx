import { Layout } from '@/components/Layout';
import { MapPin, Clock, Users, Car, Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProfitisIliasThoriko() {
  const faqs = [
    {
      question: "Πόση χωρητικότητα έχει το εκκλησάκι Προφήτης Ηλίας Θορικού;",
      answer: "Το εκκλησάκι χωράει περίπου 40-50 άτομα άνετα. Για μεγαλύτερες παρέες, οι καλεσμένοι μπορούν να παραστούν στον εξωτερικό χώρο με θέα θάλασσα."
    },
    {
      question: "Πώς κλείνω το εκκλησάκι για γάμο;",
      answer: "Επικοινωνήστε με την τοπική ενορία ή με το Κτήμα Ωρίων για να σας καθοδηγήσουμε στη διαδικασία κράτησης. Συνήθως χρειάζεται έγκαιρη κράτηση, ειδικά για καλοκαιρινούς μήνες."
    },
    {
      question: "Ποια είναι τα καλύτερα σημεία για φωτογράφιση;",
      answer: "Η θέα προς τη θάλασσα είναι εντυπωσιακή! Συνιστούμε φωτογραφίσεις στο βράχο κοντά στο εκκλησάκι, στην είσοδο με το καμπαναριό, και δίπλα στη θάλασσα κατά το ηλιοβασίλεμα για μαγικά αποτελέσματα."
    },
    {
      question: "Πόσο απέχει από το Κτήμα Ωρίων;",
      answer: "Μόλις 8,8 χιλιόμετρα και 11 λεπτά με το αυτοκίνητο. Ο δρόμος είναι εύκολος και γρήγορος, ιδανικός για να μεταφερθούν οι καλεσμένοι στη δεξίωση."
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
              Προφήτης Ηλίας <span className="text-gradient-brand">Θορικού</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Γάμος με Θέα Θάλασσα κοντά στο Κτήμα Ωρίων
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="card-elegant p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Απόσταση</h3>
              <p className="text-muted-foreground">8,8 χλμ από κτήμα</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χρόνος</h3>
              <p className="text-muted-foreground">11 λεπτά</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Users className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χωρητικότητα</h3>
              <p className="text-muted-foreground">Η διαθεσιμότητα εξαρτάται, και μέσα και έξω. Ζητήστε πληροφορίες</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Car className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Parking</h3>
              <p className="text-muted-foreground">Διαθέσιμο κοντά</p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">
                Το Εκκλησάκι
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ο Προφήτης Ηλίας στο Θορικό είναι ένα από τα πιο εντυπωσιακά παραθαλάσσια εκκλησάκια της περιοχής.
                  Χτισμένο σε λόφο με απεριόριστη θέα στο Αιγαίο, προσφέρει ένα μοναδικό φόντο για την τελετή του γάμου σας.
                </p>
                <p>
                  Η τοποθεσία της εκκλησίας στο Λιμανάκι Περιγιάλι συνδυάζει παραδοσιακή αρχιτεκτονική με φυσική ομορφιά.
                  Το λευκό κτίριο της εκκλησίας, οι γαλάζιοι θόλοι και η πανοραμική θέα δημιουργούν ένα ρομαντικό σκηνικό
                  που μένει αξέχαστο.
                </p>
                <p>
                  Το Κτήμα Ωρίων απέχει μόλις 11 λεπτά, καθιστώντας την μετάβαση από την τελετή στη δεξίωση γρήγορη
                  και άνετη για τους καλεσμένους σας.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-elegant p-6">
                <Camera className="w-8 h-8 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3">Φωτογραφίσεις</h3>
                <p className="text-muted-foreground">
                  Μαγευτικά σημεία για φωτογράφιση με θέα θάλασσα, ηλιοβασίλεμα πάνω στο νερό,
                  και παραδοσιακή αρχιτεκτονική. Ιδανικό για pre-wedding και την ημέρα του γάμου.
                </p>
              </div>
              <div className="card-elegant p-6">
                <Heart className="w-8 h-8 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3">Ρομαντική Ατμόσφαιρα</h3>
                <p className="text-muted-foreground">
                  Ο ήχος της θάλασσας, η θέα στο άπειρο γαλάζιο, και το άγιο σκηνικό της εκκλησίας
                  δημιουργούν την τέλεια ατμόσφαιρα για το ξεκίνημα της νέας σας ζωής.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="card-elegant p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">Πώς να φτάσετε</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25221.68!2d24.05!3d37.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2s%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%A9%CF%81%CE%AF%CF%89%CE%BD!3m2!1d37.8024928!2d24.0288167!4m5!1s0x14a18b34a5b27aa3%3A0x4b79577b1a1682ff!2sChurch%20of%20Prophet%20Elias!3m2!1d37.758934!2d24.0781474!5e0!3m2!1sel!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Χάρτης Προφήτης Ηλίας Θορικού"
                ></iframe>
              </div>
              <p className="text-muted-foreground">
                Από το Κτήμα Ωρίων: Ακολουθήστε την Επαρχιακή Οδό Κερατέας-Λαυρίου προς τη θάλασσα.
                Το εκκλησάκι βρίσκεται στο Λιμανάκι Περιγιάλι.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.google.gr/maps/place/Church+of+Prophet+Elias/@37.7480317,24.0695919,13.27z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-main hover:underline inline-flex items-center gap-2"
                >
                  Άνοιγμα στο Google Maps
                </a>
              </div>
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
            Ετοιμοι για τον <span className="text-gradient-brand">Γάμο των Ονείρων σας</span>;
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Συνδυάστε την τελετή στον Προφήτη Ηλία με τη δεξίωση στο Κτήμα Ωρίων
            για μια αξέχαστη ημέρα.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button button4" asChild>
              <a href="/epikoinonia">Κλείστε Επίσκεψη</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/gamos">Δείτε τις Υπηρεσίες Γάμου</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
