import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Church } from 'lucide-react';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';
import { RelatedServicesEn } from '@/components/english/RelatedServicesEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
import Link from 'next/link';

export default function ChurchesEn() {
  const churches = [
    {
      name: 'Agios Alexandros, Daskalio',
      distance: '3.8 km',
      time: "8'",
      icon: Church
    },
    {
      name: 'Agios Panteleimonas, Kakia Thalassa Keratea',
      distance: '8.6 km',
      time: "13'",
      icon: Church
    },
    {
      name: 'Panagia Garika, Keratea',
      distance: '3.1 km',
      time: "6'",
      icon: Church
    },
    {
      name: 'Agia Triada, Keratea',
      distance: '5 km',
      time: "10'",
      icon: Church
    },
    {
      name: 'Profitis Ilias, Limanaki Perigiali Keratea',
      distance: '8.8 km',
      time: "11'",
      icon: Church
    },
    {
      name: 'Agios Nikolaos, Thoriko Keratea',
      distance: '12.3 km',
      time: "12'",
      icon: Church
    },
    {
      name: 'Agios Nektarios, Kamariza Lavrio',
      distance: '15.9 km',
      time: "15'",
      icon: Church
    },
    {
      name: 'Agios Andreas, Lavrio',
      distance: '12.8 km',
      time: "12'",
      icon: Church
    }
  ];

  const churchFAQs = [
    { question: "How far are the churches from Ktima Orion?", answer: "The churches are 3-15 minutes drive from Ktima Orion. The closest are Panagia Gkarika (3.1 km, 6') and Agios Alexandros Daskaleio (3.8 km, 8')." },
    { question: "Which churches are by the sea?", answer: "Profitis Ilias Thoriko and Agios Panteleimonas Keratea offer stunning sea views and are ideal for seaside ceremonies." },
    { question: "Can I have both the ceremony and reception on the same day?", answer: "Absolutely! All churches are a short distance away, allowing you to complete the ceremony and move to Ktima Orion for the reception within 10-15 minutes." },
    { question: "Which church is best for small weddings?", answer: "Panagia Gkarika is ideal for small, intimate weddings. Agios Alexandros Daskaleio is larger and suitable for weddings up to 170 guests." },
    { question: "Do you provide directions to the churches?", answer: "Yes, we provide detailed directions to all churches and can help you coordinate the ceremony and reception." },
    { question: "Do I need to book the church myself?", answer: "Usually yes, but we can provide you with all the necessary contact information and help you with coordination." }
  ];

  return (
    <Layout lang="en">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <Church className="w-20 h-20 text-brand-main mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Churches</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ktima Orion wedding and baptism venue is a short distance from many picturesque seaside chapels and churches in Keratea. 
              At a distance ranging from <strong>5 - 15 minutes</strong>, you can hold the sacrament of marriage 
              or christening, enjoying stunning views of the Aegean Sea, before continuing with your <a href="/en/weddings" className="text-brand-main hover:underline">wedding reception</a> or <a href="/en/baptism" className="text-brand-main hover:underline">baptism reception</a> at our <a href="/en/venue" className="text-brand-main hover:underline">beautiful venue</a>.
            </p>
          </div>
        </section>

        {/* Churches List */}
        <section className="section-padding">
          <div className="container-max max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Available <span className="text-gradient-brand">Seaside Churches</span> near Keratea
            </h2>

            <div className="grid gap-6">
              {churches.map((church, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-brand-main/10 rounded-full">
                          <church.icon className="w-8 h-8 text-brand-main" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {index + 1}. {church.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Distance: {church.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Time: {church.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-brand">Church Map</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                View all church locations on the map and choose the one that suits you
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1I1J1VWCrLSQc6iwlQkAegUrpr74rcwA&ehbc=2E312F&noprof=1" 
                width="100%" 
                height="760" 
                style={{ border: 0, marginTop: '-70px' }}
                loading="lazy"
                title="Map of Churches near Ktima Orion"
              />
            </div>
          </div>
        </section>

        {/* Church Detail Links */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Explore Our Churches</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/en/churches/agios-alexandros-daskaleio" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Agios Alexandros Daskaleio
                </h3>
                <p className="text-sm text-muted-foreground mb-3">3.8 km • 8'</p>
                <p className="text-xs text-muted-foreground">Ideal for weddings up to 170 guests</p>
              </a>
              
              <a href="/en/churches/profitis-ilias-thoriko" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Profitis Ilias Thoriko
                </h3>
                <p className="text-sm text-muted-foreground mb-3">8.8 km • 11'</p>
                <p className="text-xs text-muted-foreground">Stunning sea views</p>
              </a>
              
              <a href="/en/churches/agios-panteleimonas-keratea" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Agios Panteleimonas Keratea
                </h3>
                <p className="text-sm text-muted-foreground mb-3">8.6 km • 13'</p>
                <p className="text-xs text-muted-foreground">Traditional rustic church</p>
              </a>
              
              <a href="/en/churches/panagia-gkarika" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Panagia Gkarika
                </h3>
                <p className="text-sm text-muted-foreground mb-3">3.1 km • 6'</p>
                <p className="text-xs text-muted-foreground">Perfect for intimate weddings</p>
              </a>
              
              <a href="/en/churches/agia-triada" className="card-elegant p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <h3 className="text-lg font-bold text-gradient-brand mb-2 group-hover:underline">
                  Agia Triada
                </h3>
                <p className="text-sm text-muted-foreground mb-3">5 km • 10'</p>
                <p className="text-xs text-muted-foreground">Picturesque stone chapel</p>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQ Section */}
        <FAQEn items={churchFAQs} title="Frequently Asked Questions About Churches" />

        {/* Related Services */}
        <RelatedServicesEn currentPage="/en/churches" />

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Combine Ceremony & Reception
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the church that suits you and contact us to organize your wonderful reception at Ktima Orion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/contact" className="button button4">
                BOOK FREE TOUR
              </a>
              <a href="/en/weddings" className="button button4">
                VIEW WEDDING SERVICES
              </a>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <a href="/en/weddings" className="text-brand-main hover:underline">Wedding Venue</a>
              <span className="text-muted-foreground">•</span>
              <a href="/en/baptism" className="text-brand-main hover:underline">Baptism Venue</a>
              <span className="text-muted-foreground">•</span>
              <a href="/en/venue" className="text-brand-main hover:underline">The Venue</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
