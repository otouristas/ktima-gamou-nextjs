import { Layout } from '@/components/Layout';
import { MapPin, Clock, Users, Car, Church, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClickableImage } from '@/components/ImageLightbox';

interface ChurchPhoto {
  readonly src: string;
  readonly alt: string;
}

export default function AgiaTriada() {
  const churchPhotos: readonly ChurchPhoto[] = [
    {
      src: '/ekklisies/agia-triada/IMG_3463.jpeg',
      alt: 'Αγία Τριάδα Κερατέας - Πέτρινο εκκλησάκι'
    },
    {
      src: '/ekklisies/agia-triada/IMG_3465.jpeg',
      alt: 'Αγία Τριάδα Κερατέας - Εξωτερική όψη'
    },
    {
      src: '/ekklisies/agia-triada/IMG_3466.jpeg',
      alt: 'Αγία Τριάδα Κερατέας - Γραφικό εκκλησάκι'
    }
  ];

  const faqs = [
    {
      question: "Που βρίσκεται η Αγία Τριάδα;",
      answer: "Η Αγία Τριάδα βρίσκεται στην είσοδο της Κερατέας, μόλις 5 χιλιόμετρα από το Κτήμα Ωρίων. Είναι ένα πέτρινο γραφικό εκκλησάκι, ιδανικό για intimate τελετές."
    },
    {
      question: "Πόσος χρόνος χρειάζεται για να φτάσουμε από το κτήμα;",
      answer: "Η διαδρομή από το Κτήμα Ωρίων στην Αγία Τριάδα διαρκεί περίπου 10 λεπτά. Η εγγύτητα διευκολύνει σημαντικά τη ροή της ημέρας σας."
    },
    {
      question: "Είναι κατάλληλο για γάμους;",
      answer: "Απολύτως! Το πέτρινο γραφικό εκκλησάκι της Αγίας Τριάδας προσφέρει μια πολύ προσωπική και συγκινητική ατμόσφαιρα, ιδανική για intimate γάμους και βαπτίσεις."
    },
    {
      question: "Υπάρχει χώρος για φωτογραφίσεις;",
      answer: "Ναι! Το εκκλησάκι έχει όμορφο περιβάλλον με πέτρινη αρχιτεκτονική και πολλά γραφικά σημεία για φωτογράφιση. Η τοποθεσία του στην είσοδο της Κερατέας προσφέρει επιπλέον όμορφα background."
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
              Αγία <span className="text-gradient-brand">Τριάδα</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Πέτρινο Γραφικό Εκκλησάκι στην Κερατέα
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
              <p className="text-muted-foreground">5 χλμ από κτήμα</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χρόνος</h3>
              <p className="text-muted-foreground">10 λεπτά</p>
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

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">
                Το Εκκλησάκι
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Η Αγία Τριάδα είναι ένα πέτρινο γραφικό εκκλησάκι που βρίσκεται στην είσοδο της Κερατέας,
                  μόλις 5 χιλιόμετρα από το Κτήμα Ωρίων. Το εκκλησάκι προσφέρει μια μοναδική ατμόσφαιρα με
                  την παραδοσιακή πέτρινη αρχιτεκτονική του, ιδανική για intimate τελετές γάμου και βάπτισης.
                </p>
                <p>
                  Η εγγύτητά του με το Κτήμα Ωρίων (μόλις 10 λεπτά!) το καθιστά μια εξαιρετική επιλογή για
                  ζευγάρια που θέλουν ομαλή μετάβαση από την τελετή στη δεξίωση. Το μικρό μέγεθος της εκκλησίας
                  δημιουργεί μια πολύ προσωπική και συγκινητική ατμόσφαιρα, όπου κάθε λεπτομέρεια γίνεται πιο αισθητή.
                </p>
                <p>
                  Το πέτρινο εκκλησάκι έχει όμορφο περιβάλλον με πολλά γραφικά σημεία για φωτογράφιση,
                  προσφέροντας την τέλεια αφετηρία για τη νέα σας ζωή μαζί.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-elegant p-6">
                <Church className="w-8 h-8 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3">Πέτρινη Αρχιτεκτονική</h3>
                <p className="text-muted-foreground">
                  Γραφικό εκκλησάκι με παραδοσιακή πέτρινη κατασκευή. Η μοναδική αισθητική του δημιουργεί
                  μια κατανυκτική ατμόσφαιρα για την τέλεση του μυστηρίου του γάμου.
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

            {/* Photo Gallery */}
            <div className="card-elegant p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">Φωτογραφίες</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {churchPhotos.map((photo, index) => (
                  <ClickableImage
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    images={churchPhotos}
                    index={index}
                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="card-elegant p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">Πώς να φτάσετε</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12609.08!2d23.99!3d37.806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2s%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%A9%CF%81%CE%AF%CF%89%CE%BD!3m2!1d37.8024928!2d24.0288167!4m5!1s0x14a18d6e091cb57d%3A0x20df8f722cd314b8!2sAgias%20Triados%20Keratea!3m2!1d37.8103664!2d23.9710399!5e0!3m2!1sel!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Χάρτης Αγία Τριάδα Κερατέας"
                ></iframe>
              </div>
              <p className="text-muted-foreground">
                Από το Κτήμα Ωρίων: Κατευθυνθείτε προς την είσοδο της Κερατέας.
                Η Αγία Τριάδα βρίσκεται στην είσοδο της Κερατέας, 5 χιλιόμετρα από το κτήμα.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.google.gr/maps/place/Agias+Triados,+Keratea+190+01/@37.8103664,23.9684596,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-main hover:underline inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
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
            Ξεκινήστε το <span className="text-gradient-brand">Ταξίδι σας</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Τελέστε τον γάμο σας στην Αγία Τριάδα και συνεχίστε με δεξίωση στο Κτήμα Ωρίων.
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
    </Layout>
  );
}

