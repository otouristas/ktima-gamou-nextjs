import Image from 'next/image';

export const AboutEn = () => {
  const features = [
    'Parking space',
    'Semi-outdoor pavilion',
    'Reception area',
    'Studio for the couple'
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About Us - <span className="text-gradient-brand">Ktima Orion</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion is a beautiful green space where visitors 
                immediately feel the glow of luxury in perfect harmony with the natural environment.
              </p>
              
              <p>
                In an ideal location with easy access from the Attiki Odos highway, you can 
                enjoy, with every magnificence, special moments such as your wedding or 
                your child's baptism.
              </p>
              
              <p>
                The fully air-conditioned indoor hall and the enchanting outdoor space 
                of the venue guarantee a warm welcome and absolute hospitality for 
                your guests.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-foreground font-medium mb-2">
                Venue Manager: <span className="text-brand-main">Panagiota Bousoula</span>
              </p>
            </div>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full">
              <Image
                src="/arxiki/9.jpg"
                alt="Ktima Orion - Indoor space"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gradient-brand">
                Venue Features
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-main rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-sage/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center italic">
                  "Our partnership with certified caterers ensures, apart from the environment, 
                  the gastronomic pleasure of your guests."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
