import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
const topeventsLogo = "/images/topevents-logo.png";

export default function DjMousiki() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-brand-main/5">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-elegant">
            <div className="container-max text-center">
              <div className="inline-block mb-6">
                <Image
                  src={topeventsLogo}
                  alt="Top Events Entertainment Services"
                  width={320}
                  height={128}
                  className="h-24 md:h-32 w-auto mx-auto"
                  priority
                  sizes="(max-width: 768px) 200px, 280px"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text">
                DJ - Μουσική
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Επαγγελματικές υπηρεσίες ψυχαγωγίας και μουσικής
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="section-padding">
            <div className="container-max max-w-4xl">
              <Card className="card-elegant mb-8">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-text">
                    Γιώργος Μαρδέλλης
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Με χρόνια εμπειρίας στον χώρο της ψυχαγωγίας και των εκδηλώσεων, 
                      η Top Events προσφέρει επαγγελματικές υπηρεσίες DJ και μουσικής 
                      που δημιουργούν την τέλεια ατμόσφαιρα για κάθε είδος εκδήλωσης.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Από γάμους και βαπτίσεις μέχρι εταιρικές εκδηλώσεις και πάρτι, 
                      εξασφαλίζουμε μουσική που ταιριάζει απόλυτα στο στυλ και 
                      τις προτιμήσεις σας, δημιουργώντας αξέχαστες στιγμές.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="card-elegant">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-8 text-brand-text text-center">
                    Στοιχεία Επικοινωνίας
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <Globe className="w-6 h-6 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-brand-text mb-1">Website</p>
                        <a 
                          href="https://www.topevents.gr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-main hover:underline"
                        >
                          www.topevents.gr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <Mail className="w-6 h-6 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-brand-text mb-1">Email</p>
                        <a 
                          href="mailto:info@topevents.gr"
                          className="text-brand-main hover:underline"
                        >
                          info@topevents.gr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <Phone className="w-6 h-6 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-brand-text mb-1">Τηλέφωνο</p>
                        <a 
                          href="tel:2102234637"
                          className="text-brand-main hover:underline block"
                        >
                          210 22 34637
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <Phone className="w-6 h-6 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-brand-text mb-1">Κινητό</p>
                        <a 
                          href="tel:6955555659"
                          className="text-brand-main hover:underline"
                        >
                          695 5555659
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 md:col-span-2">
                      <MapPin className="w-6 h-6 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-brand-text mb-1">Διεύθυνση</p>
                        <p className="text-muted-foreground">
                          Αετοράχης 53, Αθήνα, Ελλάδα
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
