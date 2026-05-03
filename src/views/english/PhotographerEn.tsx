import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Camera, Phone, Mail } from 'lucide-react';

const PhotographerEn = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+30 210 642 9796", href: "tel:+302106429796" },
    { icon: Phone, label: "Mobile", value: "+30 697 827 4657", href: "tel:+306978274657" },
    { icon: Mail, label: "Email", value: "info@studioalpha.gr", href: "mailto:info@studioalpha.gr" }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-main mb-6">Photographer</h1>
            <p className="text-xl text-muted-foreground mb-8">Studio Alpha - Ktima Orion - Keratea</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Camera className="w-12 h-12 text-brand-main" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Studio Alpha</h2>
              </div>
              <div className="w-24 h-1 bg-brand-main mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-brand-main">Trust Studio Alpha</strong> with every memory of your most important moments…
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our extensive experience in wedding and baptism photography ensures impeccable service, 
                  excellent collaboration, and absolute professional capture of your every moment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For us at <strong className="text-brand-main">Studio Alpha</strong>, photography is passion, inspiration, creation…the moment…
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-main/5 to-brand-main/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-brand-text mb-4">Get in Touch!</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Don't hesitate to contact us at any time. We're happy to answer questions about our work.
                  </p>
                  <p className="text-lg text-brand-main font-medium">Kifisias Ave. 12, Ampelokipoi 115 26 ATHENS</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <a key={index} href={contact.href} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-brand-main/20 hover:border-brand-main hover:shadow-md transition-all">
                      <div className="w-12 h-12 flex items-center justify-center bg-brand-main/10 rounded-full flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-brand-main" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-medium text-brand-text">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Capture Your <span className="text-gradient-brand">Memories</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can make your special day even more memorable.
          </p>
          <Button size="lg" className="bg-brand-main hover:bg-brand-main/90" asChild>
            <a href="/en/contact">CONTACT US</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PhotographerEn;
