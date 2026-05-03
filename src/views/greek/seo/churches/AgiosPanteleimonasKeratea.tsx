import { Layout } from '@/components/Layout';
import { MapPin, Clock, Users, Car, Church, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function AgiosPanteleimonasKeratea() {
  const faqs = [{
    question: "Τι επιτρέπεται για τη διακόσμηση της εκκλησίας;",
    answer: "Ο Άγιος Παντελεήμονας επιτρέπει διακόσμηση με φρέσκα άνθη στην είσοδο, τα παγκάρια και το τέμπλο. Αποφύγετε ρίζα ρυζιού και κονφετί εντός του ναού - χρησιμοποιήστε πέταλα λουλουδιών."
  }, {
    question: "Ποιο είναι το κόστος της τελετής;",
    answer: "Το κόστος καθορίζεται από την ενορία και εξαρτάται από την ημέρα και την ώρα. Επικοινωνήστε μαζί μας στο Κτήμα Ωρίων για να σας βοηθήσουμε με όλες τις λεπτομέρειες και να σας συνδέσουμε με την ενορία."
  }, {
    question: "Υπάρχει χώρος στάθμευσης;",
    answer: "Ναι, υπάρχει επαρκής χώρος στάθμευσης κοντά στην εκκλησία. Το Κτήμα Ωρίων διαθέτει επίσης μεγάλο χώρο parking για 100+ αυτοκίνητα για τη δεξίωση."
  }, {
    question: "Πόσος χρόνος χρειάζεται για να φτάσουμε στο κτήμα μετά τον γάμο;",
    answer: "Η διαδρομή από τον Άγιο Παντελεήμονα στο Κτήμα Ωρίων διαρκεί περίπου 13 λεπτά (8,6 χλμ). Αυτό επιτρέπει αρκετό χρόνο για φωτογραφίσεις στην εκκλησία πριν μεταβείτε στη δεξίωση."
  }];
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
  return <Layout>
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>

    {/* Hero Section */}
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-main/10 to-background">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Άγιος Παντελεήμονας <span className="text-gradient-brand">Κερατέας</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Παραδοσιακή Τελετή Γάμου στην Κακή Θάλασσα
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
            <p className="text-muted-foreground">8,6 χλμ από κτήμα</p>
          </div>
          <div className="card-elegant p-6 text-center">
            <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
            <h3 className="font-bold mb-2">Χρόνος</h3>
            <p className="text-muted-foreground">13 λεπτά</p>
          </div>
          <div className="card-elegant p-6 text-center">
            <Users className="w-8 h-8 text-brand-main mx-auto mb-3" />
            <h3 className="font-bold mb-2">Χωρητικότητα</h3>
            <p className="text-muted-foreground">Η διαθεσιμότητα εξαρτάται, και μέσα και έξω. Ζητήστε πληροφορίες</p>
          </div>
          <div className="card-elegant p-6 text-center">
            <Car className="w-8 h-8 text-brand-main mx-auto mb-3" />
            <h3 className="font-bold mb-2">Parking</h3>
            <p className="text-muted-foreground">Ευρύχωρο</p>
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
                Ο Άγιος Παντελεήμονας στην Κακή Θάλασσα Κερατέας είναι μία όμορφη παραδοσιακή εκκλησία
                με βαθιά ιστορία και πνευματικότητα. Βρίσκεται σε γραφική τοποθεσία κοντά στη θάλασσα,
                προσφέροντας έναν κατάλληλο χώρο για την τέλεση του μυστηρίου του γάμου.
              </p>
              <p>
                Η εκκλησία διαθέτει όμορφη αρχιτεκτονική με παραδοσιακά στοιχεία, ευρύχωρο εσωτερικό
                που μπορεί να φιλοξενήσει 60-80 καλεσμένους, και περιποιημένο προαύλιο ιδανικό για φωτογραφίσεις.
                Η ατμόσφαιρα είναι ήρεμη και κατανυκτική, προσφέροντας την τέλεια αρχή για τη νέα σας ζωή μαζί.
              </p>
              <p>
                Η εγγύτητα της εκκλησίας με το Κτήμα Ωρίων (μόλις 13 λεπτά) διευκολύνει σημαντικά τη
                ροή της ημέρας σας. Οι καλεσμένοι μπορούν να μετακινηθούν άνετα από την τελετή στη δεξίωση,
                ενώ εσείς έχετε χρόνο για όμορφες φωτογραφίες.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card-elegant p-6">
              <Church className="w-8 h-8 text-brand-main mb-4" />
              <h3 className="text-xl font-bold mb-3">Παραδοσιακός Χώρος</h3>
              <p className="text-muted-foreground">
                Εκκλησία με ιστορία και παραδοσιακή αρχιτεκτονική. Όμορφα εικονίσματα, ξύλινο τέμπλο,
                και κατανυκτική ατμόσφαιρα που δημιουργεί την τέλεια αφετηρία για το γάμο σας.
              </p>
            </div>
            <div className="card-elegant p-6">
              <Heart className="w-8 h-8 text-brand-main mb-4" />
              <h3 className="text-xl font-bold mb-3">Ολοκληρωμένες Υπηρεσίες</h3>
              <p className="text-muted-foreground">
                Στο Κτήμα Ωρίων αναλαμβάνουμε το συντονισμό τόσο της τελετής όσο και της δεξίωσης.
                Βοηθάμε με την επικοινωνία με την ενορία, το catering, τη διακόσμηση και όλες τις λεπτομέρειες.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="card-elegant p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient-brand">Πώς να φτάσετε</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12595.59!2d24.04!3d37.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2s%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%A9%CF%81%CE%AF%CF%89%CE%BD!3m2!1d37.8024928!2d24.0288167!4m5!1s0x14a18b0032a91af7%3A0x830f333c3fb94ecf!2s%CE%86%CE%B3%CE%B9%CE%BF%CF%82%20%CE%A0%CE%B1%CE%BD%CF%84%CE%B5%CE%BB%CE%B5%CE%AE%CE%BC%CF%89%CE%BD!3m2!1d37.8357432!2d24.0492849!5e0!3m2!1sel!2sgr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Χάρτης Άγιος Παντελεήμονας Κερατέα"></iframe>
            </div>
            <p className="text-muted-foreground">
              Από το Κτήμα Ωρίων: Πάρτε την Επαρχιακή Οδό Κερατέας προς Κακή Θάλασσα.
              Η εκκλησία βρίσκεται στην περιοχή και είναι εύκολα προσβάσιμη.
            </p>
            <div className="mt-4">
              <a href="https://www.google.com/maps/place/%CE%86%CE%B3%CE%B9%CE%BF%CF%82+%CE%A0%CE%B1%CE%BD%CF%84%CE%B5%CE%BB%CE%B5%CE%AE%CE%BC%CF%89%CE%BD/@37.8357474,24.04671,17z/" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline inline-flex items-center gap-2">
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
          {faqs.map((faq, index) => <div key={index} className="card-elegant p-6">
            <h3 className="text-xl font-bold mb-3 text-gradient-brand">
              {faq.question}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-gradient-to-r from-brand-main/10 to-sage/20">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ξεκινήστε την Κοινή σας <span className="text-gradient-brand">Πορεία</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Συνδυάστε την παραδοσιακή τελετή στον Άγιο Παντελεήμονα με τη μαγευτική δεξίωση στο Κτήμα Ωρίων.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="button button4" asChild>
            <a href="/epikoinonia">Επικοινωνήστε Μαζί Μας</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/ekklisies">Δείτε Όλες τις Εκκλησίες</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>;
}