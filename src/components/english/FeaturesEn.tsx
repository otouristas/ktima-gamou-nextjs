import Image from 'next/image';

const iconHome1 = "/images/icon-home1.png";
const iconHome3 = "/images/icon-home3.png";
const iconHome5 = "/images/icon-home5.png";

export const FeaturesEn = () => {
  const features = [
    {
      icon: iconHome3,
      title: "KTIMA ORION",
      subtitle: "Experienced & Friendly Staff",
      description: "With professionalism and discretion, the venue's staff ensures that your big day will unfold exactly as you dreamed it."
    },
    {
      icon: iconHome5,
      title: "KTIMA ORION",
      subtitle: "Near Picturesque Chapels",
      description: "The venue's privileged location, next to picturesque seaside chapels, offers unique convenience and atmosphere for your ceremony."
    },
    {
      icon: iconHome1,
      title: "KTIMA ORION",
      subtitle: "Spacious & Elegant Venues",
      description: "Indoor elegance and outdoor magic combine uniquely, offering the ultimate reception space for your most special day."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <Image
                  src={feature.icon}
                  alt={feature.subtitle}
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto object-contain"
                  loading="lazy"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gradient-brand mb-6">
                {feature.subtitle}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
