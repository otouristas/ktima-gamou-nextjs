import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Star, Phone, Mail, MapPin, Car, Home, TreePine, Utensils } from 'lucide-react';
import { ClickableImage } from '@/components/ImageLightbox';

const heroImage = "/images/home/DSC_7637.JPG";
const venueImage = "/images/home/DSC_7712.JPG";

export default function AboutEn() {
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
      icon: Utensils,
      title: "Barbeque Facilities",
      description: "Full setup for cooking and serving"
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
    },
    {
      icon: Award,
      title: "Generator",
      description: "Power backup in case of outage"
    },
    {
      icon: TreePine,
      title: "Beautiful Gardens",
      description: "Large gardens and lovely flower beds"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love for Our Work",
      description: "Every event is an opportunity for us to create magical moments and unforgettable memories."
    },
    {
      icon: Users,
      title: "Tailored to Your Needs",
      description: "Each event is unique and we adapt our services to your needs and budget."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "We work with high quality standards and take care of every detail."
    },
    {
      icon: Star,
      title: "Excellence in Service",
      description: "Your satisfaction is our priority and we dedicate all our attention to serving you."
    }
  ];

  const stats = [
    { number: "200+", label: "Events organized" },
    { number: "98%", label: "Satisfied clients" },
    { number: "15+", label: "Years of experience" },
    { number: "24/7", label: "Customer support" }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">About Us</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-5xl mx-auto mb-12">
              Ktima Orion is a beautiful green space, where visitors immediately feel the glow of luxury in perfect harmony with the natural environment. In an ideal location, with easy access from the Attiki Odos, you can enjoy the special moments of your life with every magnificence. The closed, fully air-conditioned hall and the magical outdoor space of the estate guarantee a warm reception and absolute hospitality for your guests.
            </p>
            
            {/* Hero Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <ClickableImage
                src={heroImage}
                alt="Ktima Orion - Mother and child"
                images={[
                  { src: heroImage, alt: "Ktima Orion - Mother and child" },
                  { src: venueImage, alt: "Ktima Orion - Event venue" }
                ]}
                index={0}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <ClickableImage
                src={venueImage}
                alt="Ktima Orion - Event venue"
                images={[
                  { src: heroImage, alt: "Ktima Orion - Mother and child" },
                  { src: venueImage, alt: "Ktima Orion - Event venue" }
                ]}
                index={1}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Venue Features Section */}
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

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-brand-main mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Our Partnership</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Our collaboration with certified catering ensures, in addition to the environment, the gastronomic enjoyment of your guests. Our selected partners take care of the music and sound coverage of your reception.
                  </p>
                  <p>
                    Our estate combines presence, excellent organization and high level of services. We are very close to picturesque chapels by the sea for the ceremony.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Venue Manager</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-brand-main">Bousoula Panagiota</div>
                    <div className="text-muted-foreground">Venue Manager Ktima Orion</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  With experience and love for hospitality, Bousoula Panagiota ensures 
                  that every event at Ktima Orion will be impeccable and unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Our Values</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
              Let's get to know each other better
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our services 
              and how we can create unforgettable memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                CONTACT
              </button>
              <button className="button button4">
                REQUEST INFO
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}