import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star, Briefcase, BarChart3, Trophy, Calendar } from 'lucide-react';

export default function CorporateEventsEn() {
  const eventPhotos = [
    { src: "/images/ekdiloseis/DSC_7433.JPG", alt: "Corporate event at Ktima Orion" },
    { src: "/images/ekdiloseis/DSC_7435.JPG", alt: "Professional event" },
    { src: "/images/ekdiloseis/DSC_7439.JPG", alt: "Conference and presentations" },
    { src: "/images/ekdiloseis/DSC_7442.JPG", alt: "Corporate event" },
    { src: "/images/ekdiloseis/DSC_7451.JPG", alt: "Professional event" },
    { src: "/images/ekdiloseis/DSC_7465.JPG", alt: "Conference at the venue" },
    { src: "/images/ekdiloseis/DSC_7471.JPG", alt: "Corporate celebration" },
    { src: "/images/ekdiloseis/DSC_7473.JPG", alt: "Media event" },
    { src: "/images/ekdiloseis/DSC_7480.JPG", alt: "Product presentation" },
    { src: "/images/ekdiloseis/DSC_7481.JPG", alt: "Professional meeting" },
    { src: "/images/ekdiloseis/DSC_7484.JPG", alt: "Corporate conference" },
    { src: "/images/ekdiloseis/DSC_7486.JPG", alt: "Press event" },
  ];

  const eventFeatures = [
    {
      icon: Briefcase,
      title: "Professional Space",
      description: "Specialized space for professional events with all modern facilities"
    },
    {
      icon: BarChart3,
      title: "Full Audio Coverage",
      description: "Complete audio coverage for presentations, conferences and events"
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Expertise and flexibility for successful organization of your event"
    },
    {
      icon: Star,
      title: "Excellence in Organization",
      description: "Attention to detail and commitment to consistency for flawless results"
    }
  ];

  const eventTypes = [
    {
      title: "Formal Gatherings",
      description: "Official gatherings and corporate events with high quality standards"
    },
    {
      title: "Press Events",
      description: "Specially organized events for product or service presentations"
    },
    {
      title: "Conferences & Training",
      description: "Professional conferences, seminars and educational events"
    },
    {
      title: "Product Presentations",
      description: "Specialized events for presenting new products or services"
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Corporate Events</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Your Event, Our Expertise
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Your professional event is our professional responsibility. Planning it requires experience and flexibility, 
                as a set of conditions must be met for it to be considered successful.
              </p>
              
              <p>
                The experience of our partners, our commitment to consistency and our attention to detail 
                make our venue an ideal point for hosting the most distinctive and successful professional events.
              </p>
              
              <p>
                Whether it's a formal gathering, a press call, a conference, or a new product presentation, 
                Ktima Orion meets the conditions for success.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Contact us to discuss all the parameters of your event and we will suggest the best solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Event Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Choose Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventFeatures.map((feature, index) => (
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

        {/* Event Types */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Event Types</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Corporate Event Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventPhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  images={eventPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Professional Experience</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Consistent Execution</h3>
                    <p className="text-muted-foreground">
                      Commitment to consistency and attention to detail for flawless results.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Flexibility & Adaptation</h3>
                    <p className="text-muted-foreground">
                      Experience and flexibility to fulfill all the conditions for success.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
                    <p className="text-muted-foreground">
                      Full audio coverage and modern facilities for professional events.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Ktima Orion?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Trophy className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Professional experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Briefcase className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Specialized services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart3 className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Modern facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Excellence in organization</span>
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
              Let's create the perfect professional event
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your event needs and we will suggest the best solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK APPOINTMENT
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