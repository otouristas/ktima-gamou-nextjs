import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Baby, Star, Sparkles } from 'lucide-react';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';
import { NearbyChurchesEn } from '@/components/english/NearbyChurchesEn';
import { RelatedServicesEn } from '@/components/english/RelatedServicesEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
import Link from 'next/link';

interface BaptismPhoto {
  readonly src: string;
  readonly alt: string;
}

export default function BaptismEn() {
  const baptismPhotos: readonly BaptismPhoto[] = [
    { src: "/final-photos/vaftisi/10.jpeg", alt: "Kids-friendly dessert table for christening reception" },
    { src: "/final-photos/vaftisi/11.JPG", alt: "Outdoor baptism lounge with sun shades" },
    { src: "/final-photos/vaftisi/12.JPG", alt: "Evening christening celebration with warm lighting" },
    { src: "/final-photos/vaftisi/2.jpeg", alt: "Keepsake table with thematic baptism décor" },
    { src: "/final-photos/vaftisi/3.jpeg", alt: "Candy bar filled with handcrafted sweets" },
    { src: "/final-photos/vaftisi/4.jpg", alt: "Pastel decorated exterior space for baptisms" },
    { src: "/final-photos/vaftisi/5.jpg", alt: "Floral centerpiece for christening reception" },
    { src: "/final-photos/vaftisi/6.jpg", alt: "Colorful kids corner for family celebrations" },
    { src: "/final-photos/vaftisi/7.JPG", alt: "Baptism venue overlooking the sea" },
    { src: "/final-photos/vaftisi/8.jpeg", alt: "Lantern walkway guiding guests to the reception" },
    { src: "/final-photos/vaftisi/9.jpeg", alt: "Guest welcome station with thematic props" },
    { src: "/final-photos/vaftisi/IMG_1128.jpeg", alt: "Vintage-inspired christening favors" },
    { src: "/final-photos/vaftisi/IMG_1133.jpeg", alt: "Whimsical cloud and teddy bear décor" },
    { src: "/final-photos/vaftisi/IMG_1140.jpeg", alt: "Rustic baptism accessories and textures" },
    { src: "/final-photos/vaftisi/IMG_3443.jpeg", alt: "Christening candy bar with curated styling" },
    { src: "/final-photos/vaftisi/IMG_3444.jpeg", alt: "Photo corner filled with pastel balloons" },
    { src: "/final-photos/vaftisi/IMG_3446.jpeg", alt: "Dessert buffet with pastel palette" },
    { src: "/final-photos/vaftisi/IMG_3449.jpeg", alt: "Wish table with guestbook and décor" },
    { src: "/final-photos/vaftisi/IMG_5527.jpeg", alt: "Family seating area beneath shaded trees" },
    { src: "/final-photos/vaftisi/IMG_6187.jpeg", alt: "Panoramic view of Ktima Orion baptism venue" }
  ];

  const baptismFeatures = [
    {
      icon: Heart,
      title: "Tender Atmosphere",
      description: "We create a warm and welcoming atmosphere for your baptism reception and family celebration"
    },
    {
      icon: Sparkles,
      title: "Unique Decoration",
      description: "Carefully designed decoration that will make the day unforgettable"
    },
    {
      icon: Users,
      title: "Family Celebration",
      description: "Ideal environment to celebrate with your entire family"
    }
  ];

  const baptismServices = [
    {
      title: "Special Children's Menu",
      description: "Customized menu that will satisfy even the youngest guests."
    },
    {
      title: "Photography & Video",
      description: "Professional recording of all moments to preserve these unforgettable memories forever."
    },
    {
      title: "Decoration & Styling",
      description: "Enchanting decoration with luxury elements and natural flowers to create the perfect atmosphere."
    }
  ];

  const baptismFAQs = [
    { question: "What does the baptism reception include?", answer: "The baptism reception includes catering with special children's menu, decoration, service, and use of all our spaces (indoor, outdoor, playground)." },
    { question: "Can we have a baptism at noon?", answer: "Of course! Baptisms usually take place at noon followed by brunch or lunch reception." },
    { question: "Is there space for children to play?", answer: "Yes, we have a safe outdoor area where children can play under supervision." },
    { question: "Which churches do you work with for baptisms?", answer: "We work with 4 beautiful seaside churches near the estate: Agios Alexandros, Profitis Ilias, Agios Panteleimonas, and Panagia Gkarika." },
    { question: "Can we bring our own decorator?", answer: "Absolutely! You are free to choose your own partners or use our recommended ones." },
    { question: "How long does the reception last?", answer: "The reception duration adapts to your needs, usually 4-6 hours." },
    { question: "Is there a special menu for children?", answer: "Yes, we offer specially adapted menu for children with healthy and delicious options." },
    { question: "Can we have a summer baptism?", answer: "Yes, our shaded outdoor space and air-conditioned indoor space are ideal for summer baptisms." },
    { question: "What time does the reception usually start?", answer: "Baptism receptions usually start at noon (12:00-14:00) after the ceremony." },
    { question: "Is the venue exclusive for us?", answer: "Absolutely! The estate is exclusively yours for your event." }
  ];

  return (
    <Layout lang="en">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Baptism</span> at Ktima Orion
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              The Perfect Baptism Reception Venue for Your Child's Special Day in Keratea, Athens
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                A christening is a unique and special moment for every family. What a joyful and tender occasion!
              </p>
              
              <p>
                The ceremony and the baptism reception that follows must represent your family and deserve only the best. 
                Understanding the importance of the baptism reception, we stand by your side to organize 
                your child's baptism together, with love and passion. Our <a href="/en/venue" className="text-brand-main hover:underline">beautiful venue</a> is located near stunning <a href="/en/churches" className="text-brand-main hover:underline">seaside churches</a>, 
                making it easy to combine the christening ceremony with a joyful reception.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Hold your baptism reception in a venue that stands out from the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Baptism Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Choose Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {baptismFeatures.map((feature, index) => (
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

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Baptism Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {baptismServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
              <span className="text-gradient-brand">Baptism Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {baptismPhotos.map((photo, index) => (
                <ClickableImage
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  images={baptismPhotos}
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
                  <span className="text-gradient-brand">Special Baptism Details</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Special Menu</h3>
                    <p className="text-muted-foreground">
                      Customized menu with options for all ages, including special dishes for children.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Photography & Video</h3>
                    <p className="text-muted-foreground">
                      Professional recording of all moments - from preparation to the end of the party - 
                      to preserve these unforgettable moments forever.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Ktima Orion?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Tender atmosphere</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Experience in baptism receptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Professional team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Customized solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQs */}
        <FAQEn items={baptismFAQs} title="Frequently Asked Questions About Baptisms" />

        {/* Nearby Churches */}
        <NearbyChurchesEn />

        {/* Related Services */}
        <RelatedServicesEn currentPage="/en/baptism" />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
          <div className="container-max text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient-brand">Plan Your Baptism Reception?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to schedule a visit to our <a href="/en/venue" className="text-brand-main hover:underline">christening venue</a> and start planning this unforgettable baptism celebration. Explore our <a href="/en/services" className="text-brand-main hover:underline">baptism services</a> and nearby <a href="/en/churches" className="text-brand-main hover:underline">churches</a>.
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