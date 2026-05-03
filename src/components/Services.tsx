import { Button } from '@/components/ui/button';
import { Heart, Baby, Building, PartyPopper, Camera, Crown } from 'lucide-react';
import Link from 'next/link';

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Γάμος',
      description: 'Μοναδικές στιγμές αγάπης στο Κτήμα Ωρίων. Η γαμήλια δεξίωση σας είναι μια εξαιρετικά σημαντική στιγμή, η έναρξη της κοινής σας πορείας με νυφικό τραπέζι που θα θυμάστε για πάντα.',
      features: ['Εσωτερικός & εξωτερικός χώρος δεξίωσης', 'Πλήρως κλιματιζόμενη αίθουσα', 'Κοντά σε γραφικά παραθαλάσσια εκκλησάκια'],
      link: '/gamos'
    },
    {
      icon: Baby,
      title: 'Βάπτιση',
      description: 'Δημιουργήστε αξέχαστες αναμνήσεις για τη βαπτιστική δεξίωση του παιδιού σας. Μια τρυφερή και χαρούμενη γιορτή για όλη την οικογένεια με ιδιαίτερο στολισμό.',
      features: ['Ειδικό μενού για παιδιά', 'Επαγγελματική εξυπηρέτηση', 'Ιδανικό περιβάλλον για βαπτιστικές εκδηλώσεις'],
      link: '/vaptisi'
    },
    {
      icon: Building,
      title: 'Εταιρικές Εκδηλώσεις',
      description: 'Η εταιρική σας εκδήλωση, η εξειδίκευσή μας. Επαγγελματισμός και αφοσίωση για τις πιο επιτυχημένες εταιρικές εκδηλώσεις και συνέδρια.',
      features: ['Συνεδριακός εξοπλισμός', 'Catering υψηλής ποιότητας', 'Χώρος στάθμευσης 100+ θέσεων'],
      link: '/eterikes-ekdiloseis'
    },
    {
      icon: PartyPopper,
      title: 'Πάρτι',
      description: 'Ο ιδανικός χώρος για το party σας. Γενέθλια, αρραβώνας ή οποιαδήποτε ξεχωριστή στιγμή - ο χώρος μας προσαρμόζεται σε κάθε ανάγκη.',
      features: ['Ευέλικτος χώρος εκδηλώσεων', 'Μουσική κάλυψη & DJ', 'Bar & cocktails'],
      link: '/parti'
    },
    {
      icon: Camera,
      title: 'Φωτογράφος',
      description: 'Συνεργασία με το "Studio Alpha" - η φωτογραφία είναι το πάθος, η έμπνευση, η δημιουργία…η στιγμή. Καταγράψτε κάθε λεπτομέρεια της γαμήλιας ή βαπτιστικής σας δεξίωσης.',
      features: ['Επαγγελματική κάλυψη', 'Πολύχρονη εμπειρία σε γάμους', 'Φωτογραφία & βίντεο'],
      link: '/fotografos'
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-champagne">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Οι <span className="text-gradient-brand">Υπηρεσίες</span> Μας
          </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Από <a href="/gamos" className="text-brand-main hover:underline">γαμήλιες δεξιώσεις</a> και <a href="/vaptisi" className="text-brand-main hover:underline">βαπτιστικές δεξιώσεις</a> μέχρι <a href="/eterikes-ekdiloseis" className="text-brand-main hover:underline">εταιρικές εκδηλώσεις</a> και πάρτι, 
                προσφέρουμε ολοκληρωμένες υπηρεσίες για κάθε ξεχωριστή στιγμή στο χώρο δεξιώσεων μας.
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
              
              <Button variant="outline" className="border-brand-main text-white bg-brand-main hover:bg-brand-dark hover:border-brand-dark min-h-[44px] min-w-[140px]" asChild>
                <Link href={service.link}>ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};