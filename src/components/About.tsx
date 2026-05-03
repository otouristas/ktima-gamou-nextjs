import Image from 'next/image';

interface FeatureList {
  readonly label: string;
}

interface TeamPhoto {
  readonly src: string;
  readonly alt: string;
}

export const About = () => {
  const features: readonly FeatureList[] = [
    { label: 'Χώρο στάθμευσης' },
    { label: 'Ημιυπαίθρια παγόδα' },
    { label: 'Χώρο υποδοχής' },
    { label: 'Studio για το ζευγάρι' }
  ];

  const teamPhotos: readonly TeamPhoto[] = [
    { src: "/final-photos/emeis/emeis1.jpg", alt: "Ομάδα Κτήμα Ωρίων σε εκδήλωση" },
    { src: "/final-photos/emeis/emeis2.jpg", alt: "Υπεύθυνη χώρου Κτήμα Ωρίων" }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Εμείς - <span className="text-gradient-brand">Κτήμα Ωρίων</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης 
                νιώθει αμέσως την λάμψη της πολυτέλειας σε απόλυτη αρμονία με το φυσικό περιβάλλον.
              </p>
              
              <p>
                Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, μπορείτε να 
                απολαύσετε, με κάθε μεγαλοπρέπεια, τις ξεχωριστές στιγμές όπως το γάμο σας ή 
                τη βάπτιση του παιδιού σας.
              </p>
              
              <p>
                Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος 
                του κτήματος εγγυούνται την θερμή υποδοχή και την απόλυτη φιλοξενία των 
                καλεσμένων σας.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-foreground font-medium mb-2">
                Υπεύθυνη χώρου: <span className="text-brand-main">Μπούσουλα Παναγιώτα</span>
              </p>
            </div>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {teamPhotos.map(photo => (
                <div key={photo.src} className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-video">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gradient-brand">
                Το Κτήμα Διαθέτει
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map(feature => (
                  <div key={feature.label} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-main rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-sage/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center italic">
                  "Η συνεργασία μας με πιστοποιημένα catering εξασφαλίζει, εκτός από το περιβάλλον 
                  και τη γαστριμαργική απόλαυση των καλεσμένων σας."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
