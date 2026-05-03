import { Layout } from '@/components/Layout';
import { MapPin, Clock, Users, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PanagiaGkarika() {
  const faqs = [
    {
      question: "Που βρίσκεται η Παναγία Γκαρικά;",
      answer: "Η Παναγία Γκαρικά βρίσκεται στην Κερατέα, μόλις 3,1 χλμ και 6 λεπτά από το Κτήμα Ωρίων. Είναι το πιο κοντινό εκκλησάκι στο κτήμα."
    },
    {
      question: "Είναι κατάλληλο για μικρούς γάμους;",
      answer: "Ναι! Η Παναγία Γκαρικά είναι ιδανική για intimate γάμους με 30-40 καλεσμένους. Το μικρό μέγεθος του εκκλησιού δημιουργεί μια πολύ προσωπική και συγκινητική ατμόσφαιρα."
    },
    {
      question: "Υπάρχει χώρος για φωτογραφίσεις;",
      answer: "Απολύτως! Το εκκλησάκι έχει όμορφο περιβάλλον με θέα και πολλά γραφικά σημεία για φωτογράφιση. Η εγγύτητα στη θάλασσα προσφέρει επιπλέον όμορφα background."
    },
    {
      question: "Πόσο εύκολη είναι η μετάβαση στο κτήμα;",
      answer: "Πολύ εύκολη! Μόλις 6 λεπτά οδήγηση. Αυτό σημαίνει ότι οι καλεσμένοι φτάνουν γρήγορα στη δεξίωση και η ημέρα κυλάει πιο ομαλά."
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

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-main/10 to-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Παναγία <span className="text-gradient-brand">Γκαρικά</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Το Πιο Κοντινό Εκκλησάκι στο Κτήμα Ωρίων
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="card-elegant p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Απόσταση</h3>
              <p className="text-muted-foreground">3,1 χλμ</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χρόνος</h3>
              <p className="text-muted-foreground">6 λεπτά</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Users className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χωρητικότητα</h3>
              <p className="text-muted-foreground">Η διαθεσιμότητα εξαρτάται, και μέσα και έξω. Ζητήστε πληροφορίες</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Car className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Parking</h3>
              <p className="text-muted-foreground">Διαθέσιμο</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">Το Εκκλησάκι</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Η Παναγία Γκαρικά είναι ένα γραφικό εκκλησάκι στην Κερατέα, ιδανικό για intimate γάμους.
                  Η εγγύτητά του με το Κτήμα Ωρίων (μόλις 6 λεπτά!) το καθιστά την πιο βολική επιλογή για
                  ζευγάρια που θέλουν ομαλή μετάβαση από την τελετή στη δεξίωση.
                </p>
                <p>
                  Το μικρό μέγεθος της εκκλησίας δημιουργεί μια πολύ προσωπική και συγκινητική ατμόσφαιρα,
                  ιδανική για γάμους με 30-40 καλεσμένους. Κάθε λεπτομέρεια γίνεται πιο αισθητή και η τελετή
                  αποκτά έναν ιδιαίτερα οικείο χαρακτήρα.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">Πώς να φτάσετε</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12610.849!2d24.02!3d37.806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2s%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%A9%CF%81%CE%AF%CF%89%CE%BD!3m2!1d37.8024928!2d24.0288167!4m5!1s0x14a18d000e1f1841%3A0x4c67a4812568b370!2s%CE%A0%CE%B1%CE%BD%CE%B1%CE%B3%CE%B9%CE%B1%20%CE%93%CE%BA%CE%B1%CF%81%CE%B9%CE%BA%CE%B1!3m2!1d37.8107985!2d24.0172445!5e0!3m2!1sel!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Χάρτης Παναγία Γκαρικά"
                ></iframe>
              </div>
              <p className="text-muted-foreground">
                Από το Κτήμα Ωρίων: Μόλις 6 λεπτά οδήγηση (3,1 χλμ). Εύκολη και γρήγορη πρόσβαση.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.google.gr/maps/place/%CE%A0%CE%B1%CE%BD%CE%B1%CE%B3%CE%B9%CE%B1+%CE%93%CE%BA%CE%B1%CF%81%CE%B9%CE%BA%CE%B1/@37.8107985,24.0146642,17z/"
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

      <section className="section-padding bg-gradient-to-b from-champagne/30 to-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Συχνές <span className="text-gradient-brand">Ερωτήσεις</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient-brand">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-brand-main/10 to-sage/20">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ξεκινήστε το <span className="text-gradient-brand">Ταξίδι σας</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Τελέστε τον γάμο σας στην Παναγία Γκαρικά και συνεχίστε με δεξίωση στο Κτήμα Ωρίων.
          </p>
          <Button size="lg" className="button button4" asChild>
            <a href="/epikoinonia">Κλείστε Επίσκεψη</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
