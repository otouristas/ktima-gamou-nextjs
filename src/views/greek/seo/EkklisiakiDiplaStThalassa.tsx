import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Church, MapPin, Clock, Users, Heart, Phone, Navigation } from 'lucide-react';

export default function EkklisiakiDiplaStThalassa() {
  const churches = [
    {
      name: "Άγιος Αλέξανδρος Δασκαλειό",
      distance: "10 λεπτά",
      capacity: "50 άτομα",
      features: ["Θέα θάλασσα", "Parking", "Φωτογενικό"],
      link: "/el/ekklisies/agios-alexandros-daskaleio"
    },
    {
      name: "Προφήτης Ηλίας Θορικού",
      distance: "15 λεπτά",
      capacity: "80 άτομα",
      features: ["Πανοραμική θέα", "Εύκολη πρόσβαση"],
      link: "/el/ekklisies/profitis-ilias-thoriko"
    },
    {
      name: "Άγιος Παντελεήμονας",
      distance: "8 λεπτά",
      capacity: "40 άτομα",
      features: ["Κοντά στη θάλασσα", "Γραφικό"],
      link: "/el/ekklisies/agios-panteleimonas-keratea"
    },
    {
      name: "Παναγία Γκαρικά",
      distance: "12 λεπτά",
      capacity: "60 άτομα",
      features: ["Παραδοσιακό", "Ήσυχο"],
      link: "/el/ekklisies/panagia-gkarika"
    }
  ];

  const timeline = [
    { time: "17:00", event: "Τελετή στο εκκλησάκι" },
    { time: "18:00", event: "Άφιξη στο κτήμα - Ποτό υποδοχής" },
    { time: "18:30", event: "Φωτογράφιση στον κήπο" },
    { time: "19:30", event: "Δεξίωση ξεκινά" },
    { time: "23:00", event: "Πάρτι & χορός" }
  ];

  const faqs = [
    {
      question: "Ποια είναι τα πλησιέστερα εκκλησάκια δίπλα στη θάλασσα;",
      answer: "Τα πιο κοντινά παραθαλάσσια εκκλησάκια είναι: Άγιος Αλέξανδρος Δασκαλειό (10 λεπτά), Άγιος Παντελεήμονας (8 λεπτά), Προφήτης Ηλίας Θορικού (15 λεπτά) και Παναγία Γκαρικά (12 λεπτά)."
    },
    {
      question: "Πόσο χρόνο χρειάζεται για να πάμε από την εκκλησία στο κτήμα;",
      answer: "Ανάλογα με την εκκλησία που θα επιλέξετε, η διαδρομή διαρκεί από 8 έως 15 λεπτά. Όλες οι εκκλησίες έχουν εύκολη πρόσβαση και σαφείς οδηγίες."
    },
    {
      question: "Μπορείτε να βοηθήσετε με τον συντονισμό της εκκλησίας;",
      answer: "Φυσικά! Έχουμε άριστη συνεργασία με όλες τις εκκλησίες της περιοχής και μπορούμε να σας βοηθήσουμε με το χρονοδιάγραμμα και την επικοινωνία."
    },
    {
      question: "Τι γίνεται αν καθυστερήσει η τελετή;",
      answer: "Είμαστε απόλυτα ευέλικτοι! Έχουμε εμπειρία σε τέτοιες καταστάσεις και προσαρμόζουμε το πρόγραμμα ώστε όλα να κυλήσουν ομαλά."
    },
    {
      question: "Υπάρχει χώρος για φωτογράφηση μετά την τελετή;",
      answer: "Ναι! Οι κήποι του κτήματος προσφέρουν υπέροχα σκηνικά για φωτογράφιση, ενώ τα εκκλησάκια δίπλα στη θάλασσα είναι ιδανικά για ρομαντικές φωτογραφίες."
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-brand">Εκκλησάκι δίπλα στη θάλασσα</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Τελετή & Δεξίωση την ίδια μέρα - Ομαλή μετάβαση στο Κτήμα Ωρίων
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="button button4">
                    Κλείστε Επίσκεψη
                  </button>
                </Link>
                <a href="tel:+302299068812">
                  <button className="button button4">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Πληροφορίες
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Churches Grid */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Κοντινά Εκκλησάκια</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Γραφικά παραθαλάσσια εκκλησάκια σε μικρή απόσταση από το Κτήμα Ωρίων
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {churches.map((church, index) => (
                <Link key={index} href={church.link}>
                  <Card className="card-elegant hover:shadow-2xl transition-all h-full">
                    <CardContent className="p-6">
                      <Church className="w-12 h-12 text-brand-main mb-4" />
                      <h3 className="font-bold text-lg mb-3">{church.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-brand-main" />
                          {church.distance}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-brand-main" />
                          {church.capacity}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {church.features.map((feat, idx) => (
                          <span key={idx} className="text-xs bg-brand-main/10 text-brand-main px-2 py-1 rounded">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Δείγμα Χρονοδιαγράμματος</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 rounded-full bg-brand-main text-white flex items-center justify-center font-bold">
                      <Clock className="w-6 h-6" />
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-brand-main/30 mt-2"></div>
                    )}
                  </div>
                  <Card className="card-elegant flex-1">
                    <CardContent className="p-4">
                      <div className="text-brand-main font-bold mb-1">{item.time}</div>
                      <div className="text-foreground">{item.event}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Συχνές Ερωτήσεις</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-brand-text">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/10 to-brand-main/5">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Οργανώστε την τέλεια ημέρα
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Από το εκκλησάκι στο κτήμα - Αναλαμβάνουμε κάθε λεπτομέρεια
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+302299068812">
                <button className="button button4">
                  Καλέστε 22990 68812
                </button>
              </a>
              <Link href="/contact">
                <button className="button button4">
                  Online Αίτημα
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

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
    </Layout>
  );
}
