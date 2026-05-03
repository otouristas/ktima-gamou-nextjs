import { Layout } from '@/components/Layout';
import { MapPin, Clock, Users, Car, Church, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClickableImage } from '@/components/ImageLightbox';

interface ChurchPhoto {
  readonly src: string;
  readonly alt: string;
}

export default function AgiaTriadaEn() {
  const churchPhotos: readonly ChurchPhoto[] = [
    {
      src: '/ekklisies/agia-triada/IMG_3463.jpeg',
      alt: 'Agia Triada Keratea - Stone chapel'
    },
    {
      src: '/ekklisies/agia-triada/IMG_3465.jpeg',
      alt: 'Agia Triada Keratea - Exterior view'
    },
    {
      src: '/ekklisies/agia-triada/IMG_3466.jpeg',
      alt: 'Agia Triada Keratea - Picturesque chapel'
    }
  ];

  const faqs = [
    {
      question: "Where is Agia Triada located?",
      answer: "Agia Triada is located at the entrance of Keratea, just 5 kilometers from Ktima Orion. It is a picturesque stone chapel, ideal for intimate ceremonies."
    },
    {
      question: "How long does it take to get there from the venue?",
      answer: "The journey from Ktima Orion to Agia Triada takes approximately 10 minutes. The proximity significantly facilitates the flow of your day."
    },
    {
      question: "Is it suitable for weddings?",
      answer: "Absolutely! The picturesque stone chapel of Agia Triada offers a very personal and moving atmosphere, ideal for intimate weddings and baptisms."
    },
    {
      question: "Is there space for photography?",
      answer: "Yes! The chapel has a beautiful environment with stone architecture and many picturesque spots for photography. Its location at the entrance of Keratea offers additional beautiful backgrounds."
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
    <Layout lang="en">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-main/10 to-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Agia <span className="text-gradient-brand">Triada</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Picturesque Stone Chapel in Keratea
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
              <h3 className="font-bold mb-2">Distance</h3>
              <p className="text-muted-foreground">5 km from venue</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Time</h3>
              <p className="text-muted-foreground">10 minutes</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Users className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Capacity</h3>
              <p className="text-muted-foreground">Availability depends, both inside and outside. Request information</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Car className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Parking</h3>
              <p className="text-muted-foreground">Available</p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">
                The Chapel
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Agia Triada is a picturesque stone chapel located at the entrance of Keratea, 
                  just 5 kilometers from Ktima Orion. The chapel offers a unique atmosphere with 
                  its traditional stone architecture, ideal for intimate wedding and baptism ceremonies.
                </p>
                <p>
                  Its proximity to Ktima Orion (just 10 minutes!) makes it an excellent choice for 
                  couples who want a smooth transition from the ceremony to the reception. The small 
                  size of the chapel creates a very personal and moving atmosphere, where every detail 
                  becomes more perceptible.
                </p>
                <p>
                  The stone chapel has a beautiful environment with many picturesque spots for photography, 
                  offering the perfect starting point for your new life together.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-elegant p-6">
                <Church className="w-8 h-8 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3">Stone Architecture</h3>
                <p className="text-muted-foreground">
                  Picturesque chapel with traditional stone construction. Its unique aesthetic creates 
                  a moving atmosphere for the celebration of the sacrament of marriage.
                </p>
              </div>
              <div className="card-elegant p-6">
                <Heart className="w-8 h-8 text-brand-main mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Services</h3>
                <p className="text-muted-foreground">
                  At Ktima Orion we handle the coordination of both the ceremony and the reception. 
                  We help with communication with the parish, catering, decoration and all the details.
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="card-elegant p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">Photos</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">How to Get There</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12609.08!2d23.99!3d37.806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2sKtima%20Orion!3m2!1d37.8024928!2d24.0288167!4m5!1s0x14a18d6e091cb57d%3A0x20df8f722cd314b8!2sAgias%20Triados%20Keratea!3m2!1d37.8103664!2d23.9710399!5e0!3m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map Agia Triada Keratea"
                ></iframe>
              </div>
              <p className="text-muted-foreground">
                From Ktima Orion: Head towards the entrance of Keratea. 
                Agia Triada is located at the entrance of Keratea, 5 kilometers from the venue.
              </p>
              <div className="mt-4">
                <a 
                  href="https://www.google.gr/maps/place/Agias+Triados,+Keratea+190+01/@37.8103664,23.9684596,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-main hover:underline inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
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
            Frequently Asked <span className="text-gradient-brand">Questions</span>
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
            Start Your <span className="text-gradient-brand">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hold your wedding at Agia Triada and continue with a reception at Ktima Orion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button button4" asChild>
              <a href="/en/contact">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/en/churches">See All Churches</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

