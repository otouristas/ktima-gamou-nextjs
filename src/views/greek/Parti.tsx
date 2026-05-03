import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star, Music, Sparkles, Gift, Calendar } from 'lucide-react';

// Import party photos

export default function Parti() {
  const partyPhotos = [
    { src: "/party/1.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/2.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/3.JPG", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/4.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/5.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/6.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/7.jpeg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/8.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/9.JPG", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/10.jpg", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" },
    { src: "/party/11.JPG", alt: "Φωτογραφία πάρτι στο Κτήμα Ωρίων" }
  ];

  const partyFeatures = [
    {
      icon: Heart,
      title: "Ευέλικτος Χώρος",
      description: "Προσαρμόζεται σε κάθε τύπο πάρτι - από γενέθλια έως εταιρικές εκδηλώσεις"
    },
    {
      icon: Music,
      title: "Μουσική & Διασκέδαση",
      description: "Πλήρης μουσική κάλυψη και διασκεδαστικό περιβάλλον για να περάσετε υπέροχα"
    },
    {
      icon: Sparkles,
      title: "Μοναδική Ατμόσφαιρα",
      description: "Δημιουργούμε την τέλεια ατμόσφαιρα για να κάνουμε το πάρτι σας αξέχαστο"
    },
    {
      icon: Users,
      title: "Προσωποποιημένη Εξυπηρέτηση",
      description: "Κάθε πάρτι είναι μοναδικό και προσαρμόζουμε τις υπηρεσίες μας στις ανάγκες σας"
    }
  ];

  const partyTypes = [
    {
      title: "Γενέθλια Πάρτι",
      description: "Ειδικά οργανωμένα γενέθλια για όλες τις ηλικίες με διασκεδαστικές δραστηριότητες"
    },
    {
      title: "Αρραβώνας",
      description: "Ρομαντικές εκδηλώσεις αρραβώνα με ειδική διακόσμηση και ατμόσφαιρα"
    },
    {
      title: "Εταιρικό Πάρτι",
      description: "Επαγγελματικά πάρτι για εταιρείες με σύγχρονες εγκαταστάσεις"
    },
    {
      title: "Εορταστικές Εκδηλώσεις",
      description: "Χριστουγεννιάτικα, Πάσχα και άλλες ειδικές εορταστικές εκδηλώσεις"
    }
  ];

  const partyServices = [
    {
      icon: Music,
      title: "Μουσική & DJ",
      description: "DJ για να κρατήσει το πάρτι ζωντανό"
    },
    {
      icon: Sparkles,
      title: "Διακόσμηση",
      description: "Προσεγμένη διακόσμηση που θα δημιουργήσει την τέλεια ατμόσφαιρα"
    },
    {
      icon: Gift,
      title: "Δραστηριότητες",
      description: "Διασκεδαστικές δραστηριότητες και παιχνίδια για όλες τις ηλικίες"
    },
    {
      icon: Camera,
      title: "Φωτογραφία",
      description: "Επαγγελματική φωτογραφία για να καταγράψουμε τις στιγμές"
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Πάρτι</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Ο ιδανικός χώρος για το party σας - Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Αναζητάτε τον τέλειο χώρο για να γιορτάσετε;
              </p>
              
              <p>
                Στο Κτήμα Ωρίων, μετατρέπουμε τις ξεχωριστές σας στιγμές σε αξέχαστες εμπειρίες. 
                Γενέθλια, αρραβώνας ή εταιρικό party - ο χώρος μας και οι υπηρεσίες μας προσαρμόζονται σε κάθε σας ανάγκη.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Δημιουργήστε μαζί μας μια βραδιά που θα μείνει αξέχαστη.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Επικοινωνήστε μαζί μας σήμερα για να κλείσετε την ημερομηνία σας!
              </p>
            </div>
          </div>
        </section>

        {/* Party Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {partyFeatures.map((feature, index) => (
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

        {/* Party Types */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Τύποι Πάρτι</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {partyTypes.map((party, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{party.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{party.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Party Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Υπηρεσίες Πάρτι</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partyServices.map((service, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Πάρτι</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partyPhotos.map((photo, index) => (
                <ClickableImage
                  src={photo.src}
                  alt={photo.alt}
                  images={partyPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Μοναδικές Στιγμές</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Προσαρμοσμένος Χώρος</h3>
                    <p className="text-muted-foreground">
                      Ο χώρος μας προσαρμόζεται σε κάθε τύπο πάρτι και κάθε ανάγκη σας.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Αξέχαστες Εμπειρίες</h3>
                    <p className="text-muted-foreground">
                      Μετατρέπουμε τις ξεχωριστές σας στιγμές σε αξέχαστες εμπειρίες.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Πλήρης Υποστήριξη</h3>
                    <p className="text-muted-foreground">
                      Σας υποστηρίζουμε σε κάθε βήμα για να δημιουργήσουμε το τέλειο πάρτι.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Γιατί το Κτήμα Ωρίων;</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Ευέλικτος χώρος</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Music className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Μουσική & διασκέδαση</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Μοναδική ατμόσφαιρα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Προσωποποιημένη εξυπηρέτηση</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Εύκολη κράτηση ημερομηνίας</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας δημιουργήσουμε το τέλειο πάρτι μαζί
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για να κλείσετε την ημερομηνία σας και να δημιουργήσουμε μια αξέχαστη βραδιά!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                ΚΛΕΙΣΤΕ ΗΜΕΡΟΜΗΝΙΑ
              </button>
              <button className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}