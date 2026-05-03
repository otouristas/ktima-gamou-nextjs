import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star, Music, Sparkles, Gift, Calendar } from 'lucide-react';

export default function PartyEn() {
  const partyPhotos = [
    { src: "/images/party/DSC_7433.JPG", alt: "Party at Ktima Orion" },
    { src: "/images/party/DSC_7435.JPG", alt: "Birthday party" },
    { src: "/images/party/DSC_7439.JPG", alt: "Corporate party" },
    { src: "/images/party/DSC_7442.JPG", alt: "Celebration party" },
    { src: "/images/party/DSC_7451.JPG", alt: "Ktima Orion party" },
    { src: "/images/party/DSC_7465.JPG", alt: "Unique party" },
    { src: "/images/party/DSC_7471.JPG", alt: "Unforgettable party" },
    { src: "/images/party/DSC_7473.JPG", alt: "Fun at the venue" },
    { src: "/images/party/DSC_7480.JPG", alt: "Joyful party" },
    { src: "/images/party/DSC_7481.JPG", alt: "Stylish celebration" },
    { src: "/images/party/DSC_7484.JPG", alt: "Dream party" },
    { src: "/images/party/DSC_7486.JPG", alt: "Party event" },
    { src: "/images/party/DSC_7489.JPG", alt: "Enchanting atmosphere" },
    { src: "/images/party/DSC_7494.JPG", alt: "Special party" },
  ];

  const partyFeatures = [
    {
      icon: Heart,
      title: "Flexible Space",
      description: "Adapts to every type of party - from birthdays to corporate events"
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "Full music coverage and entertaining environment for a great time"
    },
    {
      icon: Sparkles,
      title: "Unique Atmosphere",
      description: "We create the perfect atmosphere to make your party unforgettable"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every party is unique and we adapt our services to your needs"
    }
  ];

  const partyTypes = [
    {
      title: "Birthday Parties",
      description: "Specially organized birthdays for all ages with fun activities"
    },
    {
      title: "Engagement",
      description: "Romantic engagement events with special decoration and atmosphere"
    },
    {
      title: "Corporate Party",
      description: "Professional parties for companies with modern facilities"
    },
    {
      title: "Festive Events",
      description: "Christmas, Easter and other special festive events"
    }
  ];

  const partyServices = [
    {
      icon: Music,
      title: "Music & DJ",
      description: "DJ to keep the party alive"
    },
    {
      icon: Sparkles,
      title: "Decoration",
      description: "Carefully designed decoration to create the perfect atmosphere"
    },
    {
      icon: Gift,
      title: "Activities",
      description: "Fun activities and games for all ages"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography to capture the moments"
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Party</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              The ideal venue for your party - Ktima Orion
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Looking for the perfect venue to celebrate?
              </p>
              
              <p>
                At Ktima Orion, we turn your special moments into unforgettable experiences. 
                Birthdays, engagements or corporate parties - our venue and services adapt to your every need.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Create with us an evening that will remain unforgettable.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Contact us today to book your date!
              </p>
            </div>
          </div>
        </section>

        {/* Party Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Choose Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <span className="text-gradient-brand">Party Types</span>
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
              <span className="text-gradient-brand">Party Services</span>
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
              <span className="text-gradient-brand">Party Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partyPhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
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

        {/* Contact CTA */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's create the perfect party together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to book your date and create an unforgettable evening!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK DATE
              </button>
              <button className="button button4">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}