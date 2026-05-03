import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Star, Home, Car, TreePine, Utensils, Award, MapPin, Phone, Mail } from 'lucide-react';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
import Link from 'next/link';

interface VenuePhoto {
  readonly src: string;
  readonly alt: string;
  readonly category: string;
}

export default function VenueEn() {
  const venuePhotos: readonly VenuePhoto[] = [
    { src: "/final-photos/xwros/1.jpeg", alt: "Panoramic view of Ktima Orion gardens", category: "Venue" },
    { src: "/final-photos/xwros/2.jpeg", alt: "Decorated garden pathway with lighting", category: "Venue" },
    { src: "/final-photos/xwros/2.jpg", alt: "Outdoor space with natural lighting", category: "Venue" },
    { src: "/final-photos/xwros/3.jpeg", alt: "Garden with lush vegetation", category: "Venue" },
    { src: "/final-photos/xwros/4.jpeg", alt: "Central lawn set for receptions", category: "Venue" },
    { src: "/final-photos/xwros/5.jpeg", alt: "Decorative detail", category: "Venue" },
    { src: "/final-photos/xwros/6.jpeg", alt: "Detail of outdoor décor elements", category: "Venue" },
    { src: "/final-photos/xwros/7.jpeg", alt: "Pool and reception space overview", category: "Venue" },
    { src: "/final-photos/xwros/8.jpeg", alt: "Outdoor pathway with lighting", category: "Venue" },
    { src: "/final-photos/xwros/9.jpeg", alt: "Garden with natural environment", category: "Venue" },
    { src: "/final-photos/xwros/10.jpg", alt: "Panoramic venue view", category: "Venue" },
    { src: "/final-photos/xwros/DSC_7738.jpeg", alt: "Indoor reception space", category: "Venue" },
    { src: "/final-photos/xwros/DSC_7922.JPG", alt: "Indoor hall with luxurious lighting", category: "Wedding" },
    { src: "/final-photos/xwros/DSC_7928.JPG", alt: "Elegant indoor reception setup", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0229.jpeg", alt: "Wedding decoration outdoor space", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0232.jpeg", alt: "Decorated space for wedding", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0304.jpeg", alt: "Wedding setup with flowers", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0802.jpeg", alt: "Bridal table by the pool", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0805.jpeg", alt: "Wedding reception with view", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0824.jpeg", alt: "Bridal table with decoration", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0832.jpeg", alt: "Garden area prepared for ceremonies", category: "Wedding" },
    { src: "/final-photos/xwros/IMG_0842.jpeg", alt: "Lounge seating for corporate events", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_0844.jpeg", alt: "Corporate event with professional setup", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_0852.jpeg", alt: "Professional banquet table layout", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_0864.jpeg", alt: "Mood lighting for business events", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_0865.jpeg", alt: "Corporate event with networking space", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_0871.jpeg", alt: "Professional meeting space", category: "Corporate" },
    { src: "/final-photos/xwros/IMG_1052.jpeg", alt: "Relaxing corner for guests", category: "Party" },
    { src: "/final-photos/xwros/IMG_1147.jpeg", alt: "Party with decoration", category: "Party" },
    { src: "/final-photos/xwros/IMG_1149.jpeg", alt: "Festive atmosphere", category: "Party" },
    { src: "/final-photos/xwros/IMG_1150.jpeg", alt: "Celebration space", category: "Party" },
    { src: "/final-photos/xwros/IMG_1667.jpeg", alt: "Party with lighting", category: "Party" },
    { src: "/final-photos/xwros/IMG_1669.jpeg", alt: "Festive decoration", category: "Party" },
    { src: "/final-photos/xwros/IMG_1670.jpeg", alt: "Celebration setup", category: "Party" },
    { src: "/final-photos/xwros/IMG_1684.jpeg", alt: "Party with view", category: "Party" },
    { src: "/final-photos/xwros/IMG_1783.jpeg", alt: "Cocktail bar setup outdoors", category: "Party" },
    { src: "/final-photos/xwros/IMG_2757.jpeg", alt: "Festive hall", category: "Party" },
    { src: "/final-photos/xwros/IMG_2791.jpeg", alt: "Celebration space with decoration", category: "Party" },
    { src: "/final-photos/xwros/IMG_2836.jpeg", alt: "Buffet styling with illuminated décor", category: "Party" },
    { src: "/final-photos/xwros/IMG_2989.jpeg", alt: "Festive decoration with lights", category: "Party" },
    { src: "/final-photos/xwros/IMG_2995.jpeg", alt: "Party with atmospheric lighting", category: "Party" },
    { src: "/final-photos/xwros/IMG_3009.jpeg", alt: "Celebration space with setup", category: "Party" },
    { src: "/final-photos/xwros/IMG_3012.jpeg", alt: "Festive hall with decoration", category: "Party" },
    { src: "/final-photos/xwros/IMG_3013.jpeg", alt: "Party with lighting and decoration", category: "Party" },
    { src: "/final-photos/xwros/IMG_3029.jpeg", alt: "Celebration space with lights", category: "Party" },
    { src: "/final-photos/xwros/IMG_3061.jpeg", alt: "Festive decoration with setup", category: "Party" },
    { src: "/final-photos/xwros/IMG_3419.jpeg", alt: "Playful kids corner for baptisms", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3420.jpeg", alt: "Baptism decoration with pastels", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3421.jpeg", alt: "Baptism space with decoration", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3422.jpeg", alt: "Baptism corner with elements", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3423.jpeg", alt: "Pastel baptism decoration details", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3425.jpeg", alt: "Baptism candy bar", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3426.jpeg", alt: "Baptism decoration with details", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3427.jpeg", alt: "Baptism space with styling", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3428.jpeg", alt: "Baptism corner with decoration", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3429.jpeg", alt: "Baptism decoration detail", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3432.jpeg", alt: "Candy bar close-up for christenings", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3433.jpeg", alt: "Baptism decoration with elements", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3434.jpeg", alt: "Baptism space with minimal decoration", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3436.jpeg", alt: "Baptism corner with flowers", category: "Baptism" },
    { src: "/final-photos/xwros/IMG_3438.jpeg", alt: "Lantern walkway with flowers", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3439.jpeg", alt: "Garden with lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3440.jpeg", alt: "Outdoor space with decoration", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3449.jpeg", alt: "Welcome table with signage", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3453.jpeg", alt: "Space with natural lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3455.jpeg", alt: "Garden with decoration", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3456.jpeg", alt: "Outdoor space with setup", category: "Venue" },
    { src: "/final-photos/xwros/IMG_3458.jpeg", alt: "Space with lighting and decoration", category: "Venue" },
    { src: "/final-photos/xwros/IMG_5285.jpeg", alt: "Panoramic venue view", category: "Venue" },
    { src: "/final-photos/xwros/IMG_6187.jpeg", alt: "Outdoor space with view", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7099.jpeg", alt: "Garden with natural environment", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7211.jpeg", alt: "Space with decoration and lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7222.jpeg", alt: "Outdoor space with setup", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7224.jpeg", alt: "Garden with lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7227.jpeg", alt: "Space with decoration", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7232.jpeg", alt: "Outdoor space with natural lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_7727.jpeg", alt: "Panoramic view with lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9152.jpeg", alt: "Space with decoration and setup", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9226.jpeg", alt: "Garden with natural environment", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9228.jpeg", alt: "Outdoor space with view", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9229.jpeg", alt: "Space with lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9449.jpeg", alt: "Garden with decoration and lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9528.jpeg", alt: "Panoramic venue view with lighting", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9529.jpeg", alt: "Night view of illuminated pool", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9530.jpeg", alt: "Outdoor space with setup", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9532.jpeg", alt: "Garden with lighting and decoration", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9533.jpeg", alt: "Minimal garden décor concept", category: "Venue" },
    { src: "/final-photos/xwros/IMG_9534.jpeg", alt: "Boho-inspired outdoor lounge", category: "Venue" }
  ];

  const venueFeatures = [
    {
      icon: Car,
      title: "Parking Space",
      description: "Huge parking area for all guests"
    },
    {
      icon: Home,
      title: "Semi-outdoor Pavilion",
      description: "Magical semi-outdoor space for events"
    },
    {
      icon: Heart,
      title: "Reception Area",
      description: "Welcome space for guests"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio for the couple throughout"
    }
  ];

  const venueHighlights = [
    {
      title: "Magical Natural Environment",
      description: "Ktima Orion is a beautiful green space where visitors immediately feel the glow of luxury in perfect harmony with the natural environment.",
      icon: TreePine
    },
    {
      title: "Ideal Location",
      description: "In an ideal location with easy access from Attiki Odos, you can enjoy the special moments of your life.",
      icon: MapPin
    },
    {
      title: "Modern Facilities",
      description: "The closed, fully air-conditioned hall and the magical outdoor space guarantee warm reception and absolute hospitality for your guests.",
      icon: Home
    },
    {
      title: "Close to Chapels",
      description: "We are very close to picturesque chapels by the sea for the ceremony.",
      icon: Heart
    }
  ];

  const eventTypes = [
    {
      title: "Weddings",
      description: "Unique moments of love at Ktima Orion wedding venue. We undertake with imagination, consistency and respect for your wishes the design and organization of your wedding reception.",
      count: "200+",
      icon: Heart
    },
    {
      title: "Baptisms",
      description: "How special and how joyful an event! The christening ceremony and the baptism reception that will follow must represent the family.",
      count: "150+",
      icon: Users
    },
    {
      title: "Corporate Events",
      description: "Your professional event is our professional responsibility. The experience of our partners makes our venue ideal for successful events.",
      count: "100+",
      icon: Star
    },
    {
      title: "Parties & Celebrations",
      description: "At Ktima Orion, we turn your special moments into unforgettable experiences. Birthdays, engagement or corporate party.",
      count: "300+",
      icon: Camera
    }
  ];

  const venueFAQs = [
    { question: "Where is Ktima Orion located?", answer: "Ktima Orion is located in Keratea, Attica, with easy access from Attiki Odos. The venue offers a beautiful natural environment close to Athens." },
    { question: "What is the capacity of the venue?", answer: "The venue can accommodate large events with extensive parking for over 100 vehicles. We offer both indoor air-conditioned spaces and outdoor areas." },
    { question: "Is parking available?", answer: "Yes, we have a huge free parking area with over 100 spaces for all your guests." },
    { question: "Do you have both indoor and outdoor spaces?", answer: "Yes, we offer a fully air-conditioned indoor hall and a magical semi-outdoor pavilion, suitable for all seasons and weather conditions." },
    { question: "Can we visit the venue before booking?", answer: "Absolutely! We encourage couples to visit Ktima Orion and see the magical environment that will host their special event. Contact us to schedule a free tour." },
    { question: "Are you close to churches?", answer: "Yes, we are very close to several picturesque seaside chapels (5-15 minutes away), perfect for wedding and baptism ceremonies." }
  ];

  return (
    <Layout lang="en">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-brand">Venue</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              A Unique Wedding and Baptism Venue for Unforgettable Events in Keratea, Athens
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion is a beautiful wedding and baptism reception venue, a green event space where visitors immediately feel the glow of luxury
                in perfect harmony with the natural environment. In an ideal location with easy access from Attiki Odos, 
                you can enjoy the special moments of your life.
              </p>
              
              <p>
                The fully air-conditioned wedding and baptism reception hall and the magical outdoor pavilion space guarantee warm reception 
                and absolute hospitality for your guests. We are very close to <a href="/en/churches" className="text-brand-main hover:underline">picturesque seaside chapels</a> 
                for your <a href="/en/weddings" className="text-brand-main hover:underline">wedding</a> or <a href="/en/baptism" className="text-brand-main hover:underline">baptism</a> ceremony. Explore our comprehensive <a href="/en/services" className="text-brand-main hover:underline">event services</a> for your special day.
              </p>
            </div>
          </div>
        </section>

        {/* Venue Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">The Venue Features:</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {venueFeatures.map((feature, index) => (
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

        {/* Venue Highlights */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {venueHighlights.map((highlight, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <highlight.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-4">{highlight.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Our Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <event.icon className="w-16 h-16 text-brand-main mx-auto mb-4" />
                    <div className="text-3xl font-bold text-brand-main mb-2">{event.count}</div>
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
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
              <span className="text-gradient-brand">Venue Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {venuePhotos.map((photo, index) => (
                <div key={photo.src} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-64 w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQ Section */}
        <FAQEn items={venueFAQs} title="Frequently Asked Questions About the Venue" />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Ktima Orion
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a visit to Ktima Orion and see up close 
              the magical environment that will host your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/en/contact" className="button button4">
                BOOK FREE TOUR
              </a>
              <a href="/en/weddings" className="button button4">
                VIEW SERVICES
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Location</div>
                <div className="text-muted-foreground">Keratea, Attica</div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">2299068812 / 6981889560</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@ktimaorion.gr</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}