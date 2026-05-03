import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Star, Camera } from 'lucide-react';
import Link from 'next/link';

export default function ReceptionEn() {
  const eventTypes = [
    {
      title: "Wedding",
      href: "/en/weddings",
      description: "Unique moments of love at Ktima Orion. We undertake with imagination, consistency and respect for your wishes the design and organization of your reception.",
      icon: Heart
    },
    {
      title: "Baptism",
      href: "/en/baptism",
      description: "How special and how joyful an event! The ceremony and the reception that will follow must represent the family.",
      icon: Users
    },
    {
      title: "Corporate Events",
      href: "/en/corporate-events",
      description: "Your professional event is our professional responsibility. The experience of our partners makes our venue ideal for successful events.",
      icon: Star
    },
    {
      title: "Party",
      href: "/en/party",
      description: "At Ktima Orion, we turn your special moments into unforgettable experiences. Birthdays, engagement or corporate party.",
      icon: Camera
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Reception</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Events at Ktima Orion
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion offers the ideal space for all your special moments. 
                From weddings and baptisms to corporate events and parties, 
                we create magical experiences that you will remember forever.
              </p>
              
              <p>
                With experience, flexibility and dedication to detail, 
                we ensure that every event will be impeccable and unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Types of Events</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <event.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gradient-brand mb-4">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                        <Link
                          href={event.href}
                          className="inline-block button button4 group-hover:scale-105 transition-transform duration-300"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's create the perfect event together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your event needs 
              and create unforgettable memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK APPOINTMENT
              </button>
              <button className="button button4">
                CONTACT
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}