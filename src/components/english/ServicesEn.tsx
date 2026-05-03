import { Button } from '@/components/ui/button';
import { Heart, Baby, Building, PartyPopper, Camera, Crown } from 'lucide-react';
import Link from 'next/link';

export const ServicesEn = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Unique wedding receptions at Ktima Orion wedding venue. Your wedding is an extremely important moment, the beginning of your shared journey.',
      features: ['Indoor & outdoor reception space', 'Fully air-conditioned wedding hall', 'Near picturesque seaside chapels'],
      link: '/en/weddings'
    },
    {
      icon: Baby,
      title: 'Baptisms',
      description: 'Create unforgettable baptism reception memories for your child\'s christening. A tender and joyful celebration for the whole family.',
      features: ['Special children\'s menu', 'Professional baptism service', 'Ideal christening environment'],
      link: '/en/baptism'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Your event, our expertise. Professionalism and dedication for the most successful corporate events.',
      features: ['Conference equipment', 'High-quality catering', 'Parking space'],
      link: '/en/services'
    },
    {
      icon: PartyPopper,
      title: 'Parties',
      description: 'The ideal space for your party. Birthdays, engagements or any special moment - our venue adapts to every need.',
      features: ['Flexible space', 'Music coverage', 'Bar & cocktails'],
      link: '/en/services'
    },
    {
      icon: Camera,
      title: 'Photographer',
      description: 'Partnership with "Studio Alpha" - photography is passion, inspiration, creation…the moment.',
      features: ['Professional coverage', 'Years of experience', 'Photo & video'],
      link: '/en/services'
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-champagne">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From <a href="/en/weddings" className="text-brand-main hover:underline">weddings</a> and <a href="/en/baptism" className="text-brand-main hover:underline">baptisms</a> to corporate events and parties, 
            we offer comprehensive event services for every special reception and celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-elegant p-8 text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-brand-main rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="border-brand-main text-brand-main hover:bg-brand-main hover:text-white" asChild>
                <Link href={service.link}>LEARN MORE</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
